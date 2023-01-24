import { ChannelCredentials } from '@grpc/grpc-js';
import { DocumentContentTypeMap, GetRequest, GetResponse, InsertRequest, InsertResponse, UpsertRequest, UpsertResponse, RemoveRequest, RemoveResponse, ReplaceRequest, ReplaceResponse} from "./generated/couchbase/kv.v1_pb"
import { KvClient } from './generated/couchbase/kv.v1_grpc_pb'

import { ApiImplementation } from '../generaltypes'
import { Bucket } from './bucket'
import { Cluster } from './cluster'
import { Scope } from './scope'
import {
  // CounterResult,
  // ExistsResult,
  // GetReplicaResult,
  GetResult,
  // LookupInResult,
  // LookupInResultEntry,
  // MutateInResult,
  // MutateInResultEntry,
  MutationResult,
} from '../crudoptypes'

import { Transcoder } from '../transcoders'
import { GetOptions, InsertOptions, RemoveOptions, ReplaceOptions, UpsertOptions } from '../collection'
import { NodeCallback, PromiseHelper } from '../utilities'
import { MutationToken } from './mutationstate'

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
  private _conn: ChannelCredentials
  private _kvService: KvClient

  /**
  @internal
  */
  constructor(scope: Scope, collectionName: string) {
    this._scope = scope
    this._name = collectionName
    this._conn = scope.conn
    this._kvService = new KvClient(this.cluster.connStr, this.conn)
  }

  get apiImplementation(): ApiImplementation {
    return this._scope.apiImplementation
  }

  /**
  @internal
  */
  get conn(): ChannelCredentials {
    return this._conn
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
    const req = new GetRequest()
    req.setKey(key)
    req.setBucketName(this._scope.bucket.name)
    req.setScopeName(this._scope.name)
    req.setCollectionName(this.name)

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