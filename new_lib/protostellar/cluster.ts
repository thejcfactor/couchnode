import * as grpc from '@grpc/grpc-js';
import { ChannelCredentials } from '@grpc/grpc-js';
import { QueryClient } from './generated/couchbase/query.v1_grpc_pb';
import {
  Authenticator,
  PasswordAuthenticator,
  CertificateAuthenticator,
} from '../authenticators'
import { ConnSpec } from '../connspec'
import { ConnectOptions, DnsConfig } from '../cluster'
import { Transcoder, DefaultTranscoder } from '../transcoders'
import { PromiseHelper, NodeCallback } from '../utilities'
import { ApiImplementation } from '../generaltypes'
import { FeatureNotAvailableError } from '../errors'
import { Bucket } from '../bucket'

import { QueryExecutor } from './queryexecutor'
import { QueryMetaData, QueryOptions, QueryResult } from '../querytypes'
import { StreamableRowPromise } from '../streamablepromises'

class ProtostellarConnection {
  private _channel?: ChannelCredentials | undefined
  private _queryService?: QueryClient | undefined

  /**
   * @internal
   */
  get channel(): ChannelCredentials {
    if(!this._channel){
      throw new Error('No gRPC channel for connection.')
    }
    return this._channel
  }

  /**
   * @internal
   */
  set channel(channel: ChannelCredentials | undefined) {
    this._channel = channel
  }

  /**
  @internal
  */
  get queryService(): QueryClient {
    if(!this._queryService){
      throw new Error('No gRPC QueryClient for connection.')
    }
    return this._queryService
  }

  /**
   * @internal
   */
  set queryService(svc: QueryClient | undefined) {
    this._queryService = svc
  }

  constructor(channel?: ChannelCredentials, queryService?: QueryClient) {
    this._channel = channel
    this._queryService = queryService
  }
}

/**
 * Exposes the operations which are available to be performed against a cluster.
 * Namely the ability to access to Buckets as well as performing management
 * operations against the cluster.
 *
 * @category Core
 */
export class Cluster {
  private _apiImplementation = ApiImplementation.Protostellar
  private _connStr: string
  private _trustStorePath: string
  private _kvTimeout: number
  private _kvDurableTimeout: number
  private _viewTimeout: number
  private _queryTimeout: number
  private _analyticsTimeout: number
  private _searchTimeout: number
  private _managementTimeout: number
  private _auth: Authenticator
  private _conn: ProtostellarConnection
  private _transcoder: Transcoder
  // private _txnConfig: TransactionsConfig
  // private _transactions?: Transactions
  private _openBuckets: string[]
  private _dnsConfig: DnsConfig | null
  private _queryService?: QueryClient

