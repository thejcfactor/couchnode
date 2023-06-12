// package: couchbase.kv.v1
// file: couchbase/kv/v1/kv.proto

import * as jspb from "google-protobuf";
import * as google_rpc_status_pb from "../../../google/rpc/status_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class LegacyDurabilitySpec extends jspb.Message {
  getNumReplicated(): number;
  setNumReplicated(value: number): void;

  getNumPersisted(): number;
  setNumPersisted(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegacyDurabilitySpec.AsObject;
  static toObject(includeInstance: boolean, msg: LegacyDurabilitySpec): LegacyDurabilitySpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LegacyDurabilitySpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegacyDurabilitySpec;
  static deserializeBinaryFromReader(message: LegacyDurabilitySpec, reader: jspb.BinaryReader): LegacyDurabilitySpec;
}

export namespace LegacyDurabilitySpec {
  export type AsObject = {
    numReplicated: number,
    numPersisted: number,
  }
}

export class MutationToken extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getVbucketId(): number;
  setVbucketId(value: number): void;

  getVbucketUuid(): number;
  setVbucketUuid(value: number): void;

  getSeqNo(): number;
  setSeqNo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutationToken.AsObject;
  static toObject(includeInstance: boolean, msg: MutationToken): MutationToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutationToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutationToken;
  static deserializeBinaryFromReader(message: MutationToken, reader: jspb.BinaryReader): MutationToken;
}

export namespace MutationToken {
  export type AsObject = {
    bucketName: string,
    vbucketId: number,
    vbucketUuid: number,
    seqNo: number,
  }
}

export class GetRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  clearProjectList(): void;
  getProjectList(): Array<string>;
  setProjectList(value: Array<string>): void;
  addProject(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    projectList: Array<string>,
  }
}

export class GetResponse extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getContentFlags(): number;
  setContentFlags(value: number): void;

  getCas(): number;
  setCas(value: number): void;

  hasExpiry(): boolean;
  clearExpiry(): void;
  getExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiry(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    content: Uint8Array | string,
    contentFlags: number,
    cas: number,
    expiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetAndTouchRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  hasExpiryTime(): boolean;
  clearExpiryTime(): void;
  getExpiryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirySecs(): boolean;
  clearExpirySecs(): void;
  getExpirySecs(): number;
  setExpirySecs(value: number): void;

  getExpiryCase(): GetAndTouchRequest.ExpiryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndTouchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndTouchRequest): GetAndTouchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAndTouchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndTouchRequest;
  static deserializeBinaryFromReader(message: GetAndTouchRequest, reader: jspb.BinaryReader): GetAndTouchRequest;
}

export namespace GetAndTouchRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    expiryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirySecs: number,
  }

  export enum ExpiryCase {
    EXPIRY_NOT_SET = 0,
    EXPIRY_TIME = 5,
    EXPIRY_SECS = 6,
  }
}

export class GetAndTouchResponse extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getContentFlags(): number;
  setContentFlags(value: number): void;

  getCas(): number;
  setCas(value: number): void;

  hasExpiry(): boolean;
  clearExpiry(): void;
  getExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiry(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndTouchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndTouchResponse): GetAndTouchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAndTouchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndTouchResponse;
  static deserializeBinaryFromReader(message: GetAndTouchResponse, reader: jspb.BinaryReader): GetAndTouchResponse;
}

export namespace GetAndTouchResponse {
  export type AsObject = {
    content: Uint8Array | string,
    contentFlags: number,
    cas: number,
    expiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetAndLockRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getLockTime(): number;
  setLockTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndLockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndLockRequest): GetAndLockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAndLockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndLockRequest;
  static deserializeBinaryFromReader(message: GetAndLockRequest, reader: jspb.BinaryReader): GetAndLockRequest;
}

export namespace GetAndLockRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    lockTime: number,
  }
}

export class GetAndLockResponse extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getContentFlags(): number;
  setContentFlags(value: number): void;

  getCas(): number;
  setCas(value: number): void;

  hasExpiry(): boolean;
  clearExpiry(): void;
  getExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiry(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAndLockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAndLockResponse): GetAndLockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAndLockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAndLockResponse;
  static deserializeBinaryFromReader(message: GetAndLockResponse, reader: jspb.BinaryReader): GetAndLockResponse;
}

