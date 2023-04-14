import { Cluster } from './cluster'
import {
  BucketType as ClassicBucketType,
  EvictionPolicy,
  CompressionMode as ClassicCompressionMode,
  StorageBackend as ClassicStorageBackend,
  ConflictResolutionType as ClassicConflictResolutionType,
  CreateBucketOptions,
  BucketSettings,
  IBucketSettings,
  ICreateBucketSettings,
  UpdateBucketOptions,
  DropBucketOptions,
  GetBucketOptions,
  FlushBucketOptions,
  GetAllBucketsOptions,
} from '../bucketmanager'
import { BucketAdminServiceClient } from './generated/couchbase/admin/bucket/v1/bucket_grpc_pb'
import { 
  BucketType,
  BucketTypeMap,
  CompressionMode,
  CompressionModeMap,
  EvictionMode,
  EvictionModeMap,
  StorageBackend,
  StorageBackendMap,
  ConflictResolutionType,
  ConflictResolutionTypeMap,
  CreateBucketRequest,
  UpdateBucketRequest,
  DeleteBucketRequest,
  ListBucketsRequest,
  ListBucketsResponse
} from './generated/couchbase/admin/bucket/v1/bucket_pb'
import { BucketNotFoundError, FeatureNotAvailableError, InvalidArgumentError} from '../errors'
import {errorFromProtostellar} from './errors'

import {
  durabilityLevelFromProtostellar,
  toProtostellarDurabilityLevel
} from './utilities'
import { Metadata } from '@grpc/grpc-js'
import { NodeCallback, PromiseHelper } from '../utilities'

/**
 * BucketManager provides an interface for adding/removing/updating
 * buckets within the cluster.
 *
 * @category Management
 */
export class BucketManager {
  private _cluster: Cluster
  private _bucketService: BucketAdminServiceClient

  /**
   * @internal
   */
  constructor(cluster: Cluster) {
    this._cluster = cluster
    this._bucketService = new BucketAdminServiceClient(this._cluster.connStr, this._cluster.channel)
  }

  /**
  @internal
  */
  get metadata(): Metadata {
    return this._cluster.metadata
  }

  /**
   * Creates a new bucket.
   *
   * @param settings The settings to use for the new bucket.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async createBucket(
    settings: ICreateBucketSettings,
    options?: CreateBucketOptions,
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
    const req = this._toProtostellarCreateBucketRequest(settings)

    return PromiseHelper.wrap((wrapCallback) => {
      this._bucketService.createBucket(
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
   * Updates the settings for an existing bucket.
   *
   * @param settings The new settings to use for the bucket.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async updateBucket(
    settings: BucketSettings,
    options?: UpdateBucketOptions,
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
    const req = this._toProtostellarUpdateBucketRequest(settings)

    return PromiseHelper.wrap((wrapCallback) => {
      this._bucketService.updateBucket(
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
   * Drops an existing bucket.
   *
   * @param bucketName The name of the bucket to drop.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async dropBucket(
    bucketName: string,
    options?: DropBucketOptions,
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
    const req = new DeleteBucketRequest()
    req.setBucketName(bucketName)

    return PromiseHelper.wrap((wrapCallback) => {
      this._bucketService.deleteBucket(
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
   * Fetches the settings in use for a specified bucket.
   *
   * @param bucketName The name of the bucket to fetch settings for.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async getBucket(
    bucketName: string,
    options?: GetBucketOptions,
    callback?: NodeCallback<BucketSettings>
  ): Promise<BucketSettings> {
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const buckets = await this.getAllBuckets(options)
    const bucket = buckets.find((bucket) => bucket.name === bucketName)
    if(typeof bucket === 'undefined'){
      throw new BucketNotFoundError()
    }
    return bucket
  }

  /**
   * Returns a list of existing buckets in the cluster.
   *
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async getAllBuckets(
    options?: GetAllBucketsOptions,
    callback?: NodeCallback<BucketSettings[]>
  ): Promise<BucketSettings[]> {
    if (options instanceof Function) {
      callback = arguments[0]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const deadline = Date.now() + (options.timeout || this._cluster.managementTimeout)
    const req = new ListBucketsRequest()
    return PromiseHelper.wrap((wrapCallback) => {
      this._bucketService.listBuckets(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: ListBucketsResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          const buckets = resp.getBucketsList().map((bucket) => this._bucketSettingsFromProtostellar(bucket))
          wrapCallback(err, buckets)
        }
      )
    }, callback)


  }

  /**
   * Flushes the bucket, deleting all the existing data that is stored in it.
   *
   * @param bucketName The name of the bucket to flush.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  async flushBucket(
    bucketName: string,
    options?: FlushBucketOptions,
    callback?: NodeCallback<void>
  ): Promise<void> {
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    // const deadline = Date.now() + (options.timeout || this._cluster.managementTimeout)
    throw new FeatureNotAvailableError()
  }
  
  /**
   * @internal
   */
  private _toProtostellarCreateBucketRequest(data: ICreateBucketSettings): CreateBucketRequest {
    const req = new CreateBucketRequest()
    req.setBucketName(data.name)
    req.setBucketType(this._toProtostellarBucketType(data.bucketType || ClassicBucketType.Couchbase))
    const ramQuotaBytes = data.ramQuotaMB * 1024 * 1024
    req.setRamQuotaBytes(ramQuotaBytes)
    req.setNumReplicas(data.numReplicas || 0)
    if(data.flushEnabled) {
      req.setFlushEnabled(data.flushEnabled)
    }
    if(data.replicaIndexes) {
      req.setReplicaIndexes(data.replicaIndexes)
    }
    if(data.evictionPolicy){
      req.setEvictionMode(this._toProtostellarEvictionMode(data.evictionPolicy))
    }
    if(data.maxExpiry){
      req.setMaxExpirySecs(Math.trunc(data.maxExpiry/1000))
    }
    if(data.compressionMode){
      req.setCompressionMode(this._toProtostellarCompressionMode(data.compressionMode))
    }
    const durabilityLevel = toProtostellarDurabilityLevel(data.minimumDurabilityLevel)
    if(durabilityLevel){
      req.setMinimumDurabilityLevel(durabilityLevel)
    }
    if(data.storageBackend){
      req.setStorageBackend(this._toProtostellarStorageBackend(data.storageBackend))
    }
    if(data.conflictResolutionType){
      req.setConflictResolutionType(this._toProtostellarConflictResolutionType(data.conflictResolutionType))
    }

    return req
  }

