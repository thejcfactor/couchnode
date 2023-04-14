// package: couchbase.admin.collection.v1
// file: couchbase/admin/collection/v1/collection.proto

import * as jspb from "google-protobuf";

export class ListCollectionsRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionsRequest): ListCollectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCollectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionsRequest;
  static deserializeBinaryFromReader(message: ListCollectionsRequest, reader: jspb.BinaryReader): ListCollectionsRequest;
}

export namespace ListCollectionsRequest {
  export type AsObject = {
    bucketName: string,
  }
}

export class ListCollectionsResponse extends jspb.Message {
  clearScopesList(): void;
  getScopesList(): Array<ListCollectionsResponse.Scope>;
  setScopesList(value: Array<ListCollectionsResponse.Scope>): void;
  addScopes(value?: ListCollectionsResponse.Scope, index?: number): ListCollectionsResponse.Scope;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCollectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCollectionsResponse): ListCollectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCollectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCollectionsResponse;
  static deserializeBinaryFromReader(message: ListCollectionsResponse, reader: jspb.BinaryReader): ListCollectionsResponse;
}

export namespace ListCollectionsResponse {
  export type AsObject = {
    scopesList: Array<ListCollectionsResponse.Scope.AsObject>,
  }

  export class Collection extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    hasMaxExpirySecs(): boolean;
    clearMaxExpirySecs(): void;
    getMaxExpirySecs(): number;
    setMaxExpirySecs(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collection.AsObject;
    static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collection;
    static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
  }

  export namespace Collection {
    export type AsObject = {
      name: string,
      maxExpirySecs: number,
    }
  }

  export class Scope extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    clearCollectionsList(): void;
    getCollectionsList(): Array<ListCollectionsResponse.Collection>;
    setCollectionsList(value: Array<ListCollectionsResponse.Collection>): void;
    addCollections(value?: ListCollectionsResponse.Collection, index?: number): ListCollectionsResponse.Collection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Scope.AsObject;
    static toObject(includeInstance: boolean, msg: Scope): Scope.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Scope, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Scope;
    static deserializeBinaryFromReader(message: Scope, reader: jspb.BinaryReader): Scope;
  }

  export namespace Scope {
    export type AsObject = {
      name: string,
      collectionsList: Array<ListCollectionsResponse.Collection.AsObject>,
    }
  }
}

export class CreateScopeRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScopeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScopeRequest): CreateScopeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScopeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScopeRequest;
  static deserializeBinaryFromReader(message: CreateScopeRequest, reader: jspb.BinaryReader): CreateScopeRequest;
}

export namespace CreateScopeRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
  }
}

export class CreateScopeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateScopeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateScopeResponse): CreateScopeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateScopeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateScopeResponse;
  static deserializeBinaryFromReader(message: CreateScopeResponse, reader: jspb.BinaryReader): CreateScopeResponse;
}

export namespace CreateScopeResponse {
  export type AsObject = {
  }
}

export class DeleteScopeRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScopeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScopeRequest): DeleteScopeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScopeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScopeRequest;
  static deserializeBinaryFromReader(message: DeleteScopeRequest, reader: jspb.BinaryReader): DeleteScopeRequest;
}

export namespace DeleteScopeRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
  }
}

export class DeleteScopeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScopeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScopeResponse): DeleteScopeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScopeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScopeResponse;
  static deserializeBinaryFromReader(message: DeleteScopeResponse, reader: jspb.BinaryReader): DeleteScopeResponse;
}

export namespace DeleteScopeResponse {
  export type AsObject = {
  }
}

export class CreateCollectionRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  hasMaxExpirySecs(): boolean;
  clearMaxExpirySecs(): void;
  getMaxExpirySecs(): number;
  setMaxExpirySecs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCollectionRequest): CreateCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCollectionRequest;
  static deserializeBinaryFromReader(message: CreateCollectionRequest, reader: jspb.BinaryReader): CreateCollectionRequest;
}

export namespace CreateCollectionRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
    maxExpirySecs: number,
  }
}

export class CreateCollectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCollectionResponse): CreateCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCollectionResponse;
  static deserializeBinaryFromReader(message: CreateCollectionResponse, reader: jspb.BinaryReader): CreateCollectionResponse;
}

export namespace CreateCollectionResponse {
  export type AsObject = {
  }
}

export class DeleteCollectionRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getScopeName(): string;
  setScopeName(value: string): void;

  getCollectionName(): string;
  setCollectionName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollectionRequest): DeleteCollectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCollectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollectionRequest;
  static deserializeBinaryFromReader(message: DeleteCollectionRequest, reader: jspb.BinaryReader): DeleteCollectionRequest;
}

export namespace DeleteCollectionRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    collectionName: string,
  }
}

export class DeleteCollectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCollectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCollectionResponse): DeleteCollectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCollectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCollectionResponse;
  static deserializeBinaryFromReader(message: DeleteCollectionResponse, reader: jspb.BinaryReader): DeleteCollectionResponse;
}

export namespace DeleteCollectionResponse {
  export type AsObject = {
  }
}

