// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_admin_search_v1_search_pb = require('../../../../couchbase/admin/search/v1/search_pb.js');

function serialize_couchbase_admin_search_v1_DeleteIndexRequest(arg) {
  if (!(arg instanceof couchbase_admin_search_v1_search_pb.DeleteIndexRequest)) {
    throw new Error('Expected argument of type couchbase.admin.search.v1.DeleteIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_search_v1_DeleteIndexRequest(buffer_arg) {
  return couchbase_admin_search_v1_search_pb.DeleteIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_search_v1_DeleteIndexResponse(arg) {
  if (!(arg instanceof couchbase_admin_search_v1_search_pb.DeleteIndexResponse)) {
    throw new Error('Expected argument of type couchbase.admin.search.v1.DeleteIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_search_v1_DeleteIndexResponse(buffer_arg) {
  return couchbase_admin_search_v1_search_pb.DeleteIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_search_v1_GetIndexRequest(arg) {
  if (!(arg instanceof couchbase_admin_search_v1_search_pb.GetIndexRequest)) {
    throw new Error('Expected argument of type couchbase.admin.search.v1.GetIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_search_v1_GetIndexRequest(buffer_arg) {
  return couchbase_admin_search_v1_search_pb.GetIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_search_v1_GetIndexResponse(arg) {
  if (!(arg instanceof couchbase_admin_search_v1_search_pb.GetIndexResponse)) {
    throw new Error('Expected argument of type couchbase.admin.search.v1.GetIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_search_v1_GetIndexResponse(buffer_arg) {
  return couchbase_admin_search_v1_search_pb.GetIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_search_v1_ListIndexesRequest(arg) {
  if (!(arg instanceof couchbase_admin_search_v1_search_pb.ListIndexesRequest)) {
    throw new Error('Expected argument of type couchbase.admin.search.v1.ListIndexesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_search_v1_ListIndexesRequest(buffer_arg) {
  return couchbase_admin_search_v1_search_pb.ListIndexesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_search_v1_ListIndexesResponse(arg) {
  if (!(arg instanceof couchbase_admin_search_v1_search_pb.ListIndexesResponse)) {
    throw new Error('Expected argument of type couchbase.admin.search.v1.ListIndexesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_search_v1_ListIndexesResponse(buffer_arg) {
  return couchbase_admin_search_v1_search_pb.ListIndexesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_search_v1_UpsertIndexRequest(arg) {
  if (!(arg instanceof couchbase_admin_search_v1_search_pb.UpsertIndexRequest)) {
    throw new Error('Expected argument of type couchbase.admin.search.v1.UpsertIndexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_search_v1_UpsertIndexRequest(buffer_arg) {
  return couchbase_admin_search_v1_search_pb.UpsertIndexRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_search_v1_UpsertIndexResponse(arg) {
  if (!(arg instanceof couchbase_admin_search_v1_search_pb.UpsertIndexResponse)) {
    throw new Error('Expected argument of type couchbase.admin.search.v1.UpsertIndexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_search_v1_UpsertIndexResponse(buffer_arg) {
  return couchbase_admin_search_v1_search_pb.UpsertIndexResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SearchAdminServiceService = exports.SearchAdminServiceService = {
  getIndex: {
    path: '/couchbase.admin.search.v1.SearchAdminService/GetIndex',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_search_v1_search_pb.GetIndexRequest,
    responseType: couchbase_admin_search_v1_search_pb.GetIndexResponse,
    requestSerialize: serialize_couchbase_admin_search_v1_GetIndexRequest,
    requestDeserialize: deserialize_couchbase_admin_search_v1_GetIndexRequest,
    responseSerialize: serialize_couchbase_admin_search_v1_GetIndexResponse,
    responseDeserialize: deserialize_couchbase_admin_search_v1_GetIndexResponse,
  },
  listIndexes: {
    path: '/couchbase.admin.search.v1.SearchAdminService/ListIndexes',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_search_v1_search_pb.ListIndexesRequest,
    responseType: couchbase_admin_search_v1_search_pb.ListIndexesResponse,
    requestSerialize: serialize_couchbase_admin_search_v1_ListIndexesRequest,
    requestDeserialize: deserialize_couchbase_admin_search_v1_ListIndexesRequest,
    responseSerialize: serialize_couchbase_admin_search_v1_ListIndexesResponse,
    responseDeserialize: deserialize_couchbase_admin_search_v1_ListIndexesResponse,
  },
  upsertIndex: {
    path: '/couchbase.admin.search.v1.SearchAdminService/UpsertIndex',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_search_v1_search_pb.UpsertIndexRequest,
    responseType: couchbase_admin_search_v1_search_pb.UpsertIndexResponse,
    requestSerialize: serialize_couchbase_admin_search_v1_UpsertIndexRequest,
    requestDeserialize: deserialize_couchbase_admin_search_v1_UpsertIndexRequest,
    responseSerialize: serialize_couchbase_admin_search_v1_UpsertIndexResponse,
    responseDeserialize: deserialize_couchbase_admin_search_v1_UpsertIndexResponse,
  },
  deleteIndex: {
    path: '/couchbase.admin.search.v1.SearchAdminService/DeleteIndex',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_search_v1_search_pb.DeleteIndexRequest,
    responseType: couchbase_admin_search_v1_search_pb.DeleteIndexResponse,
    requestSerialize: serialize_couchbase_admin_search_v1_DeleteIndexRequest,
    requestDeserialize: deserialize_couchbase_admin_search_v1_DeleteIndexRequest,
    responseSerialize: serialize_couchbase_admin_search_v1_DeleteIndexResponse,
    responseDeserialize: deserialize_couchbase_admin_search_v1_DeleteIndexResponse,
  },
};

exports.SearchAdminServiceClient = grpc.makeGenericClientConstructor(SearchAdminServiceService);
