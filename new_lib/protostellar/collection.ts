import {
  AppendOptions,
  DecrementOptions,
  IncrementOptions,
  PrependOptions,
} from '../binarycollection'
import {
  ExistsOptions,
  GetAllReplicasOptions,
  GetAndLockOptions,
  GetAndTouchOptions,
  GetAnyReplicaOptions,
  GetOptions,
  InsertOptions,
  LookupInOptions,
  MutateInOptions,
  RemoveOptions,
  ReplaceOptions,
  TouchOptions,
  UnlockOptions,
  UpsertOptions,
} from '../collection'
import {
  CounterResult,
  ExistsResult,
  GetReplicaResult,
  GetResult,
  LookupInResult,
  LookupInResultEntry,
  MutateInResult,
  MutateInResultEntry,
  MutationResult,
} from '../crudoptypes'
import { FeatureNotAvailableError, InvalidArgumentError } from '../errors'
import {
  ApiImplementation,
  DurabilityLevel,
  // StoreSemantics,
} from '../generaltypes'
import {
  // LookupInMacro,
  LookupInSpec,
  MutateInSpec
} from '../sdspecs'
import { StreamableReplicasPromise } from '../streamablepromises'
import { Transcoder } from '../transcoders'
import { expiryToTimestamp, NodeCallback, PromiseHelper } from '../utilities'
import { BinaryCollection } from './binarycollection'
// import { Bucket } from './bucket'
import { Cluster } from './cluster'
import { errorFromProtostellar } from './errors'
import { KvServiceClient } from './generated/couchbase/kv/v1/kv_grpc_pb'
import {
  AppendRequest,
  AppendResponse,
  DecrementRequest,
  DecrementResponse,
  ExistsRequest,
  ExistsResponse,
  GetAndLockRequest,
  GetAndTouchRequest,
  GetRequest,
  GetResponse,
  IncrementRequest,
  IncrementResponse,
  InsertRequest,
  InsertResponse,
  LookupInRequest,
  LookupInResponse,
  MutateInRequest,
  MutateInResponse,
  PrependRequest,
  PrependResponse,
  RemoveRequest,
  RemoveResponse,
  ReplaceRequest,
  ReplaceResponse,
  TouchRequest,
  TouchResponse,
  UnlockRequest,
  UpsertRequest,
  UpsertResponse,
} from './generated/couchbase/kv/v1/kv_pb'
import { MutationToken } from './mutationstate'
import { Scope } from './scope'
import {
  toProtostellarLookupInSpecs,
  toProtostellarMutateInSpecs,
  isMutateInOpInSpecList,
} from './sdspecs'
import { toProtostellarDurabilityLevel } from './utilities'
import { ChannelCredentials, Metadata } from '@grpc/grpc-js'

/**
 * Exposes the operations which are available to be performed against a collection.
 * Namely the ability to perform KV operations.
 *
 * @category Core
 */
export class Collection {
  /**
   * @internal
   */
  static get DEFAULT_NAME(): string {
    return '_default'
  }

  private _scope: Scope
  private _name: string
  private _channel: ChannelCredentials
  private _kvService: KvServiceClient
  private _metadata: Metadata

  /**
  @internal
  */
  constructor(scope: Scope, collectionName: string) {
    this._scope = scope
    this._name = collectionName
    this._channel = scope.channel
    this._kvService = new KvServiceClient(this.cluster.connStr, this.channel)
    this._metadata = scope.metadata
  }

  /**
   * The API implementation for this Collection object.
   */
  get apiImplementation(): ApiImplementation {
    return this._scope.apiImplementation
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
    return this._scope.bucket.cluster
  }

  /**
  @internal
  */
  get metadata(): Metadata {
    return this._metadata
  }

  /**
  @internal
  */
  get scope(): Scope {
    return this._scope
  }

  /**
  @internal
  */
  get transcoder(): Transcoder {
    return this._scope.transcoder
  }

  /**
   * @internal
   */
  _encodeDoc(
    transcoder: Transcoder,
    value: any,
    callback: (
      err: Error | null,
      bytes: Buffer,
      flags: number
    ) => void
  ): void {
    try {
      // BUG(JSCBC-1054): We should avoid doing buffer conversion.
      const [bytesBuf, flagsOut] = transcoder.encode(
        value
      )
      callback(
        null,
        bytesBuf,
        flagsOut
      )
    } catch (e) {
      return callback(e as Error, Buffer.alloc(0), 0)
    }
  }

