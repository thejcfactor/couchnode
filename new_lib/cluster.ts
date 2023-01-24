import {
  Authenticator,
  PasswordAuthenticator,
  CertificateAuthenticator,
} from './authenticators'
import { Transcoder, DefaultTranscoder } from './transcoders'
import { PromiseHelper, NodeCallback } from './utilities'

import {Cluster as ClassicCluster} from './classic/cluster'
import {Cluster as ProtostellarCluster} from './protostellar/cluster'

import { Bucket } from './bucket'

import { QueryMetaData, QueryOptions, QueryResult } from './querytypes'
import { StreamableRowPromise } from './streamablepromises'


/**
 * Specifies the timeout options for the client.
 *
 * @category Core
 */
export interface TimeoutConfig {
  /**
   * Specifies the default timeout for KV operations, specified in millseconds.
   */
  kvTimeout?: number

  /**
   * Specifies the default timeout for durable KV operations, specified in millseconds.
   */
  kvDurableTimeout?: number

  /**
   * Specifies the default timeout for views operations, specified in millseconds.
   */
  viewTimeout?: number

  /**
   * Specifies the default timeout for query operations, specified in millseconds.
   */
  queryTimeout?: number

  /**
   * Specifies the default timeout for analytics query operations, specified in millseconds.
   */
  analyticsTimeout?: number

  /**
   * Specifies the default timeout for search query operations, specified in millseconds.
   */
  searchTimeout?: number

  /**
   * Specifies the default timeout for management operations, specified in millseconds.
   */
  managementTimeout?: number
}

/**
 * Specifies security options for the client.
 *
 * @category Core
 */
export interface SecurityConfig {
  /**
   * Specifies the path to a trust store file to be used when validating the
   * authenticity of the server when connecting over SSL.
   */
  trustStorePath?: string
}

/**
 * Specifies DNS options for the client.
 *
 * Volatile: This API is subject to change at any time.
 *
 * @category Core
 */
export interface DnsConfig {
  /**
   * Specifies the nameserver to be used for DNS query when connecting.
   */
  nameserver?: string

  /**
   * Specifies the port to be used for DNS query when connecting.
   */
  port?: number

  /**
   * Specifies the default timeout for DNS SRV operations, specified in millseconds.
   */
  dnsSrvTimeout?: number
}

/**
 * Specifies the options which can be specified when connecting
 * to a cluster.
 *
 * @category Core
 */
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
   * Specifies a specific authenticator to use when connecting to the cluster.
   */
  authenticator?: Authenticator

  /**
   * Specifies the security config for connections of this cluster.
   */
  security?: SecurityConfig

  /**
   * Specifies the default timeouts for various operations performed by the SDK.
   */
  timeouts?: TimeoutConfig

  /**
   * Specifies the default transcoder to use when encoding or decoding document values.
   */
  transcoder?: Transcoder

  /**
   * Specifies the options for transactions.
   */
  // transactions?: TransactionsConfig

  /**
   * Specifies the DNS config for connections of this cluster.
   *
   * Volatile: This API is subject to change at any time.
   *
   */
  dnsConfig?: DnsConfig
}

/**
 * Exposes the operations which are available to be performed against a cluster.
 * Namely the ability to access to Buckets as well as performing management
 * operations against the cluster.
 *
 * @category Core
 */
export class Cluster {
  private _impl: ClassicCluster | ProtostellarCluster


    /**
  @internal
  @deprecated Use the static sdk-level {@link connect} method instead.
  */
  constructor(connStr: string, options?: ConnectOptions) {
    if(connStr.startsWith('protostellar://')){
      this._impl = new ProtostellarCluster(connStr, options)
    } else {
      this._impl = new ClassicCluster(connStr, options)
    }
  }

  private async _connect() {
    return this._impl._connectHelper()
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
      const cluster = new Cluster(connStr, options)
      await cluster._connect()
      return cluster
    }, callback)
  }

  /**
   * Creates a Bucket object reference to a specific bucket.
   *
   * @param bucketName The name of the bucket to reference.
   */
  bucket(bucketName: string): Bucket {
    return this._impl.bucket(bucketName)
  }

  /**
   * Executes a N1QL query against the cluster.
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