// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_search_v1_search_pb = require('../../../couchbase/search/v1/search_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_couchbase_search_v1_SearchQueryRequest(arg) {
  if (!(arg instanceof couchbase_search_v1_search_pb.SearchQueryRequest)) {
    throw new Error('Expected argument of type couchbase.search.v1.SearchQueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_search_v1_SearchQueryRequest(buffer_arg) {
  return couchbase_search_v1_search_pb.SearchQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_search_v1_SearchQueryResponse(arg) {
  if (!(arg instanceof couchbase_search_v1_search_pb.SearchQueryResponse)) {
    throw new Error('Expected argument of type couchbase.search.v1.SearchQueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_search_v1_SearchQueryResponse(buffer_arg) {
  return couchbase_search_v1_search_pb.SearchQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SearchServiceService = exports.SearchServiceService = {
  searchQuery: {
    path: '/couchbase.search.v1.SearchService/SearchQuery',
    requestStream: false,
    responseStream: true,
    requestType: couchbase_search_v1_search_pb.SearchQueryRequest,
    responseType: couchbase_search_v1_search_pb.SearchQueryResponse,
    requestSerialize: serialize_couchbase_search_v1_SearchQueryRequest,
    requestDeserialize: deserialize_couchbase_search_v1_SearchQueryRequest,
    responseSerialize: serialize_couchbase_search_v1_SearchQueryResponse,
    responseDeserialize: deserialize_couchbase_search_v1_SearchQueryResponse,
  },
};

exports.SearchServiceClient = grpc.makeGenericClientConstructor(SearchServiceService);
