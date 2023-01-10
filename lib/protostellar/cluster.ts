import * as grpc from '@grpc/grpc-js';
import { ChannelCredentials } from '@grpc/grpc-js';

import { Bucket } from './bucket'
import { DefaultTranscoder, Transcoder } from './transcoders'; 
import { PromiseHelper, NodeCallback } from '../utilities'

export interface ConnectOptions {
  /**
   * Specifies a username to use for an implicitly created IPasswordAuthenticator
   * used for authentication with the cluster.
   */
  username?: string

  /**
   * Specifies a password to be used in concert with username for authentication.
   *
   * @see ConnectOptions.username
   */
  password?: string

  /**
   * Specifies the path to a trust store file to be used when validating the
   * authenticity of the server when connecting over SSL.
   */
  trustStorePath?: string
}

export class Cluster {
  private _connStr: string
  private _channel: ChannelCredentials
  private _transcoder: Transcoder
  private _openBuckets: string[]

  /**
  * @internal
  */
  get channel(): ChannelCredentials {
    return this._channel
  }

  /**
  * @internal
  */
  get connStr(): string {
    return this._connStr
  }

  /**
  @internal
  */
  get transcoder(): Transcoder {
    return this._transcoder
  }

  /**
  */
  constructor(connStr: string, options?: ConnectOptions) {
    if (!options) {
      options = {}
    }
    this._connStr = connStr
    this._channel = grpc.credentials.createInsecure()

    this._transcoder = new DefaultTranscoder()

    this._openBuckets = []
  }

  /**
  @internal
  */
  static async connect(
    connStr: string,
    options?: ConnectOptions,
    callback?: NodeCallback<Cluster>
  ): Promise<Cluster> {
    return PromiseHelper.wrapAsync(async () => {
      // TODO:  nothing is async here...
      const cluster = new Cluster(connStr, options)
      return cluster
    }, callback)
  }

  /**
   * Creates a Bucket object reference to a specific bucket.
   *
   * @param bucketName The name of the bucket to reference.
   */
  bucket(bucketName: string): Bucket {
    if (!this._openBuckets.includes(bucketName)) {
      this._openBuckets.push(bucketName)
    }
    return new Bucket(this, bucketName)
  }
}