export namespace GetAndLockResponse {
  export type AsObject = {
    content: Uint8Array | string,
    contentFlags: number,
    cas: number,
    expiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UnlockRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getCas(): number;
  setCas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockRequest): UnlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockRequest;
  static deserializeBinaryFromReader(message: UnlockRequest, reader: jspb.BinaryReader): UnlockRequest;
}

export namespace UnlockRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    cas: number,
  }
}

export class UnlockResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockResponse): UnlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockResponse;
  static deserializeBinaryFromReader(message: UnlockResponse, reader: jspb.BinaryReader): UnlockResponse;
}

export namespace UnlockResponse {
  export type AsObject = {
  }
}

export class TouchRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  hasExpiryTime(): boolean;
  clearExpiryTime(): void;
  getExpiryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirySecs(): boolean;
  clearExpirySecs(): void;
  getExpirySecs(): number;
  setExpirySecs(value: number): void;

  getExpiryCase(): TouchRequest.ExpiryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TouchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TouchRequest): TouchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TouchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TouchRequest;
  static deserializeBinaryFromReader(message: TouchRequest, reader: jspb.BinaryReader): TouchRequest;
}

export namespace TouchRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    expiryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirySecs: number,
  }

  export enum ExpiryCase {
    EXPIRY_NOT_SET = 0,
    EXPIRY_TIME = 5,
    EXPIRY_SECS = 6,
  }
}

export class TouchResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  hasMutationToken(): boolean;
  clearMutationToken(): void;
  getMutationToken(): MutationToken | undefined;
  setMutationToken(value?: MutationToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TouchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TouchResponse): TouchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TouchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TouchResponse;
  static deserializeBinaryFromReader(message: TouchResponse, reader: jspb.BinaryReader): TouchResponse;
}

export namespace TouchResponse {
  export type AsObject = {
    cas: number,
    mutationToken?: MutationToken.AsObject,
  }
}

export class ExistsRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExistsRequest): ExistsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExistsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistsRequest;
  static deserializeBinaryFromReader(message: ExistsRequest, reader: jspb.BinaryReader): ExistsRequest;
}

export namespace ExistsRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
  }
}

export class ExistsResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  getCas(): number;
  setCas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExistsResponse): ExistsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExistsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistsResponse;
  static deserializeBinaryFromReader(message: ExistsResponse, reader: jspb.BinaryReader): ExistsResponse;
}

export namespace ExistsResponse {
  export type AsObject = {
    result: boolean,
    cas: number,
  }
}

export class InsertRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getContentFlags(): number;
  setContentFlags(value: number): void;

  hasExpiryTime(): boolean;
  clearExpiryTime(): void;
  getExpiryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirySecs(): boolean;
  clearExpirySecs(): void;
  getExpirySecs(): number;
  setExpirySecs(value: number): void;

  hasDurabilityLevel(): boolean;
  clearDurabilityLevel(): void;
  getDurabilityLevel(): DurabilityLevelMap[keyof DurabilityLevelMap];
  setDurabilityLevel(value: DurabilityLevelMap[keyof DurabilityLevelMap]): void;

  getExpiryCase(): InsertRequest.ExpiryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InsertRequest): InsertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertRequest;
  static deserializeBinaryFromReader(message: InsertRequest, reader: jspb.BinaryReader): InsertRequest;
}

export namespace InsertRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    content: Uint8Array | string,
    contentFlags: number,
    expiryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirySecs: number,
    durabilityLevel: DurabilityLevelMap[keyof DurabilityLevelMap],
  }

  export enum ExpiryCase {
    EXPIRY_NOT_SET = 0,
    EXPIRY_TIME = 7,
    EXPIRY_SECS = 10,
  }
}

export class InsertResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  hasMutationToken(): boolean;
  clearMutationToken(): void;
  getMutationToken(): MutationToken | undefined;
  setMutationToken(value?: MutationToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InsertResponse): InsertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertResponse;
  static deserializeBinaryFromReader(message: InsertResponse, reader: jspb.BinaryReader): InsertResponse;
}

export namespace InsertResponse {
  export type AsObject = {
    cas: number,
    mutationToken?: MutationToken.AsObject,
  }
}

export class UpsertRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getContentFlags(): number;
  setContentFlags(value: number): void;

  hasExpiryTime(): boolean;
  clearExpiryTime(): void;
  getExpiryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirySecs(): boolean;
  clearExpirySecs(): void;
  getExpirySecs(): number;
  setExpirySecs(value: number): void;

  hasDurabilityLevel(): boolean;
  clearDurabilityLevel(): void;
  getDurabilityLevel(): DurabilityLevelMap[keyof DurabilityLevelMap];
  setDurabilityLevel(value: DurabilityLevelMap[keyof DurabilityLevelMap]): void;

  getExpiryCase(): UpsertRequest.ExpiryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertRequest): UpsertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertRequest;
  static deserializeBinaryFromReader(message: UpsertRequest, reader: jspb.BinaryReader): UpsertRequest;
}

