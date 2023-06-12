// package: couchbase.admin.query.v1
// file: couchbase/admin/query/v1/query.proto

import * as jspb from "google-protobuf";

export class GetAllIndexesRequest extends jspb.Message {
  hasBucketName(): boolean;
  clearBucketName(): void;
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  hasCollectionName(): boolean;
  clearCollectionName(): void;
  getCollectionName(): string;
  setCollectionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllIndexesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllIndexesRequest): GetAllIndexesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllIndexesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllIndexesRequest;
  static deserializeBinaryFromReader(message: GetAllIndexesRequest, reader: jspb.BinaryReader): GetAllIndexesRequest;
}

export namespace GetAllIndexesRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
  }
}

export class GetAllIndexesResponse extends jspb.Message {
  clearIndexesList(): void;
  getIndexesList(): Array<GetAllIndexesResponse.Index>;
  setIndexesList(value: Array<GetAllIndexesResponse.Index>): void;
  addIndexes(value?: GetAllIndexesResponse.Index, index?: number): GetAllIndexesResponse.Index;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllIndexesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllIndexesResponse): GetAllIndexesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllIndexesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllIndexesResponse;
  static deserializeBinaryFromReader(message: GetAllIndexesResponse, reader: jspb.BinaryReader): GetAllIndexesResponse;
}

export namespace GetAllIndexesResponse {
  export type AsObject = {
    indexesList: Array<GetAllIndexesResponse.Index.AsObject>,
  }

  export class Index extends jspb.Message {
    getBucketName(): string;
    setBucketName(value: string): void;

    getScopeName(): string;
    setScopeName(value: string): void;

    getCollectionName(): string;
    setCollectionName(value: string): void;

    getName(): string;
    setName(value: string): void;

    getIsPrimary(): boolean;
    setIsPrimary(value: boolean): void;

    getType(): IndexTypeMap[keyof IndexTypeMap];
    setType(value: IndexTypeMap[keyof IndexTypeMap]): void;

    getState(): IndexStateMap[keyof IndexStateMap];
    setState(value: IndexStateMap[keyof IndexStateMap]): void;

    clearFieldsList(): void;
    getFieldsList(): Array<string>;
    setFieldsList(value: Array<string>): void;
    addFields(value: string, index?: number): string;

    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): string;
    setCondition(value: string): void;

    hasPartition(): boolean;
    clearPartition(): void;
    getPartition(): string;
    setPartition(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Index.AsObject;
    static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Index;
    static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
  }

  export namespace Index {
    export type AsObject = {
      bucketName: string,
      scopeName: string,
      collectionName: string,
      name: string,
      isPrimary: boolean,
      type: IndexTypeMap[keyof IndexTypeMap],
      state: IndexStateMap[keyof IndexStateMap],
      fieldsList: Array<string>,
      condition: string,
      partition: string,
    }
  }
}

export class CreatePrimaryIndexRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  hasCollectionName(): boolean;
  clearCollectionName(): void;
  getCollectionName(): string;
  setCollectionName(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasNumReplicas(): boolean;
  clearNumReplicas(): void;
  getNumReplicas(): number;
  setNumReplicas(value: number): void;

  hasDeferred(): boolean;
  clearDeferred(): void;
  getDeferred(): boolean;
  setDeferred(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePrimaryIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePrimaryIndexRequest): CreatePrimaryIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePrimaryIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePrimaryIndexRequest;
  static deserializeBinaryFromReader(message: CreatePrimaryIndexRequest, reader: jspb.BinaryReader): CreatePrimaryIndexRequest;
}

export namespace CreatePrimaryIndexRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    name: string,
    numReplicas: number,
    deferred: boolean,
  }
}

export class CreatePrimaryIndexResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePrimaryIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePrimaryIndexResponse): CreatePrimaryIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePrimaryIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePrimaryIndexResponse;
  static deserializeBinaryFromReader(message: CreatePrimaryIndexResponse, reader: jspb.BinaryReader): CreatePrimaryIndexResponse;
}

export namespace CreatePrimaryIndexResponse {
  export type AsObject = {
  }
}

