// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_admin_bucket_v1_bucket_pb = require('../../../../couchbase/admin/bucket/v1/bucket_pb.js');
var couchbase_kv_v1_kv_pb = require('../../../../couchbase/kv/v1/kv_pb.js');

function serialize_couchbase_admin_bucket_v1_CreateBucketRequest(arg) {
  if (!(arg instanceof couchbase_admin_bucket_v1_bucket_pb.CreateBucketRequest)) {
    throw new Error('Expected argument of type couchbase.admin.bucket.v1.CreateBucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_bucket_v1_CreateBucketRequest(buffer_arg) {
  return couchbase_admin_bucket_v1_bucket_pb.CreateBucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_bucket_v1_CreateBucketResponse(arg) {
  if (!(arg instanceof couchbase_admin_bucket_v1_bucket_pb.CreateBucketResponse)) {
    throw new Error('Expected argument of type couchbase.admin.bucket.v1.CreateBucketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_bucket_v1_CreateBucketResponse(buffer_arg) {
  return couchbase_admin_bucket_v1_bucket_pb.CreateBucketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_bucket_v1_DeleteBucketRequest(arg) {
  if (!(arg instanceof couchbase_admin_bucket_v1_bucket_pb.DeleteBucketRequest)) {
    throw new Error('Expected argument of type couchbase.admin.bucket.v1.DeleteBucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_bucket_v1_DeleteBucketRequest(buffer_arg) {
  return couchbase_admin_bucket_v1_bucket_pb.DeleteBucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_bucket_v1_DeleteBucketResponse(arg) {
  if (!(arg instanceof couchbase_admin_bucket_v1_bucket_pb.DeleteBucketResponse)) {
    throw new Error('Expected argument of type couchbase.admin.bucket.v1.DeleteBucketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_bucket_v1_DeleteBucketResponse(buffer_arg) {
  return couchbase_admin_bucket_v1_bucket_pb.DeleteBucketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_bucket_v1_ListBucketsRequest(arg) {
  if (!(arg instanceof couchbase_admin_bucket_v1_bucket_pb.ListBucketsRequest)) {
    throw new Error('Expected argument of type couchbase.admin.bucket.v1.ListBucketsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_bucket_v1_ListBucketsRequest(buffer_arg) {
  return couchbase_admin_bucket_v1_bucket_pb.ListBucketsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_bucket_v1_ListBucketsResponse(arg) {
  if (!(arg instanceof couchbase_admin_bucket_v1_bucket_pb.ListBucketsResponse)) {
    throw new Error('Expected argument of type couchbase.admin.bucket.v1.ListBucketsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_bucket_v1_ListBucketsResponse(buffer_arg) {
  return couchbase_admin_bucket_v1_bucket_pb.ListBucketsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_bucket_v1_UpdateBucketRequest(arg) {
  if (!(arg instanceof couchbase_admin_bucket_v1_bucket_pb.UpdateBucketRequest)) {
    throw new Error('Expected argument of type couchbase.admin.bucket.v1.UpdateBucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_bucket_v1_UpdateBucketRequest(buffer_arg) {
  return couchbase_admin_bucket_v1_bucket_pb.UpdateBucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_bucket_v1_UpdateBucketResponse(arg) {
  if (!(arg instanceof couchbase_admin_bucket_v1_bucket_pb.UpdateBucketResponse)) {
    throw new Error('Expected argument of type couchbase.admin.bucket.v1.UpdateBucketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_bucket_v1_UpdateBucketResponse(buffer_arg) {
  return couchbase_admin_bucket_v1_bucket_pb.UpdateBucketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BucketAdminServiceService = exports.BucketAdminServiceService = {
  listBuckets: {
    path: '/couchbase.admin.bucket.v1.BucketAdminService/ListBuckets',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_bucket_v1_bucket_pb.ListBucketsRequest,
    responseType: couchbase_admin_bucket_v1_bucket_pb.ListBucketsResponse,
    requestSerialize: serialize_couchbase_admin_bucket_v1_ListBucketsRequest,
    requestDeserialize: deserialize_couchbase_admin_bucket_v1_ListBucketsRequest,
    responseSerialize: serialize_couchbase_admin_bucket_v1_ListBucketsResponse,
    responseDeserialize: deserialize_couchbase_admin_bucket_v1_ListBucketsResponse,
  },
  createBucket: {
    path: '/couchbase.admin.bucket.v1.BucketAdminService/CreateBucket',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_bucket_v1_bucket_pb.CreateBucketRequest,
    responseType: couchbase_admin_bucket_v1_bucket_pb.CreateBucketResponse,
    requestSerialize: serialize_couchbase_admin_bucket_v1_CreateBucketRequest,
    requestDeserialize: deserialize_couchbase_admin_bucket_v1_CreateBucketRequest,
    responseSerialize: serialize_couchbase_admin_bucket_v1_CreateBucketResponse,
    responseDeserialize: deserialize_couchbase_admin_bucket_v1_CreateBucketResponse,
  },
  updateBucket: {
    path: '/couchbase.admin.bucket.v1.BucketAdminService/UpdateBucket',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_bucket_v1_bucket_pb.UpdateBucketRequest,
    responseType: couchbase_admin_bucket_v1_bucket_pb.UpdateBucketResponse,
    requestSerialize: serialize_couchbase_admin_bucket_v1_UpdateBucketRequest,
    requestDeserialize: deserialize_couchbase_admin_bucket_v1_UpdateBucketRequest,
    responseSerialize: serialize_couchbase_admin_bucket_v1_UpdateBucketResponse,
    responseDeserialize: deserialize_couchbase_admin_bucket_v1_UpdateBucketResponse,
  },
  deleteBucket: {
    path: '/couchbase.admin.bucket.v1.BucketAdminService/DeleteBucket',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_bucket_v1_bucket_pb.DeleteBucketRequest,
    responseType: couchbase_admin_bucket_v1_bucket_pb.DeleteBucketResponse,
    requestSerialize: serialize_couchbase_admin_bucket_v1_DeleteBucketRequest,
    requestDeserialize: deserialize_couchbase_admin_bucket_v1_DeleteBucketRequest,
    responseSerialize: serialize_couchbase_admin_bucket_v1_DeleteBucketResponse,
    responseDeserialize: deserialize_couchbase_admin_bucket_v1_DeleteBucketResponse,
  },
};

exports.BucketAdminServiceClient = grpc.makeGenericClientConstructor(BucketAdminServiceService);
