import { Bucket as ClassicBucket } from './classic/bucket'
import { Cluster as ClassicCluster } from './classic/cluster'
import { Collection } from './collection'
import { ApiImplementation } from './generaltypes'
import { Bucket as ProtostellarBucket } from './protostellar/bucket'
import { Cluster as ProtostellarCluster } from './protostellar/cluster'
import { Scope } from './scope'

/**
 * Exposes the operations which are available to be performed against a bucket.
 * Namely the ability to access to Collections as well as performing management
 * operations against the bucket.
 *
 * @category Core
 */
export class Bucket {
  private _impl: ClassicBucket | ProtostellarBucket

  /**
  @internal
  */
  constructor(
    cluster: ClassicCluster | ProtostellarCluster,
    bucketName: string
  ) {
    if (cluster.apiImplementation == ApiImplementation.Protostellar) {
      this._impl = new ProtostellarBucket(
        cluster as ProtostellarCluster,
        bucketName
      )
    } else {
      this._impl = new ClassicBucket(cluster as ClassicCluster, bucketName)
    }
  }

  /**
   * The API implementation for this Bucket object.
   */
  get apiImplementation(): ApiImplementation {
    return this._impl.apiImplementation
  }

  /**
   * The name of the bucket this Bucket object references.
   */
  get name(): string {
    return this._impl.name
  }

  /**
   * Creates a Scope object reference to a specific scope.
   *
   * @param scopeName The name of the scope to reference.
   */
  scope(scopeName: string): Scope {
    return this._impl.scope(scopeName)
  }

  /**
   * Creates a Scope object reference to the default scope.
   */
  defaultScope(): Scope {
    return this._impl.defaultScope()
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
   * Creates a Collection object reference to the default collection.
   */
  defaultCollection(): Collection {
    return this._impl.defaultCollection()
  }
}