  /**
   * @internal
   */
  get channel(): ChannelCredentials {
    return this._conn.channel
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
  @internal
  */
  get kvTimeout(): number {
    return this._kvTimeout
  }

  /**
  @internal
  */
  get kvDurableTimeout(): number {
    return this._kvDurableTimeout
  }

  /**
  @internal
  */
  get viewTimeout(): number {
    return this._viewTimeout
  }

  /**
  @internal
  */
  get queryTimeout(): number {
    return this._queryTimeout
  }

  /**
  @internal
  */
  get analyticsTimeout(): number {
    return this._analyticsTimeout
  }

  /**
  @internal
  */
  get searchTimeout(): number {
    return this._searchTimeout
  }

  /**
  @internal
  */
  get managementTimeout(): number {
    return this._managementTimeout
  }

  /**
  @internal
  */
  get queryService(): QueryClient {
    return this._conn.queryService
  }

  /**
  @internal
  @deprecated Use the static sdk-level {@link connect} method instead.
  */
  constructor(connStr: string, options?: ConnectOptions) {
    if (!options) {
      options = {}
    }

    if (!options.security) {
      options.security = {}
    }
    if (!options.timeouts) {
      options.timeouts = {}
    }

    //this._connStr = connStr.replace('protostellar://', '')
    this._connStr = connStr
    this._trustStorePath = options.security.trustStorePath || ''
    this._kvTimeout = options.timeouts.kvTimeout || 2500
    this._kvDurableTimeout = options.timeouts.kvDurableTimeout || 10000
    this._viewTimeout = options.timeouts.viewTimeout || 75000
    this._queryTimeout = options.timeouts.queryTimeout || 75000
    this._analyticsTimeout = options.timeouts.analyticsTimeout || 75000
    this._searchTimeout = options.timeouts.searchTimeout || 75000
    this._managementTimeout = options.timeouts.managementTimeout || 75000

    if (options.transcoder) {
      this._transcoder = options.transcoder
    } else {
      this._transcoder = new DefaultTranscoder()
    }

    // if (options.transactions) {
    //   this._txnConfig = options.transactions
    // } else {
    //   this._txnConfig = {}
    // }

    if (options.username || options.password) {
      if (options.authenticator) {
        throw new Error(
          'Cannot specify authenticator along with username/password.'
        )
      }

      this._auth = {
        username: options.username || '',
        password: options.password || '',
      }
    } else if (options.authenticator) {
      this._auth = options.authenticator
    } else {
      this._auth = {
        username: '',
        password: '',
      }
    }

    if (
      options.dnsConfig &&
      options.dnsConfig.nameserver &&
      options.dnsConfig.port
    ) {
      this._dnsConfig = {
        nameserver: options.dnsConfig.nameserver,
        port: options.dnsConfig.port,
        dnsSrvTimeout: options.dnsConfig.dnsSrvTimeout || 500,
      }
    } else {
      this._dnsConfig = null
    }

    this._conn = new ProtostellarConnection()
    // this._queryService = new QueryClient(this.connStr, this.conn)
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
      const cluster = new Cluster(connStr, options)
      await cluster._connect()
      return cluster
    }, callback)
  }

  get apiImplementation(): ApiImplementation {
    return this._apiImplementation
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
    // const err = Error('Query operations from cluster not supported.  Use scope.query().')
    // throw new FeatureNotAvailableError(err)
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const exec = new QueryExecutor(this.queryService)

    const options_ = options
    return PromiseHelper.wrapAsync(
      () => exec.query<TRow>(statement, options_),
      callback
    )
  }

  /**
   * Shuts down this cluster object.  Cleaning up all resources associated with it.
   *
   * @param callback A node-style callback to be invoked after execution.
   */
  async close(callback?: NodeCallback<void>): Promise<void> {
    // if (this._transactions) {
    //   await this._transactions._close()
    //   this._transactions = undefined
    // }

    // @TODO: I don't like this...but for now okay...
    this._conn.channel = undefined
    this._conn.queryService = undefined
    return PromiseHelper.wrap((wrapCallback) => {
      wrapCallback(null)
    }, callback)
  }

  async _connectHelper(){
    return this._connect()
  }

  private async _connect() {
    return new Promise((resolve, reject) => {
      try {
        const dsnObj = ConnSpec.parse(this._connStr, this.apiImplementation)

        // @TODO(jc):  Do we need this w/ PS?
        // dsnObj.options.user_agent_extra = generateClientString()
  
        const connStr = dsnObj.toString(true)
  
        // @TODO(jc):  How to handle Authenticators?
        // dsnObj.options.trust_certificate = this._trustStorePath
        // const authOpts = {
        //   username: undefined as string | undefined,
        //   password: undefined as string | undefined,
        //   certificate_path: undefined as string | undefined,
        //   key_path: undefined as string | undefined,
        //   allowed_sasl_mechanisms: ['SCRAM-SHA512', 'SCRAM-SHA256', 'SCRAM-SHA1'],
        // }

        // if (this._auth) {
        //   const passAuth = this._auth as PasswordAuthenticator
        //   if (passAuth.username || passAuth.password) {
        //     authOpts.username = passAuth.username
        //     authOpts.password = passAuth.password

        //     if (passAuth.allowed_sasl_mechanisms) {
        //       authOpts.allowed_sasl_mechanisms = passAuth.allowed_sasl_mechanisms
        //     }
        //   }

        //   const certAuth = this._auth as CertificateAuthenticator
        //   if (certAuth.certificatePath || certAuth.keyPath) {
        //     authOpts.certificate_path = certAuth.certificatePath
        //     authOpts.key_path = certAuth.keyPath
        //   }
        // }
  
        this._connStr = connStr
        this._conn.channel = grpc.credentials.createInsecure()
        this._conn.queryService = new QueryClient(connStr, this._conn.channel)
  
        resolve(null)
      } catch (e) {
        // @TODO(jc):  translate to Couchbase Err
        reject(e)
      }
      


      // this._conn.connect(connStr, authOpts, this._dnsConfig, (cppErr) => {
      //   if (cppErr) {
      //     const err = errorFromCpp(cppErr)
      //     return reject(err)
      //   }

      //   resolve(null)
      // })
    })
  }
}