export namespace UpsertRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    content: Uint8Array | string,
    contentFlags: number,
    expiryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirySecs: number,
    durabilityLevel: DurabilityLevelMap[keyof DurabilityLevelMap],
  }

  export enum ExpiryCase {
    EXPIRY_NOT_SET = 0,
    EXPIRY_TIME = 7,
    EXPIRY_SECS = 10,
  }
}

export class UpsertResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  hasMutationToken(): boolean;
  clearMutationToken(): void;
  getMutationToken(): MutationToken | undefined;
  setMutationToken(value?: MutationToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertResponse): UpsertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertResponse;
  static deserializeBinaryFromReader(message: UpsertResponse, reader: jspb.BinaryReader): UpsertResponse;
}

export namespace UpsertResponse {
  export type AsObject = {
    cas: number,
    mutationToken?: MutationToken.AsObject,
  }
}

export class ReplaceRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getContentFlags(): number;
  setContentFlags(value: number): void;

  hasCas(): boolean;
  clearCas(): void;
  getCas(): number;
  setCas(value: number): void;

  hasExpiryTime(): boolean;
  clearExpiryTime(): void;
  getExpiryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirySecs(): boolean;
  clearExpirySecs(): void;
  getExpirySecs(): number;
  setExpirySecs(value: number): void;

  hasDurabilityLevel(): boolean;
  clearDurabilityLevel(): void;
  getDurabilityLevel(): DurabilityLevelMap[keyof DurabilityLevelMap];
  setDurabilityLevel(value: DurabilityLevelMap[keyof DurabilityLevelMap]): void;

  getExpiryCase(): ReplaceRequest.ExpiryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceRequest): ReplaceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceRequest;
  static deserializeBinaryFromReader(message: ReplaceRequest, reader: jspb.BinaryReader): ReplaceRequest;
}

export namespace ReplaceRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    content: Uint8Array | string,
    contentFlags: number,
    cas: number,
    expiryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirySecs: number,
    durabilityLevel: DurabilityLevelMap[keyof DurabilityLevelMap],
  }

  export enum ExpiryCase {
    EXPIRY_NOT_SET = 0,
    EXPIRY_TIME = 8,
    EXPIRY_SECS = 11,
  }
}

export class ReplaceResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  hasMutationToken(): boolean;
  clearMutationToken(): void;
  getMutationToken(): MutationToken | undefined;
  setMutationToken(value?: MutationToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReplaceResponse): ReplaceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReplaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplaceResponse;
  static deserializeBinaryFromReader(message: ReplaceResponse, reader: jspb.BinaryReader): ReplaceResponse;
}

export namespace ReplaceResponse {
  export type AsObject = {
    cas: number,
    mutationToken?: MutationToken.AsObject,
  }
}

export class RemoveRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  hasCas(): boolean;
  clearCas(): void;
  getCas(): number;
  setCas(value: number): void;

  hasDurabilityLevel(): boolean;
  clearDurabilityLevel(): void;
  getDurabilityLevel(): DurabilityLevelMap[keyof DurabilityLevelMap];
  setDurabilityLevel(value: DurabilityLevelMap[keyof DurabilityLevelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRequest;
  static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    cas: number,
    durabilityLevel: DurabilityLevelMap[keyof DurabilityLevelMap],
  }
}

export class RemoveResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  hasMutationToken(): boolean;
  clearMutationToken(): void;
  getMutationToken(): MutationToken | undefined;
  setMutationToken(value?: MutationToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResponse;
  static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
  export type AsObject = {
    cas: number,
    mutationToken?: MutationToken.AsObject,
  }
}

export class IncrementRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getDelta(): number;
  setDelta(value: number): void;

  hasExpiryTime(): boolean;
  clearExpiryTime(): void;
  getExpiryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirySecs(): boolean;
  clearExpirySecs(): void;
  getExpirySecs(): number;
  setExpirySecs(value: number): void;

  hasInitial(): boolean;
  clearInitial(): void;
  getInitial(): number;
  setInitial(value: number): void;

  hasDurabilityLevel(): boolean;
  clearDurabilityLevel(): void;
  getDurabilityLevel(): DurabilityLevelMap[keyof DurabilityLevelMap];
  setDurabilityLevel(value: DurabilityLevelMap[keyof DurabilityLevelMap]): void;

  getExpiryCase(): IncrementRequest.ExpiryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncrementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IncrementRequest): IncrementRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncrementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncrementRequest;
  static deserializeBinaryFromReader(message: IncrementRequest, reader: jspb.BinaryReader): IncrementRequest;
}

