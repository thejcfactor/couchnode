// package: couchbase.routing.v1
// file: couchbase/routing/v1/routing.proto

import * as jspb from "google-protobuf";

export class RoutingEndpoint extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getServerGroup(): string;
  setServerGroup(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoutingEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: RoutingEndpoint): RoutingEndpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoutingEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoutingEndpoint;
  static deserializeBinaryFromReader(message: RoutingEndpoint, reader: jspb.BinaryReader): RoutingEndpoint;
}

export namespace RoutingEndpoint {
  export type AsObject = {
    id: string,
    serverGroup: string,
    address: string,
  }
}

export class DataRoutingEndpoint extends jspb.Message {
  getEndpointIdx(): number;
  setEndpointIdx(value: number): void;

  clearLocalVbucketsList(): void;
  getLocalVbucketsList(): Array<number>;
  setLocalVbucketsList(value: Array<number>): void;
  addLocalVbuckets(value: number, index?: number): number;

  clearGroupVbucketsList(): void;
  getGroupVbucketsList(): Array<number>;
  setGroupVbucketsList(value: Array<number>): void;
  addGroupVbuckets(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataRoutingEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: DataRoutingEndpoint): DataRoutingEndpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataRoutingEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataRoutingEndpoint;
  static deserializeBinaryFromReader(message: DataRoutingEndpoint, reader: jspb.BinaryReader): DataRoutingEndpoint;
}

export namespace DataRoutingEndpoint {
  export type AsObject = {
    endpointIdx: number,
    localVbucketsList: Array<number>,
    groupVbucketsList: Array<number>,
  }
}

export class VbucketDataRoutingStrategy extends jspb.Message {
  clearEndpointsList(): void;
  getEndpointsList(): Array<DataRoutingEndpoint>;
  setEndpointsList(value: Array<DataRoutingEndpoint>): void;
  addEndpoints(value?: DataRoutingEndpoint, index?: number): DataRoutingEndpoint;

  getNumVbuckets(): number;
  setNumVbuckets(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VbucketDataRoutingStrategy.AsObject;
  static toObject(includeInstance: boolean, msg: VbucketDataRoutingStrategy): VbucketDataRoutingStrategy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VbucketDataRoutingStrategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VbucketDataRoutingStrategy;
  static deserializeBinaryFromReader(message: VbucketDataRoutingStrategy, reader: jspb.BinaryReader): VbucketDataRoutingStrategy;
}

export namespace VbucketDataRoutingStrategy {
  export type AsObject = {
    endpointsList: Array<DataRoutingEndpoint.AsObject>,
    numVbuckets: number,
  }
}

export class QueryRoutingEndpoint extends jspb.Message {
  getEndpointIdx(): number;
  setEndpointIdx(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRoutingEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRoutingEndpoint): QueryRoutingEndpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRoutingEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRoutingEndpoint;
  static deserializeBinaryFromReader(message: QueryRoutingEndpoint, reader: jspb.BinaryReader): QueryRoutingEndpoint;
}

export namespace QueryRoutingEndpoint {
  export type AsObject = {
    endpointIdx: number,
  }
}

export class QueryRouting extends jspb.Message {
  clearEndpointsList(): void;
  getEndpointsList(): Array<QueryRoutingEndpoint>;
  setEndpointsList(value: Array<QueryRoutingEndpoint>): void;
  addEndpoints(value?: QueryRoutingEndpoint, index?: number): QueryRoutingEndpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRouting.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRouting): QueryRouting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryRouting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRouting;
  static deserializeBinaryFromReader(message: QueryRouting, reader: jspb.BinaryReader): QueryRouting;
}

export namespace QueryRouting {
  export type AsObject = {
    endpointsList: Array<QueryRoutingEndpoint.AsObject>,
  }
}

export class ViewsRoutingEndpoint extends jspb.Message {
  getEndpointIdx(): number;
  setEndpointIdx(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewsRoutingEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: ViewsRoutingEndpoint): ViewsRoutingEndpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewsRoutingEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewsRoutingEndpoint;
  static deserializeBinaryFromReader(message: ViewsRoutingEndpoint, reader: jspb.BinaryReader): ViewsRoutingEndpoint;
}

export namespace ViewsRoutingEndpoint {
  export type AsObject = {
    endpointIdx: number,
  }
}

export class ViewsRouting extends jspb.Message {
  clearEndpointsList(): void;
  getEndpointsList(): Array<ViewsRoutingEndpoint>;
  setEndpointsList(value: Array<ViewsRoutingEndpoint>): void;
  addEndpoints(value?: ViewsRoutingEndpoint, index?: number): ViewsRoutingEndpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ViewsRouting.AsObject;
  static toObject(includeInstance: boolean, msg: ViewsRouting): ViewsRouting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ViewsRouting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ViewsRouting;
  static deserializeBinaryFromReader(message: ViewsRouting, reader: jspb.BinaryReader): ViewsRouting;
}

export namespace ViewsRouting {
  export type AsObject = {
    endpointsList: Array<ViewsRoutingEndpoint.AsObject>,
  }
}

export class WatchRoutingRequest extends jspb.Message {
  hasBucketName(): boolean;
  clearBucketName(): void;
  getBucketName(): string;
  setBucketName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchRoutingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WatchRoutingRequest): WatchRoutingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchRoutingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchRoutingRequest;
  static deserializeBinaryFromReader(message: WatchRoutingRequest, reader: jspb.BinaryReader): WatchRoutingRequest;
}

export namespace WatchRoutingRequest {
  export type AsObject = {
    bucketName: string,
  }
}

export class WatchRoutingResponse extends jspb.Message {
  clearRevisionList(): void;
  getRevisionList(): Array<number>;
  setRevisionList(value: Array<number>): void;
  addRevision(value: number, index?: number): number;

  clearEndpointsList(): void;
  getEndpointsList(): Array<RoutingEndpoint>;
  setEndpointsList(value: Array<RoutingEndpoint>): void;
  addEndpoints(value?: RoutingEndpoint, index?: number): RoutingEndpoint;

  hasVbucketDataRouting(): boolean;
  clearVbucketDataRouting(): void;
  getVbucketDataRouting(): VbucketDataRoutingStrategy | undefined;
  setVbucketDataRouting(value?: VbucketDataRoutingStrategy): void;

  hasQueryRouting(): boolean;
  clearQueryRouting(): void;
  getQueryRouting(): QueryRouting | undefined;
  setQueryRouting(value?: QueryRouting): void;

  hasViewsRouting(): boolean;
  clearViewsRouting(): void;
  getViewsRouting(): ViewsRouting | undefined;
  setViewsRouting(value?: ViewsRouting): void;

  getDataRoutingCase(): WatchRoutingResponse.DataRoutingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WatchRoutingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WatchRoutingResponse): WatchRoutingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WatchRoutingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WatchRoutingResponse;
  static deserializeBinaryFromReader(message: WatchRoutingResponse, reader: jspb.BinaryReader): WatchRoutingResponse;
}

export namespace WatchRoutingResponse {
  export type AsObject = {
    revisionList: Array<number>,
    endpointsList: Array<RoutingEndpoint.AsObject>,
    vbucketDataRouting?: VbucketDataRoutingStrategy.AsObject,
    queryRouting?: QueryRouting.AsObject,
    viewsRouting?: ViewsRouting.AsObject,
  }

  export enum DataRoutingCase {
    DATA_ROUTING_NOT_SET = 0,
    VBUCKET_DATA_ROUTING = 3,
  }
}

