import { ApiImplementation } from './generaltypes'
import { Bucket as ClassicBucket } from './classic/bucket'
import { CollectionManager as ClassicCollectionManager } from './classic/collectionmanager'
import { Bucket as ProtostellarBucket } from './protostellar/bucket'
import { CollectionManager as ProtostellarCollectionManager } from './protostellar/collectionmanager'
import { NodeCallback } from './utilities'

/**
 * Provides options for configuring a collection.
 *
 * @category Management
 */
export interface ICollectionSpec {
  /**
   * The name of the scope.
   */
  name: string

  /**
   * The name of the scope containing this collection.
   */
  scopeName: string

  /**
   * The maximum expiry for documents in this collection.
   *
   * @see {@link IBucketSettings.maxExpiry}
   */
  maxExpiry?: number
}

/**
 * Contains information about a collection.
 *
 * @category Management
 */
export class CollectionSpec {
  /**
   * The name of the collection.
   */
  name: string

  /**
   * The name of the scope this collection exists in.
   */
  scopeName: string

  /**
   * The maximum expiry for documents in this collection.
   *
   * @see {@link IBucketSettings.maxExpiry}
   */
  maxExpiry: number

  /**
   * @internal
   */
  constructor(data: CollectionSpec) {
    this.name = data.name
    this.scopeName = data.scopeName
    this.maxExpiry = data.maxExpiry
  }
}

/**
 * Contains information about a scope.
 *
 * @category Management
 */
export class ScopeSpec {
  /**
   * The name of the scope.
   */
  name: string

  /**
   * The collections which exist in this scope.
   */
  collections: CollectionSpec[]

  /**
   * @internal
   */
  constructor(data: ScopeSpec) {
    this.name = data.name
    this.collections = data.collections
  }
}

/**
 * @category Management
 */
export interface CreateCollectionOptions {
  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

/**
 * @category Management
 */
export interface GetAllScopesOptions {
  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

/**
 * @category Management
 */
export interface DropCollectionOptions {
  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

/**
 * @category Management
 */
export interface CreateScopeOptions {
  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

/**
 * @category Management
 */
export interface DropScopeOptions {
  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

/**
 * CollectionManager allows the management of collections within a Bucket.
 *
 * @category Management
 */
export class CollectionManager {
  private _impl: ClassicCollectionManager | ProtostellarCollectionManager

  /**
   * @internal
   */
  constructor(bucket: ClassicBucket | ProtostellarBucket) {
    if (bucket.apiImplementation == ApiImplementation.Protostellar) {
      this._impl = new ProtostellarCollectionManager(
        bucket as ProtostellarBucket,
      )
    } else {
      this._impl = new ClassicCollectionManager(bucket as ClassicBucket)
    }
  }

  /**
   * Creates a collection in a scope.
   *
   * @param collectionSpec Specifies the settings for the new collection.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async createCollection(
    collectionSpec: ICollectionSpec,
    options?: CreateCollectionOptions,
    callback?: NodeCallback<void>
  ): Promise<void> {
    return this._impl.createCollection(collectionSpec, options, callback)
  }

  /**
   * Creates a new scope.
   *
   * @param scopeName The name of the new scope to create.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async createScope(
    scopeName: string,
    options?: CreateScopeOptions,
    callback?: NodeCallback<void>
  ): Promise<void> {
    return this._impl.createScope(scopeName, options, callback)
  }

  /**
   * Drops a collection from a scope.
   *
   * @param collectionSpec Specifies the settings for the new collection.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async dropCollection(
    collectionSpec: ICollectionSpec,
    options?: DropCollectionOptions,
    callback?: NodeCallback<void>
  ): Promise<void> {
    return this._impl.dropCollection(collectionSpec, options, callback)
  }

  /**
   * Drops a scope.
   *
   * @param scopeName The name of the scope to drop.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async dropScope(
    scopeName: string,
    options?: DropScopeOptions,
    callback?: NodeCallback<void>
  ): Promise<void> {
    return this._impl.dropScope(scopeName, options, callback)
  }

  /**
   * Returns all configured scopes along with their collections.
   *
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async getAllScopes(
    options?: GetAllScopesOptions,
    callback?: NodeCallback<ScopeSpec[]>
  ): Promise<ScopeSpec[]> {
    return this._impl.getAllScopes(options, callback)
  }
}