export namespace IncrementRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    delta: number,
    expiryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirySecs: number,
    initial: number,
    durabilityLevel: DurabilityLevelMap[keyof DurabilityLevelMap],
  }

  export enum ExpiryCase {
    EXPIRY_NOT_SET = 0,
    EXPIRY_TIME = 6,
    EXPIRY_SECS = 10,
  }
}

export class IncrementResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  getContent(): number;
  setContent(value: number): void;

  hasMutationToken(): boolean;
  clearMutationToken(): void;
  getMutationToken(): MutationToken | undefined;
  setMutationToken(value?: MutationToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncrementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IncrementResponse): IncrementResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncrementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncrementResponse;
  static deserializeBinaryFromReader(message: IncrementResponse, reader: jspb.BinaryReader): IncrementResponse;
}

export namespace IncrementResponse {
  export type AsObject = {
    cas: number,
    content: number,
    mutationToken?: MutationToken.AsObject,
  }
}

export class DecrementRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getDelta(): number;
  setDelta(value: number): void;

  hasExpiryTime(): boolean;
  clearExpiryTime(): void;
  getExpiryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirySecs(): boolean;
  clearExpirySecs(): void;
  getExpirySecs(): number;
  setExpirySecs(value: number): void;

  hasInitial(): boolean;
  clearInitial(): void;
  getInitial(): number;
  setInitial(value: number): void;

  hasDurabilityLevel(): boolean;
  clearDurabilityLevel(): void;
  getDurabilityLevel(): DurabilityLevelMap[keyof DurabilityLevelMap];
  setDurabilityLevel(value: DurabilityLevelMap[keyof DurabilityLevelMap]): void;

  getExpiryCase(): DecrementRequest.ExpiryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecrementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecrementRequest): DecrementRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecrementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecrementRequest;
  static deserializeBinaryFromReader(message: DecrementRequest, reader: jspb.BinaryReader): DecrementRequest;
}

export namespace DecrementRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    delta: number,
    expiryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirySecs: number,
    initial: number,
    durabilityLevel: DurabilityLevelMap[keyof DurabilityLevelMap],
  }

  export enum ExpiryCase {
    EXPIRY_NOT_SET = 0,
    EXPIRY_TIME = 6,
    EXPIRY_SECS = 10,
  }
}

export class DecrementResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  getContent(): number;
  setContent(value: number): void;

  hasMutationToken(): boolean;
  clearMutationToken(): void;
  getMutationToken(): MutationToken | undefined;
  setMutationToken(value?: MutationToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecrementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DecrementResponse): DecrementResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecrementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecrementResponse;
  static deserializeBinaryFromReader(message: DecrementResponse, reader: jspb.BinaryReader): DecrementResponse;
}

export namespace DecrementResponse {
  export type AsObject = {
    cas: number,
    content: number,
    mutationToken?: MutationToken.AsObject,
  }
}

export class AppendRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  hasCas(): boolean;
  clearCas(): void;
  getCas(): number;
  setCas(value: number): void;

  hasDurabilityLevel(): boolean;
  clearDurabilityLevel(): void;
  getDurabilityLevel(): DurabilityLevelMap[keyof DurabilityLevelMap];
  setDurabilityLevel(value: DurabilityLevelMap[keyof DurabilityLevelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppendRequest): AppendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppendRequest;
  static deserializeBinaryFromReader(message: AppendRequest, reader: jspb.BinaryReader): AppendRequest;
}

export namespace AppendRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    content: Uint8Array | string,
    cas: number,
    durabilityLevel: DurabilityLevelMap[keyof DurabilityLevelMap],
  }
}

export class AppendResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  hasMutationToken(): boolean;
  clearMutationToken(): void;
  getMutationToken(): MutationToken | undefined;
  setMutationToken(value?: MutationToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AppendResponse): AppendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppendResponse;
  static deserializeBinaryFromReader(message: AppendResponse, reader: jspb.BinaryReader): AppendResponse;
}

export namespace AppendResponse {
  export type AsObject = {
    cas: number,
    mutationToken?: MutationToken.AsObject,
  }
}

