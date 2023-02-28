import { ChannelCredentials } from '@grpc/grpc-js';
import { QueryClient } from './generated/couchbase/query.v1_grpc_pb';
import { ApiImplementation } from '../generaltypes'
import { Bucket } from './bucket'
import { Cluster } from './cluster'
import { Collection } from '../collection'

import { QueryExecutor } from './queryexecutor'
import { QueryMetaData, QueryOptions, QueryResult } from '../querytypes'
import { StreamableRowPromise } from '../streamablepromises'
import { Transcoder } from '../transcoders'
import { NodeCallback, PromiseHelper } from '../utilities'

export class Scope {
  /**
   * @internal
   */
  static get DEFAULT_NAME(): string {
    return '_default'
  }

  private _bucket: Bucket
  private _name: string
  private _channel: ChannelCredentials
  // private _queryService: QueryClient

  /**
  @internal
  */
  constructor(bucket: Bucket, scopeName: string) {
    this._bucket = bucket
    this._name = scopeName
    this._channel = bucket.channel
    // this._queryService = new QueryClient(this._bucket.cluster.connStr, this.conn)
  }

  get apiImplementation(): ApiImplementation {
    return this._bucket.apiImplementation
  }

  /**
   * @internal
   */
  get channel(): ChannelCredentials {
    return this._channel
  }

  /**
  @internal
  */
  get bucket(): Bucket {
    return this._bucket
  }

  /**
  @internal
  */
  get cluster(): Cluster {
    return this._bucket.cluster
  }

  /**
  @internal
  */
  get queryService(): QueryClient {
    return this.cluster.queryService
  }

  /**
  @internal
  */
  get transcoder(): Transcoder {
    return this._bucket.transcoder
  }

  /**
   * The name of the scope this Scope object references.
   */
  get name(): string {
    return this._name
  }

  /**
   * Creates a Collection object reference to a specific collection.
   *
   * @param collectionName The name of the collection to reference.
   */
  collection(collectionName: string): Collection {
    return new Collection(this, collectionName)
  }

  /**
   * Executes a N1QL query against the cluster scoped to this scope.
   *
   * @param statement The N1QL statement to execute.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  query<TRow = any>(
    statement: string,
    options?: QueryOptions,
    callback?: NodeCallback<QueryResult<TRow>>
  ): StreamableRowPromise<QueryResult<TRow>, TRow, QueryMetaData> {
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const bucket = this.bucket
    const exec = new QueryExecutor(this.queryService, this.bucket.name, this.name)

    const options_ = options
    return PromiseHelper.wrapAsync(
      () =>
        exec.query<TRow>(statement, {
          ...options_,
          queryContext: `${bucket.name}.${this.name}`,
        }),
      callback
    )
  }

}