  /**
   * @internal
   */
  _decodeDoc(
    transcoder: Transcoder,
    bytes: string | Uint8Array,
    flags: number,
    callback: (err: Error | null, content: any) => void
  ): void {
    try {
      const content = transcoder.decode(
        bytes,
        flags
      )
      callback(null, content)
    } catch (e) {
      return callback(e as Error, null)
    }
  }

  /**
  @internal
  */
  _mutationTimeout(durabilityLevel?: DurabilityLevel): number {
    if (
      durabilityLevel !== undefined &&
      durabilityLevel !== null &&
      durabilityLevel !== DurabilityLevel.None
    ) {
      return this.cluster.kvDurableTimeout
    }
    return this.cluster.kvTimeout
  }

  /**
   * @internal
   */
  _subdocDecode(bytes: string | Uint8Array): any {
    try {
      return JSON.parse(Buffer.from(bytes).toString('utf8'))
    } catch (e) {
      // If we encounter a parse error, assume that we need
      // to return bytes instead of an object.
      return bytes
    }
  }

  /**
   * The name of the collection this Collection object references.
   */
  get name(): string {
    return this._name
  }

  /**
   * Checks whether a specific document exists or not.
   *
   * @param key The document key to check for existence.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  exists(
    key: string,
    options?: ExistsOptions,
    callback?: NodeCallback<ExistsResult>
  ): Promise<ExistsResult> {
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)

    const req = new ExistsRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.get(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: ExistsResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }

          wrapCallback(
            null,
            new ExistsResult({
              cas: resp.getCas(),
              exists: resp.getResult(),
            })
          )
        }
      )
    }, callback)
  }

  /**
   * Retrieves the value of a document from the collection.
   *
   * @param key The document key to retrieve.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  get(
    key: string,
    options?: GetOptions,
    callback?: NodeCallback<GetResult>
  ): Promise<GetResult> {
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const transcoder = options.transcoder || this.transcoder
    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)
    const req = new GetRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    // TODO:  with_expiry + projections

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.get(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: GetResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }

          this._decodeDoc(
            transcoder,
            resp.getContent(),
            resp.getContentFlags(),
            (err, content) => {
              if (err) {
                return wrapCallback(err, null)
              }

              wrapCallback(
                null,
                new GetResult({
                  content: content,
                  cas: resp.getCas(),
                  expiryTime: resp.getExpiry()?.getSeconds(),
                })
              )
            }
          )
        }
      )
    }, callback)
  }

  /**
   * @internal
   */
  _getReplica(
    key: string,
    getAllReplicas: boolean,
    options?: {
      transcoder?: Transcoder
      timeout?: number
    },
    callback?: NodeCallback<GetReplicaResult[]>
  ): StreamableReplicasPromise<GetReplicaResult[], GetReplicaResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const emitter = new StreamableReplicasPromise<
      GetReplicaResult[],
      GetReplicaResult
    >((replicas: GetReplicaResult[]) => replicas)

    // const transcoder = options.transcoder || this.transcoder
    // const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)

    // @TODO(jc): implement replica reads when available.