export class PrependRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  hasCas(): boolean;
  clearCas(): void;
  getCas(): number;
  setCas(value: number): void;

  hasDurabilityLevel(): boolean;
  clearDurabilityLevel(): void;
  getDurabilityLevel(): DurabilityLevelMap[keyof DurabilityLevelMap];
  setDurabilityLevel(value: DurabilityLevelMap[keyof DurabilityLevelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrependRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrependRequest): PrependRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrependRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrependRequest;
  static deserializeBinaryFromReader(message: PrependRequest, reader: jspb.BinaryReader): PrependRequest;
}

export namespace PrependRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    content: Uint8Array | string,
    cas: number,
    durabilityLevel: DurabilityLevelMap[keyof DurabilityLevelMap],
  }
}

export class PrependResponse extends jspb.Message {
  getCas(): number;
  setCas(value: number): void;

  hasMutationToken(): boolean;
  clearMutationToken(): void;
  getMutationToken(): MutationToken | undefined;
  setMutationToken(value?: MutationToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrependResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrependResponse): PrependResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrependResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrependResponse;
  static deserializeBinaryFromReader(message: PrependResponse, reader: jspb.BinaryReader): PrependResponse;
}

export namespace PrependResponse {
  export type AsObject = {
    cas: number,
    mutationToken?: MutationToken.AsObject,
  }
}

export class LookupInRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  clearSpecsList(): void;
  getSpecsList(): Array<LookupInRequest.Spec>;
  setSpecsList(value: Array<LookupInRequest.Spec>): void;
  addSpecs(value?: LookupInRequest.Spec, index?: number): LookupInRequest.Spec;

  hasFlags(): boolean;
  clearFlags(): void;
  getFlags(): LookupInRequest.Flags | undefined;
  setFlags(value?: LookupInRequest.Flags): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LookupInRequest): LookupInRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupInRequest;
  static deserializeBinaryFromReader(message: LookupInRequest, reader: jspb.BinaryReader): LookupInRequest;
}

export namespace LookupInRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    specsList: Array<LookupInRequest.Spec.AsObject>,
    flags?: LookupInRequest.Flags.AsObject,
  }

  export class Spec extends jspb.Message {
    getOperation(): LookupInRequest.Spec.OperationMap[keyof LookupInRequest.Spec.OperationMap];
    setOperation(value: LookupInRequest.Spec.OperationMap[keyof LookupInRequest.Spec.OperationMap]): void;

    getPath(): string;
    setPath(value: string): void;

    hasFlags(): boolean;
    clearFlags(): void;
    getFlags(): LookupInRequest.Spec.Flags | undefined;
    setFlags(value?: LookupInRequest.Spec.Flags): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Spec.AsObject;
    static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Spec;
    static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
  }

  export namespace Spec {
    export type AsObject = {
      operation: LookupInRequest.Spec.OperationMap[keyof LookupInRequest.Spec.OperationMap],
      path: string,
      flags?: LookupInRequest.Spec.Flags.AsObject,
    }

    export class Flags extends jspb.Message {
      hasXattr(): boolean;
      clearXattr(): void;
      getXattr(): boolean;
      setXattr(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Flags.AsObject;
      static toObject(includeInstance: boolean, msg: Flags): Flags.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Flags, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Flags;
      static deserializeBinaryFromReader(message: Flags, reader: jspb.BinaryReader): Flags;
    }

    export namespace Flags {
      export type AsObject = {
        xattr: boolean,
      }
    }

    export interface OperationMap {
      OPERATION_GET: 0;
      OPERATION_EXISTS: 1;
      OPERATION_COUNT: 2;
    }

    export const Operation: OperationMap;
  }

  export class Flags extends jspb.Message {
    hasAccessDeleted(): boolean;
    clearAccessDeleted(): void;
    getAccessDeleted(): boolean;
    setAccessDeleted(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Flags.AsObject;
    static toObject(includeInstance: boolean, msg: Flags): Flags.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Flags, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Flags;
    static deserializeBinaryFromReader(message: Flags, reader: jspb.BinaryReader): Flags;
  }

  export namespace Flags {
    export type AsObject = {
      accessDeleted: boolean,
    }
  }
}

export class LookupInResponse extends jspb.Message {
  clearSpecsList(): void;
  getSpecsList(): Array<LookupInResponse.Spec>;
  setSpecsList(value: Array<LookupInResponse.Spec>): void;
  addSpecs(value?: LookupInResponse.Spec, index?: number): LookupInResponse.Spec;

  getCas(): number;
  setCas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LookupInResponse): LookupInResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LookupInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupInResponse;
  static deserializeBinaryFromReader(message: LookupInResponse, reader: jspb.BinaryReader): LookupInResponse;
}

