// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_internal_hooks_v1_pb = require('../../couchbase/internal/hooks.v1_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_couchbase_internal_hooks_v1_AddHooksRequest(arg) {
  if (!(arg instanceof couchbase_internal_hooks_v1_pb.AddHooksRequest)) {
    throw new Error('Expected argument of type couchbase.internal.hooks.v1.AddHooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_internal_hooks_v1_AddHooksRequest(buffer_arg) {
  return couchbase_internal_hooks_v1_pb.AddHooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_internal_hooks_v1_AddHooksResponse(arg) {
  if (!(arg instanceof couchbase_internal_hooks_v1_pb.AddHooksResponse)) {
    throw new Error('Expected argument of type couchbase.internal.hooks.v1.AddHooksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_internal_hooks_v1_AddHooksResponse(buffer_arg) {
  return couchbase_internal_hooks_v1_pb.AddHooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_internal_hooks_v1_CreateHooksContextRequest(arg) {
  if (!(arg instanceof couchbase_internal_hooks_v1_pb.CreateHooksContextRequest)) {
    throw new Error('Expected argument of type couchbase.internal.hooks.v1.CreateHooksContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_internal_hooks_v1_CreateHooksContextRequest(buffer_arg) {
  return couchbase_internal_hooks_v1_pb.CreateHooksContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_internal_hooks_v1_CreateHooksContextResponse(arg) {
  if (!(arg instanceof couchbase_internal_hooks_v1_pb.CreateHooksContextResponse)) {
    throw new Error('Expected argument of type couchbase.internal.hooks.v1.CreateHooksContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_internal_hooks_v1_CreateHooksContextResponse(buffer_arg) {
  return couchbase_internal_hooks_v1_pb.CreateHooksContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_internal_hooks_v1_DestroyHooksContextRequest(arg) {
  if (!(arg instanceof couchbase_internal_hooks_v1_pb.DestroyHooksContextRequest)) {
    throw new Error('Expected argument of type couchbase.internal.hooks.v1.DestroyHooksContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_internal_hooks_v1_DestroyHooksContextRequest(buffer_arg) {
  return couchbase_internal_hooks_v1_pb.DestroyHooksContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_internal_hooks_v1_DestroyHooksContextResponse(arg) {
  if (!(arg instanceof couchbase_internal_hooks_v1_pb.DestroyHooksContextResponse)) {
    throw new Error('Expected argument of type couchbase.internal.hooks.v1.DestroyHooksContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_internal_hooks_v1_DestroyHooksContextResponse(buffer_arg) {
  return couchbase_internal_hooks_v1_pb.DestroyHooksContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_internal_hooks_v1_SignalBarrierRequest(arg) {
  if (!(arg instanceof couchbase_internal_hooks_v1_pb.SignalBarrierRequest)) {
    throw new Error('Expected argument of type couchbase.internal.hooks.v1.SignalBarrierRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_internal_hooks_v1_SignalBarrierRequest(buffer_arg) {
  return couchbase_internal_hooks_v1_pb.SignalBarrierRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_internal_hooks_v1_SignalBarrierResponse(arg) {
  if (!(arg instanceof couchbase_internal_hooks_v1_pb.SignalBarrierResponse)) {
    throw new Error('Expected argument of type couchbase.internal.hooks.v1.SignalBarrierResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_internal_hooks_v1_SignalBarrierResponse(buffer_arg) {
  return couchbase_internal_hooks_v1_pb.SignalBarrierResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_internal_hooks_v1_WatchBarrierRequest(arg) {
  if (!(arg instanceof couchbase_internal_hooks_v1_pb.WatchBarrierRequest)) {
    throw new Error('Expected argument of type couchbase.internal.hooks.v1.WatchBarrierRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_internal_hooks_v1_WatchBarrierRequest(buffer_arg) {
  return couchbase_internal_hooks_v1_pb.WatchBarrierRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_internal_hooks_v1_WatchBarrierResponse(arg) {
  if (!(arg instanceof couchbase_internal_hooks_v1_pb.WatchBarrierResponse)) {
    throw new Error('Expected argument of type couchbase.internal.hooks.v1.WatchBarrierResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_internal_hooks_v1_WatchBarrierResponse(buffer_arg) {
  return couchbase_internal_hooks_v1_pb.WatchBarrierResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HooksService = exports.HooksService = {
  createHooksContext: {
    path: '/couchbase.internal.hooks.v1.Hooks/CreateHooksContext',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_internal_hooks_v1_pb.CreateHooksContextRequest,
    responseType: couchbase_internal_hooks_v1_pb.CreateHooksContextResponse,
    requestSerialize: serialize_couchbase_internal_hooks_v1_CreateHooksContextRequest,
    requestDeserialize: deserialize_couchbase_internal_hooks_v1_CreateHooksContextRequest,
    responseSerialize: serialize_couchbase_internal_hooks_v1_CreateHooksContextResponse,
    responseDeserialize: deserialize_couchbase_internal_hooks_v1_CreateHooksContextResponse,
  },
  destroyHooksContext: {
    path: '/couchbase.internal.hooks.v1.Hooks/DestroyHooksContext',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_internal_hooks_v1_pb.DestroyHooksContextRequest,
    responseType: couchbase_internal_hooks_v1_pb.DestroyHooksContextResponse,
    requestSerialize: serialize_couchbase_internal_hooks_v1_DestroyHooksContextRequest,
    requestDeserialize: deserialize_couchbase_internal_hooks_v1_DestroyHooksContextRequest,
    responseSerialize: serialize_couchbase_internal_hooks_v1_DestroyHooksContextResponse,
    responseDeserialize: deserialize_couchbase_internal_hooks_v1_DestroyHooksContextResponse,
  },
  addHooks: {
    path: '/couchbase.internal.hooks.v1.Hooks/AddHooks',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_internal_hooks_v1_pb.AddHooksRequest,
    responseType: couchbase_internal_hooks_v1_pb.AddHooksResponse,
    requestSerialize: serialize_couchbase_internal_hooks_v1_AddHooksRequest,
    requestDeserialize: deserialize_couchbase_internal_hooks_v1_AddHooksRequest,
    responseSerialize: serialize_couchbase_internal_hooks_v1_AddHooksResponse,
    responseDeserialize: deserialize_couchbase_internal_hooks_v1_AddHooksResponse,
  },
  watchBarrier: {
    path: '/couchbase.internal.hooks.v1.Hooks/WatchBarrier',
    requestStream: false,
    responseStream: true,
    requestType: couchbase_internal_hooks_v1_pb.WatchBarrierRequest,
    responseType: couchbase_internal_hooks_v1_pb.WatchBarrierResponse,
    requestSerialize: serialize_couchbase_internal_hooks_v1_WatchBarrierRequest,
    requestDeserialize: deserialize_couchbase_internal_hooks_v1_WatchBarrierRequest,
    responseSerialize: serialize_couchbase_internal_hooks_v1_WatchBarrierResponse,
    responseDeserialize: deserialize_couchbase_internal_hooks_v1_WatchBarrierResponse,
  },
  signalBarrier: {
    path: '/couchbase.internal.hooks.v1.Hooks/SignalBarrier',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_internal_hooks_v1_pb.SignalBarrierRequest,
    responseType: couchbase_internal_hooks_v1_pb.SignalBarrierResponse,
    requestSerialize: serialize_couchbase_internal_hooks_v1_SignalBarrierRequest,
    requestDeserialize: deserialize_couchbase_internal_hooks_v1_SignalBarrierRequest,
    responseSerialize: serialize_couchbase_internal_hooks_v1_SignalBarrierResponse,
    responseDeserialize: deserialize_couchbase_internal_hooks_v1_SignalBarrierResponse,
  },
};

exports.HooksClient = grpc.makeGenericClientConstructor(HooksService);