    return PromiseHelper.wrapAsync(() => emitter, callback)
  }

  /**
   * Retrieves the value of the document from any of the available replicas.  This
   * will return as soon as the first response is received from any replica node.
   *
   * @param key The document key to retrieve.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  getAnyReplica(
    key: string,
    options?: GetAnyReplicaOptions,
    callback?: NodeCallback<GetReplicaResult>
  ): Promise<GetReplicaResult> {
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    return PromiseHelper.wrapAsync(async () => {
      const replicas = await this._getReplica(key, false, options)
      return replicas[0]
    }, callback)
  }

  /**
   * Retrieves the value of the document from all available replicas.  Note that
   * as replication is asynchronous, each node may return a different value.
   *
   * @param key The document key to retrieve.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  getAllReplicas(
    key: string,
    options?: GetAllReplicasOptions,
    callback?: NodeCallback<GetReplicaResult[]>
  ): Promise<GetReplicaResult[]> {
    return this._getReplica(key, true, options, callback)
  }

  /**
   * Inserts a new document to the collection, failing if the document already exists.
   *
   * @param key The document key to insert.
   * @param value The value of the document to insert.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  insert(
    key: string,
    value: any,
    options?: InsertOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const expiry = options.expiry
    const transcoder = options.transcoder || this.transcoder
    const durabilityLevel = toProtostellarDurabilityLevel(options.durabilityLevel)
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const deadline =
      Date.now() + (options.timeout || this._mutationTimeout(durabilityLevel))
    const req = new InsertRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    if (expiry) {
      req.setExpiryTime(expiryToTimestamp(expiry))
    }
    if(persistTo || replicateTo){
      throw new FeatureNotAvailableError()
    }
    if(durabilityLevel){
      req.setDurabilityLevel(durabilityLevel)
    }

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, contentFlags) => {
        if (err) {
          return wrapCallback(err, null)
        }
        req.setContent(bytes)
        req.setContentFlags(contentFlags)
        this._kvService.insert(
          req,
          this.metadata,
          { deadline: deadline },
          (psErr: Error | null, resp: InsertResponse) => {
            const err = errorFromProtostellar(psErr)
            if (err) {
              return wrapCallback(err, null)
            }
            return wrapCallback(
              null,
              new MutationResult({
                cas: resp.getCas(),
                token: MutationToken.fromResponse(resp.getMutationToken()),
              })
            )
          }
        )
      })
    }, callback)
  }

  /**
   * Upserts a document to the collection.  This operation succeeds whether or not the
   * document already exists.
   *
   * @param key The document key to upsert.
   * @param value The new value for the document.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  upsert(
    key: string,
    value: any,
    options?: UpsertOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const expiry = options.expiry
    const preserveExpiry = options.preserveExpiry
    const transcoder = options.transcoder || this.transcoder
    const durabilityLevel = toProtostellarDurabilityLevel(options.durabilityLevel)
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const deadline =
      Date.now() + (options.timeout || this._mutationTimeout(durabilityLevel))

    const req = new UpsertRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    if (expiry && (options.preserveExpiry || false)) {
      throw new InvalidArgumentError(
        new Error(
          'Cannot set expiry and preserveExpiry options for upsert operation.'
        )
      )
    }
    if (expiry) {
      req.setExpiryTime(expiryToTimestamp(expiry))
    } else if (!(preserveExpiry || false)){
      // match classic API -- reset expiry
      req.setExpirySecs(0)
    }
    if(persistTo || replicateTo){
      throw new FeatureNotAvailableError()
    }
    if(durabilityLevel){
      req.setDurabilityLevel(durabilityLevel)
    }

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, contentFlags) => {
        if (err) {
          return wrapCallback(err, null)
        }
        req.setContent(bytes)
        req.setContentFlags(contentFlags)
        this._kvService.upsert(
          req,
          this.metadata,
          { deadline: deadline },
          (psErr: Error | null, resp: UpsertResponse) => {
            const err = errorFromProtostellar(psErr)
            if (err) {
              return wrapCallback(err, null)
            }
            return wrapCallback(
              null,
              new MutationResult({
                cas: resp.getCas(),
                token: MutationToken.fromResponse(resp.getMutationToken()),
              })
            )
          }
        )
      })
    }, callback)
  }

  /**
   * Replaces the value of an existing document.  Failing if the document does not exist.
   *
   * @param key The document key to replace.
   * @param value The new value for the document.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  replace(
    key: string,
    value: any,
    options?: ReplaceOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const expiry = options.expiry
    const cas = options.cas
    const preserveExpiry = options.preserveExpiry
    const transcoder = options.transcoder || this.transcoder
    const durabilityLevel = toProtostellarDurabilityLevel(options.durabilityLevel)
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const deadline =
      Date.now() + (options.timeout || this._mutationTimeout(durabilityLevel))
    const req = new ReplaceRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    if (expiry && (options.preserveExpiry || false)) {
      throw new InvalidArgumentError(
        new Error(
          'Cannot set expiry and preserveExpiry options for replace operation.'
        )
      )
    }
    if (expiry) {
      req.setExpiryTime(expiryToTimestamp(expiry))
    } else if (!(preserveExpiry || false)){
      // match classic API -- reset expiry
      req.setExpirySecs(0)
    }
    if(persistTo || replicateTo){
      throw new FeatureNotAvailableError()
    }
    if(durabilityLevel){
      req.setDurabilityLevel(durabilityLevel)
    }

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, contentFlags) => {
        if (err) {
          return wrapCallback(err, null)
        }

        if (cas) {
          req.setCas(cas as number)
        }
        req.setContent(bytes)
        req.setContentFlags(contentFlags)
        this._kvService.replace(
          req,
          this.metadata,
          { deadline: deadline },
          (psErr: Error | null, resp: ReplaceResponse) => {
            const err = errorFromProtostellar(psErr)
            if (err) {
              return wrapCallback(err, null)
            }
            return wrapCallback(
              null,
              new MutationResult({
                cas: resp.getCas(),
                token: MutationToken.fromResponse(resp.getMutationToken()),
              })
            )
          }
        )
      })
    }, callback)
  }

  /**
   * Remove an existing document from the collection.
   *
   * @param key The document key to remove.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  remove(
    key: string,
    options?: RemoveOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const cas = options.cas as number
    const durabilityLevel = toProtostellarDurabilityLevel(options.durabilityLevel)
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const deadline =
      Date.now() + (options.timeout || this._mutationTimeout(durabilityLevel))
    const req = new RemoveRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    if (cas) {
      req.setCas(cas)
    }
    if(persistTo || replicateTo){
      throw new FeatureNotAvailableError()
    }
    if(durabilityLevel){
      req.setDurabilityLevel(durabilityLevel)
    }

    return PromiseHelper.wrap((wrapCallback) => {
      if (cas) {
        req.setCas(cas as number)
      }
      this._kvService.remove(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: RemoveResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(
            null,
            new MutationResult({
              cas: resp.getCas(),
              token: MutationToken.fromResponse(resp.getMutationToken()),
            })
          )
        }
      )
    }, callback)
  }

  /**
   * Retrieves the value of the document and simultanously updates the expiry time
   * for the same document.
   *
   * @param key The document to fetch and touch.
   * @param expiry The new expiry to apply to the document, specified in seconds.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  getAndTouch(
    key: string,
    expiry: number,
    options?: GetAndTouchOptions,
    callback?: NodeCallback<GetResult>
  ): Promise<GetResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const transcoder = options.transcoder || this.transcoder
    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)

    const req = new GetAndTouchRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    req.setExpiryTime(expiryToTimestamp(expiry))

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.getAndTouch(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: GetResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }

          this._decodeDoc(
            transcoder,
            resp.getContent(),
            resp.getContentFlags(),
            (err, content) => {
              if (err) {
                return wrapCallback(err, null)
              }

              wrapCallback(
                null,
                new GetResult({
                  content: content,
                  cas: resp.getCas(),
                  expiryTime: resp.getExpiry()?.getSeconds(),
                })
              )
            }
          )
        }
      )
    }, callback)
  }

  /**
   * Updates the expiry on an existing document.
   *
   * @param key The document key to touch.
   * @param expiry The new expiry to set for the document, specified in seconds.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  touch(
    key: string,
    expiry: number,
    options?: TouchOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)
    const req = new TouchRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    req.setExpiryTime(expiryToTimestamp(expiry))

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.touch(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: TouchResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(
            null,
            new MutationResult({
              cas: resp.getCas(),
              token: MutationToken.fromResponse(resp.getMutationToken()),
            })
          )
        }
      )
    }, callback)
  }

  /**
   * Locks a document and retrieves the value of that document at the time it is locked.
   *
   * @param key The document key to retrieve and lock.
   * @param lockTime The amount of time to lock the document for, specified in seconds.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  getAndLock(
    key: string,
    lockTime: number,
    options?: GetAndLockOptions,
    callback?: NodeCallback<GetResult>
  ): Promise<GetResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const transcoder = options.transcoder || this.transcoder
    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)

    const req = new GetAndLockRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    req.setLockTime(lockTime)

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.getAndLock(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: GetResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }

          this._decodeDoc(
            transcoder,
            resp.getContent(),
            resp.getContentFlags(),
            (err, content) => {
              if (err) {
                return wrapCallback(err, null)
              }

              wrapCallback(
                null,
                new GetResult({
                  content: content,
                  cas: resp.getCas(),
                  expiryTime: resp.getExpiry()?.getSeconds(),
                })
              )
            }
          )
        }
      )
    }, callback)
  }

  /**
   * Unlocks a previously locked document.
   *
   * @param key The document key to unlock.
   * @param cas The CAS of the document, used to validate lock ownership.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  unlock(
    key: string,
    cas: any,
    options?: UnlockOptions,
    callback?: NodeCallback<void>
  ): Promise<void> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)

    const req = new UnlockRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    req.setCas(cas as number)

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.unlock(
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
   * Performs a lookup-in operation against a document, fetching individual fields or
   * information about specific fields inside the document value.
   *
   * @param key The document key to look in.
   * @param specs A list of specs describing the data to fetch from the document.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  lookupIn(
    key: string,
    specs: LookupInSpec[],
    options?: LookupInOptions,
    callback?: NodeCallback<LookupInResult>
  ): Promise<LookupInResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const specList = toProtostellarLookupInSpecs(specs)
    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)

    const req = new LookupInRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    req.setSpecsList(specList)

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.lookupIn(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: LookupInResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          const content: LookupInResultEntry[] = []
          resp.getSpecsList().forEach((spec) => {
            const value = this._subdocDecode(spec.getContent())
            content.push(
              new LookupInResultEntry({
                error: null,
                value: value,
              })
            )
          })

          wrapCallback(
            null,
            new LookupInResult({
              content: content,
              cas: resp.getCas(),
            })
          )
        }
      )
    }, callback)
  }

  /**
   * Performs a mutate-in operation against a document.  Allowing atomic modification of
   * specific fields within a document.  Also enables access to document extended-attributes.
   *
   * @param key The document key to mutate.
   * @param specs A list of specs describing the operations to perform on the document.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  mutateIn(
    key: string,
    specs: MutateInSpec[],
    options?: MutateInOptions,
    callback?: NodeCallback<MutateInResult>
  ): Promise<MutateInResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const specList = toProtostellarMutateInSpecs(specs)
    // const storeSemantics = options.upsertDocument
    //   ? StoreSemantics.Upsert
    //   : options.storeSemantics
    const expiry = options.expiry
    const preserveExpiry = options.preserveExpiry
    const cas = options.cas as number
    const durabilityLevel = toProtostellarDurabilityLevel(options.durabilityLevel)
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const deadline =
      Date.now() + (options.timeout || this._mutationTimeout(durabilityLevel))

    const req = new MutateInRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    req.setSpecsList(specList)
    if(cas){
      req.setCas(cas)
    }
    if(persistTo || replicateTo){
      throw new FeatureNotAvailableError()
    }
    if(durabilityLevel){
      req.setDurabilityLevel(durabilityLevel)
    }

    if(isMutateInOpInSpecList(MutateInRequest.Spec.Operation.OPERATION_INSERT, specList) && preserveExpiry){
      throw new InvalidArgumentError(
        new Error(
          'Cannot set expiry and preserveExpiry options for insert operation.'
        )
      )
    }

    if(isMutateInOpInSpecList(MutateInRequest.Spec.Operation.OPERATION_REPLACE, specList) && preserveExpiry){
      throw new InvalidArgumentError(
        new Error(
          'Cannot set expiry and preserveExpiry options for replace operation.'
        )
      )
    }

    if (expiry) {
      req.setExpiryTime(expiryToTimestamp(expiry))
    } else if (!(preserveExpiry || false)){
      // match classic API -- reset expiry
      req.setExpirySecs(0)
    }

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.mutateIn(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: MutateInResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          const content: MutateInResultEntry[] = []
          resp.getSpecsList().forEach((spec) => {
            const value = this._subdocDecode(spec.getContent())
            content.push(
              new MutateInResultEntry({
                value: value,
              })
            )
          })

          wrapCallback(
            null,
            new MutateInResult({
              content: content,
              cas: resp.getCas(),
              token: MutationToken.fromResponse(resp.getMutationToken()),
            })
          )
        }
      )
    }, callback)
  }

  /**
   * Returns a BinaryCollection object reference, allowing access to various
   * binary operations possible against a collection.
   */
  binary(): BinaryCollection {
    return new BinaryCollection(this)
  }

  /**
   * @internal
   */
  _binaryIncrement(
    key: string,
    delta: number,
    options?: IncrementOptions,
    callback?: NodeCallback<CounterResult>
  ): Promise<CounterResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const initialValue = options.initial
    const expiry = options.expiry
    const durabilityLevel = toProtostellarDurabilityLevel(options.durabilityLevel)
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const deadline = Date.now() + (options.timeout || this._mutationTimeout(durabilityLevel))

    const req = new IncrementRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    req.setDelta(delta)
    if (initialValue) {
      req.setInitial(initialValue)
    }
    if (expiry) {
      req.setExpiryTime(expiryToTimestamp(expiry))
    }
    if(persistTo || replicateTo){
      throw new FeatureNotAvailableError()
    }
    if(durabilityLevel){
      req.setDurabilityLevel(durabilityLevel)
    }

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.increment(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: IncrementResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(
            null,
            new CounterResult({
              value: resp.getContent(),
              cas: resp.getCas(),
              token: MutationToken.fromResponse(resp.getMutationToken()),
            })
          )
        }
      )
    }, callback)
  }

  /**
   * @internal
   */
  _binaryDecrement(
    key: string,
    delta: number,
    options?: DecrementOptions,
    callback?: NodeCallback<CounterResult>
  ): Promise<CounterResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const initialValue = options.initial
    const expiry = options.expiry
    const durabilityLevel = toProtostellarDurabilityLevel(options.durabilityLevel)
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const deadline = Date.now() + (options.timeout || this._mutationTimeout(durabilityLevel))

    const req = new DecrementRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    req.setDelta(delta)
    if (initialValue) {
      req.setInitial(initialValue)
    }
    if (expiry) {
      req.setExpiryTime(expiryToTimestamp(expiry))
    }
    if(persistTo || replicateTo){
      throw new FeatureNotAvailableError()
    }
    if(durabilityLevel){
      req.setDurabilityLevel(durabilityLevel)
    }

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.decrement(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: DecrementResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(
            null,
            new CounterResult({
              value: resp.getContent(),
              cas: resp.getCas(),
              token: MutationToken.fromResponse(resp.getMutationToken()),
            })
          )
        }
      )
    }, callback)
  }

  /**
   * @internal
   */
  _binaryAppend(
    key: string,
    value: string | Buffer,
    options?: AppendOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const durabilityLevel = toProtostellarDurabilityLevel(options.durabilityLevel)
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const deadline = Date.now() + (options.timeout || this._mutationTimeout(durabilityLevel))

    const req = new AppendRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    if (!Buffer.isBuffer(value)) {
      value = Buffer.from(value)
    }
    req.setContent(value)
    if(persistTo || replicateTo){
      throw new FeatureNotAvailableError()
    }
    if(durabilityLevel){
      req.setDurabilityLevel(durabilityLevel)
    }

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.append(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: AppendResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(
            null,
            new MutationResult({
              cas: resp.getCas(),
              token: MutationToken.fromResponse(resp.getMutationToken()),
            })
          )
        }
      )
    }, callback)
  }

  /**
   * @internal
   */
  _binaryPrepend(
    key: string,
    value: string | Buffer,
    options?: PrependOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    if (options instanceof Function) {
      callback = arguments[2]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const durabilityLevel = toProtostellarDurabilityLevel(options.durabilityLevel)
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const deadline = Date.now() + (options.timeout || this._mutationTimeout(durabilityLevel))

    const req = new PrependRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    if (!Buffer.isBuffer(value)) {
      value = Buffer.from(value)
    }
    req.setContent(value)

    if(persistTo || replicateTo){
      throw new FeatureNotAvailableError()
    }
    if(durabilityLevel){
      req.setDurabilityLevel(durabilityLevel)
    }

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.prepend(
        req,
        this.metadata,
        { deadline: deadline },
        (psErr: Error | null, resp: PrependResponse) => {
          const err = errorFromProtostellar(psErr)
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(
            null,
            new MutationResult({
              cas: resp.getCas(),
              token: MutationToken.fromResponse(resp.getMutationToken()),
            })
          )
        }
      )
    }, callback)
  }
}
