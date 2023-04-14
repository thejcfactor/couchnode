// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.query.v1
// file: couchbase/query/v1/query.proto

import * as couchbase_query_v1_query_pb from "../../../couchbase/query/v1/query_pb";
import * as grpc from "grpc";

interface IQueryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  query: grpc.MethodDefinition<couchbase_query_v1_query_pb.QueryRequest, couchbase_query_v1_query_pb.QueryResponse>;
}

export const QueryServiceService: IQueryServiceService;

export interface IQueryServiceServer extends grpc.UntypedServiceImplementation {
  query: grpc.handleServerStreamingCall<couchbase_query_v1_query_pb.QueryRequest, couchbase_query_v1_query_pb.QueryResponse>;
}

export class QueryServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  query(argument: couchbase_query_v1_query_pb.QueryRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_query_v1_query_pb.QueryResponse>;
  query(argument: couchbase_query_v1_query_pb.QueryRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_query_v1_query_pb.QueryResponse>;
}
