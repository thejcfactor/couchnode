// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_query_v1_pb = require('../couchbase/query.v1_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var couchbase_kv_v1_pb = require('../couchbase/kv.v1_pb.js');

function serialize_couchbase_query_v1_QueryRequest(arg) {
  if (!(arg instanceof couchbase_query_v1_pb.QueryRequest)) {
    throw new Error('Expected argument of type couchbase.query.v1.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_query_v1_QueryRequest(buffer_arg) {
  return couchbase_query_v1_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_query_v1_QueryResponse(arg) {
  if (!(arg instanceof couchbase_query_v1_pb.QueryResponse)) {
    throw new Error('Expected argument of type couchbase.query.v1.QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_query_v1_QueryResponse(buffer_arg) {
  return couchbase_query_v1_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var QueryService = exports.QueryService = {
  query: {
    path: '/couchbase.query.v1.Query/Query',
    requestStream: false,
    responseStream: true,
    requestType: couchbase_query_v1_pb.QueryRequest,
    responseType: couchbase_query_v1_pb.QueryResponse,
    requestSerialize: serialize_couchbase_query_v1_QueryRequest,
    requestDeserialize: deserialize_couchbase_query_v1_QueryRequest,
    responseSerialize: serialize_couchbase_query_v1_QueryResponse,
    responseDeserialize: deserialize_couchbase_query_v1_QueryResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
