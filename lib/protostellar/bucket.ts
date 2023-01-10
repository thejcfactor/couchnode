import { ChannelCredentials } from '@grpc/grpc-js';
import { Cluster } from './cluster'
import { Scope } from './scope'
import { Collection } from './collection'
import { Transcoder } from './transcoders'

export class Bucket {
  private _cluster: Cluster
  private _name: string
  private _channel: ChannelCredentials

  /**
   * @internal
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
  @internal
  */
  constructor(cluster: Cluster, bucketName: string) {
      this._cluster = cluster
      this._name = bucketName
      this._channel = cluster.channel
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