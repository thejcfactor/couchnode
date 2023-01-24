import binding, {
  CppDocumentId,
  CppConnection,
  CppError,
  zeroCas,
  CppImplSubdocCommand,
  CppInsertResponse,
  CppUpsertResponse,
  CppRemoveResponse,
  CppReplaceResponse,
  CppMutateInResponse,
  CppAppendResponse,
  CppPrependResponse,
  CppIncrementResponse,
  CppDecrementResponse,
} from './binding'
import { ApiImplementation, DurabilityLevel } from '../generaltypes'
import { Bucket } from './bucket'
import { Cluster } from './cluster'
import { Scope } from './scope'

import { Transcoder } from '../transcoders'
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
import {
  durabilityToCpp,
  errorFromCpp,
  persistToToCpp,
  replicateToToCpp,
  storeSemanticToCpp,
} from './bindingutilities'
import { GetOptions, InsertOptions, RemoveOptions, ReplaceOptions, UpsertOptions } from '../collection'
import { NodeCallback, PromiseHelper, Cas } from '../utilities'

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
  private _conn: CppConnection

  get apiImplementation(): ApiImplementation {
    return this._scope.apiImplementation
  }

  /**
  @internal
  */
  constructor(scope: Scope, collectionName: string) {
    this._scope = scope
    this._name = collectionName
    this._conn = scope.conn
  }

  /**
  @internal
  */
  get conn(): CppConnection {
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
  _cppDocId(key: string): CppDocumentId {
    return {
      bucket: this.scope.bucket.name,
      scope: this.scope.name || '_default',
      collection: this.name || '_default',
      key: key,
    }
  }

  /**
   * @internal
   */
  _encodeDoc(
    transcoder: Transcoder,
    value: any,
    callback: (err: Error | null, bytes: Buffer, flags: number) => void
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
    bytes: Buffer,
    flags: number,
    callback: (err: Error | null, content: any) => void
  ): void {
    try {
      const content = transcoder.decode(bytes, flags)
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

    // if (options.project || options.withExpiry) {
    //   return this._projectedGet(key, options, callback)
    // }

    const transcoder = options.transcoder || this.transcoder
    const timeout = options.timeout || this.cluster.kvTimeout

    return PromiseHelper.wrap((wrapCallback) => {
      this._conn.get(
        {
          id: this._cppDocId(key),
          timeout,
          partition: 0,
          opaque: 0,
        },
        (cppErr, resp) => {
          const err = errorFromCpp(cppErr)
          if (err) {
            return wrapCallback(err, null)
          }

          this._decodeDoc(
            transcoder,
            resp.value,
            resp.flags,
            (err, content) => {
              if (err) {
                return wrapCallback(err, null)
              }

              wrapCallback(
                null,
                new GetResult({
                  content: content,
                  cas: resp.cas,
                })
              )
            }
          )
        }
      )
    }, callback)
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
      callback = arguments[3]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const expiry = options.expiry
    const transcoder = options.transcoder || this.transcoder
    const durabilityLevel = options.durabilityLevel
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const timeout = options.timeout || this._mutationTimeout(durabilityLevel)

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, flags) => {
        if (err) {
          return wrapCallback(err, null)
        }

        const insertReq = {
          id: this._cppDocId(key),
          value: bytes,
          flags,
          expiry: expiry || 0,
          timeout,
          partition: 0,
          opaque: 0,
        }

        const insertCallback = (
          cppErr: CppError | null,
          resp: CppInsertResponse
        ) => {
          const err = errorFromCpp(cppErr)
          if (err) {
            return wrapCallback(err, null)
          }

          wrapCallback(
            err,
            new MutationResult({
              cas: resp.cas,
              token: resp.token,
            })
          )
        }

        if (persistTo || replicateTo) {
          this._conn.insertWithLegacyDurability(
            {
              ...insertReq,
              persist_to: persistToToCpp(persistTo),
              replicate_to: replicateToToCpp(replicateTo),
            },
            insertCallback
          )
        } else {
          this._conn.insert(
            {
              ...insertReq,
              durability_level: durabilityToCpp(durabilityLevel),
            },
            insertCallback
          )
        }
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
      callback = arguments[3]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const expiry = options.expiry
    const preserve_expiry = options.preserveExpiry
    const transcoder = options.transcoder || this.transcoder
    const durabilityLevel = options.durabilityLevel
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const timeout = options.timeout || this._mutationTimeout(durabilityLevel)

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, flags) => {
        if (err) {
          return wrapCallback(err, null)
        }

        const upsertReq = {
          id: this._cppDocId(key),
          value: bytes,
          flags,
          expiry: expiry || 0,
          preserve_expiry: preserve_expiry || false,
          timeout,
          partition: 0,
          opaque: 0,
        }

        const upsertCallback = (
          cppErr: CppError | null,
          resp: CppUpsertResponse
        ) => {
          const err = errorFromCpp(cppErr)
          if (err) {
            return wrapCallback(err, null)
          }

          wrapCallback(
            err,
            new MutationResult({
              cas: resp.cas,
              token: resp.token,
            })
          )
        }

        if (persistTo || replicateTo) {
          this._conn.upsertWithLegacyDurability(
            {
              ...upsertReq,
              persist_to: persistToToCpp(persistTo),
              replicate_to: replicateToToCpp(replicateTo),
            },
            upsertCallback
          )
        } else {
          this._conn.upsert(
            {
              ...upsertReq,
              durability_level: durabilityToCpp(durabilityLevel),
            },
            upsertCallback
          )
        }
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
      callback = arguments[3]
      options = undefined
    }
    if (!options) {
      options = {}
    }

    const expiry = options.expiry || 0
    const cas = ((options.cas ?? zeroCas) as Cas)
    const preserve_expiry = options.preserveExpiry
    const transcoder = options.transcoder || this.transcoder
    const durabilityLevel = options.durabilityLevel
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const timeout = options.timeout || this._mutationTimeout(durabilityLevel)

    return PromiseHelper.wrap((wrapCallback) => {
      this._encodeDoc(transcoder, value, (err, bytes, flags) => {
        if (err) {
          return wrapCallback(err, null)
        }

        const replaceReq = {
          id: this._cppDocId(key),
          value: bytes,
          flags,
          expiry,
          cas: cas,
          preserve_expiry: preserve_expiry || false,
          timeout,
          partition: 0,
          opaque: 0,
        }

        const replaceCallback = (
          cppErr: CppError | null,
          resp: CppReplaceResponse
        ) => {
          const err = errorFromCpp(cppErr)
          if (err) {
            return wrapCallback(err, null)
          }

          wrapCallback(
            err,
            new MutationResult({
              cas: resp.cas,
              token: resp.token,
            })
          )
        }

        if (persistTo || replicateTo) {
          this._conn.replaceWithLegacyDurability(
            {
              ...replaceReq,
              persist_to: persistToToCpp(persistTo),
              replicate_to: replicateToToCpp(replicateTo),
            },
            replaceCallback
          )
        } else {
          this._conn.replace(
            {
              ...replaceReq,
              durability_level: durabilityToCpp(durabilityLevel),
            },
            replaceCallback
          )
        }
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

    const cas = ((options.cas ?? zeroCas) as Cas)
    const durabilityLevel = options.durabilityLevel
    const persistTo = options.durabilityPersistTo
    const replicateTo = options.durabilityReplicateTo
    const timeout = options.timeout || this._mutationTimeout(durabilityLevel)

    return PromiseHelper.wrap((wrapCallback) => {
      const removeReq = {
        id: this._cppDocId(key),
        cas: cas,
        timeout,
        partition: 0,
        opaque: 0,
      }

      const removeCallback = (
        cppErr: CppError | null,
        resp: CppRemoveResponse
      ) => {
        const err = errorFromCpp(cppErr)
        if (err) {
          return wrapCallback(err, null)
        }

        wrapCallback(
          err,
          new MutationResult({
            cas: resp.cas,
            token: resp.token,
          })
        )
      }

      if (persistTo || replicateTo) {
        this._conn.removeWithLegacyDurability(
          {
            ...removeReq,
            persist_to: persistToToCpp(persistTo),
            replicate_to: replicateToToCpp(replicateTo),
          },
          removeCallback
        )
      } else {
        this._conn.remove(
          {
            ...removeReq,
            durability_level: durabilityToCpp(durabilityLevel),
          },
          removeCallback
        )
      }
    }, callback)
  }
}