export namespace LookupInResponse {
  export type AsObject = {
    specsList: Array<LookupInResponse.Spec.AsObject>,
    cas: number,
  }

  export class Spec extends jspb.Message {
    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Spec.AsObject;
    static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Spec;
    static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
  }

  export namespace Spec {
    export type AsObject = {
      status?: google_rpc_status_pb.Status.AsObject,
      content: Uint8Array | string,
    }
  }
}

export class MutateInRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  clearSpecsList(): void;
  getSpecsList(): Array<MutateInRequest.Spec>;
  setSpecsList(value: Array<MutateInRequest.Spec>): void;
  addSpecs(value?: MutateInRequest.Spec, index?: number): MutateInRequest.Spec;

  hasStoreSemantic(): boolean;
  clearStoreSemantic(): void;
  getStoreSemantic(): MutateInRequest.StoreSemanticMap[keyof MutateInRequest.StoreSemanticMap];
  setStoreSemantic(value: MutateInRequest.StoreSemanticMap[keyof MutateInRequest.StoreSemanticMap]): void;

  hasDurabilityLevel(): boolean;
  clearDurabilityLevel(): void;
  getDurabilityLevel(): DurabilityLevelMap[keyof DurabilityLevelMap];
  setDurabilityLevel(value: DurabilityLevelMap[keyof DurabilityLevelMap]): void;

  hasCas(): boolean;
  clearCas(): void;
  getCas(): number;
  setCas(value: number): void;

  hasFlags(): boolean;
  clearFlags(): void;
  getFlags(): MutateInRequest.Flags | undefined;
  setFlags(value?: MutateInRequest.Flags): void;

  hasExpiryTime(): boolean;
  clearExpiryTime(): void;
  getExpiryTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiryTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirySecs(): boolean;
  clearExpirySecs(): void;
  getExpirySecs(): number;
  setExpirySecs(value: number): void;

  getExpiryCase(): MutateInRequest.ExpiryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateInRequest): MutateInRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateInRequest;
  static deserializeBinaryFromReader(message: MutateInRequest, reader: jspb.BinaryReader): MutateInRequest;
}