  /**
   * @internal
   */
  private _toProtostellarUpdateBucketRequest(data: IBucketSettings): UpdateBucketRequest {
    const req = new UpdateBucketRequest()
    req.setBucketName(data.name)
    // BucketType not in PS UpdateBucketRequest
    // req.setBucketType(this._toProtostellarBucketType(data.bucketType || ClassicBucketType.Couchbase))
    const ramQuotaBytes = data.ramQuotaMB * 1024 * 1024
    req.setRamQuotaBytes(ramQuotaBytes)
    req.setNumReplicas(data.numReplicas || 0)
    if(data.flushEnabled) {
      req.setFlushEnabled(data.flushEnabled)
    }
    if(data.replicaIndexes) {
      req.setReplicaIndexes(data.replicaIndexes)
    }
    if(data.evictionPolicy){
      req.setEvictionMode(this._toProtostellarEvictionMode(data.evictionPolicy))
    }
    if(data.maxExpiry){
      req.setMaxExpirySecs(Math.trunc(data.maxExpiry/1000))
    }
    if(data.compressionMode){
      req.setCompressionMode(this._toProtostellarCompressionMode(data.compressionMode))
    }
    const durabilityLevel = toProtostellarDurabilityLevel(data.minimumDurabilityLevel)
    if(durabilityLevel){
      req.setMinimumDurabilityLevel(durabilityLevel)
    }
    // StorageBackend not in PS UpdateBucketRequest
    // if(data.storageBackend){
    //   req.setStorageBackend(this._toProtostellarStorageBackend(data.storageBackend))
    // }
    // CFT not in IBucketSettings
    // if(data.conflictResolutionType){
    //   req.setConflictResolutionType(this._toProtostellarConflictResolutionType(data.conflictResolutionType))
    // }

    return req
  }
  
