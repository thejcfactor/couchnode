import { ChannelCredentials } from '@grpc/grpc-js';
import { Cluster } from './cluster'
import { Transcoder } from '../transcoders'
import { ApiImplementation } from '../generaltypes'

import { Collection } from '../collection'
import { Scope } from '../scope'

/**
 * Exposes the operations which are available to be performed against a bucket.
 * Namely the ability to access to Collections as well as performing management
 * operations against the bucket.
 *
 * @category Core
 */
export class Bucket {
  private _cluster: Cluster
  private _name: string
  private _channel: ChannelCredentials

  /**
  @internal
  */
  constructor(cluster: Cluster, bucketName: string) {
    this._cluster = cluster
    this._name = bucketName
    this._channel = cluster.channel
  }

  /**
  @internal
  */
  get channel(): ChannelCredentials {
    return this._channel
  }

  /**
  @internal
  */
  get cluster(): Cluster {
    return this._cluster
  }

  /**
  @internal
  */
  get transcoder(): Transcoder {
    return this._cluster.transcoder
  }

  /**
   * The API implementation this Bucket object.
   */
  get apiImplementation(): ApiImplementation {
    return this._cluster.apiImplementation
  }

  /**
   * The name of the bucket this Bucket object references.
   */
  get name(): string {
    return this._name
  }

  /**
   * Creates a Scope object reference to a specific scope.
   *
   * @param scopeName The name of the scope to reference.
   */
  scope(scopeName: string): Scope {
    return new Scope(this, scopeName)
  }
  
  /**
   * Creates a Scope object reference to the default scope.
   */
  defaultScope(): Scope {
    return this.scope(Scope.DEFAULT_NAME)
  }
  
  /**
   * Creates a Collection object reference to a specific collection.
   *
   * @param collectionName The name of the collection to reference.
   */
  collection(collectionName: string): Collection {
    const scope = this.defaultScope()
    return scope.collection(collectionName)
  }
  
  /**
   * Creates a Collection object reference to the default collection.
   */
  defaultCollection(): Collection {
    return this.collection(Collection.DEFAULT_NAME)
  }
}