export namespace MutateInRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
    specsList: Array<MutateInRequest.Spec.AsObject>,
    storeSemantic: MutateInRequest.StoreSemanticMap[keyof MutateInRequest.StoreSemanticMap],
    durabilityLevel: DurabilityLevelMap[keyof DurabilityLevelMap],
    cas: number,
    flags?: MutateInRequest.Flags.AsObject,
    expiryTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirySecs: number,
  }

  export class Spec extends jspb.Message {
    getOperation(): MutateInRequest.Spec.OperationMap[keyof MutateInRequest.Spec.OperationMap];
    setOperation(value: MutateInRequest.Spec.OperationMap[keyof MutateInRequest.Spec.OperationMap]): void;

    getPath(): string;
    setPath(value: string): void;

    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): void;

    hasFlags(): boolean;
    clearFlags(): void;
    getFlags(): MutateInRequest.Spec.Flags | undefined;
    setFlags(value?: MutateInRequest.Spec.Flags): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Spec.AsObject;
    static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Spec;
    static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
  }

  export namespace Spec {
    export type AsObject = {
      operation: MutateInRequest.Spec.OperationMap[keyof MutateInRequest.Spec.OperationMap],
      path: string,
      content: Uint8Array | string,
      flags?: MutateInRequest.Spec.Flags.AsObject,
    }

    export class Flags extends jspb.Message {
      hasCreatePath(): boolean;
      clearCreatePath(): void;
      getCreatePath(): boolean;
      setCreatePath(value: boolean): void;

      hasXattr(): boolean;
      clearXattr(): void;
      getXattr(): boolean;
      setXattr(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Flags.AsObject;
      static toObject(includeInstance: boolean, msg: Flags): Flags.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Flags, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Flags;
      static deserializeBinaryFromReader(message: Flags, reader: jspb.BinaryReader): Flags;
    }

    export namespace Flags {
      export type AsObject = {
        createPath: boolean,
        xattr: boolean,
      }
    }

    export interface OperationMap {
      OPERATION_INSERT: 0;
      OPERATION_UPSERT: 1;
      OPERATION_REPLACE: 2;
      OPERATION_REMOVE: 3;
      OPERATION_ARRAY_APPEND: 4;
      OPERATION_ARRAY_PREPEND: 5;
      OPERATION_ARRAY_INSERT: 6;
      OPERATION_ARRAY_ADD_UNIQUE: 7;
      OPERATION_COUNTER: 8;
    }

    export const Operation: OperationMap;
  }

  export class Flags extends jspb.Message {
    hasAccessDeleted(): boolean;
    clearAccessDeleted(): void;
    getAccessDeleted(): boolean;
    setAccessDeleted(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Flags.AsObject;
    static toObject(includeInstance: boolean, msg: Flags): Flags.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Flags, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Flags;
    static deserializeBinaryFromReader(message: Flags, reader: jspb.BinaryReader): Flags;
  }

  export namespace Flags {
    export type AsObject = {
      accessDeleted: boolean,
    }
  }

  export interface StoreSemanticMap {
    STORE_SEMANTIC_REPLACE: 0;
    STORE_SEMANTIC_UPSERT: 1;
    STORE_SEMANTIC_INSERT: 2;
  }

  export const StoreSemantic: StoreSemanticMap;

  export enum ExpiryCase {
    EXPIRY_NOT_SET = 0,
    EXPIRY_TIME = 11,
    EXPIRY_SECS = 12,
  }
}

export class MutateInResponse extends jspb.Message {
  clearSpecsList(): void;
  getSpecsList(): Array<MutateInResponse.Spec>;
  setSpecsList(value: Array<MutateInResponse.Spec>): void;
  addSpecs(value?: MutateInResponse.Spec, index?: number): MutateInResponse.Spec;

  getCas(): number;
  setCas(value: number): void;

  hasMutationToken(): boolean;
  clearMutationToken(): void;
  getMutationToken(): MutationToken | undefined;
  setMutationToken(value?: MutationToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateInResponse): MutateInResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateInResponse;
  static deserializeBinaryFromReader(message: MutateInResponse, reader: jspb.BinaryReader): MutateInResponse;
}

export namespace MutateInResponse {
  export type AsObject = {
    specsList: Array<MutateInResponse.Spec.AsObject>,
    cas: number,
    mutationToken?: MutationToken.AsObject,
  }

  export class Spec extends jspb.Message {
    hasContent(): boolean;
    clearContent(): void;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Spec.AsObject;
    static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Spec;
    static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
  }

  export namespace Spec {
    export type AsObject = {
      content: Uint8Array | string,
    }
  }
}

export class GetAllReplicasRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllReplicasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllReplicasRequest): GetAllReplicasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllReplicasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllReplicasRequest;
  static deserializeBinaryFromReader(message: GetAllReplicasRequest, reader: jspb.BinaryReader): GetAllReplicasRequest;
}

export namespace GetAllReplicasRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    key: string,
  }
}

export class GetAllReplicasResponse extends jspb.Message {
  getIsReplica(): boolean;
  setIsReplica(value: boolean): void;

  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): void;

  getContentFlags(): number;
  setContentFlags(value: number): void;

  getCas(): number;
  setCas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllReplicasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllReplicasResponse): GetAllReplicasResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllReplicasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllReplicasResponse;
  static deserializeBinaryFromReader(message: GetAllReplicasResponse, reader: jspb.BinaryReader): GetAllReplicasResponse;
}

export namespace GetAllReplicasResponse {
  export type AsObject = {
    isReplica: boolean,
    content: Uint8Array | string,
    contentFlags: number,
    cas: number,
  }
}

export class RangeScanRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  getKeyOnly(): boolean;
  setKeyOnly(value: boolean): void;

  hasRange(): boolean;
  clearRange(): void;
  getRange(): RangeScanRequest.Range | undefined;
  setRange(value?: RangeScanRequest.Range): void;

  hasSampling(): boolean;
  clearSampling(): void;
  getSampling(): RangeScanRequest.Sampling | undefined;
  setSampling(value?: RangeScanRequest.Sampling): void;

  hasSnapshotRequirements(): boolean;
  clearSnapshotRequirements(): void;
  getSnapshotRequirements(): RangeScanRequest.SnapshotRequirements | undefined;
  setSnapshotRequirements(value?: RangeScanRequest.SnapshotRequirements): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeScanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RangeScanRequest): RangeScanRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RangeScanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeScanRequest;
  static deserializeBinaryFromReader(message: RangeScanRequest, reader: jspb.BinaryReader): RangeScanRequest;
}

