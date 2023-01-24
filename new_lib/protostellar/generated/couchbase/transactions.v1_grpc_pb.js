// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var couchbase_transactions_v1_pb = require('../couchbase/transactions.v1_pb.js');

function serialize_couchbase_transactions_v1_TransactionBeginAttemptRequest(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionBeginAttemptRequest)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionBeginAttemptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionBeginAttemptRequest(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionBeginAttemptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionBeginAttemptResponse(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionBeginAttemptResponse)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionBeginAttemptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionBeginAttemptResponse(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionBeginAttemptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionCommitRequest(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionCommitRequest)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionCommitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionCommitRequest(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionCommitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionCommitResponse(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionCommitResponse)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionCommitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionCommitResponse(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionCommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionGetRequest(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionGetRequest)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionGetRequest(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionGetResponse(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionGetResponse)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionGetResponse(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionInsertRequest(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionInsertRequest)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionInsertRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionInsertRequest(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionInsertRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionInsertResponse(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionInsertResponse)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionInsertResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionInsertResponse(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionInsertResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionRemoveRequest(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionRemoveRequest)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionRemoveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionRemoveRequest(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionRemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionRemoveResponse(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionRemoveResponse)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionRemoveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionRemoveResponse(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionRemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionReplaceRequest(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionReplaceRequest)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionReplaceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionReplaceRequest(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionReplaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionReplaceResponse(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionReplaceResponse)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionReplaceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionReplaceResponse(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionReplaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionRollbackRequest(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionRollbackRequest)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionRollbackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionRollbackRequest(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionRollbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_couchbase_transactions_v1_TransactionRollbackResponse(arg) {
  if (!(arg instanceof couchbase_transactions_v1_pb.TransactionRollbackResponse)) {
    throw new Error('Expected argument of type couchbase.transactions.v1.TransactionRollbackResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_couchbase_transactions_v1_TransactionRollbackResponse(buffer_arg) {
  return couchbase_transactions_v1_pb.TransactionRollbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TransactionsService = exports.TransactionsService = {
  transactionBeginAttempt: {
    path: '/couchbase.transactions.v1.Transactions/TransactionBeginAttempt',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_transactions_v1_pb.TransactionBeginAttemptRequest,
    responseType: couchbase_transactions_v1_pb.TransactionBeginAttemptResponse,
    requestSerialize: serialize_couchbase_transactions_v1_TransactionBeginAttemptRequest,
    requestDeserialize: deserialize_couchbase_transactions_v1_TransactionBeginAttemptRequest,
    responseSerialize: serialize_couchbase_transactions_v1_TransactionBeginAttemptResponse,
    responseDeserialize: deserialize_couchbase_transactions_v1_TransactionBeginAttemptResponse,
  },
  transactionCommit: {
    path: '/couchbase.transactions.v1.Transactions/TransactionCommit',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_transactions_v1_pb.TransactionCommitRequest,
    responseType: couchbase_transactions_v1_pb.TransactionCommitResponse,
    requestSerialize: serialize_couchbase_transactions_v1_TransactionCommitRequest,
    requestDeserialize: deserialize_couchbase_transactions_v1_TransactionCommitRequest,
    responseSerialize: serialize_couchbase_transactions_v1_TransactionCommitResponse,
    responseDeserialize: deserialize_couchbase_transactions_v1_TransactionCommitResponse,
  },
  transactionRollback: {
    path: '/couchbase.transactions.v1.Transactions/TransactionRollback',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_transactions_v1_pb.TransactionRollbackRequest,
    responseType: couchbase_transactions_v1_pb.TransactionRollbackResponse,
    requestSerialize: serialize_couchbase_transactions_v1_TransactionRollbackRequest,
    requestDeserialize: deserialize_couchbase_transactions_v1_TransactionRollbackRequest,
    responseSerialize: serialize_couchbase_transactions_v1_TransactionRollbackResponse,
    responseDeserialize: deserialize_couchbase_transactions_v1_TransactionRollbackResponse,
  },
  transactionGet: {
    path: '/couchbase.transactions.v1.Transactions/TransactionGet',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_transactions_v1_pb.TransactionGetRequest,
    responseType: couchbase_transactions_v1_pb.TransactionGetResponse,
    requestSerialize: serialize_couchbase_transactions_v1_TransactionGetRequest,
    requestDeserialize: deserialize_couchbase_transactions_v1_TransactionGetRequest,
    responseSerialize: serialize_couchbase_transactions_v1_TransactionGetResponse,
    responseDeserialize: deserialize_couchbase_transactions_v1_TransactionGetResponse,
  },
  transactionInsert: {
    path: '/couchbase.transactions.v1.Transactions/TransactionInsert',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_transactions_v1_pb.TransactionInsertRequest,
    responseType: couchbase_transactions_v1_pb.TransactionInsertResponse,
    requestSerialize: serialize_couchbase_transactions_v1_TransactionInsertRequest,
    requestDeserialize: deserialize_couchbase_transactions_v1_TransactionInsertRequest,
    responseSerialize: serialize_couchbase_transactions_v1_TransactionInsertResponse,
    responseDeserialize: deserialize_couchbase_transactions_v1_TransactionInsertResponse,
  },
  transactionReplace: {
    path: '/couchbase.transactions.v1.Transactions/TransactionReplace',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_transactions_v1_pb.TransactionReplaceRequest,
    responseType: couchbase_transactions_v1_pb.TransactionReplaceResponse,
    requestSerialize: serialize_couchbase_transactions_v1_TransactionReplaceRequest,
    requestDeserialize: deserialize_couchbase_transactions_v1_TransactionReplaceRequest,
    responseSerialize: serialize_couchbase_transactions_v1_TransactionReplaceResponse,
    responseDeserialize: deserialize_couchbase_transactions_v1_TransactionReplaceResponse,
  },
  transactionRemove: {
    path: '/couchbase.transactions.v1.Transactions/TransactionRemove',
    requestStream: false,
    responseStream: false,
    requestType: couchbase_transactions_v1_pb.TransactionRemoveRequest,
    responseType: couchbase_transactions_v1_pb.TransactionRemoveResponse,
    requestSerialize: serialize_couchbase_transactions_v1_TransactionRemoveRequest,
    requestDeserialize: deserialize_couchbase_transactions_v1_TransactionRemoveRequest,
    responseSerialize: serialize_couchbase_transactions_v1_TransactionRemoveResponse,
    responseDeserialize: deserialize_couchbase_transactions_v1_TransactionRemoveResponse,
  },
};

exports.TransactionsClient = grpc.makeGenericClientConstructor(TransactionsService);
