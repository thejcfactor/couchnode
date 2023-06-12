// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_admin_query_v1_query_pb = require('../../../../couchbase/admin/query/v1/query_pb.js');

function serialize_couchbase_admin_query_v1_BuildDeferredIndexesRequest(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.BuildDeferredIndexesRequest)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.BuildDeferredIndexesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_BuildDeferredIndexesRequest(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.BuildDeferredIndexesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_BuildDeferredIndexesResponse(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.BuildDeferredIndexesResponse)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.BuildDeferredIndexesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_BuildDeferredIndexesResponse(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.BuildDeferredIndexesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_CreateIndexRequest(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.CreateIndexRequest)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.CreateIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_CreateIndexRequest(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.CreateIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_CreateIndexResponse(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.CreateIndexResponse)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.CreateIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_CreateIndexResponse(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.CreateIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_CreatePrimaryIndexRequest(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.CreatePrimaryIndexRequest)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.CreatePrimaryIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_CreatePrimaryIndexRequest(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.CreatePrimaryIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_CreatePrimaryIndexResponse(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.CreatePrimaryIndexResponse)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.CreatePrimaryIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_CreatePrimaryIndexResponse(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.CreatePrimaryIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_DropIndexRequest(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.DropIndexRequest)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.DropIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_DropIndexRequest(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.DropIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_DropIndexResponse(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.DropIndexResponse)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.DropIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_DropIndexResponse(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.DropIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_DropPrimaryIndexRequest(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.DropPrimaryIndexRequest)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.DropPrimaryIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_DropPrimaryIndexRequest(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.DropPrimaryIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_DropPrimaryIndexResponse(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.DropPrimaryIndexResponse)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.DropPrimaryIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_DropPrimaryIndexResponse(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.DropPrimaryIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_GetAllIndexesRequest(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.GetAllIndexesRequest)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.GetAllIndexesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_GetAllIndexesRequest(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.GetAllIndexesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_query_v1_GetAllIndexesResponse(arg) {
  if (!(arg instanceof couchbase_admin_query_v1_query_pb.GetAllIndexesResponse)) {
    throw new Error('Expected argument of type couchbase.admin.query.v1.GetAllIndexesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_query_v1_GetAllIndexesResponse(buffer_arg) {
  return couchbase_admin_query_v1_query_pb.GetAllIndexesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var QueryAdminServiceService = exports.QueryAdminServiceService = {
  getAllIndexes: {
    path: '/couchbase.admin.query.v1.QueryAdminService/GetAllIndexes',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_query_v1_query_pb.GetAllIndexesRequest,
    responseType: couchbase_admin_query_v1_query_pb.GetAllIndexesResponse,
    requestSerialize: serialize_couchbase_admin_query_v1_GetAllIndexesRequest,
    requestDeserialize: deserialize_couchbase_admin_query_v1_GetAllIndexesRequest,
    responseSerialize: serialize_couchbase_admin_query_v1_GetAllIndexesResponse,
    responseDeserialize: deserialize_couchbase_admin_query_v1_GetAllIndexesResponse,
  },
  createPrimaryIndex: {
    path: '/couchbase.admin.query.v1.QueryAdminService/CreatePrimaryIndex',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_query_v1_query_pb.CreatePrimaryIndexRequest,
    responseType: couchbase_admin_query_v1_query_pb.CreatePrimaryIndexResponse,
    requestSerialize: serialize_couchbase_admin_query_v1_CreatePrimaryIndexRequest,
    requestDeserialize: deserialize_couchbase_admin_query_v1_CreatePrimaryIndexRequest,
    responseSerialize: serialize_couchbase_admin_query_v1_CreatePrimaryIndexResponse,
    responseDeserialize: deserialize_couchbase_admin_query_v1_CreatePrimaryIndexResponse,
  },
  createIndex: {
    path: '/couchbase.admin.query.v1.QueryAdminService/CreateIndex',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_query_v1_query_pb.CreateIndexRequest,
    responseType: couchbase_admin_query_v1_query_pb.CreateIndexResponse,
    requestSerialize: serialize_couchbase_admin_query_v1_CreateIndexRequest,
    requestDeserialize: deserialize_couchbase_admin_query_v1_CreateIndexRequest,
    responseSerialize: serialize_couchbase_admin_query_v1_CreateIndexResponse,
    responseDeserialize: deserialize_couchbase_admin_query_v1_CreateIndexResponse,
  },
  dropPrimaryIndex: {
    path: '/couchbase.admin.query.v1.QueryAdminService/DropPrimaryIndex',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_query_v1_query_pb.DropPrimaryIndexRequest,
    responseType: couchbase_admin_query_v1_query_pb.DropPrimaryIndexResponse,
    requestSerialize: serialize_couchbase_admin_query_v1_DropPrimaryIndexRequest,
    requestDeserialize: deserialize_couchbase_admin_query_v1_DropPrimaryIndexRequest,
    responseSerialize: serialize_couchbase_admin_query_v1_DropPrimaryIndexResponse,
    responseDeserialize: deserialize_couchbase_admin_query_v1_DropPrimaryIndexResponse,
  },
  dropIndex: {
    path: '/couchbase.admin.query.v1.QueryAdminService/DropIndex',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_query_v1_query_pb.DropIndexRequest,
    responseType: couchbase_admin_query_v1_query_pb.DropIndexResponse,
    requestSerialize: serialize_couchbase_admin_query_v1_DropIndexRequest,
    requestDeserialize: deserialize_couchbase_admin_query_v1_DropIndexRequest,
    responseSerialize: serialize_couchbase_admin_query_v1_DropIndexResponse,
    responseDeserialize: deserialize_couchbase_admin_query_v1_DropIndexResponse,
  },
  buildDeferredIndexes: {
    path: '/couchbase.admin.query.v1.QueryAdminService/BuildDeferredIndexes',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_query_v1_query_pb.BuildDeferredIndexesRequest,
    responseType: couchbase_admin_query_v1_query_pb.BuildDeferredIndexesResponse,
    requestSerialize: serialize_couchbase_admin_query_v1_BuildDeferredIndexesRequest,
    requestDeserialize: deserialize_couchbase_admin_query_v1_BuildDeferredIndexesRequest,
    responseSerialize: serialize_couchbase_admin_query_v1_BuildDeferredIndexesResponse,
    responseDeserialize: deserialize_couchbase_admin_query_v1_BuildDeferredIndexesResponse,
  },
};

exports.QueryAdminServiceClient = grpc.makeGenericClientConstructor(QueryAdminServiceService);