export class CreateIndexRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  hasCollectionName(): boolean;
  clearCollectionName(): void;
  getCollectionName(): string;
  setCollectionName(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasNumReplicas(): boolean;
  clearNumReplicas(): void;
  getNumReplicas(): number;
  setNumReplicas(value: number): void;

  clearFieldsList(): void;
  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  addFields(value: string, index?: number): string;

  hasDeferred(): boolean;
  clearDeferred(): void;
  getDeferred(): boolean;
  setDeferred(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIndexRequest): CreateIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIndexRequest;
  static deserializeBinaryFromReader(message: CreateIndexRequest, reader: jspb.BinaryReader): CreateIndexRequest;
}

export namespace CreateIndexRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    name: string,
    numReplicas: number,
    fieldsList: Array<string>,
    deferred: boolean,
  }
}

export class CreateIndexResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIndexResponse): CreateIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIndexResponse;
  static deserializeBinaryFromReader(message: CreateIndexResponse, reader: jspb.BinaryReader): CreateIndexResponse;
}

export namespace CreateIndexResponse {
  export type AsObject = {
  }
}

export class DropPrimaryIndexRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  hasCollectionName(): boolean;
  clearCollectionName(): void;
  getCollectionName(): string;
  setCollectionName(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropPrimaryIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropPrimaryIndexRequest): DropPrimaryIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropPrimaryIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropPrimaryIndexRequest;
  static deserializeBinaryFromReader(message: DropPrimaryIndexRequest, reader: jspb.BinaryReader): DropPrimaryIndexRequest;
}

export namespace DropPrimaryIndexRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    name: string,
  }
}

export class DropPrimaryIndexResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropPrimaryIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropPrimaryIndexResponse): DropPrimaryIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropPrimaryIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropPrimaryIndexResponse;
  static deserializeBinaryFromReader(message: DropPrimaryIndexResponse, reader: jspb.BinaryReader): DropPrimaryIndexResponse;
}

export namespace DropPrimaryIndexResponse {
  export type AsObject = {
  }
}

export class DropIndexRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  hasCollectionName(): boolean;
  clearCollectionName(): void;
  getCollectionName(): string;
  setCollectionName(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropIndexRequest): DropIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropIndexRequest;
  static deserializeBinaryFromReader(message: DropIndexRequest, reader: jspb.BinaryReader): DropIndexRequest;
}

export namespace DropIndexRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    name: string,
  }
}

export class DropIndexResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropIndexResponse): DropIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropIndexResponse;
  static deserializeBinaryFromReader(message: DropIndexResponse, reader: jspb.BinaryReader): DropIndexResponse;
}

export namespace DropIndexResponse {
  export type AsObject = {
  }
}

export class BuildDeferredIndexesRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  hasCollectionName(): boolean;
  clearCollectionName(): void;
  getCollectionName(): string;
  setCollectionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildDeferredIndexesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BuildDeferredIndexesRequest): BuildDeferredIndexesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildDeferredIndexesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildDeferredIndexesRequest;
  static deserializeBinaryFromReader(message: BuildDeferredIndexesRequest, reader: jspb.BinaryReader): BuildDeferredIndexesRequest;
}

export namespace BuildDeferredIndexesRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
  }
}

export class BuildDeferredIndexesResponse extends jspb.Message {
  clearIndexNamesList(): void;
  getIndexNamesList(): Array<string>;
  setIndexNamesList(value: Array<string>): void;
  addIndexNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuildDeferredIndexesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BuildDeferredIndexesResponse): BuildDeferredIndexesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuildDeferredIndexesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuildDeferredIndexesResponse;
  static deserializeBinaryFromReader(message: BuildDeferredIndexesResponse, reader: jspb.BinaryReader): BuildDeferredIndexesResponse;
}

export namespace BuildDeferredIndexesResponse {
  export type AsObject = {
    indexNamesList: Array<string>,
  }
}

export interface IndexTypeMap {
  INDEX_TYPE_VIEW: 0;
  INDEX_TYPE_GSI: 1;
}

export const IndexType: IndexTypeMap;

export interface IndexStateMap {
  INDEX_STATE_DEFERRED: 0;
  INDEX_STATE_BUILDING: 1;
  INDEX_STATE_PENDING: 2;
  INDEX_STATE_ONLINE: 3;
  INDEX_STATE_OFFLINE: 4;
  INDEX_STATE_ABRIDGED: 5;
  INDEX_STATE_SCHEDULED: 6;
}

export const IndexState: IndexStateMap;

