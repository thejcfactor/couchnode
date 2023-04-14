// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.admin.collection.v1
// file: couchbase/admin/collection/v1/collection.proto

import * as couchbase_admin_collection_v1_collection_pb from "../../../../couchbase/admin/collection/v1/collection_pb";
import * as grpc from "grpc";

interface ICollectionAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listCollections: grpc.MethodDefinition<couchbase_admin_collection_v1_collection_pb.ListCollectionsRequest, couchbase_admin_collection_v1_collection_pb.ListCollectionsResponse>;
  createScope: grpc.MethodDefinition<couchbase_admin_collection_v1_collection_pb.CreateScopeRequest, couchbase_admin_collection_v1_collection_pb.CreateScopeResponse>;
  deleteScope: grpc.MethodDefinition<couchbase_admin_collection_v1_collection_pb.DeleteScopeRequest, couchbase_admin_collection_v1_collection_pb.DeleteScopeResponse>;
  createCollection: grpc.MethodDefinition<couchbase_admin_collection_v1_collection_pb.CreateCollectionRequest, couchbase_admin_collection_v1_collection_pb.CreateCollectionResponse>;
  deleteCollection: grpc.MethodDefinition<couchbase_admin_collection_v1_collection_pb.DeleteCollectionRequest, couchbase_admin_collection_v1_collection_pb.DeleteCollectionResponse>;
}

export const CollectionAdminServiceService: ICollectionAdminServiceService;

export interface ICollectionAdminServiceServer extends grpc.UntypedServiceImplementation {
  listCollections: grpc.handleUnaryCall<couchbase_admin_collection_v1_collection_pb.ListCollectionsRequest, couchbase_admin_collection_v1_collection_pb.ListCollectionsResponse>;
  createScope: grpc.handleUnaryCall<couchbase_admin_collection_v1_collection_pb.CreateScopeRequest, couchbase_admin_collection_v1_collection_pb.CreateScopeResponse>;
  deleteScope: grpc.handleUnaryCall<couchbase_admin_collection_v1_collection_pb.DeleteScopeRequest, couchbase_admin_collection_v1_collection_pb.DeleteScopeResponse>;
  createCollection: grpc.handleUnaryCall<couchbase_admin_collection_v1_collection_pb.CreateCollectionRequest, couchbase_admin_collection_v1_collection_pb.CreateCollectionResponse>;
  deleteCollection: grpc.handleUnaryCall<couchbase_admin_collection_v1_collection_pb.DeleteCollectionRequest, couchbase_admin_collection_v1_collection_pb.DeleteCollectionResponse>;
}

export class CollectionAdminServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listCollections(argument: couchbase_admin_collection_v1_collection_pb.ListCollectionsRequest, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.ListCollectionsResponse>): grpc.ClientUnaryCall;
  listCollections(argument: couchbase_admin_collection_v1_collection_pb.ListCollectionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.ListCollectionsResponse>): grpc.ClientUnaryCall;
  listCollections(argument: couchbase_admin_collection_v1_collection_pb.ListCollectionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.ListCollectionsResponse>): grpc.ClientUnaryCall;
  createScope(argument: couchbase_admin_collection_v1_collection_pb.CreateScopeRequest, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.CreateScopeResponse>): grpc.ClientUnaryCall;
  createScope(argument: couchbase_admin_collection_v1_collection_pb.CreateScopeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.CreateScopeResponse>): grpc.ClientUnaryCall;
  createScope(argument: couchbase_admin_collection_v1_collection_pb.CreateScopeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.CreateScopeResponse>): grpc.ClientUnaryCall;
  deleteScope(argument: couchbase_admin_collection_v1_collection_pb.DeleteScopeRequest, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.DeleteScopeResponse>): grpc.ClientUnaryCall;
  deleteScope(argument: couchbase_admin_collection_v1_collection_pb.DeleteScopeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.DeleteScopeResponse>): grpc.ClientUnaryCall;
  deleteScope(argument: couchbase_admin_collection_v1_collection_pb.DeleteScopeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.DeleteScopeResponse>): grpc.ClientUnaryCall;
  createCollection(argument: couchbase_admin_collection_v1_collection_pb.CreateCollectionRequest, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.CreateCollectionResponse>): grpc.ClientUnaryCall;
  createCollection(argument: couchbase_admin_collection_v1_collection_pb.CreateCollectionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.CreateCollectionResponse>): grpc.ClientUnaryCall;
  createCollection(argument: couchbase_admin_collection_v1_collection_pb.CreateCollectionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.CreateCollectionResponse>): grpc.ClientUnaryCall;
  deleteCollection(argument: couchbase_admin_collection_v1_collection_pb.DeleteCollectionRequest, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.DeleteCollectionResponse>): grpc.ClientUnaryCall;
  deleteCollection(argument: couchbase_admin_collection_v1_collection_pb.DeleteCollectionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.DeleteCollectionResponse>): grpc.ClientUnaryCall;
  deleteCollection(argument: couchbase_admin_collection_v1_collection_pb.DeleteCollectionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_collection_v1_collection_pb.DeleteCollectionResponse>): grpc.ClientUnaryCall;
}
