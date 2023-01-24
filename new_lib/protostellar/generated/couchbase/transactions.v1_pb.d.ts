// package: couchbase.transactions.v1
// file: couchbase/transactions.v1.proto

import * as jspb from "google-protobuf";

export class TransactionBeginAttemptRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  hasTransactionId(): boolean;
  clearTransactionId(): void;
  getTransactionId(): string;
  setTransactionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionBeginAttemptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionBeginAttemptRequest): TransactionBeginAttemptRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionBeginAttemptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionBeginAttemptRequest;
  static deserializeBinaryFromReader(message: TransactionBeginAttemptRequest, reader: jspb.BinaryReader): TransactionBeginAttemptRequest;
}

export namespace TransactionBeginAttemptRequest {
  export type AsObject = {
    bucketName: string,
    transactionId: string,
  }
}

export class TransactionBeginAttemptResponse extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): void;

  getAttemptId(): string;
  setAttemptId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionBeginAttemptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionBeginAttemptResponse): TransactionBeginAttemptResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionBeginAttemptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionBeginAttemptResponse;
  static deserializeBinaryFromReader(message: TransactionBeginAttemptResponse, reader: jspb.BinaryReader): TransactionBeginAttemptResponse;
}

export namespace TransactionBeginAttemptResponse {
  export type AsObject = {
    transactionId: string,
    attemptId: string,
  }
}

export class TransactionCommitRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getTransactionId(): string;
  setTransactionId(value: string): void;

  getAttemptId(): string;
  setAttemptId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionCommitRequest): TransactionCommitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionCommitRequest;
  static deserializeBinaryFromReader(message: TransactionCommitRequest, reader: jspb.BinaryReader): TransactionCommitRequest;
}

export namespace TransactionCommitRequest {
  export type AsObject = {
    bucketName: string,
    transactionId: string,
    attemptId: string,
  }
}

export class TransactionCommitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionCommitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionCommitResponse): TransactionCommitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionCommitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionCommitResponse;
  static deserializeBinaryFromReader(message: TransactionCommitResponse, reader: jspb.BinaryReader): TransactionCommitResponse;
}

export namespace TransactionCommitResponse {
  export type AsObject = {
  }
}

export class TransactionRollbackRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getTransactionId(): string;
  setTransactionId(value: string): void;

  getAttemptId(): string;
  setAttemptId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionRollbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionRollbackRequest): TransactionRollbackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionRollbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionRollbackRequest;
  static deserializeBinaryFromReader(message: TransactionRollbackRequest, reader: jspb.BinaryReader): TransactionRollbackRequest;
}

export namespace TransactionRollbackRequest {
  export type AsObject = {
    bucketName: string,
    transactionId: string,
    attemptId: string,
  }
}

export class TransactionRollbackResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionRollbackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionRollbackResponse): TransactionRollbackResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionRollbackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionRollbackResponse;
  static deserializeBinaryFromReader(message: TransactionRollbackResponse, reader: jspb.BinaryReader): TransactionRollbackResponse;
}

export namespace TransactionRollbackResponse {
  export type AsObject = {
  }
}

export class TransactionGetRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getTransactionId(): string;
  setTransactionId(value: string): void;

  getAttemptId(): string;
  setAttemptId(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionGetRequest): TransactionGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionGetRequest;
  static deserializeBinaryFromReader(message: TransactionGetRequest, reader: jspb.BinaryReader): TransactionGetRequest;
}

export namespace TransactionGetRequest {
  export type AsObject = {
    bucketName: string,
    transactionId: string,
    attemptId: string,
    scopeName: string,
    collectionName: string,
    key: string,
  }
}

export class TransactionGetResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionGetResponse): TransactionGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionGetResponse;
  static deserializeBinaryFromReader(message: TransactionGetResponse, reader: jspb.BinaryReader): TransactionGetResponse;
}

export namespace TransactionGetResponse {
  export type AsObject = {
    cas: number,
    value: Uint8Array | string,
  }
}

export class TransactionInsertRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getTransactionId(): string;
  setTransactionId(value: string): void;

  getAttemptId(): string;
  setAttemptId(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionInsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionInsertRequest): TransactionInsertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionInsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionInsertRequest;
  static deserializeBinaryFromReader(message: TransactionInsertRequest, reader: jspb.BinaryReader): TransactionInsertRequest;
}

export namespace TransactionInsertRequest {
  export type AsObject = {
    bucketName: string,
    transactionId: string,
    attemptId: string,
    scopeName: string,
    collectionName: string,
    key: string,
    value: Uint8Array | string,
  }
}

export class TransactionInsertResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionInsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionInsertResponse): TransactionInsertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionInsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionInsertResponse;
  static deserializeBinaryFromReader(message: TransactionInsertResponse, reader: jspb.BinaryReader): TransactionInsertResponse;
}

export namespace TransactionInsertResponse {
  export type AsObject = {
    cas: number,
  }
}

export class TransactionReplaceRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getTransactionId(): string;
  setTransactionId(value: string): void;

  getAttemptId(): string;
  setAttemptId(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getCas(): number;
  setCas(value: number): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionReplaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionReplaceRequest): TransactionReplaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionReplaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionReplaceRequest;
  static deserializeBinaryFromReader(message: TransactionReplaceRequest, reader: jspb.BinaryReader): TransactionReplaceRequest;
}

export namespace TransactionReplaceRequest {
  export type AsObject = {
    bucketName: string,
    transactionId: string,
    attemptId: string,
    scopeName: string,
    collectionName: string,
    key: string,
    cas: number,
    value: Uint8Array | string,
  }
}

export class TransactionReplaceResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionReplaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionReplaceResponse): TransactionReplaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionReplaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionReplaceResponse;
  static deserializeBinaryFromReader(message: TransactionReplaceResponse, reader: jspb.BinaryReader): TransactionReplaceResponse;
}

export namespace TransactionReplaceResponse {
  export type AsObject = {
    cas: number,
  }
}

export class TransactionRemoveRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getTransactionId(): string;
  setTransactionId(value: string): void;

  getAttemptId(): string;
  setAttemptId(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getCas(): number;
  setCas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionRemoveRequest): TransactionRemoveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionRemoveRequest;
  static deserializeBinaryFromReader(message: TransactionRemoveRequest, reader: jspb.BinaryReader): TransactionRemoveRequest;
}

export namespace TransactionRemoveRequest {
  export type AsObject = {
    bucketName: string,
    transactionId: string,
    attemptId: string,
    scopeName: string,
    collectionName: string,
    key: string,
    cas: number,
  }
}

export class TransactionRemoveResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionRemoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionRemoveResponse): TransactionRemoveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionRemoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionRemoveResponse;
  static deserializeBinaryFromReader(message: TransactionRemoveResponse, reader: jspb.BinaryReader): TransactionRemoveResponse;
}

export namespace TransactionRemoveResponse {
  export type AsObject = {
    cas: number,
  }
}

