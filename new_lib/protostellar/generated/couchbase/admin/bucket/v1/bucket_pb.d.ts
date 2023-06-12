// package: couchbase.admin.bucket.v1
// file: couchbase/admin/bucket/v1/bucket.proto

import * as jspb from "google-protobuf";
import * as couchbase_kv_v1_kv_pb from "../../../../couchbase/kv/v1/kv_pb";

export class ListBucketsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBucketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBucketsRequest): ListBucketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBucketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBucketsRequest;
  static deserializeBinaryFromReader(message: ListBucketsRequest, reader: jspb.BinaryReader): ListBucketsRequest;
}

export namespace ListBucketsRequest {
  export type AsObject = {
  }
}

export class ListBucketsResponse extends jspb.Message {
  clearBucketsList(): void;
  getBucketsList(): Array<ListBucketsResponse.Bucket>;
  setBucketsList(value: Array<ListBucketsResponse.Bucket>): void;
  addBuckets(value?: ListBucketsResponse.Bucket, index?: number): ListBucketsResponse.Bucket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBucketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBucketsResponse): ListBucketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBucketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBucketsResponse;
  static deserializeBinaryFromReader(message: ListBucketsResponse, reader: jspb.BinaryReader): ListBucketsResponse;
}

export namespace ListBucketsResponse {
  export type AsObject = {
    bucketsList: Array<ListBucketsResponse.Bucket.AsObject>,
  }

  export class Bucket extends jspb.Message {
    getBucketName(): string;
    setBucketName(value: string): void;

    getFlushEnabled(): boolean;
    setFlushEnabled(value: boolean): void;

    getRamQuotaMb(): number;
    setRamQuotaMb(value: number): void;

    getNumReplicas(): number;
    setNumReplicas(value: number): void;

    getReplicaIndexes(): boolean;
    setReplicaIndexes(value: boolean): void;

    getBucketType(): BucketTypeMap[keyof BucketTypeMap];
    setBucketType(value: BucketTypeMap[keyof BucketTypeMap]): void;

    getEvictionMode(): EvictionModeMap[keyof EvictionModeMap];
    setEvictionMode(value: EvictionModeMap[keyof EvictionModeMap]): void;

    getMaxExpirySecs(): number;
    setMaxExpirySecs(value: number): void;

    getCompressionMode(): CompressionModeMap[keyof CompressionModeMap];
    setCompressionMode(value: CompressionModeMap[keyof CompressionModeMap]): void;

    hasMinimumDurabilityLevel(): boolean;
    clearMinimumDurabilityLevel(): void;
    getMinimumDurabilityLevel(): couchbase_kv_v1_kv_pb.DurabilityLevelMap[keyof couchbase_kv_v1_kv_pb.DurabilityLevelMap];
    setMinimumDurabilityLevel(value: couchbase_kv_v1_kv_pb.DurabilityLevelMap[keyof couchbase_kv_v1_kv_pb.DurabilityLevelMap]): void;

    getStorageBackend(): StorageBackendMap[keyof StorageBackendMap];
    setStorageBackend(value: StorageBackendMap[keyof StorageBackendMap]): void;

    getConflictResolutionType(): ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap];
    setConflictResolutionType(value: ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bucket.AsObject;
    static toObject(includeInstance: boolean, msg: Bucket): Bucket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bucket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bucket;
    static deserializeBinaryFromReader(message: Bucket, reader: jspb.BinaryReader): Bucket;
  }

  export namespace Bucket {
    export type AsObject = {
      bucketName: string,
      flushEnabled: boolean,
      ramQuotaMb: number,
      numReplicas: number,
      replicaIndexes: boolean,
      bucketType: BucketTypeMap[keyof BucketTypeMap],
      evictionMode: EvictionModeMap[keyof EvictionModeMap],
      maxExpirySecs: number,
      compressionMode: CompressionModeMap[keyof CompressionModeMap],
      minimumDurabilityLevel: couchbase_kv_v1_kv_pb.DurabilityLevelMap[keyof couchbase_kv_v1_kv_pb.DurabilityLevelMap],
      storageBackend: StorageBackendMap[keyof StorageBackendMap],
      conflictResolutionType: ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap],
    }
  }
}

