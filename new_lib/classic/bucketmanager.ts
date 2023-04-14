import { Cluster } from './cluster'
import { durabilityLevelFromCpp, errorFromCpp } from './bindingutilities'
import { 
  CreateBucketOptions,
  IBucketSettings,
  BucketSettings,
  ICreateBucketSettings,
  UpdateBucketOptions,
  DropBucketOptions,
  GetBucketOptions,
  BucketType,
  CompressionMode,
  EvictionPolicy,
  ConflictResolutionType,
  StorageBackend,
  GetAllBucketsOptions,
  FlushBucketOptions,
} from '../bucketmanager'
import { InvalidArgumentError } from '../errors'
import { NodeCallback, duraLevelToNsServerStr, PromiseHelper } from '../utilities'
import binding, {
  CppManagementClusterBucketCompression,
  CppManagementClusterBucketConflictResolution,
  CppManagementClusterBucketEvictionPolicy,
  CppManagementClusterBucketSettings,
  CppManagementClusterBucketStorageBackend,
  CppManagementClusterBucketType
} from './binding'

/**
 * BucketManager provides an interface for adding/removing/updating
 * buckets within the cluster.
 *
 * @category Management
 */
export class BucketManager {
  private _cluster: Cluster

  /**
   * @internal
   */
  constructor(cluster: Cluster) {
    this._cluster = cluster
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

    const timeout = options.timeout || this._cluster.managementTimeout
    const bucketSettings = {
      ...this._toCppBucketSettings(settings),
      conflict_resolution_type: settings.conflictResolutionType
    }

    return PromiseHelper.wrap((wrapCallback) => {
      this._cluster.conn.managementBucketCreate(
        {
          bucket: bucketSettings,
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

    const timeout = options.timeout || this._cluster.managementTimeout
    const bucketSettings = this._toCppBucketSettings(settings)

    return PromiseHelper.wrap((wrapCallback) => {
      this._cluster.conn.managementBucketUpdate(
        {
          bucket: bucketSettings,
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

    const timeout = options.timeout || this._cluster.managementTimeout

    return PromiseHelper.wrap((wrapCallback) => {
      this._cluster.conn.managementBucketDrop(
        {
          name: bucketName,
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

    const timeout = options.timeout || this._cluster.managementTimeout

    return PromiseHelper.wrap((wrapCallback) => {
      this._cluster.conn.managementBucketGet(
        {
          name: bucketName,
          timeout: timeout,
        },
        (cppErr, resp) => {
          const err = errorFromCpp(cppErr)
          if (err) {
            return wrapCallback(err, null)
          }
          const bucket = this._bucketSettingsFromCpp(resp.bucket)
          wrapCallback(err, bucket)
        }
      )
    }, callback)
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

    const timeout = options.timeout || this._cluster.managementTimeout

    return PromiseHelper.wrap((wrapCallback) => {
      this._cluster.conn.managementBucketGetAll(
        {
          timeout: timeout,
        },
        (cppErr, resp) => {
          const err = errorFromCpp(cppErr)
          if (err) {
            return wrapCallback(err, null)
          }
          const buckets = resp.buckets.map((bucket) => this._bucketSettingsFromCpp(bucket))
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

    const timeout = options.timeout || this._cluster.managementTimeout

    return PromiseHelper.wrap((wrapCallback) => {
      this._cluster.conn.managementBucketDrop(
        {
          name: bucketName,
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
   * @internal
   */
  private _toCppBucketSettings(data: IBucketSettings): any {
    return {
      name: data.name,
      flush_enabled: data.flushEnabled,
      ram_quota_mb: data.ramQuotaMB,
      num_replicas: data.numReplicas,
      replica_indexes: data.replicaIndexes,
      bucket_type: data.bucketType,
      storage_backend: data.storageBackend,
      eviction_policy: data.evictionPolicy,
      max_expiry: data.maxTTL || data.maxExpiry,
      compression_mode: data.compressionMode,
      minimum_durability_level:
        data.durabilityMinLevel ||
        duraLevelToNsServerStr(data.minimumDurabilityLevel),
    }
  }

  // export interface CppManagementClusterBucketSettings {
  //   uuid: string

  //   conflict_resolution_type: CppManagementClusterBucketConflictResolution
  //   storage_backend: CppManagementClusterBucketStorageBackend
  //   capabilities: string[]
  //   nodes: CppManagementClusterBucketSettingsNode[]
  // }

  /**
   * @internal
   */
  private _bucketSettingsFromCpp(bucket: CppManagementClusterBucketSettings): BucketSettings {
    // TODO: maybe -- uuid, capabilities, nodes??
    return new BucketSettings({
      name: bucket.name,
      bucketType: this._bucketTypeFromCpp(bucket.bucket_type),
      ramQuotaMB: bucket.ram_quota_mb,
      maxExpiry: bucket.max_expiry,
      numReplicas: bucket.num_replicas,
      replicaIndexes: bucket.replica_indexes,
      flushEnabled: bucket.flush_enabled,
      compressionMode: this._compressionModeFromCpp(bucket.compression_mode),
      evictionPolicy: this._evictionPolicyFromCpp(bucket.eviction_policy),
      minimumDurabilityLevel: durabilityLevelFromCpp(bucket.minimum_durability_level),
      storageBackend: this._storageBackendFromCpp(bucket.storage_backend),
      //conflict resolution?
    })

  }

  /**
   * @internal
   */
  private _bucketTypeFromCpp(bucketType: CppManagementClusterBucketType): BucketType {
    if (bucketType === binding.management_cluster_bucket_type.couchbase) {
      return BucketType.Couchbase
    } else if (bucketType === binding.management_cluster_bucket_type.ephemeral) {
      return BucketType.Ephemeral
    } else if (bucketType === binding.management_cluster_bucket_type.memcached) {
      return BucketType.Memcached
    }
  
    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _compressionModeFromCpp(bucketType: CppManagementClusterBucketCompression): CompressionMode {
    if (bucketType === binding.management_cluster_bucket_compression.active) {
      return CompressionMode.Active
    } else if (bucketType === binding.management_cluster_bucket_compression.off) {
      return CompressionMode.Off
    } else if (bucketType === binding.management_cluster_bucket_compression.passive) {
      return CompressionMode.Passive
    }
  
    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _evictionPolicyFromCpp(evictionPolicy: CppManagementClusterBucketEvictionPolicy): EvictionPolicy {
    if (evictionPolicy === binding.management_cluster_bucket_eviction_policy.full) {
      return EvictionPolicy.FullEviction
    } else if (evictionPolicy === binding.management_cluster_bucket_eviction_policy.no_eviction) {
      return EvictionPolicy.NoEviction
    } else if (evictionPolicy === binding.management_cluster_bucket_eviction_policy.not_recently_used) {
      return EvictionPolicy.NotRecentlyUsed
    } else if (evictionPolicy === binding.management_cluster_bucket_eviction_policy.value_only) {
      return EvictionPolicy.ValueOnly
    }
  
    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _conflictResolutionTypeFromCpp(conflictResolution: CppManagementClusterBucketConflictResolution): ConflictResolutionType {
    if (conflictResolution === binding.management_cluster_bucket_conflict_resolution.custom) {
      return ConflictResolutionType.Custom
    } else if (conflictResolution === binding.management_cluster_bucket_conflict_resolution.sequence_number) {
      return ConflictResolutionType.SequenceNumber
    } else if (conflictResolution === binding.management_cluster_bucket_conflict_resolution.timestamp) {
      return ConflictResolutionType.Timestamp
    }
  
    throw new InvalidArgumentError()
  }

  /**
   * @internal
   */
  private _storageBackendFromCpp(storageBackend: CppManagementClusterBucketStorageBackend): StorageBackend {
    if (storageBackend === binding.management_cluster_bucket_storage_backend.couchstore) {
      return StorageBackend.Couchstore
    } else if (storageBackend === binding.management_cluster_bucket_storage_backend.magma) {
      return StorageBackend.Magma
    }
  
    throw new InvalidArgumentError()
  }
}