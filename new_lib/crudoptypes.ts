import { MutationToken as ClassicMutationToken } from './classic/mutationstate'
import { MutationToken as ProtostellarMutationToken } from './protostellar/mutationstate'
import { Cas } from './utilities'

/**
 * Contains the results of a Get operation.
 *
 * @category Key-Value
 */
export class GetResult {
  /**
   * The content of the document.
   */
  content: any

  /**
   * The CAS of the document.
   */
  cas: Cas | number

  /**
   * The expiry of the document, if it was requested.
   *
   * @see {@link GetOptions.withExpiry}
   */
  expiryTime?: number

  /**
   * @internal
   */
  constructor(data: { content: any; cas: Cas | number; expiryTime?: number }) {
    this.content = data.content
    this.cas = data.cas
    this.expiryTime = data.expiryTime
  }

  /**
   * BUG(JSCBC-784): This previously held the content of the document.
   *
   * @deprecated Use {@link GetResult.content} instead.
   */
  get value(): any {
    return this.content
  }
  set value(v: any) {
    this.content = v
  }

  /**
   * BUG(JSCBC-873): This was incorrectly named at release.
   *
   * @deprecated Use {@link GetResult.expiryTime} instead.
   */
  get expiry(): number | undefined {
    return this.expiryTime
  }
}

/**
 * Contains the results of a mutate-in operation.
 *
 * @category Key-Value
 */
export class MutationResult {
  /**
   * The updated CAS for the document.
   */
  cas: Cas | number

  /**
   * The token representing the mutation performed.
   */
  token?: ClassicMutationToken | ProtostellarMutationToken

  /**
   * @internal
   */
  constructor(data: MutationResult) {
    this.cas = data.cas
    this.token = data.token
  }
}