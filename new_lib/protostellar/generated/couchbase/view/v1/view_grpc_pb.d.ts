// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.view.v1
// file: couchbase/view/v1/view.proto

import * as couchbase_view_v1_view_pb from "../../../couchbase/view/v1/view_pb";
import * as grpc from "grpc";

interface IViewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  viewQuery: grpc.MethodDefinition<couchbase_view_v1_view_pb.ViewQueryRequest, couchbase_view_v1_view_pb.ViewQueryResponse>;
}

export const ViewServiceService: IViewServiceService;

export interface IViewServiceServer extends grpc.UntypedServiceImplementation {
  viewQuery: grpc.handleServerStreamingCall<couchbase_view_v1_view_pb.ViewQueryRequest, couchbase_view_v1_view_pb.ViewQueryResponse>;
}

export class ViewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  viewQuery(argument: couchbase_view_v1_view_pb.ViewQueryRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_view_v1_view_pb.ViewQueryResponse>;
  viewQuery(argument: couchbase_view_v1_view_pb.ViewQueryRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_view_v1_view_pb.ViewQueryResponse>;
}
