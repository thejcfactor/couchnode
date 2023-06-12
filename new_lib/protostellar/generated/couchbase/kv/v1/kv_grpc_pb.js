// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_kv_v1_kv_pb = require('../../../couchbase/kv/v1/kv_pb.js');
var google_rpc_status_pb = require('../../../google/rpc/status_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_couchbase_kv_v1_AppendRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.AppendRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.AppendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_AppendRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.AppendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_AppendResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.AppendResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.AppendResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_AppendResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.AppendResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_DecrementRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.DecrementRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.DecrementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_DecrementRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.DecrementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_DecrementResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.DecrementResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.DecrementResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_DecrementResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.DecrementResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_ExistsRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.ExistsRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.ExistsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_ExistsRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.ExistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_ExistsResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.ExistsResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.ExistsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_ExistsResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.ExistsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_GetAllReplicasRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.GetAllReplicasRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.GetAllReplicasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_GetAllReplicasRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.GetAllReplicasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_GetAllReplicasResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.GetAllReplicasResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.GetAllReplicasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_GetAllReplicasResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.GetAllReplicasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_GetAndLockRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.GetAndLockRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.GetAndLockRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_GetAndLockRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.GetAndLockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_GetAndLockResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.GetAndLockResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.GetAndLockResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_GetAndLockResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.GetAndLockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_GetAndTouchRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.GetAndTouchRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.GetAndTouchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_GetAndTouchRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.GetAndTouchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_GetAndTouchResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.GetAndTouchResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.GetAndTouchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_GetAndTouchResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.GetAndTouchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_GetRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.GetRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_GetRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_GetResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.GetResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_GetResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_IncrementRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.IncrementRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.IncrementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_IncrementRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.IncrementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_IncrementResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.IncrementResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.IncrementResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_IncrementResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.IncrementResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_InsertRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.InsertRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.InsertRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_InsertRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.InsertRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_InsertResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.InsertResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.InsertResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_InsertResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.InsertResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_LookupInRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.LookupInRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.LookupInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_LookupInRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.LookupInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_LookupInResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.LookupInResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.LookupInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_LookupInResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.LookupInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_MutateInRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.MutateInRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.MutateInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_MutateInRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.MutateInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_MutateInResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.MutateInResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.MutateInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_MutateInResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.MutateInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_PrependRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.PrependRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.PrependRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_PrependRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.PrependRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_PrependResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.PrependResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.PrependResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_PrependResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.PrependResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_RangeScanRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.RangeScanRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.RangeScanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_RangeScanRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.RangeScanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_RangeScanResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.RangeScanResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.RangeScanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_RangeScanResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.RangeScanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_RemoveRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.RemoveRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.RemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_RemoveRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.RemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_RemoveResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.RemoveResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.RemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_RemoveResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.RemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_ReplaceRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.ReplaceRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.ReplaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_ReplaceRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.ReplaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_ReplaceResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.ReplaceResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.ReplaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_ReplaceResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.ReplaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_TouchRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.TouchRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.TouchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_TouchRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.TouchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_TouchResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.TouchResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.TouchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_TouchResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.TouchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_UnlockRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.UnlockRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.UnlockRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_UnlockRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.UnlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_UnlockResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.UnlockResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.UnlockResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_UnlockResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.UnlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_UpsertRequest(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.UpsertRequest)) {
    throw new Error('Expected argument of type couchbase.kv.v1.UpsertRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_UpsertRequest(buffer_arg) {
  return couchbase_kv_v1_kv_pb.UpsertRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_kv_v1_UpsertResponse(arg) {
  if (!(arg instanceof couchbase_kv_v1_kv_pb.UpsertResponse)) {
    throw new Error('Expected argument of type couchbase.kv.v1.UpsertResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_kv_v1_UpsertResponse(buffer_arg) {
  return couchbase_kv_v1_kv_pb.UpsertResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var KvServiceService = exports.KvServiceService = {
  get: {
    path: '/couchbase.kv.v1.KvService/Get',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.GetRequest,
    responseType: couchbase_kv_v1_kv_pb.GetResponse,
    requestSerialize: serialize_couchbase_kv_v1_GetRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_GetRequest,
    responseSerialize: serialize_couchbase_kv_v1_GetResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_GetResponse,
  },
  getAndTouch: {
    path: '/couchbase.kv.v1.KvService/GetAndTouch',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.GetAndTouchRequest,
    responseType: couchbase_kv_v1_kv_pb.GetAndTouchResponse,
    requestSerialize: serialize_couchbase_kv_v1_GetAndTouchRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_GetAndTouchRequest,
    responseSerialize: serialize_couchbase_kv_v1_GetAndTouchResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_GetAndTouchResponse,
  },
  getAndLock: {
    path: '/couchbase.kv.v1.KvService/GetAndLock',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.GetAndLockRequest,
    responseType: couchbase_kv_v1_kv_pb.GetAndLockResponse,
    requestSerialize: serialize_couchbase_kv_v1_GetAndLockRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_GetAndLockRequest,
    responseSerialize: serialize_couchbase_kv_v1_GetAndLockResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_GetAndLockResponse,
  },
  unlock: {
    path: '/couchbase.kv.v1.KvService/Unlock',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.UnlockRequest,
    responseType: couchbase_kv_v1_kv_pb.UnlockResponse,
    requestSerialize: serialize_couchbase_kv_v1_UnlockRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_UnlockRequest,
    responseSerialize: serialize_couchbase_kv_v1_UnlockResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_UnlockResponse,
  },
  touch: {
    path: '/couchbase.kv.v1.KvService/Touch',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.TouchRequest,
    responseType: couchbase_kv_v1_kv_pb.TouchResponse,
    requestSerialize: serialize_couchbase_kv_v1_TouchRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_TouchRequest,
    responseSerialize: serialize_couchbase_kv_v1_TouchResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_TouchResponse,
  },
  exists: {
    path: '/couchbase.kv.v1.KvService/Exists',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.ExistsRequest,
    responseType: couchbase_kv_v1_kv_pb.ExistsResponse,
    requestSerialize: serialize_couchbase_kv_v1_ExistsRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_ExistsRequest,
    responseSerialize: serialize_couchbase_kv_v1_ExistsResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_ExistsResponse,
  },
  insert: {
    path: '/couchbase.kv.v1.KvService/Insert',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.InsertRequest,
    responseType: couchbase_kv_v1_kv_pb.InsertResponse,
    requestSerialize: serialize_couchbase_kv_v1_InsertRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_InsertRequest,
    responseSerialize: serialize_couchbase_kv_v1_InsertResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_InsertResponse,
  },
  upsert: {
    path: '/couchbase.kv.v1.KvService/Upsert',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.UpsertRequest,
    responseType: couchbase_kv_v1_kv_pb.UpsertResponse,
    requestSerialize: serialize_couchbase_kv_v1_UpsertRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_UpsertRequest,
    responseSerialize: serialize_couchbase_kv_v1_UpsertResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_UpsertResponse,
  },
  replace: {
    path: '/couchbase.kv.v1.KvService/Replace',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.ReplaceRequest,
    responseType: couchbase_kv_v1_kv_pb.ReplaceResponse,
    requestSerialize: serialize_couchbase_kv_v1_ReplaceRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_ReplaceRequest,
    responseSerialize: serialize_couchbase_kv_v1_ReplaceResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_ReplaceResponse,
  },
  remove: {
    path: '/couchbase.kv.v1.KvService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.RemoveRequest,
    responseType: couchbase_kv_v1_kv_pb.RemoveResponse,
    requestSerialize: serialize_couchbase_kv_v1_RemoveRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_RemoveRequest,
    responseSerialize: serialize_couchbase_kv_v1_RemoveResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_RemoveResponse,
  },
  increment: {
    path: '/couchbase.kv.v1.KvService/Increment',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.IncrementRequest,
    responseType: couchbase_kv_v1_kv_pb.IncrementResponse,
    requestSerialize: serialize_couchbase_kv_v1_IncrementRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_IncrementRequest,
    responseSerialize: serialize_couchbase_kv_v1_IncrementResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_IncrementResponse,
  },
  decrement: {
    path: '/couchbase.kv.v1.KvService/Decrement',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.DecrementRequest,
    responseType: couchbase_kv_v1_kv_pb.DecrementResponse,
    requestSerialize: serialize_couchbase_kv_v1_DecrementRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_DecrementRequest,
    responseSerialize: serialize_couchbase_kv_v1_DecrementResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_DecrementResponse,
  },
  append: {
    path: '/couchbase.kv.v1.KvService/Append',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.AppendRequest,
    responseType: couchbase_kv_v1_kv_pb.AppendResponse,
    requestSerialize: serialize_couchbase_kv_v1_AppendRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_AppendRequest,
    responseSerialize: serialize_couchbase_kv_v1_AppendResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_AppendResponse,
  },
  prepend: {
    path: '/couchbase.kv.v1.KvService/Prepend',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.PrependRequest,
    responseType: couchbase_kv_v1_kv_pb.PrependResponse,
    requestSerialize: serialize_couchbase_kv_v1_PrependRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_PrependRequest,
    responseSerialize: serialize_couchbase_kv_v1_PrependResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_PrependResponse,
  },
  lookupIn: {
    path: '/couchbase.kv.v1.KvService/LookupIn',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.LookupInRequest,
    responseType: couchbase_kv_v1_kv_pb.LookupInResponse,
    requestSerialize: serialize_couchbase_kv_v1_LookupInRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_LookupInRequest,
    responseSerialize: serialize_couchbase_kv_v1_LookupInResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_LookupInResponse,
  },
  mutateIn: {
    path: '/couchbase.kv.v1.KvService/MutateIn',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.MutateInRequest,
    responseType: couchbase_kv_v1_kv_pb.MutateInResponse,
    requestSerialize: serialize_couchbase_kv_v1_MutateInRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_MutateInRequest,
    responseSerialize: serialize_couchbase_kv_v1_MutateInResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_MutateInResponse,
  },
  getAllReplicas: {
    path: '/couchbase.kv.v1.KvService/GetAllReplicas',
    requestStream: false,
    responseStream: true,
    requestType: couchbase_kv_v1_kv_pb.GetAllReplicasRequest,
    responseType: couchbase_kv_v1_kv_pb.GetAllReplicasResponse,
    requestSerialize: serialize_couchbase_kv_v1_GetAllReplicasRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_GetAllReplicasRequest,
    responseSerialize: serialize_couchbase_kv_v1_GetAllReplicasResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_GetAllReplicasResponse,
  },
  rangeScan: {
    path: '/couchbase.kv.v1.KvService/RangeScan',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_kv_v1_kv_pb.RangeScanRequest,
    responseType: couchbase_kv_v1_kv_pb.RangeScanResponse,
    requestSerialize: serialize_couchbase_kv_v1_RangeScanRequest,
    requestDeserialize: deserialize_couchbase_kv_v1_RangeScanRequest,
    responseSerialize: serialize_couchbase_kv_v1_RangeScanResponse,
    responseDeserialize: deserialize_couchbase_kv_v1_RangeScanResponse,
  },
};

exports.KvServiceClient = grpc.makeGenericClientConstructor(KvServiceService);
