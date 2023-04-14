// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_routing_v1_routing_pb = require('../../../couchbase/routing/v1/routing_pb.js');

function serialize_couchbase_routing_v1_WatchRoutingRequest(arg) {
  if (!(arg instanceof couchbase_routing_v1_routing_pb.WatchRoutingRequest)) {
    throw new Error('Expected argument of type couchbase.routing.v1.WatchRoutingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_routing_v1_WatchRoutingRequest(buffer_arg) {
  return couchbase_routing_v1_routing_pb.WatchRoutingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_routing_v1_WatchRoutingResponse(arg) {
  if (!(arg instanceof couchbase_routing_v1_routing_pb.WatchRoutingResponse)) {
    throw new Error('Expected argument of type couchbase.routing.v1.WatchRoutingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_routing_v1_WatchRoutingResponse(buffer_arg) {
  return couchbase_routing_v1_routing_pb.WatchRoutingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RoutingServiceService = exports.RoutingServiceService = {
  watchRouting: {
    path: '/couchbase.routing.v1.RoutingService/WatchRouting',
    requestStream: false,
    responseStream: true,
    requestType: couchbase_routing_v1_routing_pb.WatchRoutingRequest,
    responseType: couchbase_routing_v1_routing_pb.WatchRoutingResponse,
    requestSerialize: serialize_couchbase_routing_v1_WatchRoutingRequest,
    requestDeserialize: deserialize_couchbase_routing_v1_WatchRoutingRequest,
    responseSerialize: serialize_couchbase_routing_v1_WatchRoutingResponse,
    responseDeserialize: deserialize_couchbase_routing_v1_WatchRoutingResponse,
  },
};

exports.RoutingServiceClient = grpc.makeGenericClientConstructor(RoutingServiceService);
