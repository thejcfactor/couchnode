import { QueryRequest, QueryResponse } from './generated/couchbase/query.v1_pb'

import { QueryOptions, queryStatusFromGrpc } from './querytypes'
import { QueryResult, QueryMetaData, QueryMetrics, QueryWarning } from '../querytypes';
import { StreamableRowPromise } from '../streamablepromises';
import { Scope } from './scope';

/**
 * @internal
 */
export class QueryExecutor {
  private _scope: Scope

  /**
   * @internal
   */
  constructor(scope: Scope) {
    this._scope = scope
  }

  /**
   * @internal
   */
  query<TRow = any>(
    query: string,
    options: QueryOptions
  ): StreamableRowPromise<QueryResult<TRow>, TRow, QueryMetaData> {
    // const timeout = options.timeout || this._cluster.queryTimeout

    const req = new QueryRequest()
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setStatement(query)

    const emitter = new StreamableRowPromise<
      QueryResult<TRow>,
      TRow,
      QueryMetaData
    >((rows, meta) => {
      return new QueryResult({
        rows: rows,
        meta: meta,
      })
    })

    const call = this._scope.queryService.query(req)

    call.on('data', function(resp: QueryResponse) {
      resp.getRowsList_asU8().forEach((row) => {
        emitter.emit('row', QueryExecutor.parseRow(row))
      })
      if(resp.hasMetaData()){
        emitter.emit('meta', QueryExecutor.parseMetadata(resp.getMetaData()))
      }
    });
    call.on('end', function() {
      emitter.emit('end')
    });
    call.on('error', function(err: Error) {
      emitter.emit('error', err)
      emitter.emit('end')
    });
    // TODO:  do we want to do something w/ the status?
    // call.on('status', function(status: Status) {
    //   console.log('Query status: ', status)
    // });

    return emitter
  }

  /**
   * @internal
   */
  static parseRow(row: Uint8Array | string): any {
    if(row instanceof Uint8Array){
      return JSON.parse(Buffer.from(row).toString('utf8'))
    }
    return JSON.parse(row)
  }

  /**
   * @internal
   */
  static parseMetadata(metaData: QueryResponse.MetaData | undefined): QueryMetaData | undefined {
    if(!metaData){
      return metaData
    }

    const warnings = metaData.getWarningsList().map((warningData) => new QueryWarning({code: warningData.getCode(), message: warningData.getMessage()}))
    let metrics: QueryMetrics | undefined
    const metricsData = metaData.getMetrics()
    if(metricsData){
      metrics = new QueryMetrics({
        elapsedTime: metricsData.getElapsedTime()?.getNanos() || 0,
        executionTime: metricsData.getExecutionTime()?.getNanos() || 0,
        sortCount: metricsData.getSortCount() || 0,
        resultCount: metricsData.getResultCount() || 0,
        resultSize: metricsData.getResultSize() || 0,
        mutationCount: metricsData.getMutationCount() || 0,
        errorCount: metricsData.getErrorCount() || 0,
        warningCount: metricsData.getWarningCount() || 0,
      })
    } else {
      metrics = undefined
    }

    const queryStatus = queryStatusFromGrpc(metaData.getStatus())
    const signature = metaData.getSignature()
    let querySignature: any | undefined = undefined
    if(signature instanceof Uint8Array){
      querySignature = JSON.parse(Buffer.from(signature).toString('utf8'))
    } else {
      querySignature = JSON.parse(signature)
    }

    let queryProfile: any | undefined = undefined
    if(metaData.hasProfile()){
      const profile = metaData.getProfile()
      if(profile instanceof Uint8Array){
        queryProfile = JSON.parse(Buffer.from(profile).toString('utf8'))
      } else {
        queryProfile = JSON.parse(profile)
      }
    }

    const meta = new QueryMetaData({
      requestId: metaData.getRequestId(),
      clientContextId: metaData.getClientContextId(),
      status: queryStatus,
      signature: querySignature,
      warnings: warnings,
      metrics: metrics,
      profile: queryProfile,
    })

    return meta

  }

}