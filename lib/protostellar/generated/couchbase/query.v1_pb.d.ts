// package: couchbase.query.v1
// file: couchbase/query.v1.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as couchbase_kv_v1_pb from "../couchbase/kv.v1_pb";

export class QueryRequest extends jspb.Message {
  hasBucketName(): boolean;
  clearBucketName(): void;
  getBucketName(): string;
  setBucketName(value: string): void;

  hasScopeName(): boolean;
  clearScopeName(): void;
  getScopeName(): string;
  setScopeName(value: string): void;

  getStatement(): string;
  setStatement(value: string): void;

  hasReadOnly(): boolean;
  clearReadOnly(): void;
  getReadOnly(): boolean;
  setReadOnly(value: boolean): void;

  hasPrepared(): boolean;
  clearPrepared(): void;
  getPrepared(): boolean;
  setPrepared(value: boolean): void;

  hasTuningOptions(): boolean;
  clearTuningOptions(): void;
  getTuningOptions(): QueryRequest.TuningOptions | undefined;
  setTuningOptions(value?: QueryRequest.TuningOptions): void;

  hasClientContextId(): boolean;
  clearClientContextId(): void;
  getClientContextId(): string;
  setClientContextId(value: string): void;

  hasScanConsistency(): boolean;
  clearScanConsistency(): void;
  getScanConsistency(): QueryRequest.QueryScanConsistencyMap[keyof QueryRequest.QueryScanConsistencyMap];
  setScanConsistency(value: QueryRequest.QueryScanConsistencyMap[keyof QueryRequest.QueryScanConsistencyMap]): void;

  clearPositionalParametersList(): void;
  getPositionalParametersList(): Array<Uint8Array | string>;
  getPositionalParametersList_asU8(): Array<Uint8Array>;
  getPositionalParametersList_asB64(): Array<string>;
  setPositionalParametersList(value: Array<Uint8Array | string>): void;
  addPositionalParameters(value: Uint8Array | string, index?: number): Uint8Array | string;

  getNamedParametersMap(): jspb.Map<string, Uint8Array | string>;
  clearNamedParametersMap(): void;
  hasFlexIndex(): boolean;
  clearFlexIndex(): void;
  getFlexIndex(): boolean;
  setFlexIndex(value: boolean): void;

  hasPreserveExpiry(): boolean;
  clearPreserveExpiry(): void;
  getPreserveExpiry(): boolean;
  setPreserveExpiry(value: boolean): void;

  clearConsistentWithList(): void;
  getConsistentWithList(): Array<couchbase_kv_v1_pb.MutationToken>;
  setConsistentWithList(value: Array<couchbase_kv_v1_pb.MutationToken>): void;
  addConsistentWith(value?: couchbase_kv_v1_pb.MutationToken, index?: number): couchbase_kv_v1_pb.MutationToken;

  hasProfileMode(): boolean;
  clearProfileMode(): void;
  getProfileMode(): QueryRequest.QueryProfileModeMap[keyof QueryRequest.QueryProfileModeMap];
  setProfileMode(value: QueryRequest.QueryProfileModeMap[keyof QueryRequest.QueryProfileModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRequest): QueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRequest;
  static deserializeBinaryFromReader(message: QueryRequest, reader: jspb.BinaryReader): QueryRequest;
}

export namespace QueryRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    statement: string,
    readOnly: boolean,
    prepared: boolean,
    tuningOptions?: QueryRequest.TuningOptions.AsObject,
    clientContextId: string,
    scanConsistency: QueryRequest.QueryScanConsistencyMap[keyof QueryRequest.QueryScanConsistencyMap],
    positionalParametersList: Array<Uint8Array | string>,
    namedParametersMap: Array<[string, Uint8Array | string]>,
    flexIndex: boolean,
    preserveExpiry: boolean,
    consistentWithList: Array<couchbase_kv_v1_pb.MutationToken.AsObject>,
    profileMode: QueryRequest.QueryProfileModeMap[keyof QueryRequest.QueryProfileModeMap],
  }

  export class TuningOptions extends jspb.Message {
    hasMaxParallelism(): boolean;
    clearMaxParallelism(): void;
    getMaxParallelism(): number;
    setMaxParallelism(value: number): void;

    hasPipelineBatch(): boolean;
    clearPipelineBatch(): void;
    getPipelineBatch(): number;
    setPipelineBatch(value: number): void;

    hasPipelineCap(): boolean;
    clearPipelineCap(): void;
    getPipelineCap(): number;
    setPipelineCap(value: number): void;

    hasScanWait(): boolean;
    clearScanWait(): void;
    getScanWait(): google_protobuf_duration_pb.Duration | undefined;
    setScanWait(value?: google_protobuf_duration_pb.Duration): void;

    hasScanCap(): boolean;
    clearScanCap(): void;
    getScanCap(): number;
    setScanCap(value: number): void;

    hasDisableMetrics(): boolean;
    clearDisableMetrics(): void;
    getDisableMetrics(): boolean;
    setDisableMetrics(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TuningOptions.AsObject;
    static toObject(includeInstance: boolean, msg: TuningOptions): TuningOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TuningOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TuningOptions;
    static deserializeBinaryFromReader(message: TuningOptions, reader: jspb.BinaryReader): TuningOptions;
  }

  export namespace TuningOptions {
    export type AsObject = {
      maxParallelism: number,
      pipelineBatch: number,
      pipelineCap: number,
      scanWait?: google_protobuf_duration_pb.Duration.AsObject,
      scanCap: number,
      disableMetrics: boolean,
    }
  }

  export interface QueryScanConsistencyMap {
    NOT_BOUNDED: 0;
    REQUEST_PLUS: 1;
  }

  export const QueryScanConsistency: QueryScanConsistencyMap;

  export interface QueryProfileModeMap {
    OFF: 0;
    PHASES: 1;
    TIMINGS: 2;
  }

  export const QueryProfileMode: QueryProfileModeMap;
}

