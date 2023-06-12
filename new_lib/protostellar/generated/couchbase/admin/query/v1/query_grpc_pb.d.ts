// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.admin.query.v1
// file: couchbase/admin/query/v1/query.proto

import * as couchbase_admin_query_v1_query_pb from "../../../../couchbase/admin/query/v1/query_pb";
import * as grpc from "grpc";

interface IQueryAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAllIndexes: grpc.MethodDefinition<couchbase_admin_query_v1_query_pb.GetAllIndexesRequest, couchbase_admin_query_v1_query_pb.GetAllIndexesResponse>;
  createPrimaryIndex: grpc.MethodDefinition<couchbase_admin_query_v1_query_pb.CreatePrimaryIndexRequest, couchbase_admin_query_v1_query_pb.CreatePrimaryIndexResponse>;
  createIndex: grpc.MethodDefinition<couchbase_admin_query_v1_query_pb.CreateIndexRequest, couchbase_admin_query_v1_query_pb.CreateIndexResponse>;
  dropPrimaryIndex: grpc.MethodDefinition<couchbase_admin_query_v1_query_pb.DropPrimaryIndexRequest, couchbase_admin_query_v1_query_pb.DropPrimaryIndexResponse>;
  dropIndex: grpc.MethodDefinition<couchbase_admin_query_v1_query_pb.DropIndexRequest, couchbase_admin_query_v1_query_pb.DropIndexResponse>;
  buildDeferredIndexes: grpc.MethodDefinition<couchbase_admin_query_v1_query_pb.BuildDeferredIndexesRequest, couchbase_admin_query_v1_query_pb.BuildDeferredIndexesResponse>;
}

export const QueryAdminServiceService: IQueryAdminServiceService;

export interface IQueryAdminServiceServer extends grpc.UntypedServiceImplementation {
  getAllIndexes: grpc.handleUnaryCall<couchbase_admin_query_v1_query_pb.GetAllIndexesRequest, couchbase_admin_query_v1_query_pb.GetAllIndexesResponse>;
  createPrimaryIndex: grpc.handleUnaryCall<couchbase_admin_query_v1_query_pb.CreatePrimaryIndexRequest, couchbase_admin_query_v1_query_pb.CreatePrimaryIndexResponse>;
  createIndex: grpc.handleUnaryCall<couchbase_admin_query_v1_query_pb.CreateIndexRequest, couchbase_admin_query_v1_query_pb.CreateIndexResponse>;
  dropPrimaryIndex: grpc.handleUnaryCall<couchbase_admin_query_v1_query_pb.DropPrimaryIndexRequest, couchbase_admin_query_v1_query_pb.DropPrimaryIndexResponse>;
  dropIndex: grpc.handleUnaryCall<couchbase_admin_query_v1_query_pb.DropIndexRequest, couchbase_admin_query_v1_query_pb.DropIndexResponse>;
  buildDeferredIndexes: grpc.handleUnaryCall<couchbase_admin_query_v1_query_pb.BuildDeferredIndexesRequest, couchbase_admin_query_v1_query_pb.BuildDeferredIndexesResponse>;
}

export class QueryAdminServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAllIndexes(argument: couchbase_admin_query_v1_query_pb.GetAllIndexesRequest, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.GetAllIndexesResponse>): grpc.ClientUnaryCall;
  getAllIndexes(argument: couchbase_admin_query_v1_query_pb.GetAllIndexesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.GetAllIndexesResponse>): grpc.ClientUnaryCall;
  getAllIndexes(argument: couchbase_admin_query_v1_query_pb.GetAllIndexesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.GetAllIndexesResponse>): grpc.ClientUnaryCall;
  createPrimaryIndex(argument: couchbase_admin_query_v1_query_pb.CreatePrimaryIndexRequest, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.CreatePrimaryIndexResponse>): grpc.ClientUnaryCall;
  createPrimaryIndex(argument: couchbase_admin_query_v1_query_pb.CreatePrimaryIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.CreatePrimaryIndexResponse>): grpc.ClientUnaryCall;
  createPrimaryIndex(argument: couchbase_admin_query_v1_query_pb.CreatePrimaryIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.CreatePrimaryIndexResponse>): grpc.ClientUnaryCall;
  createIndex(argument: couchbase_admin_query_v1_query_pb.CreateIndexRequest, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.CreateIndexResponse>): grpc.ClientUnaryCall;
  createIndex(argument: couchbase_admin_query_v1_query_pb.CreateIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.CreateIndexResponse>): grpc.ClientUnaryCall;
  createIndex(argument: couchbase_admin_query_v1_query_pb.CreateIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.CreateIndexResponse>): grpc.ClientUnaryCall;
  dropPrimaryIndex(argument: couchbase_admin_query_v1_query_pb.DropPrimaryIndexRequest, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.DropPrimaryIndexResponse>): grpc.ClientUnaryCall;
  dropPrimaryIndex(argument: couchbase_admin_query_v1_query_pb.DropPrimaryIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.DropPrimaryIndexResponse>): grpc.ClientUnaryCall;
  dropPrimaryIndex(argument: couchbase_admin_query_v1_query_pb.DropPrimaryIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.DropPrimaryIndexResponse>): grpc.ClientUnaryCall;
  dropIndex(argument: couchbase_admin_query_v1_query_pb.DropIndexRequest, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.DropIndexResponse>): grpc.ClientUnaryCall;
  dropIndex(argument: couchbase_admin_query_v1_query_pb.DropIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.DropIndexResponse>): grpc.ClientUnaryCall;
  dropIndex(argument: couchbase_admin_query_v1_query_pb.DropIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.DropIndexResponse>): grpc.ClientUnaryCall;
  buildDeferredIndexes(argument: couchbase_admin_query_v1_query_pb.BuildDeferredIndexesRequest, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.BuildDeferredIndexesResponse>): grpc.ClientUnaryCall;
  buildDeferredIndexes(argument: couchbase_admin_query_v1_query_pb.BuildDeferredIndexesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.BuildDeferredIndexesResponse>): grpc.ClientUnaryCall;
  buildDeferredIndexes(argument: couchbase_admin_query_v1_query_pb.BuildDeferredIndexesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_query_v1_query_pb.BuildDeferredIndexesResponse>): grpc.ClientUnaryCall;
}
