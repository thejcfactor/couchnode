import { Bucket } from './bucket'
import { errorFromCpp } from './bindingutilities'
import { 
  CollectionSpec,
  CreateCollectionOptions,
  CreateScopeOptions,
  DropCollectionOptions,
  DropScopeOptions,
  GetAllScopesOptions,
  ICollectionSpec,
  ScopeSpec,
} from '../collectionmanager'
import { NodeCallback, PromiseHelper } from '../utilities'
import {
  CppTopologyCollectionsManifestCollection,
  CppTopologyCollectionsManifestScope,
} from './binding'

/**
 * CollectionManager allows the management of collections within a Bucket.
 *
 * @category Management
 */
export class CollectionManager {
  private _bucket: Bucket

  /**
   * @internal
   */
  constructor(bucket: Bucket) {
    this._bucket = bucket
  }

  private get _cluster() {
    return this._bucket.cluster
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
      if (options instanceof Function) {
        callback = arguments[1]
        options = undefined
      }
      if (!options) {
        options = {}
      }
  
      const bucketName = this._bucket.name
      const timeout = options.timeout || this._cluster.managementTimeout

      return PromiseHelper.wrap((wrapCallback) => {
        this._cluster.conn.managementCollectionCreate(
          {
            bucket_name: bucketName,
            scope_name: collectionSpec.scopeName,
            collection_name: collectionSpec.name,
            max_expiry: collectionSpec.maxExpiry ?? 0,
            timeout: timeout,
          },
          (cppErr) => {
            const err = errorFromCpp(cppErr)
            if (err) {
              return wrapCallback(err, null)
            }
            wrapCallback(err)
          }
        )
      }, callback)
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
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const bucketName = this._bucket.name
    const timeout = options.timeout || this._cluster.managementTimeout

    return PromiseHelper.wrap((wrapCallback) => {
      this._cluster.conn.managementScopeCreate(
        {
          bucket_name: bucketName,
          scope_name: scopeName,
          timeout: timeout,
        },
        (cppErr) => {
          const err = errorFromCpp(cppErr)
          if (err) {
            return wrapCallback(err, null)
          }
          wrapCallback(err)
        }
      )
    }, callback)
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
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const bucketName = this._bucket.name
    const timeout = options.timeout || this._cluster.managementTimeout

    return PromiseHelper.wrap((wrapCallback) => {
      this._cluster.conn.managementCollectionDrop(
        {
          bucket_name: bucketName,
          scope_name: collectionSpec.scopeName,
          collection_name: collectionSpec.name,
          timeout: timeout,
        },
        (cppErr) => {
          const err = errorFromCpp(cppErr)
          if (err) {
            return wrapCallback(err, null)
          }
          wrapCallback(err)
        }
      )
    }, callback)
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
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const bucketName = this._bucket.name
    const timeout = options.timeout || this._cluster.managementTimeout

    return PromiseHelper.wrap((wrapCallback) => {
      this._cluster.conn.managementScopeDrop(
        {
          bucket_name: bucketName,
          scope_name: scopeName,
          timeout: timeout,
        },
        (cppErr) => {
          const err = errorFromCpp(cppErr)
          if (err) {
            return wrapCallback(err, null)
          }
          wrapCallback(err)
        }
      )
    }, callback)
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
    if (options instanceof Function) {
      callback = arguments[0]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const bucketName = this._bucket.name
    const timeout = options.timeout || this._cluster.managementTimeout

    return PromiseHelper.wrap((wrapCallback) => {
      this._cluster.conn.managementScopeGetAll(
        {
          bucket_name: bucketName,
          timeout: timeout,
        },
        (cppErr, resp) => {
          const err = errorFromCpp(cppErr)
          if (err) {
            return wrapCallback(err, null)
          }
          const scopes = resp.manifest.scopes.map((scope) => this._scopeSpecFromCpp(scope))
          wrapCallback(err, scopes)
        }
      )
    }, callback)
  }

  /**
   * @internal
   */
  private _collectionSpecFromCpp(scopeName: string, collection: CppTopologyCollectionsManifestCollection): CollectionSpec {
    return new CollectionSpec({
      name: collection.name,
      scopeName: scopeName,
      maxExpiry: collection.max_expiry,
    })
  }

  /**
   * @internal
   */
  private _scopeSpecFromCpp(scope: CppTopologyCollectionsManifestScope): ScopeSpec {
    let collections: CollectionSpec[]
    if (scope.collections) {
      const scopeName = scope.name
      collections = scope.collections.map((collectionData) =>
        this._collectionSpecFromCpp(scopeName, collectionData)
      )
    } else {
      collections = []
    }

    return new ScopeSpec({
      name: scope.name,
      collections: collections,
    })
  }

}