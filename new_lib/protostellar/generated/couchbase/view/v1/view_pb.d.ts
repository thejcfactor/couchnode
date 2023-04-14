// package: couchbase.view.v1
// file: couchbase/view/v1/view.proto

import * as jspb from "google-protobuf";

export class ViewQueryRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): void;

  getDesignDocumentName(): string;
  setDesignDocumentName(value: string): void;

  getViewName(): string;
  setViewName(value: string): void;

  hasSkip(): boolean;
  clearSkip(): void;
  getSkip(): number;
  setSkip(value: number): void;

  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): number;
  setLimit(value: number): void;

  hasScanConsistency(): boolean;
  clearScanConsistency(): void;
  getScanConsistency(): ViewQueryRequest.ScanConsistencyMap[keyof ViewQueryRequest.ScanConsistencyMap];
  setScanConsistency(value: ViewQueryRequest.ScanConsistencyMap[keyof ViewQueryRequest.ScanConsistencyMap]): void;

  hasReduce(): boolean;
  clearReduce(): void;
  getReduce(): boolean;
  setReduce(value: boolean): void;

  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): boolean;
  setGroup(value: boolean): void;

  hasGroupLevel(): boolean;
  clearGroupLevel(): void;
  getGroupLevel(): number;
  setGroupLevel(value: number): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): void;

  clearKeysList(): void;
  getKeysList(): Array<Uint8Array | string>;
  getKeysList_asU8(): Array<Uint8Array>;
  getKeysList_asB64(): Array<string>;
  setKeysList(value: Array<Uint8Array | string>): void;
  addKeys(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasStartKey(): boolean;
  clearStartKey(): void;
  getStartKey(): Uint8Array | string;
  getStartKey_asU8(): Uint8Array;
  getStartKey_asB64(): string;
  setStartKey(value: Uint8Array | string): void;

  hasEndKey(): boolean;
  clearEndKey(): void;
  getEndKey(): Uint8Array | string;
  getEndKey_asU8(): Uint8Array;
  getEndKey_asB64(): string;
  setEndKey(value: Uint8Array | string): void;

  hasInclusiveEnd(): boolean;
  clearInclusiveEnd(): void;
  getInclusiveEnd(): boolean;
  setInclusiveEnd(value: boolean): void;

  hasStartKeyDocId(): boolean;
  clearStartKeyDocId(): void;
  getStartKeyDocId(): string;
  setStartKeyDocId(value: string): void;

  hasEndKeyDocId(): boolean;
  clearEndKeyDocId(): void;
  getEndKeyDocId(): string;
  setEndKeyDocId(value: string): void;

  hasOnError(): boolean;
  clearOnError(): void;
  getOnError(): ViewQueryRequest.ErrorModeMap[keyof ViewQueryRequest.ErrorModeMap];
  setOnError(value: ViewQueryRequest.ErrorModeMap[keyof ViewQueryRequest.ErrorModeMap]): void;

  hasDebug(): boolean;
  clearDebug(): void;
  getDebug(): boolean;
  setDebug(value: boolean): void;

  hasNamespace(): boolean;
  clearNamespace(): void;
  getNamespace(): ViewQueryRequest.NamespaceMap[keyof ViewQueryRequest.NamespaceMap];
  setNamespace(value: ViewQueryRequest.NamespaceMap[keyof ViewQueryRequest.NamespaceMap]): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): ViewQueryRequest.OrderMap[keyof ViewQueryRequest.OrderMap];
  setOrder(value: ViewQueryRequest.OrderMap[keyof ViewQueryRequest.OrderMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ViewQueryRequest): ViewQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewQueryRequest;
  static deserializeBinaryFromReader(message: ViewQueryRequest, reader: jspb.BinaryReader): ViewQueryRequest;
}

export namespace ViewQueryRequest {
  export type AsObject = {
    bucketName: string,
    designDocumentName: string,
    viewName: string,
    skip: number,
    limit: number,
    scanConsistency: ViewQueryRequest.ScanConsistencyMap[keyof ViewQueryRequest.ScanConsistencyMap],
    reduce: boolean,
    group: boolean,
    groupLevel: number,
    key: Uint8Array | string,
    keysList: Array<Uint8Array | string>,
    startKey: Uint8Array | string,
    endKey: Uint8Array | string,
    inclusiveEnd: boolean,
    startKeyDocId: string,
    endKeyDocId: string,
    onError: ViewQueryRequest.ErrorModeMap[keyof ViewQueryRequest.ErrorModeMap],
    debug: boolean,
    namespace: ViewQueryRequest.NamespaceMap[keyof ViewQueryRequest.NamespaceMap],
    order: ViewQueryRequest.OrderMap[keyof ViewQueryRequest.OrderMap],
  }

  export interface ScanConsistencyMap {
    SCAN_CONSISTENCY_NOT_BOUNDED: 0;
    SCAN_CONSISTENCY_REQUEST_PLUS: 1;
    SCAN_CONSISTENCY_UPDATE_AFTER: 2;
  }

  export const ScanConsistency: ScanConsistencyMap;

  export interface ErrorModeMap {
    ERROR_MODE_CONTINUE: 0;
    ERROR_MODE_STOP: 1;
  }

  export const ErrorMode: ErrorModeMap;

  export interface NamespaceMap {
    NAMESPACE_PRODUCTION: 0;
    NAMESPACE_DEVELOPMENT: 1;
  }

  export const Namespace: NamespaceMap;

  export interface OrderMap {
    ORDER_ASCENDING: 0;
    ORDER_DESCENDING: 1;
  }

  export const Order: OrderMap;
}

export class ViewQueryResponse extends jspb.Message {
  clearRowsList(): void;
  getRowsList(): Array<ViewQueryResponse.Row>;
  setRowsList(value: Array<ViewQueryResponse.Row>): void;
  addRows(value?: ViewQueryResponse.Row, index?: number): ViewQueryResponse.Row;

  hasMetaData(): boolean;
  clearMetaData(): void;
  getMetaData(): ViewQueryResponse.MetaData | undefined;
  setMetaData(value?: ViewQueryResponse.MetaData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewQueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ViewQueryResponse): ViewQueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewQueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewQueryResponse;
  static deserializeBinaryFromReader(message: ViewQueryResponse, reader: jspb.BinaryReader): ViewQueryResponse;
}

export namespace ViewQueryResponse {
  export type AsObject = {
    rowsList: Array<ViewQueryResponse.Row.AsObject>,
    metaData?: ViewQueryResponse.MetaData.AsObject,
  }

  export class Row extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): void;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Row.AsObject;
    static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Row;
    static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
  }

  export namespace Row {
    export type AsObject = {
      id: string,
      key: Uint8Array | string,
      value: Uint8Array | string,
    }
  }

  export class MetaData extends jspb.Message {
    getTotalRows(): number;
    setTotalRows(value: number): void;

    getDebug(): Uint8Array | string;
    getDebug_asU8(): Uint8Array;
    getDebug_asB64(): string;
    setDebug(value: Uint8Array | string): void;

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
      totalRows: number,
      debug: Uint8Array | string,
    }
  }
}

