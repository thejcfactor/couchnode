// package: couchbase.admin.search.v1
// file: couchbase/admin/search/v1/search.proto

import * as jspb from "google-protobuf";

export class UpsertIndexRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParamsMap(): jspb.Map<string, Uint8Array | string>;
  clearParamsMap(): void;
  getPlanParamsMap(): jspb.Map<string, Uint8Array | string>;
  clearPlanParamsMap(): void;
  hasPrevIndexUuid(): boolean;
  clearPrevIndexUuid(): void;
  getPrevIndexUuid(): string;
  setPrevIndexUuid(value: string): void;

  hasSourceName(): boolean;
  clearSourceName(): void;
  getSourceName(): string;
  setSourceName(value: string): void;

  getSourceParamsMap(): jspb.Map<string, Uint8Array | string>;
  clearSourceParamsMap(): void;
  hasSourceType(): boolean;
  clearSourceType(): void;
  getSourceType(): string;
  setSourceType(value: string): void;

  hasSourceUuid(): boolean;
  clearSourceUuid(): void;
  getSourceUuid(): string;
  setSourceUuid(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasUuid(): boolean;
  clearUuid(): void;
  getUuid(): string;
  setUuid(value: string): void;

  hasBucketName(): boolean;
  clearBucketName(): void;
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertIndexRequest): UpsertIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertIndexRequest;
  static deserializeBinaryFromReader(message: UpsertIndexRequest, reader: jspb.BinaryReader): UpsertIndexRequest;
}

export namespace UpsertIndexRequest {
  export type AsObject = {
    name: string,
    paramsMap: Array<[string, Uint8Array | string]>,
    planParamsMap: Array<[string, Uint8Array | string]>,
    prevIndexUuid: string,
    sourceName: string,
    sourceParamsMap: Array<[string, Uint8Array | string]>,
    sourceType: string,
    sourceUuid: string,
    type: string,
    uuid: string,
    bucketName: string,
    scopeName: string,
  }
}

export class UpsertIndexResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertIndexResponse): UpsertIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertIndexResponse;
  static deserializeBinaryFromReader(message: UpsertIndexResponse, reader: jspb.BinaryReader): UpsertIndexResponse;
}

export namespace UpsertIndexResponse {
  export type AsObject = {
  }
}

export class GetIndexRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasBucketName(): boolean;
  clearBucketName(): void;
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIndexRequest): GetIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIndexRequest;
  static deserializeBinaryFromReader(message: GetIndexRequest, reader: jspb.BinaryReader): GetIndexRequest;
}

export namespace GetIndexRequest {
  export type AsObject = {
    name: string,
    bucketName: string,
    scopeName: string,
  }
}

export class GetIndexResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParamsMap(): jspb.Map<string, Uint8Array | string>;
  clearParamsMap(): void;
  getPlanParamsMap(): jspb.Map<string, Uint8Array | string>;
  clearPlanParamsMap(): void;
  hasSourceName(): boolean;
  clearSourceName(): void;
  getSourceName(): string;
  setSourceName(value: string): void;

  getSourceParamsMap(): jspb.Map<string, Uint8Array | string>;
  clearSourceParamsMap(): void;
  hasSourceType(): boolean;
  clearSourceType(): void;
  getSourceType(): string;
  setSourceType(value: string): void;

  hasSourceUuid(): boolean;
  clearSourceUuid(): void;
  getSourceUuid(): string;
  setSourceUuid(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasUuid(): boolean;
  clearUuid(): void;
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIndexResponse): GetIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIndexResponse;
  static deserializeBinaryFromReader(message: GetIndexResponse, reader: jspb.BinaryReader): GetIndexResponse;
}

export namespace GetIndexResponse {
  export type AsObject = {
    name: string,
    paramsMap: Array<[string, Uint8Array | string]>,
    planParamsMap: Array<[string, Uint8Array | string]>,
    sourceName: string,
    sourceParamsMap: Array<[string, Uint8Array | string]>,
    sourceType: string,
    sourceUuid: string,
    type: string,
    uuid: string,
  }
}

export class ListIndexesRequest extends jspb.Message {
  hasBucketName(): boolean;
  clearBucketName(): void;
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexesRequest): ListIndexesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIndexesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndexesRequest;
  static deserializeBinaryFromReader(message: ListIndexesRequest, reader: jspb.BinaryReader): ListIndexesRequest;
}

export namespace ListIndexesRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
  }
}

export class ListIndexesResponse extends jspb.Message {
  clearIndexesList(): void;
  getIndexesList(): Array<ListIndexesResponse.Index>;
  setIndexesList(value: Array<ListIndexesResponse.Index>): void;
  addIndexes(value?: ListIndexesResponse.Index, index?: number): ListIndexesResponse.Index;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIndexesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIndexesResponse): ListIndexesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIndexesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIndexesResponse;
  static deserializeBinaryFromReader(message: ListIndexesResponse, reader: jspb.BinaryReader): ListIndexesResponse;
}

export namespace ListIndexesResponse {
  export type AsObject = {
    indexesList: Array<ListIndexesResponse.Index.AsObject>,
  }

  export class Index extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getParamsMap(): jspb.Map<string, Uint8Array | string>;
    clearParamsMap(): void;
    getPlanParamsMap(): jspb.Map<string, Uint8Array | string>;
    clearPlanParamsMap(): void;
    hasSourceName(): boolean;
    clearSourceName(): void;
    getSourceName(): string;
    setSourceName(value: string): void;

    getSourceParamsMap(): jspb.Map<string, Uint8Array | string>;
    clearSourceParamsMap(): void;
    hasSourceType(): boolean;
    clearSourceType(): void;
    getSourceType(): string;
    setSourceType(value: string): void;

    hasSourceUuid(): boolean;
    clearSourceUuid(): void;
    getSourceUuid(): string;
    setSourceUuid(value: string): void;

    getType(): string;
    setType(value: string): void;

    hasUuid(): boolean;
    clearUuid(): void;
    getUuid(): string;
    setUuid(value: string): void;

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
      name: string,
      paramsMap: Array<[string, Uint8Array | string]>,
      planParamsMap: Array<[string, Uint8Array | string]>,
      sourceName: string,
      sourceParamsMap: Array<[string, Uint8Array | string]>,
      sourceType: string,
      sourceUuid: string,
      type: string,
      uuid: string,
    }
  }
}

export class DeleteIndexRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasBucketName(): boolean;
  clearBucketName(): void;
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIndexRequest): DeleteIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIndexRequest;
  static deserializeBinaryFromReader(message: DeleteIndexRequest, reader: jspb.BinaryReader): DeleteIndexRequest;
}

export namespace DeleteIndexRequest {
  export type AsObject = {
    name: string,
    bucketName: string,
    scopeName: string,
  }
}

export class DeleteIndexResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIndexResponse): DeleteIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIndexResponse;
  static deserializeBinaryFromReader(message: DeleteIndexResponse, reader: jspb.BinaryReader): DeleteIndexResponse;
}

export namespace DeleteIndexResponse {
  export type AsObject = {
  }
}

