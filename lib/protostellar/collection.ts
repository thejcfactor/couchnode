import * as grpc from '@grpc/grpc-js';
import { ChannelCredentials } from '@grpc/grpc-js';
import { DocumentContentTypeMap, GetRequest, GetResponse, InsertRequest, InsertResponse, UpsertRequest, UpsertResponse, RemoveRequest, RemoveResponse, ReplaceRequest, ReplaceResponse} from "./generated/couchbase/kv.v1_pb"
import { KvClient } from './generated/couchbase/kv.v1_grpc_pb'

import { Cluster } from './cluster'
import { Scope } from './scope'
import { GetResult, MutationResult } from './crudoptypes'
import { MutationToken } from './mutationstate'

import { NodeCallback, PromiseHelper } from '../utilities'
import { Transcoder } from './transcoders'

export interface GetOptions {
  /**
   * Specifies a list of fields within the document which should be fetched.
   * This allows for easy retrieval of select fields without incurring the
   * overhead of fetching the whole document.
   */
  project?: string[]

  /**
   * Indicates that the expiry of the document should be fetched alongside
   * the data itself.
   */
  withExpiry?: boolean

  /**
   * Specifies an explicit transcoder to use for this specific operation.
   */
  transcoder?: Transcoder

  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

export interface ExistsOptions {
  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

export interface InsertOptions {
  /**
   * Specifies the expiry time for this document, specified in seconds.
   */
  expiry?: number

  /**
   * Specifies the level of synchronous durability for this operation.
   */
  // durabilityLevel?: DurabilityLevel

  /**
   * Specifies the number of nodes this operation should be persisted to
   * before it is considered successful.  Note that this option is mutually
   * exclusive of {@link durabilityLevel}.
   */
  // durabilityPersistTo?: number

  /**
   * Specifies the number of nodes this operation should be replicated to
   * before it is considered successful.  Note that this option is mutually
   * exclusive of {@link durabilityLevel}.
   */
  // durabilityReplicateTo?: number

  /**
   * Specifies an explicit transcoder to use for this specific operation.
   */
  transcoder?: Transcoder

  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

export interface UpsertOptions {
  /**
   * Specifies the expiry time for this document, specified in seconds.
   */
  expiry?: number

  /**
   * Specifies that any existing expiry on the document should be preserved.
   */
  preserveExpiry?: boolean

  /**
   * Specifies the level of synchronous durability for this operation.
   */
  // durabilityLevel?: DurabilityLevel

  /**
   * Specifies the number of nodes this operation should be persisted to
   * before it is considered successful.  Note that this option is mutually
   * exclusive of {@link durabilityLevel}.
   */
  durabilityPersistTo?: number

  /**
   * Specifies the number of nodes this operation should be replicated to
   * before it is considered successful.  Note that this option is mutually
   * exclusive of {@link durabilityLevel}.
   */
  durabilityReplicateTo?: number

  /**
   * Specifies an explicit transcoder to use for this specific operation.
   */
  transcoder?: Transcoder

  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

export interface ReplaceOptions {
  /**
   * Specifies the expiry time for this document, specified in seconds.
   */
  expiry?: number

  /**
   * Specifies that any existing expiry on the document should be preserved.
   */
  preserveExpiry?: boolean

  /**
   * If specified, indicates that operation should be failed if the CAS
   * has changed from this value, indicating that the document has changed.
   */
  cas?: number

  /**
   * Specifies the level of synchronous durability for this operation.
   */
  // durabilityLevel?: DurabilityLevel

  /**
   * Specifies the number of nodes this operation should be persisted to
   * before it is considered successful.  Note that this option is mutually
   * exclusive of {@link durabilityLevel}.
   */
  durabilityPersistTo?: number

  /**
   * Specifies the number of nodes this operation should be replicated to
   * before it is considered successful.  Note that this option is mutually
   * exclusive of {@link durabilityLevel}.
   */
  durabilityReplicateTo?: number

  /**
   * Specifies an explicit transcoder to use for this specific operation.
   */
  transcoder?: Transcoder

  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

/**
 * @category Key-Value
 */
export interface RemoveOptions {
  /**
   * If specified, indicates that operation should be failed if the CAS
   * has changed from this value, indicating that the document has changed.
   */
  cas?: number

  /**
   * Specifies the level of synchronous durability for this operation.
   */
  // durabilityLevel?: DurabilityLevel

  /**
   * Specifies the number of nodes this operation should be persisted to
   * before it is considered successful.  Note that this option is mutually
   * exclusive of {@link durabilityLevel}.
   */
  durabilityPersistTo?: number

  /**
   * Specifies the number of nodes this operation should be replicated to
   * before it is considered successful.  Note that this option is mutually
   * exclusive of {@link durabilityLevel}.
   */
  durabilityReplicateTo?: number

  /**
   * The timeout for this operation, represented in milliseconds.
   */
  timeout?: number
}

/**
 * @internal
 */
type RequestType = GetRequest | InsertRequest | RemoveRequest | ReplaceRequest | UpsertRequest

export class Collection {
  private _scope: Scope
  private _name: string
  private _channel: ChannelCredentials
  private _kvService: KvClient

  /**
   * @internal
   */
  static get DEFAULT_NAME(): string {
    return '_default'
  }

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
  @internal
  */
  populateNamespaceArgs<T extends RequestType>(TReq: new() => T, key: string): T {
    const req = new TReq()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)
    return req
  }

  /**
  @internal
  */
  constructor(scope: Scope, collectionName: string) {
    this._scope = scope
    this._name = collectionName
    this._channel = scope.channel
    this._kvService = new KvClient(this.cluster.connStr, this._channel)
  }

  /**
   * The name of the collection this Collection object references.
   */
  get name(): string {
    return this._name
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
      const [bytesBuf, flagsOut] = transcoder.encode(value)
      callback(null, bytesBuf, flagsOut)
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
      const content = transcoder.decode(bytes, contentType)
      callback(null, content)
    } catch (e) {
      return callback(e as Error, null)
    }
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
    const req = this.populateNamespaceArgs(GetRequest, key)

    return PromiseHelper.wrap((wrapCallback) => {
      this._kvService.get(
        req,
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
    const req = this.populateNamespaceArgs(InsertRequest, key)

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, contentType) => {
        if (err) {
          return wrapCallback(err, null)
        }
        req.setContent(bytes)
        req.setContentType(contentType)
        this._kvService.insert(
          req,
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
    const req = this.populateNamespaceArgs(UpsertRequest, key)

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, contentType) => {
        if (err) {
          return wrapCallback(err, null)
        }
        req.setContent(bytes)
        req.setContentType(contentType)
        this._kvService.upsert(
          req,
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
    const req = this.populateNamespaceArgs(ReplaceRequest, key)

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, contentType) => {
        if (err) {
          return wrapCallback(err, null)
        }

        if(cas){
          req.setCas(cas)
        }
        req.setContent(bytes)
        req.setContentType(contentType)
        this._kvService.replace(
          req,
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
    const req = this.populateNamespaceArgs(RemoveRequest, key)

    return PromiseHelper.wrap((wrapCallback) => {
      if(cas){
        req.setCas(cas)
      }
      this._kvService.remove(
        req,
        (err: Error | null, resp: RemoveResponse) => {
          if (err) {
            return wrapCallback(err, null)
          }
          return wrapCallback(null, new MutationResult({cas:resp.getCas(), token:MutationToken.fromResponse(resp.getMutationToken())}))
        }
      )
    }, callback)
  }
}