export namespace RangeScanRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    keyOnly: boolean,
    range?: RangeScanRequest.Range.AsObject,
    sampling?: RangeScanRequest.Sampling.AsObject,
    snapshotRequirements?: RangeScanRequest.SnapshotRequirements.AsObject,
  }

  export class Range extends jspb.Message {
    getStartKey(): string;
    setStartKey(value: string): void;

    getEndKey(): string;
    setEndKey(value: string): void;

    getInclusiveStart(): boolean;
    setInclusiveStart(value: boolean): void;

    getInclusiveEnd(): boolean;
    setInclusiveEnd(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Range.AsObject;
    static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Range;
    static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
  }

  export namespace Range {
    export type AsObject = {
      startKey: string,
      endKey: string,
      inclusiveStart: boolean,
      inclusiveEnd: boolean,
    }
  }

  export class Sampling extends jspb.Message {
    getSeed(): number;
    setSeed(value: number): void;

    getSamples(): number;
    setSamples(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sampling.AsObject;
    static toObject(includeInstance: boolean, msg: Sampling): Sampling.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sampling, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sampling;
    static deserializeBinaryFromReader(message: Sampling, reader: jspb.BinaryReader): Sampling;
  }

  export namespace Sampling {
    export type AsObject = {
      seed: number,
      samples: number,
    }
  }

  export class SnapshotRequirements extends jspb.Message {
    getVbUuid(): number;
    setVbUuid(value: number): void;

    getSeqno(): number;
    setSeqno(value: number): void;

    getCheckSeqnoExists(): boolean;
    setCheckSeqnoExists(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SnapshotRequirements.AsObject;
    static toObject(includeInstance: boolean, msg: SnapshotRequirements): SnapshotRequirements.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SnapshotRequirements, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SnapshotRequirements;
    static deserializeBinaryFromReader(message: SnapshotRequirements, reader: jspb.BinaryReader): SnapshotRequirements;
  }

  export namespace SnapshotRequirements {
    export type AsObject = {
      vbUuid: number,
      seqno: number,
      checkSeqnoExists: boolean,
    }
  }
}

export class RangeScanResponse extends jspb.Message {
  clearDocumentsList(): void;
  getDocumentsList(): Array<RangeScanResponse.Document>;
  setDocumentsList(value: Array<RangeScanResponse.Document>): void;
  addDocuments(value?: RangeScanResponse.Document, index?: number): RangeScanResponse.Document;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeScanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RangeScanResponse): RangeScanResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RangeScanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeScanResponse;
  static deserializeBinaryFromReader(message: RangeScanResponse, reader: jspb.BinaryReader): RangeScanResponse;
}

export namespace RangeScanResponse {
  export type AsObject = {
    documentsList: Array<RangeScanResponse.Document.AsObject>,
  }

  export class Document extends jspb.Message {
    getKey(): string;
    setKey(value: string): void;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): void;

    hasMetaData(): boolean;
    clearMetaData(): void;
    getMetaData(): RangeScanResponse.Document.MetaData | undefined;
    setMetaData(value?: RangeScanResponse.Document.MetaData): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Document.AsObject;
    static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Document;
    static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
  }

  export namespace Document {
    export type AsObject = {
      key: string,
      content: Uint8Array | string,
      metaData?: RangeScanResponse.Document.MetaData.AsObject,
    }

    export class MetaData extends jspb.Message {
      getContentFlags(): number;
      setContentFlags(value: number): void;

      hasExpiry(): boolean;
      clearExpiry(): void;
      getExpiry(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setExpiry(value?: google_protobuf_timestamp_pb.Timestamp): void;

      getSeqno(): number;
      setSeqno(value: number): void;

      getCas(): number;
      setCas(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MetaData.AsObject;
      static toObject(includeInstance: boolean, msg: MetaData): MetaData.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: MetaData, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MetaData;
      static deserializeBinaryFromReader(message: MetaData, reader: jspb.BinaryReader): MetaData;
    }

    export namespace MetaData {
      export type AsObject = {
        contentFlags: number,
        expiry?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        seqno: number,
        cas: number,
      }
    }
  }
}

export interface DurabilityLevelMap {
  DURABILITY_LEVEL_MAJORITY: 0;
  DURABILITY_LEVEL_MAJORITY_AND_PERSIST_TO_ACTIVE: 1;
  DURABILITY_LEVEL_PERSIST_TO_MAJORITY: 2;
}

export const DurabilityLevel: DurabilityLevelMap;

