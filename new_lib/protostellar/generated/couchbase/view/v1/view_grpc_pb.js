// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_view_v1_view_pb = require('../../../couchbase/view/v1/view_pb.js');

function serialize_couchbase_view_v1_ViewQueryRequest(arg) {
  if (!(arg instanceof couchbase_view_v1_view_pb.ViewQueryRequest)) {
    throw new Error('Expected argument of type couchbase.view.v1.ViewQueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_view_v1_ViewQueryRequest(buffer_arg) {
  return couchbase_view_v1_view_pb.ViewQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_view_v1_ViewQueryResponse(arg) {
  if (!(arg instanceof couchbase_view_v1_view_pb.ViewQueryResponse)) {
    throw new Error('Expected argument of type couchbase.view.v1.ViewQueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_view_v1_ViewQueryResponse(buffer_arg) {
  return couchbase_view_v1_view_pb.ViewQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ViewServiceService = exports.ViewServiceService = {
  viewQuery: {
    path: '/couchbase.view.v1.ViewService/ViewQuery',
    requestStream: false,
    responseStream: true,
    requestType: couchbase_view_v1_view_pb.ViewQueryRequest,
    responseType: couchbase_view_v1_view_pb.ViewQueryResponse,
    requestSerialize: serialize_couchbase_view_v1_ViewQueryRequest,
    requestDeserialize: deserialize_couchbase_view_v1_ViewQueryRequest,
    responseSerialize: serialize_couchbase_view_v1_ViewQueryResponse,
    responseDeserialize: deserialize_couchbase_view_v1_ViewQueryResponse,
  },
};

exports.ViewServiceClient = grpc.makeGenericClientConstructor(ViewServiceService);
