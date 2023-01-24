import { Bucket as ClassicBucket } from './classic/bucket'
import { Bucket as ProtostellarBucket } from './protostellar/bucket'
import { Collection } from './collection'
import { Scope as ClassicScope } from './classic/scope'
import { Scope as ProtostellarScope } from './protostellar/scope'
import { ApiImplementation } from './generaltypes'

import { QueryMetaData, QueryOptions, QueryResult } from './querytypes'
import { StreamableRowPromise } from './streamablepromises'
import { NodeCallback } from './utilities'

/**
 * Exposes the operations which are available to be performed against a scope.
 * Namely the ability to access to Collections for performing operations.
 *
 * @category Core
 */
export class Scope {
  /**
   * @internal
   */
  static get DEFAULT_NAME(): string {
    return '_default'
  }

  private _impl: ClassicScope | ProtostellarScope

  /**
  @internal
  */
  constructor(bucket: ClassicBucket | ProtostellarBucket, scopeName: string) {
    if(bucket.apiImplementation == ApiImplementation.Protostellar){
      this._impl = new ProtostellarScope(bucket as ProtostellarBucket, scopeName)
    } else {
      this._impl = new ClassicScope(bucket as ClassicBucket, scopeName)
    }
  }

  /**
   * The name of the scope this Scope object references.
   */
  get name(): string {
    return this._impl.name
  }

  /**
   * Creates a Collection object reference to a specific collection.
   *
   * @param collectionName The name of the collection to reference.
   */
  collection(collectionName: string): Collection {
    return this._impl.collection(collectionName)
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
    return this._impl.query(statement, options, callback)
  }
}