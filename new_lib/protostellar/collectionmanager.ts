import { Bucket } from './bucket'
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
import {errorFromProtostellar} from './errors'
import { NodeCallback, PromiseHelper } from '../utilities'
import { CollectionAdminServiceClient } from './generated/couchbase/admin/collection/v1/collection_grpc_pb'
import { 
  CreateCollectionRequest,
  CreateScopeRequest,
  DeleteCollectionRequest,
  DeleteScopeRequest,
  ListCollectionsRequest,
  ListCollectionsResponse
} from './generated/couchbase/admin/collection/v1/collection_pb'
import { Metadata } from '@grpc/grpc-js'

/**
 * CollectionManager allows the management of collections within a Bucket.
 *
 * @category Management
 */
export class CollectionManager {
  private _bucket: Bucket
  private _collectionService: CollectionAdminServiceClient

  /**
   * @internal
   */
  constructor(bucket: Bucket) {
    this._bucket = bucket
    this._collectionService = new CollectionAdminServiceClient(this._cluster.connStr, this._cluster.channel)
  }

  private get _cluster() {
    return this._bucket.cluster
  }

  /**
  @internal
  */
  get metadata(): Metadata {
    return this._cluster.metadata
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
  
      const deadline = Date.now() + (options.timeout || this._cluster.managementTimeout)
      const req = new CreateCollectionRequest()
      req.setBucketName(this._bucket.name)
      req.setScopeName(collectionSpec.scopeName)
      req.setCollectionName(collectionSpec.name)
      if(collectionSpec.maxExpiry){
        req.setMaxExpirySecs(collectionSpec.maxExpiry)
      }

      return PromiseHelper.wrap((wrapCallback) => {
        this._collectionService.createCollection(
          req,
          this.metadata,
          { deadline: deadline },
          (psErr: Error | null) => {
            const err = errorFromProtostellar(psErr)
            if (err) {
              return wrapCallback(err, null)
            }
            return wrapCallback(null)
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

    const deadline = Date.now() + (options.timeout || this._cluster.managementTimeout)
    const req = new CreateScopeRequest()
    req.setBucketName(this._bucket.name)
    req.setScopeName(scopeName)

    return PromiseHelper.wrap((wrapCallback) => {
      this._collectionService.createScope(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(null)
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

    const deadline = Date.now() + (options.timeout || this._cluster.managementTimeout)
    const req = new DeleteCollectionRequest()
    req.setBucketName(this._bucket.name)
    req.setScopeName(collectionSpec.scopeName)
    req.setCollectionName(collectionSpec.name)

    return PromiseHelper.wrap((wrapCallback) => {
      this._collectionService.deleteCollection(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(null)
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

    const deadline = Date.now() + (options.timeout || this._cluster.managementTimeout)
    const req = new DeleteScopeRequest()
    req.setBucketName(this._bucket.name)
    req.setScopeName(scopeName)

    return PromiseHelper.wrap((wrapCallback) => {
      this._collectionService.deleteScope(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(null)
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

    const deadline = Date.now() + (options.timeout || this._cluster.managementTimeout)
    const req = new ListCollectionsRequest()
    req.setBucketName(this._bucket.name)

    return PromiseHelper.wrap((wrapCallback) => {
      this._collectionService.listCollections(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: ListCollectionsResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          const scopes = resp.getScopesList().map((scope) => this._scopeSpecFromProtostellar(scope))
          wrapCallback(err, scopes)
        }
      )
    }, callback)
  }

  /**
   * @internal
   */
  private _collectionSpecFromProtostellar(scopeName: string, collection: ListCollectionsResponse.Collection): CollectionSpec {
    return new CollectionSpec({
      name: collection.getName(),
      scopeName: scopeName,
      maxExpiry: collection.getMaxExpirySecs(),
    })
  }

  /**
   * @internal
   */
  private _scopeSpecFromProtostellar(scope: ListCollectionsResponse.Scope): ScopeSpec {
    let collections: CollectionSpec[]
    if (scope.getCollectionsList()) {
      const scopeName = scope.getName()
      collections = scope.getCollectionsList().map((collection) =>
        this._collectionSpecFromProtostellar(scopeName, collection)
      )
    } else {
      collections = []
    }

    return new ScopeSpec({
      name: scope.getName(),
      collections: collections,
    })
  }

}