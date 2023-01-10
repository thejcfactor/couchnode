import { MutationToken as GrpcMutationToken }  from "./generated/couchbase/kv.v1_pb"

export class MutationToken {
  private _bucketName: string
  private _vbucketId: number
  private _vbucketUuid: number
  private _seqNo: number

  constructor(bucketName: string, vbucketId: number, vbucketUuid: number, seqNo: number) {
    this._bucketName = bucketName
    this._vbucketId = vbucketId
    this._vbucketUuid = vbucketUuid
    this._seqNo = seqNo
  }

  /**
   * The bucket name the MutationToken references.
   */
  get bucketName(): string {
    return this._bucketName
  }

  /**
   * The vbucket ID the MutationToken references.
   */
  get vbucketId(): number {
    return this._vbucketId
  }

  /**
   * The vbucket UUID the MutationToken references.
   */
  get vbucketUuid(): number {
    return this._vbucketUuid
  }

  /**
   * The sequence number the MutationToken references.
   */
  get seqNo(): number {
    return this._seqNo
  }

  toJSON(): {[key: string]: string | number} {
    return {
      bucket_name: this.bucketName,
      partition_id: this.vbucketId,
      partition_uuid: this.vbucketUuid,
      sequence_number: this.seqNo
    }
  }

  static fromResponse(token: GrpcMutationToken | undefined): MutationToken | undefined {
    if(!token){
      return token
    }

    return new MutationToken(token?.getBucketName(), token?.getVbucketId(), token?.getVbucketUuid(), token?.getSeqNo())
  }

}

/**
 * Aggregates a number of {@link MutationToken}'s which have been returned by mutation
 * operations, which can then be used when performing queries.  This will guarenteed
 * that the query includes the specified set of mutations without incurring the wait
 * associated with request_plus level consistency.
 */
export class MutationState {
  /**
   * @internal
   */
  public _data: {
    [bucketName: string]: { [vbId: number]: MutationToken }
  }

  constructor(...tokens: MutationToken[]) {
    this._data = {}

    tokens.forEach((token) => this._addOne(token))
  }

  /**
   * Adds a set of tokens to this state.
   *
   * @param tokens The tokens to add.
   */
  add(...tokens: MutationToken[]): void {
    tokens.forEach((token) => this._addOne(token))
  }

  private _addOne(token: MutationToken) {
    if (!token) {
      return
    }

    // const cppToken = token as CppMutationToken
    // const tokenData = cppToken.toJSON()
    const vbId = token.vbucketId
    const vbSeqNo = token.seqNo
    const bucketName = token.bucketName

    if (!this._data[bucketName]) {
      this._data[bucketName] = {}
    }
    if (!this._data[bucketName][vbId]) {
      this._data[bucketName][vbId] = token
    } else {
      const otherToken = this._data[bucketName][vbId]
      const otherTokenSeqNo = otherToken.seqNo
      if (otherTokenSeqNo < vbSeqNo) {
        this._data[bucketName][vbId] = token
      }
    }
  }

  /**
   * @internal
   */
  toJSON(): any {
    return this._data
  }

  /**
   * @internal
   */
  inspect(): string {
    const tokens: string[] = []

    for (const bucketName in this._data) {
      for (const vbId in this._data[bucketName]) {
        const info = this._data[bucketName][vbId]
        tokens.push(bucketName + ':' + vbId + ':' + info.toString())
      }
    }

    return 'MutationState<' + tokens.join('; ') + '>'
  }
}