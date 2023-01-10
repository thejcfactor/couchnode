import { DocumentContentType, DocumentContentTypeMap} from "./generated/couchbase/kv.v1_pb"

/**
 * Transcoders provide functionality for converting values passed to and from
 * the SDK to byte arrays and flags data that can be stored to the server.
 *
 * @category Key-Value
 */
export interface Transcoder {
  /**
   * Encodes the specified value, returning a buffer and flags that are
   * stored to the server and later used for decoding.
   *
   * @param value The value to encode.
   */
  encode(value: any): [Buffer, DocumentContentTypeMap[keyof DocumentContentTypeMap]]

  /**
   * Decodes a buffer and flags tuple back to the original type of the
   * document.
   *
   * @param bytes The bytes that were previously encoded.
   * @param flags The flags associated with the data.
   */
  decode(bytes: string | Uint8Array, contentType: number): any
}

export class DefaultTranscoder implements Transcoder {
    /**
     * Encodes the specified value, returning a buffer and flags that are
     * stored to the server and later used for decoding.
     *
     * @param value The value to encode.
     */
    encode(value: any): [Buffer, DocumentContentTypeMap[keyof DocumentContentTypeMap]] {
      // If its a buffer, write that directly as raw.
      if (Buffer.isBuffer(value)) {
        return [value, DocumentContentType.BINARY]
      }
  
      // TODO:  handle string?
      // If its a string, encode it as a UTF8 string.
      // if (typeof value === 'string') {
      //   return [Buffer.from(value), CF_UTF8 | NF_UTF8]
      // }
  
      // Encode it to JSON and save that otherwise.
      return [Buffer.from(JSON.stringify(value)), DocumentContentType.JSON]
    }
  
    /**
     * Decodes a buffer and flags tuple back to the original type of the
     * document.
     *
     * @param bytes The bytes that were previously encoded.
     * @param flags The flags associated with the data.
     */
    decode(bytes: string | Uint8Array, contentType: number): any {
      if(contentType == DocumentContentType.JSON){
        try {
          return JSON.parse(Buffer.from(bytes).toString('utf8'))
        } catch (e) {
          // If we encounter a parse error, assume that we need
          // to return bytes instead of an object.
          return Buffer.from(bytes)
        }
      }
  
      // Default to returning a Buffer if all else fails.
      return Buffer.from(bytes)
    }
  }