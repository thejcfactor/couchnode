// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.admin.bucket.v1
// file: couchbase/admin/bucket/v1/bucket.proto

import * as couchbase_admin_bucket_v1_bucket_pb from "../../../../couchbase/admin/bucket/v1/bucket_pb";
import * as grpc from "grpc";

interface IBucketAdminServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listBuckets: grpc.MethodDefinition<couchbase_admin_bucket_v1_bucket_pb.ListBucketsRequest, couchbase_admin_bucket_v1_bucket_pb.ListBucketsResponse>;
  createBucket: grpc.MethodDefinition<couchbase_admin_bucket_v1_bucket_pb.CreateBucketRequest, couchbase_admin_bucket_v1_bucket_pb.CreateBucketResponse>;
  updateBucket: grpc.MethodDefinition<couchbase_admin_bucket_v1_bucket_pb.UpdateBucketRequest, couchbase_admin_bucket_v1_bucket_pb.UpdateBucketResponse>;
  deleteBucket: grpc.MethodDefinition<couchbase_admin_bucket_v1_bucket_pb.DeleteBucketRequest, couchbase_admin_bucket_v1_bucket_pb.DeleteBucketResponse>;
}

export const BucketAdminServiceService: IBucketAdminServiceService;

export interface IBucketAdminServiceServer extends grpc.UntypedServiceImplementation {
  listBuckets: grpc.handleUnaryCall<couchbase_admin_bucket_v1_bucket_pb.ListBucketsRequest, couchbase_admin_bucket_v1_bucket_pb.ListBucketsResponse>;
  createBucket: grpc.handleUnaryCall<couchbase_admin_bucket_v1_bucket_pb.CreateBucketRequest, couchbase_admin_bucket_v1_bucket_pb.CreateBucketResponse>;
  updateBucket: grpc.handleUnaryCall<couchbase_admin_bucket_v1_bucket_pb.UpdateBucketRequest, couchbase_admin_bucket_v1_bucket_pb.UpdateBucketResponse>;
  deleteBucket: grpc.handleUnaryCall<couchbase_admin_bucket_v1_bucket_pb.DeleteBucketRequest, couchbase_admin_bucket_v1_bucket_pb.DeleteBucketResponse>;
}

export class BucketAdminServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listBuckets(argument: couchbase_admin_bucket_v1_bucket_pb.ListBucketsRequest, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.ListBucketsResponse>): grpc.ClientUnaryCall;
  listBuckets(argument: couchbase_admin_bucket_v1_bucket_pb.ListBucketsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.ListBucketsResponse>): grpc.ClientUnaryCall;
  listBuckets(argument: couchbase_admin_bucket_v1_bucket_pb.ListBucketsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.ListBucketsResponse>): grpc.ClientUnaryCall;
  createBucket(argument: couchbase_admin_bucket_v1_bucket_pb.CreateBucketRequest, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.CreateBucketResponse>): grpc.ClientUnaryCall;
  createBucket(argument: couchbase_admin_bucket_v1_bucket_pb.CreateBucketRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.CreateBucketResponse>): grpc.ClientUnaryCall;
  createBucket(argument: couchbase_admin_bucket_v1_bucket_pb.CreateBucketRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.CreateBucketResponse>): grpc.ClientUnaryCall;
  updateBucket(argument: couchbase_admin_bucket_v1_bucket_pb.UpdateBucketRequest, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.UpdateBucketResponse>): grpc.ClientUnaryCall;
  updateBucket(argument: couchbase_admin_bucket_v1_bucket_pb.UpdateBucketRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.UpdateBucketResponse>): grpc.ClientUnaryCall;
  updateBucket(argument: couchbase_admin_bucket_v1_bucket_pb.UpdateBucketRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.UpdateBucketResponse>): grpc.ClientUnaryCall;
  deleteBucket(argument: couchbase_admin_bucket_v1_bucket_pb.DeleteBucketRequest, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.DeleteBucketResponse>): grpc.ClientUnaryCall;
  deleteBucket(argument: couchbase_admin_bucket_v1_bucket_pb.DeleteBucketRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.DeleteBucketResponse>): grpc.ClientUnaryCall;
  deleteBucket(argument: couchbase_admin_bucket_v1_bucket_pb.DeleteBucketRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_admin_bucket_v1_bucket_pb.DeleteBucketResponse>): grpc.ClientUnaryCall;
}
