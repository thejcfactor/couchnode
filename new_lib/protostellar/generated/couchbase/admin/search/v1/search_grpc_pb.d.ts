// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.admin.search.v1
// file: couchbase/admin/search/v1/search.proto

import * as couchbase_admin_search_v1_search_pb from "../../../../couchbase/admin/search/v1/search_pb";
import * as grpc from "grpc";

interface ISearchAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getIndex: grpc.MethodDefinition<couchbase_admin_search_v1_search_pb.GetIndexRequest, couchbase_admin_search_v1_search_pb.GetIndexResponse>;
  listIndexes: grpc.MethodDefinition<couchbase_admin_search_v1_search_pb.ListIndexesRequest, couchbase_admin_search_v1_search_pb.ListIndexesResponse>;
  upsertIndex: grpc.MethodDefinition<couchbase_admin_search_v1_search_pb.UpsertIndexRequest, couchbase_admin_search_v1_search_pb.UpsertIndexResponse>;
  deleteIndex: grpc.MethodDefinition<couchbase_admin_search_v1_search_pb.DeleteIndexRequest, couchbase_admin_search_v1_search_pb.DeleteIndexResponse>;
}

export const SearchAdminServiceService: ISearchAdminServiceService;

export interface ISearchAdminServiceServer extends grpc.UntypedServiceImplementation {
  getIndex: grpc.handleUnaryCall<couchbase_admin_search_v1_search_pb.GetIndexRequest, couchbase_admin_search_v1_search_pb.GetIndexResponse>;
  listIndexes: grpc.handleUnaryCall<couchbase_admin_search_v1_search_pb.ListIndexesRequest, couchbase_admin_search_v1_search_pb.ListIndexesResponse>;
  upsertIndex: grpc.handleUnaryCall<couchbase_admin_search_v1_search_pb.UpsertIndexRequest, couchbase_admin_search_v1_search_pb.UpsertIndexResponse>;
  deleteIndex: grpc.handleUnaryCall<couchbase_admin_search_v1_search_pb.DeleteIndexRequest, couchbase_admin_search_v1_search_pb.DeleteIndexResponse>;
}

export class SearchAdminServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getIndex(argument: couchbase_admin_search_v1_search_pb.GetIndexRequest, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.GetIndexResponse>): grpc.ClientUnaryCall;
  getIndex(argument: couchbase_admin_search_v1_search_pb.GetIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.GetIndexResponse>): grpc.ClientUnaryCall;
  getIndex(argument: couchbase_admin_search_v1_search_pb.GetIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.GetIndexResponse>): grpc.ClientUnaryCall;
  listIndexes(argument: couchbase_admin_search_v1_search_pb.ListIndexesRequest, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.ListIndexesResponse>): grpc.ClientUnaryCall;
  listIndexes(argument: couchbase_admin_search_v1_search_pb.ListIndexesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.ListIndexesResponse>): grpc.ClientUnaryCall;
  listIndexes(argument: couchbase_admin_search_v1_search_pb.ListIndexesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.ListIndexesResponse>): grpc.ClientUnaryCall;
  upsertIndex(argument: couchbase_admin_search_v1_search_pb.UpsertIndexRequest, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.UpsertIndexResponse>): grpc.ClientUnaryCall;
  upsertIndex(argument: couchbase_admin_search_v1_search_pb.UpsertIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.UpsertIndexResponse>): grpc.ClientUnaryCall;
  upsertIndex(argument: couchbase_admin_search_v1_search_pb.UpsertIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.UpsertIndexResponse>): grpc.ClientUnaryCall;
  deleteIndex(argument: couchbase_admin_search_v1_search_pb.DeleteIndexRequest, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.DeleteIndexResponse>): grpc.ClientUnaryCall;
  deleteIndex(argument: couchbase_admin_search_v1_search_pb.DeleteIndexRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.DeleteIndexResponse>): grpc.ClientUnaryCall;
  deleteIndex(argument: couchbase_admin_search_v1_search_pb.DeleteIndexRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_search_v1_search_pb.DeleteIndexResponse>): grpc.ClientUnaryCall;
}
