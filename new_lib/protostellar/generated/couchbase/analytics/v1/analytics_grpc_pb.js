// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_analytics_v1_analytics_pb = require('../../../couchbase/analytics/v1/analytics_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_couchbase_analytics_v1_AnalyticsQueryRequest(arg) {
  if (!(arg instanceof couchbase_analytics_v1_analytics_pb.AnalyticsQueryRequest)) {
    throw new Error('Expected argument of type couchbase.analytics.v1.AnalyticsQueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_analytics_v1_AnalyticsQueryRequest(buffer_arg) {
  return couchbase_analytics_v1_analytics_pb.AnalyticsQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_analytics_v1_AnalyticsQueryResponse(arg) {
  if (!(arg instanceof couchbase_analytics_v1_analytics_pb.AnalyticsQueryResponse)) {
    throw new Error('Expected argument of type couchbase.analytics.v1.AnalyticsQueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_analytics_v1_AnalyticsQueryResponse(buffer_arg) {
  return couchbase_analytics_v1_analytics_pb.AnalyticsQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AnalyticsServiceService = exports.AnalyticsServiceService = {
  analyticsQuery: {
    path: '/couchbase.analytics.v1.AnalyticsService/AnalyticsQuery',
    requestStream: false,
    responseStream: true,
    requestType: couchbase_analytics_v1_analytics_pb.AnalyticsQueryRequest,
    responseType: couchbase_analytics_v1_analytics_pb.AnalyticsQueryResponse,
    requestSerialize: serialize_couchbase_analytics_v1_AnalyticsQueryRequest,
    requestDeserialize: deserialize_couchbase_analytics_v1_AnalyticsQueryRequest,
    responseSerialize: serialize_couchbase_analytics_v1_AnalyticsQueryResponse,
    responseDeserialize: deserialize_couchbase_analytics_v1_AnalyticsQueryResponse,
  },
};

exports.AnalyticsServiceClient = grpc.makeGenericClientConstructor(AnalyticsServiceService);
