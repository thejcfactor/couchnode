import { ChannelCredentials } from '@grpc/grpc-js';

import { QueryClient } from './generated/couchbase/query.v1_grpc_pb';


import { Bucket } from './bucket'
import { Cluster } from './cluster'
import { Collection } from './collection'
import { QueryOptions } from './querytypes'
import { QueryExecutor } from './queryexecutor';

import { NodeCallback, PromiseHelper } from '../utilities'
import { QueryResult, QueryMetaData } from '../querytypes';
import { StreamableRowPromise } from '../streamablepromises';
import { Transcoder } from './transcoders'

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
  private _queryService: QueryClient

  /**
  @internal
  */
  constructor(bucket: Bucket, scopeName: string) {
    this._bucket = bucket
    this._name = scopeName
    this._channel = bucket.channel
    this._queryService = new QueryClient(this._bucket.cluster.connStr, this._channel)
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
    return this._queryService
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

    const exec = new QueryExecutor(this)

    const options_ = options
    return PromiseHelper.wrapAsync(
      () => exec.query<TRow>(statement, options_),
      callback
    )
  }

}