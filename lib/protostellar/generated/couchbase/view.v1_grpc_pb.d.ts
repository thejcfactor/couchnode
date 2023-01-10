// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.view.v1
// file: couchbase/view.v1.proto

import * as couchbase_view_v1_pb from "../couchbase/view.v1_pb";
import * as grpc from "grpc";

interface IViewService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  viewQuery: grpc.MethodDefinition<couchbase_view_v1_pb.ViewQueryRequest, couchbase_view_v1_pb.ViewQueryResponse>;
}

export const ViewService: IViewService;

export interface IViewServer extends grpc.UntypedServiceImplementation {
  viewQuery: grpc.handleServerStreamingCall<couchbase_view_v1_pb.ViewQueryRequest, couchbase_view_v1_pb.ViewQueryResponse>;
}

export class ViewClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  viewQuery(argument: couchbase_view_v1_pb.ViewQueryRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_view_v1_pb.ViewQueryResponse>;
  viewQuery(argument: couchbase_view_v1_pb.ViewQueryRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_view_v1_pb.ViewQueryResponse>;
}
