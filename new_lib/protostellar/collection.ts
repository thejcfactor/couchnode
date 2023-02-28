import { ChannelCredentials } from '@grpc/grpc-js';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { DocumentContentTypeMap, ExistsRequest, ExistsResponse, GetAndLockRequest, GetAndTouchRequest, GetRequest, GetResponse, InsertRequest, InsertResponse, UpsertRequest, UpsertResponse, RemoveRequest, RemoveResponse, ReplaceRequest, ReplaceResponse, TouchRequest, TouchResponse, UnlockRequest, UnlockResponse} from "./generated/couchbase/kv.v1_pb"
import { KvClient } from './generated/couchbase/kv.v1_grpc_pb'

import { ApiImplementation } from '../generaltypes'
import { Bucket } from './bucket'
import { Cluster } from './cluster'
import { Scope } from './scope'
import {
  // CounterResult,
  ExistsResult,
  GetReplicaResult,
  GetResult,
  // LookupInResult,
  // LookupInResultEntry,
  // MutateInResult,
  // MutateInResultEntry,
  MutationResult,
} from '../crudoptypes'

import { Transcoder } from '../transcoders'
import { ExistsOptions, GetAllReplicasOptions, GetAndLockOptions, GetAndTouchOptions, GetAnyReplicaOptions, GetOptions, InsertOptions, RemoveOptions, ReplaceOptions, TouchOptions, UnlockOptions, UpsertOptions } from '../collection'
import { expiryToTimestamp, NodeCallback, PromiseHelper } from '../utilities'
import { StreamableReplicasPromise } from '../streamablepromises'
import { MutationToken } from './mutationstate'
import exp from 'constants';

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
  private _kvService: KvClient

  /**
  @internal
  */
  constructor(scope: Scope, collectionName: string) {
    this._scope = scope
    this._name = collectionName
    this._channel = scope.channel
    this._kvService = new KvClient(this.cluster.connStr, this.channel)
  }

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
    callback: (err: Error | null, bytes: Buffer, contentType: DocumentContentTypeMap[keyof DocumentContentTypeMap]) => void
  ): void {
    try {
      // BUG(JSCBC-1054): We should avoid doing buffer conversion.
      const [bytesBuf, flagsOut] = transcoder.encode(value, this.apiImplementation)
      callback(null, bytesBuf, (flagsOut as DocumentContentTypeMap[keyof DocumentContentTypeMap]))
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
    contentType: number,
    callback: (err: Error | null, content: any) => void
  ): void {
    try {
      const content = transcoder.decode(bytes, contentType, this.apiImplementation)
      callback(null, content)
    } catch (e) {
      return callback(e as Error, null)
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
        {deadline: deadline},
        (err: Error | null, resp: ExistsResponse) => {
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

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.get(
        req,
        {deadline: deadline},
        (err: Error | null, resp: GetResponse) => {
          if (err) {
            return wrapCallback(err, null)
          }

          this._decodeDoc(
            transcoder,
            resp.getContent(),
            resp.getContentType(),
            (err, content) => {
              if (err) {
                return wrapCallback(err, null)
              }

              wrapCallback(
                null,
                new GetResult({
                  content: content,
                  cas: resp.getCas(),
                  expiryTime:resp.getExpiry()?.getSeconds()
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

    const transcoder = options.transcoder || this.transcoder
    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)

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

  insert(
    key: string,
    value: any,
    options?: InsertOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const transcoder = options.transcoder || this.transcoder
    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)
    const req = new InsertRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, contentType) => {
        if (err) {
          return wrapCallback(err, null)
        }
        req.setContent(bytes)
        req.setContentType(contentType)
        this._kvService.insert(
          req,
          {deadline: deadline},
          (err: Error | null, resp: InsertResponse) => {
            if (err) {
              return wrapCallback(err, null)
            }
            return wrapCallback(null, new MutationResult({cas:resp.getCas(), token:MutationToken.fromResponse(resp.getMutationToken())}))
          }
        )
      })
    }, callback)
  }

  upsert(
    key: string,
    value: any,
    options?: UpsertOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const transcoder = options.transcoder || this.transcoder
    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)
    const req = new UpsertRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, contentType) => {
        if (err) {
          return wrapCallback(err, null)
        }
        req.setContent(bytes)
        req.setContentType(contentType)
        this._kvService.upsert(
          req,
          {deadline: deadline},
          (err: Error | null, resp: UpsertResponse) => {
            if (err) {
              return wrapCallback(err, null)
            }
            return wrapCallback(null, new MutationResult({cas:resp.getCas(), token:MutationToken.fromResponse(resp.getMutationToken())}))
          }
        )
      })
    }, callback)
  }

  replace(
    key: string,
    value: any,
    options?: ReplaceOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    if (options instanceof Function) {
      callback = arguments[1]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const cas = options.cas
    const transcoder = options.transcoder || this.transcoder
    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)
    const req = new ReplaceRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, contentType) => {
        if (err) {
          return wrapCallback(err, null)
        }

        if(cas){
          req.setCas((cas as number))
        }
        req.setContent(bytes)
        req.setContentType(contentType)
        this._kvService.replace(
          req,
          {deadline: deadline},
          (err: Error | null, resp: ReplaceResponse) => {
            if (err) {
              return wrapCallback(err, null)
            }
            return wrapCallback(null, new MutationResult({cas:resp.getCas(), token:MutationToken.fromResponse(resp.getMutationToken())}))
          }
        )
      })
    }, callback)
  }

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

    const cas = options.cas
    const deadline = Date.now() + (options.timeout || this.cluster.kvTimeout)
    const req = new RemoveRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)

    return PromiseHelper.wrap((wrapCallback) => {
      if(cas){
        req.setCas((cas as number))
      }
      this._kvService.remove(
        req,
        {deadline: deadline},
        (err: Error | null, resp: RemoveResponse) => {
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(null, new MutationResult({cas:resp.getCas(), token:MutationToken.fromResponse(resp.getMutationToken())}))
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
    req.setExpiry(expiryToTimestamp(expiry))

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.getAndTouch(
        req,
        {deadline: deadline},
        (err: Error | null, resp: GetResponse) => {
          if (err) {
            return wrapCallback(err, null)
          }

          this._decodeDoc(
            transcoder,
            resp.getContent(),
            resp.getContentType(),
            (err, content) => {
              if (err) {
                return wrapCallback(err, null)
              }

              wrapCallback(
                null,
                new GetResult({
                  content: content,
                  cas: resp.getCas(),
                  expiryTime:resp.getExpiry()?.getSeconds()
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
    req.setExpiry(expiryToTimestamp(expiry))

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.touch(
        req,
        {deadline: deadline},
        (err: Error | null, resp: TouchResponse) => {
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(null, new MutationResult({cas:resp.getCas(), token:MutationToken.fromResponse(resp.getMutationToken())}))
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
        {deadline: deadline},
        (err: Error | null, resp: GetResponse) => {
          if (err) {
            return wrapCallback(err, null)
          }

          this._decodeDoc(
            transcoder,
            resp.getContent(),
            resp.getContentType(),
            (err, content) => {
              if (err) {
                return wrapCallback(err, null)
              }

              wrapCallback(
                null,
                new GetResult({
                  content: content,
                  cas: resp.getCas(),
                  expiryTime:resp.getExpiry()?.getSeconds()
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
        {deadline: deadline},
        (err: Error | null, resp: UnlockResponse) => {
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(null)
        }
      )
    }, callback)
  }

}