export class QueryResponse extends jspb.Message {
  clearRowsList(): void;
  getRowsList(): Array<Uint8Array | string>;
  getRowsList_asU8(): Array<Uint8Array>;
  getRowsList_asB64(): Array<string>;
  setRowsList(value: Array<Uint8Array | string>): void;
  addRows(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasMetaData(): boolean;
  clearMetaData(): void;
  getMetaData(): QueryResponse.MetaData | undefined;
  setMetaData(value?: QueryResponse.MetaData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponse;
  static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
  export type AsObject = {
    rowsList: Array<Uint8Array | string>,
    metaData?: QueryResponse.MetaData.AsObject,
  }

  export class MetaData extends jspb.Message {
    getRequestId(): string;
    setRequestId(value: string): void;

    getClientContextId(): string;
    setClientContextId(value: string): void;

    hasMetrics(): boolean;
    clearMetrics(): void;
    getMetrics(): QueryResponse.MetaData.Metrics | undefined;
    setMetrics(value?: QueryResponse.MetaData.Metrics): void;

    getStatus(): QueryResponse.MetaData.MetaDataStatusMap[keyof QueryResponse.MetaData.MetaDataStatusMap];
    setStatus(value: QueryResponse.MetaData.MetaDataStatusMap[keyof QueryResponse.MetaData.MetaDataStatusMap]): void;

    clearWarningsList(): void;
    getWarningsList(): Array<QueryResponse.MetaData.Warning>;
    setWarningsList(value: Array<QueryResponse.MetaData.Warning>): void;
    addWarnings(value?: QueryResponse.MetaData.Warning, index?: number): QueryResponse.MetaData.Warning;

    hasProfile(): boolean;
    clearProfile(): void;
    getProfile(): Uint8Array | string;
    getProfile_asU8(): Uint8Array;
    getProfile_asB64(): string;
    setProfile(value: Uint8Array | string): void;

    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): void;

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
      requestId: string,
      clientContextId: string,
      metrics?: QueryResponse.MetaData.Metrics.AsObject,
      status: QueryResponse.MetaData.MetaDataStatusMap[keyof QueryResponse.MetaData.MetaDataStatusMap],
      warningsList: Array<QueryResponse.MetaData.Warning.AsObject>,
      profile: Uint8Array | string,
      signature: Uint8Array | string,
    }

    export class Warning extends jspb.Message {
      getCode(): number;
      setCode(value: number): void;

      getMessage(): string;
      setMessage(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Warning.AsObject;
      static toObject(includeInstance: boolean, msg: Warning): Warning.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Warning, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Warning;
      static deserializeBinaryFromReader(message: Warning, reader: jspb.BinaryReader): Warning;
    }

    export namespace Warning {
      export type AsObject = {
        code: number,
        message: string,
      }
    }

    export class Metrics extends jspb.Message {
      hasElapsedTime(): boolean;
      clearElapsedTime(): void;
      getElapsedTime(): google_protobuf_duration_pb.Duration | undefined;
      setElapsedTime(value?: google_protobuf_duration_pb.Duration): void;

      hasExecutionTime(): boolean;
      clearExecutionTime(): void;
      getExecutionTime(): google_protobuf_duration_pb.Duration | undefined;
      setExecutionTime(value?: google_protobuf_duration_pb.Duration): void;

      getResultCount(): number;
      setResultCount(value: number): void;

      getResultSize(): number;
      setResultSize(value: number): void;

      getMutationCount(): number;
      setMutationCount(value: number): void;

      getSortCount(): number;
      setSortCount(value: number): void;

      getErrorCount(): number;
      setErrorCount(value: number): void;

      getWarningCount(): number;
      setWarningCount(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Metrics.AsObject;
      static toObject(includeInstance: boolean, msg: Metrics): Metrics.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Metrics, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Metrics;
      static deserializeBinaryFromReader(message: Metrics, reader: jspb.BinaryReader): Metrics;
    }

    export namespace Metrics {
      export type AsObject = {
        elapsedTime?: google_protobuf_duration_pb.Duration.AsObject,
        executionTime?: google_protobuf_duration_pb.Duration.AsObject,
        resultCount: number,
        resultSize: number,
        mutationCount: number,
        sortCount: number,
        errorCount: number,
        warningCount: number,
      }
    }

    export interface MetaDataStatusMap {
      RUNNING: 0;
      SUCCESS: 1;
      ERRORS: 2;
      COMPLETED: 3;
      STOPPED: 4;
      TIMEOUT: 5;
      CLOSED: 6;
      FATAL: 7;
      ABORTED: 8;
      UNKNOWN: 9;
    }

    export const MetaDataStatus: MetaDataStatusMap;
  }
}