export class CreateBucketRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getBucketType(): BucketTypeMap[keyof BucketTypeMap];
  setBucketType(value: BucketTypeMap[keyof BucketTypeMap]): void;

  hasRamQuotaMb(): boolean;
  clearRamQuotaMb(): void;
  getRamQuotaMb(): number;
  setRamQuotaMb(value: number): void;

  hasNumReplicas(): boolean;
  clearNumReplicas(): void;
  getNumReplicas(): number;
  setNumReplicas(value: number): void;

  hasFlushEnabled(): boolean;
  clearFlushEnabled(): void;
  getFlushEnabled(): boolean;
  setFlushEnabled(value: boolean): void;

  hasReplicaIndexes(): boolean;
  clearReplicaIndexes(): void;
  getReplicaIndexes(): boolean;
  setReplicaIndexes(value: boolean): void;

  hasEvictionMode(): boolean;
  clearEvictionMode(): void;
  getEvictionMode(): EvictionModeMap[keyof EvictionModeMap];
  setEvictionMode(value: EvictionModeMap[keyof EvictionModeMap]): void;

  hasMaxExpirySecs(): boolean;
  clearMaxExpirySecs(): void;
  getMaxExpirySecs(): number;
  setMaxExpirySecs(value: number): void;

  hasCompressionMode(): boolean;
  clearCompressionMode(): void;
  getCompressionMode(): CompressionModeMap[keyof CompressionModeMap];
  setCompressionMode(value: CompressionModeMap[keyof CompressionModeMap]): void;

  hasMinimumDurabilityLevel(): boolean;
  clearMinimumDurabilityLevel(): void;
  getMinimumDurabilityLevel(): couchbase_kv_v1_kv_pb.DurabilityLevelMap[keyof couchbase_kv_v1_kv_pb.DurabilityLevelMap];
  setMinimumDurabilityLevel(value: couchbase_kv_v1_kv_pb.DurabilityLevelMap[keyof couchbase_kv_v1_kv_pb.DurabilityLevelMap]): void;

  hasStorageBackend(): boolean;
  clearStorageBackend(): void;
  getStorageBackend(): StorageBackendMap[keyof StorageBackendMap];
  setStorageBackend(value: StorageBackendMap[keyof StorageBackendMap]): void;

  hasConflictResolutionType(): boolean;
  clearConflictResolutionType(): void;
  getConflictResolutionType(): ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap];
  setConflictResolutionType(value: ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBucketRequest): CreateBucketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBucketRequest;
  static deserializeBinaryFromReader(message: CreateBucketRequest, reader: jspb.BinaryReader): CreateBucketRequest;
}

export namespace CreateBucketRequest {
  export type AsObject = {
    bucketName: string,
    bucketType: BucketTypeMap[keyof BucketTypeMap],
    ramQuotaMb: number,
    numReplicas: number,
    flushEnabled: boolean,
    replicaIndexes: boolean,
    evictionMode: EvictionModeMap[keyof EvictionModeMap],
    maxExpirySecs: number,
    compressionMode: CompressionModeMap[keyof CompressionModeMap],
    minimumDurabilityLevel: couchbase_kv_v1_kv_pb.DurabilityLevelMap[keyof couchbase_kv_v1_kv_pb.DurabilityLevelMap],
    storageBackend: StorageBackendMap[keyof StorageBackendMap],
    conflictResolutionType: ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap],
  }
}

export class CreateBucketResponse extends jspb.Message {
  getBucketUuid(): string;
  setBucketUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBucketResponse): CreateBucketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBucketResponse;
  static deserializeBinaryFromReader(message: CreateBucketResponse, reader: jspb.BinaryReader): CreateBucketResponse;
}

export namespace CreateBucketResponse {
  export type AsObject = {
    bucketUuid: string,
  }
}

