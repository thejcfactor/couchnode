// package: couchbase.analytics.v1
// file: couchbase/analytics/v1/analytics.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class AnalyticsQueryRequest extends jspb.Message {
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

  hasClientContextId(): boolean;
  clearClientContextId(): void;
  getClientContextId(): string;
  setClientContextId(value: string): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): boolean;
  setPriority(value: boolean): void;

  hasScanConsistency(): boolean;
  clearScanConsistency(): void;
  getScanConsistency(): AnalyticsQueryRequest.ScanConsistencyMap[keyof AnalyticsQueryRequest.ScanConsistencyMap];
  setScanConsistency(value: AnalyticsQueryRequest.ScanConsistencyMap[keyof AnalyticsQueryRequest.ScanConsistencyMap]): void;

  clearPositionalParametersList(): void;
  getPositionalParametersList(): Array<Uint8Array | string>;
  getPositionalParametersList_asU8(): Array<Uint8Array>;
  getPositionalParametersList_asB64(): Array<string>;
  setPositionalParametersList(value: Array<Uint8Array | string>): void;
  addPositionalParameters(value: Uint8Array | string, index?: number): Uint8Array | string;

  getNamedParametersMap(): jspb.Map<string, Uint8Array | string>;
  clearNamedParametersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyticsQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyticsQueryRequest): AnalyticsQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnalyticsQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyticsQueryRequest;
  static deserializeBinaryFromReader(message: AnalyticsQueryRequest, reader: jspb.BinaryReader): AnalyticsQueryRequest;
}

export namespace AnalyticsQueryRequest {
  export type AsObject = {
    bucketName: string,
    scopeName: string,
    statement: string,
    readOnly: boolean,
    clientContextId: string,
    priority: boolean,
    scanConsistency: AnalyticsQueryRequest.ScanConsistencyMap[keyof AnalyticsQueryRequest.ScanConsistencyMap],
    positionalParametersList: Array<Uint8Array | string>,
    namedParametersMap: Array<[string, Uint8Array | string]>,
  }

  export interface ScanConsistencyMap {
    SCAN_CONSISTENCY_NOT_BOUNDED: 0;
    SCAN_CONSISTENCY_REQUEST_PLUS: 1;
  }

  export const ScanConsistency: ScanConsistencyMap;
}

export class AnalyticsQueryResponse extends jspb.Message {
  clearRowsList(): void;
  getRowsList(): Array<Uint8Array | string>;
  getRowsList_asU8(): Array<Uint8Array>;
  getRowsList_asB64(): Array<string>;
  setRowsList(value: Array<Uint8Array | string>): void;
  addRows(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasMetaData(): boolean;
  clearMetaData(): void;
  getMetaData(): AnalyticsQueryResponse.MetaData | undefined;
  setMetaData(value?: AnalyticsQueryResponse.MetaData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalyticsQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnalyticsQueryResponse): AnalyticsQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnalyticsQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalyticsQueryResponse;
  static deserializeBinaryFromReader(message: AnalyticsQueryResponse, reader: jspb.BinaryReader): AnalyticsQueryResponse;
}

export namespace AnalyticsQueryResponse {
  export type AsObject = {
    rowsList: Array<Uint8Array | string>,
    metaData?: AnalyticsQueryResponse.MetaData.AsObject,
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

    getProcessedObjects(): number;
    setProcessedObjects(value: number): void;

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
      processedObjects: number,
    }
  }

  export class MetaData extends jspb.Message {
    getRequestId(): string;
    setRequestId(value: string): void;

    getClientContextId(): string;
    setClientContextId(value: string): void;

    hasMetrics(): boolean;
    clearMetrics(): void;
    getMetrics(): AnalyticsQueryResponse.Metrics | undefined;
    setMetrics(value?: AnalyticsQueryResponse.Metrics): void;

    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): void;

    clearWarningsList(): void;
    getWarningsList(): Array<AnalyticsQueryResponse.MetaData.Warning>;
    setWarningsList(value: Array<AnalyticsQueryResponse.MetaData.Warning>): void;
    addWarnings(value?: AnalyticsQueryResponse.MetaData.Warning, index?: number): AnalyticsQueryResponse.MetaData.Warning;

    getStatus(): string;
    setStatus(value: string): void;

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
      metrics?: AnalyticsQueryResponse.Metrics.AsObject,
      signature: Uint8Array | string,
      warningsList: Array<AnalyticsQueryResponse.MetaData.Warning.AsObject>,
      status: string,
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
  }
}

