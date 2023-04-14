// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_admin_collection_v1_collection_pb = require('../../../../couchbase/admin/collection/v1/collection_pb.js');

function serialize_couchbase_admin_collection_v1_CreateCollectionRequest(arg) {
  if (!(arg instanceof couchbase_admin_collection_v1_collection_pb.CreateCollectionRequest)) {
    throw new Error('Expected argument of type couchbase.admin.collection.v1.CreateCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_collection_v1_CreateCollectionRequest(buffer_arg) {
  return couchbase_admin_collection_v1_collection_pb.CreateCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_collection_v1_CreateCollectionResponse(arg) {
  if (!(arg instanceof couchbase_admin_collection_v1_collection_pb.CreateCollectionResponse)) {
    throw new Error('Expected argument of type couchbase.admin.collection.v1.CreateCollectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_collection_v1_CreateCollectionResponse(buffer_arg) {
  return couchbase_admin_collection_v1_collection_pb.CreateCollectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_collection_v1_CreateScopeRequest(arg) {
  if (!(arg instanceof couchbase_admin_collection_v1_collection_pb.CreateScopeRequest)) {
    throw new Error('Expected argument of type couchbase.admin.collection.v1.CreateScopeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_collection_v1_CreateScopeRequest(buffer_arg) {
  return couchbase_admin_collection_v1_collection_pb.CreateScopeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_collection_v1_CreateScopeResponse(arg) {
  if (!(arg instanceof couchbase_admin_collection_v1_collection_pb.CreateScopeResponse)) {
    throw new Error('Expected argument of type couchbase.admin.collection.v1.CreateScopeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_collection_v1_CreateScopeResponse(buffer_arg) {
  return couchbase_admin_collection_v1_collection_pb.CreateScopeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_collection_v1_DeleteCollectionRequest(arg) {
  if (!(arg instanceof couchbase_admin_collection_v1_collection_pb.DeleteCollectionRequest)) {
    throw new Error('Expected argument of type couchbase.admin.collection.v1.DeleteCollectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_collection_v1_DeleteCollectionRequest(buffer_arg) {
  return couchbase_admin_collection_v1_collection_pb.DeleteCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_collection_v1_DeleteCollectionResponse(arg) {
  if (!(arg instanceof couchbase_admin_collection_v1_collection_pb.DeleteCollectionResponse)) {
    throw new Error('Expected argument of type couchbase.admin.collection.v1.DeleteCollectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_collection_v1_DeleteCollectionResponse(buffer_arg) {
  return couchbase_admin_collection_v1_collection_pb.DeleteCollectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_collection_v1_DeleteScopeRequest(arg) {
  if (!(arg instanceof couchbase_admin_collection_v1_collection_pb.DeleteScopeRequest)) {
    throw new Error('Expected argument of type couchbase.admin.collection.v1.DeleteScopeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_collection_v1_DeleteScopeRequest(buffer_arg) {
  return couchbase_admin_collection_v1_collection_pb.DeleteScopeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_collection_v1_DeleteScopeResponse(arg) {
  if (!(arg instanceof couchbase_admin_collection_v1_collection_pb.DeleteScopeResponse)) {
    throw new Error('Expected argument of type couchbase.admin.collection.v1.DeleteScopeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_collection_v1_DeleteScopeResponse(buffer_arg) {
  return couchbase_admin_collection_v1_collection_pb.DeleteScopeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_collection_v1_ListCollectionsRequest(arg) {
  if (!(arg instanceof couchbase_admin_collection_v1_collection_pb.ListCollectionsRequest)) {
    throw new Error('Expected argument of type couchbase.admin.collection.v1.ListCollectionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_collection_v1_ListCollectionsRequest(buffer_arg) {
  return couchbase_admin_collection_v1_collection_pb.ListCollectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_admin_collection_v1_ListCollectionsResponse(arg) {
  if (!(arg instanceof couchbase_admin_collection_v1_collection_pb.ListCollectionsResponse)) {
    throw new Error('Expected argument of type couchbase.admin.collection.v1.ListCollectionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_admin_collection_v1_ListCollectionsResponse(buffer_arg) {
  return couchbase_admin_collection_v1_collection_pb.ListCollectionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CollectionAdminServiceService = exports.CollectionAdminServiceService = {
  listCollections: {
    path: '/couchbase.admin.collection.v1.CollectionAdminService/ListCollections',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_collection_v1_collection_pb.ListCollectionsRequest,
    responseType: couchbase_admin_collection_v1_collection_pb.ListCollectionsResponse,
    requestSerialize: serialize_couchbase_admin_collection_v1_ListCollectionsRequest,
    requestDeserialize: deserialize_couchbase_admin_collection_v1_ListCollectionsRequest,
    responseSerialize: serialize_couchbase_admin_collection_v1_ListCollectionsResponse,
    responseDeserialize: deserialize_couchbase_admin_collection_v1_ListCollectionsResponse,
  },
  createScope: {
    path: '/couchbase.admin.collection.v1.CollectionAdminService/CreateScope',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_collection_v1_collection_pb.CreateScopeRequest,
    responseType: couchbase_admin_collection_v1_collection_pb.CreateScopeResponse,
    requestSerialize: serialize_couchbase_admin_collection_v1_CreateScopeRequest,
    requestDeserialize: deserialize_couchbase_admin_collection_v1_CreateScopeRequest,
    responseSerialize: serialize_couchbase_admin_collection_v1_CreateScopeResponse,
    responseDeserialize: deserialize_couchbase_admin_collection_v1_CreateScopeResponse,
  },
  deleteScope: {
    path: '/couchbase.admin.collection.v1.CollectionAdminService/DeleteScope',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_collection_v1_collection_pb.DeleteScopeRequest,
    responseType: couchbase_admin_collection_v1_collection_pb.DeleteScopeResponse,
    requestSerialize: serialize_couchbase_admin_collection_v1_DeleteScopeRequest,
    requestDeserialize: deserialize_couchbase_admin_collection_v1_DeleteScopeRequest,
    responseSerialize: serialize_couchbase_admin_collection_v1_DeleteScopeResponse,
    responseDeserialize: deserialize_couchbase_admin_collection_v1_DeleteScopeResponse,
  },
  createCollection: {
    path: '/couchbase.admin.collection.v1.CollectionAdminService/CreateCollection',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_collection_v1_collection_pb.CreateCollectionRequest,
    responseType: couchbase_admin_collection_v1_collection_pb.CreateCollectionResponse,
    requestSerialize: serialize_couchbase_admin_collection_v1_CreateCollectionRequest,
    requestDeserialize: deserialize_couchbase_admin_collection_v1_CreateCollectionRequest,
    responseSerialize: serialize_couchbase_admin_collection_v1_CreateCollectionResponse,
    responseDeserialize: deserialize_couchbase_admin_collection_v1_CreateCollectionResponse,
  },
  deleteCollection: {
    path: '/couchbase.admin.collection.v1.CollectionAdminService/DeleteCollection',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_admin_collection_v1_collection_pb.DeleteCollectionRequest,
    responseType: couchbase_admin_collection_v1_collection_pb.DeleteCollectionResponse,
    requestSerialize: serialize_couchbase_admin_collection_v1_DeleteCollectionRequest,
    requestDeserialize: deserialize_couchbase_admin_collection_v1_DeleteCollectionRequest,
    responseSerialize: serialize_couchbase_admin_collection_v1_DeleteCollectionResponse,
    responseDeserialize: deserialize_couchbase_admin_collection_v1_DeleteCollectionResponse,
  },
};

exports.CollectionAdminServiceClient = grpc.makeGenericClientConstructor(CollectionAdminServiceService);