export class UpdateBucketRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  hasRamQuotaMb(): boolean;
  clearRamQuotaMb(): void;
  getRamQuotaMb(): number;
  setRamQuotaMb(value: number): void;

  hasNumReplicas(): boolean;
  clearNumReplicas(): void;
  getNumReplicas(): number;
  setNumReplicas(value: number): void;

  hasFlushEnabled(): boolean;
  clearFlushEnabled(): void;
  getFlushEnabled(): boolean;
  setFlushEnabled(value: boolean): void;

  hasReplicaIndexes(): boolean;
  clearReplicaIndexes(): void;
  getReplicaIndexes(): boolean;
  setReplicaIndexes(value: boolean): void;

  hasEvictionMode(): boolean;
  clearEvictionMode(): void;
  getEvictionMode(): EvictionModeMap[keyof EvictionModeMap];
  setEvictionMode(value: EvictionModeMap[keyof EvictionModeMap]): void;

  hasMaxExpirySecs(): boolean;
  clearMaxExpirySecs(): void;
  getMaxExpirySecs(): number;
  setMaxExpirySecs(value: number): void;

  hasCompressionMode(): boolean;
  clearCompressionMode(): void;
  getCompressionMode(): CompressionModeMap[keyof CompressionModeMap];
  setCompressionMode(value: CompressionModeMap[keyof CompressionModeMap]): void;

  hasMinimumDurabilityLevel(): boolean;
  clearMinimumDurabilityLevel(): void;
  getMinimumDurabilityLevel(): couchbase_kv_v1_kv_pb.DurabilityLevelMap[keyof couchbase_kv_v1_kv_pb.DurabilityLevelMap];
  setMinimumDurabilityLevel(value: couchbase_kv_v1_kv_pb.DurabilityLevelMap[keyof couchbase_kv_v1_kv_pb.DurabilityLevelMap]): void;

  hasConflictResolutionType(): boolean;
  clearConflictResolutionType(): void;
  getConflictResolutionType(): ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap];
  setConflictResolutionType(value: ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBucketRequest): UpdateBucketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBucketRequest;
  static deserializeBinaryFromReader(message: UpdateBucketRequest, reader: jspb.BinaryReader): UpdateBucketRequest;
}

export namespace UpdateBucketRequest {
  export type AsObject = {
    bucketName: string,
    ramQuotaMb: number,
    numReplicas: number,
    flushEnabled: boolean,
    replicaIndexes: boolean,
    evictionMode: EvictionModeMap[keyof EvictionModeMap],
    maxExpirySecs: number,
    compressionMode: CompressionModeMap[keyof CompressionModeMap],
    minimumDurabilityLevel: couchbase_kv_v1_kv_pb.DurabilityLevelMap[keyof couchbase_kv_v1_kv_pb.DurabilityLevelMap],
    conflictResolutionType: ConflictResolutionTypeMap[keyof ConflictResolutionTypeMap],
  }
}

export class UpdateBucketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBucketResponse): UpdateBucketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBucketResponse;
  static deserializeBinaryFromReader(message: UpdateBucketResponse, reader: jspb.BinaryReader): UpdateBucketResponse;
}

export namespace UpdateBucketResponse {
  export type AsObject = {
  }
}

export class DeleteBucketRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBucketRequest): DeleteBucketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBucketRequest;
  static deserializeBinaryFromReader(message: DeleteBucketRequest, reader: jspb.BinaryReader): DeleteBucketRequest;
}

export namespace DeleteBucketRequest {
  export type AsObject = {
    bucketName: string,
  }
}

export class DeleteBucketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBucketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBucketResponse): DeleteBucketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteBucketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBucketResponse;
  static deserializeBinaryFromReader(message: DeleteBucketResponse, reader: jspb.BinaryReader): DeleteBucketResponse;
}

export namespace DeleteBucketResponse {
  export type AsObject = {
  }
}

export interface BucketTypeMap {
  BUCKET_TYPE_COUCHBASE: 0;
  BUCKET_TYPE_MEMCACHED: 1;
  BUCKET_TYPE_EPHEMERAL: 2;
}

export const BucketType: BucketTypeMap;

export interface EvictionModeMap {
  EVICTION_MODE_FULL: 0;
  EVICTION_MODE_NOT_RECENTLY_USED: 1;
  EVICTION_MODE_VALUE_ONLY: 2;
  EVICTION_MODE_NONE: 3;
}

export const EvictionMode: EvictionModeMap;

export interface CompressionModeMap {
  COMPRESSION_MODE_OFF: 0;
  COMPRESSION_MODE_PASSIVE: 1;
  COMPRESSION_MODE_ACTIVE: 2;
}

export const CompressionMode: CompressionModeMap;

export interface StorageBackendMap {
  STORAGE_BACKEND_COUCHSTORE: 0;
  STORAGE_BACKEND_MAGMA: 1;
}

export const StorageBackend: StorageBackendMap;

export interface ConflictResolutionTypeMap {
  CONFLICT_RESOLUTION_TYPE_TIMESTAMP: 0;
  CONFLICT_RESOLUTION_TYPE_SEQUENCE_NUMBER: 1;
  CONFLICT_RESOLUTION_TYPE_CUSTOM: 2;
}

export const ConflictResolutionType: ConflictResolutionTypeMap;

