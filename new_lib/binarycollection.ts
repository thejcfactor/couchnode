import { Collection } from './collection'
import { BinaryCollection as ClassicBinaryCollection } from './classic/binarycollection'
import { BinaryCollection as ProtostellarBinaryCollection } from './protostellar/binarycollection'
import { CounterResult, MutationResult } from './crudoptypes'
import { DurabilityLevel } from './generaltypes'
import { NodeCallback } from './utilities'

/**
 * @category Key-Value
 */
export interface IncrementOptions {
  /**
   * The initial value to use for the document if it does not already exist.
   * Not specifying this value indicates the operation should fail if the
   * document does not exist.
   */
  initial?: number

  /**
   * The expiry time that should be set for the document, expressed in seconds.
   */
  expiry?: number

  /**
   * Specifies the level of synchronous durability for this operation.
   */
  durabilityLevel?: DurabilityLevel

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
 * @category Key-Value
 */
export interface DecrementOptions {
  /**
   * The initial value to use for the document if it does not already exist.
   * Not specifying this value indicates the operation should fail if the
   * document does not exist.
   */
  initial?: number

  /**
   * The expiry time that should be set for the document, expressed in seconds.
   */
  expiry?: number

  /**
   * Specifies the level of synchronous durability for this operation.
   */
  durabilityLevel?: DurabilityLevel

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
 * @category Key-Value
 */
export interface AppendOptions {
  /**
   * Specifies the level of synchronous durability for this operation.
   */
  durabilityLevel?: DurabilityLevel

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
 * @category Key-Value
 */
export interface PrependOptions {
  /**
   * Specifies the level of synchronous durability for this operation.
   */
  durabilityLevel?: DurabilityLevel

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
 * Exposes a number of binary-level operations against a collection.
 * These operations do not adhere to the standard JSON-centric
 * behaviour of the SDK.
 *
 * @category Core
 */
export class BinaryCollection {
  private _binaryColl: ClassicBinaryCollection | ProtostellarBinaryCollection

  /**
   * @internal
   */
  constructor(parent: Collection) {
    this._binaryColl = parent.impl.binary()
  }

  /**
   * Increments the ASCII value of the specified key by the amount
   * indicated in the delta parameter.
   *
   * @param key The key to increment.
   * @param delta The amount to increment the key.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  increment(
    key: string,
    delta: number,
    options?: IncrementOptions,
    callback?: NodeCallback<CounterResult>
  ): Promise<CounterResult> {
    return this._binaryColl.increment(key, delta, options, callback)
  }

  /**
   * Decrements the ASCII value of the specified key by the amount
   * indicated in the delta parameter.
   *
   * @param key The key to increment.
   * @param delta The amount to increment the key.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  decrement(
    key: string,
    delta: number,
    options?: DecrementOptions,
    callback?: NodeCallback<CounterResult>
  ): Promise<CounterResult> {
    return this._binaryColl.decrement(key, delta, options, callback)
  }

  /**
   * Appends the specified value to the end of the specified key.
   *
   * @param key The key to append to.
   * @param value The value to adjoin to the end of the document.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  append(
    key: string,
    value: string | Buffer,
    options?: AppendOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    return this._binaryColl.append(key, value, options, callback)
  }

  /**
   * Prepends the specified value to the beginning of the specified key.
   *
   * @param key The key to prepend to.
   * @param value The value to adjoin to the beginning of the document.
   * @param options Optional parameters for this operation.
   * @param callback A node-style callback to be invoked after execution.
   */
  prepend(
    key: string,
    value: string | Buffer,
    options?: PrependOptions,
    callback?: NodeCallback<MutationResult>
  ): Promise<MutationResult> {
    return this._binaryColl.prepend(key, value, options, callback)
  }
}