  /**
   * @internal
   */
  private _toProtostellarBucketType(bucketType: ClassicBucketType | string): BucketTypeMap[keyof BucketTypeMap] {
    if(bucketType == ClassicBucketType.Couchbase){
      return BucketType.BUCKET_TYPE_COUCHBASE
    } else if (bucketType == ClassicBucketType.Ephemeral){
      return BucketType.BUCKET_TYPE_EPHEMERAL
    } else if (bucketType == ClassicBucketType.Memcached){
      return BucketType.BUCKET_TYPE_MEMCACHED
    }

    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _bucketTypeFromProtostellar(bucketType: BucketTypeMap[keyof BucketTypeMap]): ClassicBucketType {
    if(bucketType == BucketType.BUCKET_TYPE_COUCHBASE){
      return ClassicBucketType.Couchbase
    } else if (bucketType == BucketType.BUCKET_TYPE_EPHEMERAL){
      return ClassicBucketType.Ephemeral
    } else if (bucketType == BucketType.BUCKET_TYPE_MEMCACHED){
      return ClassicBucketType.Memcached
    }

    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _toProtostellarEvictionMode(evictionPolicy: EvictionPolicy | string): EvictionModeMap[keyof EvictionModeMap] {
    if(evictionPolicy == EvictionPolicy.FullEviction){
      return EvictionMode.EVICTION_MODE_FULL
    } else if (evictionPolicy == EvictionPolicy.NoEviction){
      return EvictionMode.EVICTION_MODE_NONE
    } else if (evictionPolicy == EvictionPolicy.NotRecentlyUsed){
      return EvictionMode.EVICTION_MODE_NOT_RECENTLY_USED
    } else if (evictionPolicy == EvictionPolicy.ValueOnly){
      return EvictionMode.EVICTION_MODE_VALUE_ONLY
    }

    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _evictionModeFromProtostellar(evictionPolicy:  EvictionModeMap[keyof EvictionModeMap]): EvictionPolicy {
    if(evictionPolicy == EvictionMode.EVICTION_MODE_FULL){
      return EvictionPolicy.FullEviction
    } else if (evictionPolicy == EvictionMode.EVICTION_MODE_NONE){
      return EvictionPolicy.NoEviction
    } else if (evictionPolicy == EvictionMode.EVICTION_MODE_NOT_RECENTLY_USED){
      return EvictionPolicy.NotRecentlyUsed
    } else if (evictionPolicy == EvictionMode.EVICTION_MODE_VALUE_ONLY){
      return EvictionPolicy.ValueOnly
    }

    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _toProtostellarCompressionMode(compressionMode: ClassicCompressionMode | string): CompressionModeMap[keyof CompressionModeMap] {
    if(compressionMode == ClassicCompressionMode.Active){
      return CompressionMode.COMPRESSION_MODE_ACTIVE
    } else if (compressionMode == ClassicCompressionMode.Passive){
      return CompressionMode.COMPRESSION_MODE_PASSIVE
    } else if (compressionMode == ClassicCompressionMode.Off){
      return CompressionMode.COMPRESSION_MODE_OFF
    }

    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _compressionModeFromProtostellar(compressionMode: CompressionModeMap[keyof CompressionModeMap]): ClassicCompressionMode {
    if(compressionMode == CompressionMode.COMPRESSION_MODE_ACTIVE){
      return ClassicCompressionMode.Active
    } else if (compressionMode == CompressionMode.COMPRESSION_MODE_PASSIVE){
      return ClassicCompressionMode.Passive
    } else if (compressionMode == CompressionMode.COMPRESSION_MODE_OFF){
      return ClassicCompressionMode.Off
    }

    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _toProtostellarConflictResolutionType(conflictResolutionType: ClassicConflictResolutionType | string): ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap] {
    if(conflictResolutionType == ClassicConflictResolutionType.Custom){
      return ConflictResolutionType.CONFLICT_RESOLUTION_TYPE_CUSTOM
    } else if (conflictResolutionType == ClassicConflictResolutionType.SequenceNumber){
      return ConflictResolutionType.CONFLICT_RESOLUTION_TYPE_SEQUENCE_NUMBER
    } else if (conflictResolutionType == ClassicConflictResolutionType.Timestamp){
      return ConflictResolutionType.CONFLICT_RESOLUTION_TYPE_TIMESTAMP
    }

    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _conflictResolutionTypeFromProtostellar(conflictResolutionType: ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap]): ClassicConflictResolutionType {
    if(conflictResolutionType == ConflictResolutionType.CONFLICT_RESOLUTION_TYPE_CUSTOM){
      return ClassicConflictResolutionType.Custom
    } else if (conflictResolutionType == ConflictResolutionType.CONFLICT_RESOLUTION_TYPE_SEQUENCE_NUMBER){
      return ClassicConflictResolutionType.SequenceNumber
    } else if (conflictResolutionType == ConflictResolutionType.CONFLICT_RESOLUTION_TYPE_TIMESTAMP){
      return ClassicConflictResolutionType.Timestamp
    }

    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _toProtostellarStorageBackend(storageBackend: ClassicStorageBackend | string): StorageBackendMap[keyof StorageBackendMap] {
    if(storageBackend == ClassicStorageBackend.Couchstore){
      return StorageBackend.STORAGE_BACKEND_COUCHSTORE
    } else if (storageBackend == ClassicStorageBackend.Magma){
      return StorageBackend.STORAGE_BACKEND_MAGMA
    }

    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _storageBackendFromProtostellar(storageBackend: StorageBackendMap[keyof StorageBackendMap]): ClassicStorageBackend {
    if(storageBackend == StorageBackend.STORAGE_BACKEND_COUCHSTORE){
      return ClassicStorageBackend.Couchstore
    } else if (storageBackend == StorageBackend.STORAGE_BACKEND_MAGMA){
      return ClassicStorageBackend.Magma
    }

    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _bucketSettingsFromProtostellar(bucket: ListBucketsResponse.Bucket): BucketSettings {
    return new BucketSettings({
      name: bucket.getBucketName(),
      bucketType: this._bucketTypeFromProtostellar(bucket.getBucketType()),
      ramQuotaMB: bucket.getRamQuotaBytes() / 1024 / 1024,
      maxExpiry: bucket.getMaxExpirySecs(),
      numReplicas: bucket.getNumReplicas(),
      replicaIndexes: bucket.getReplicaIndexes(),
      flushEnabled: bucket.getFlushEnabled(),
      compressionMode: this._compressionModeFromProtostellar(bucket.getCompressionMode()),
      evictionPolicy: this._evictionModeFromProtostellar(bucket.getEvictionMode()),
      minimumDurabilityLevel: durabilityLevelFromProtostellar(bucket.getMinimumDurabilityLevel()),
      storageBackend: this._storageBackendFromProtostellar(bucket.getStorageBackend()),
      //conflict resolution?
    })
  }
}