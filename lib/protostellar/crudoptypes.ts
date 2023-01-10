import { MutationToken } from './mutationstate'

export class GetResult {
  /**
   * The content of the document.
   */
  content: any

  /**
   * The CAS of the document.
   */
  cas: number

  /**
   * The expiry of the document, if it was requested.
   *
   * @see {@link GetOptions.withExpiry}
   */
  expiryTime?: number

  /**
   * @internal
   */
  constructor(data: GetResult) {
    this.content = data.content
    this.cas = data.cas
    this.expiryTime = data.expiryTime
  }
}

export class MutationResult {
  /**
   * The updated CAS for the document.
   */
  cas: number

  /**
   * The token representing the mutation performed.
   */
  token?: MutationToken

  /**
   * @internal
   */
  constructor(data: MutationResult) {
    this.cas = data.cas
    this.token = data.token
  }
}