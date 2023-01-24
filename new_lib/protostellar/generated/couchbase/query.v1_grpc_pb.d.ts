// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.query.v1
// file: couchbase/query.v1.proto

import * as couchbase_query_v1_pb from "../couchbase/query.v1_pb";
import * as grpc from "grpc";

interface IQueryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  query: grpc.MethodDefinition<couchbase_query_v1_pb.QueryRequest, couchbase_query_v1_pb.QueryResponse>;
}

export const QueryService: IQueryService;

export interface IQueryServer extends grpc.UntypedServiceImplementation {
  query: grpc.handleServerStreamingCall<couchbase_query_v1_pb.QueryRequest, couchbase_query_v1_pb.QueryResponse>;
}

export class QueryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  query(argument: couchbase_query_v1_pb.QueryRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_query_v1_pb.QueryResponse>;
  query(argument: couchbase_query_v1_pb.QueryRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_query_v1_pb.QueryResponse>;
}
