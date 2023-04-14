// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.transactions.v1
// file: couchbase/transactions/v1/transactions.proto

import * as couchbase_transactions_v1_transactions_pb from "../../../couchbase/transactions/v1/transactions_pb";
import * as grpc from "grpc";

interface ITransactionsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  transactionBeginAttempt: grpc.MethodDefinition<couchbase_transactions_v1_transactions_pb.TransactionBeginAttemptRequest, couchbase_transactions_v1_transactions_pb.TransactionBeginAttemptResponse>;
  transactionCommit: grpc.MethodDefinition<couchbase_transactions_v1_transactions_pb.TransactionCommitRequest, couchbase_transactions_v1_transactions_pb.TransactionCommitResponse>;
  transactionRollback: grpc.MethodDefinition<couchbase_transactions_v1_transactions_pb.TransactionRollbackRequest, couchbase_transactions_v1_transactions_pb.TransactionRollbackResponse>;
  transactionGet: grpc.MethodDefinition<couchbase_transactions_v1_transactions_pb.TransactionGetRequest, couchbase_transactions_v1_transactions_pb.TransactionGetResponse>;
  transactionInsert: grpc.MethodDefinition<couchbase_transactions_v1_transactions_pb.TransactionInsertRequest, couchbase_transactions_v1_transactions_pb.TransactionInsertResponse>;
  transactionReplace: grpc.MethodDefinition<couchbase_transactions_v1_transactions_pb.TransactionReplaceRequest, couchbase_transactions_v1_transactions_pb.TransactionReplaceResponse>;
  transactionRemove: grpc.MethodDefinition<couchbase_transactions_v1_transactions_pb.TransactionRemoveRequest, couchbase_transactions_v1_transactions_pb.TransactionRemoveResponse>;
}

export const TransactionsServiceService: ITransactionsServiceService;

export interface ITransactionsServiceServer extends grpc.UntypedServiceImplementation {
  transactionBeginAttempt: grpc.handleUnaryCall<couchbase_transactions_v1_transactions_pb.TransactionBeginAttemptRequest, couchbase_transactions_v1_transactions_pb.TransactionBeginAttemptResponse>;
  transactionCommit: grpc.handleUnaryCall<couchbase_transactions_v1_transactions_pb.TransactionCommitRequest, couchbase_transactions_v1_transactions_pb.TransactionCommitResponse>;
  transactionRollback: grpc.handleUnaryCall<couchbase_transactions_v1_transactions_pb.TransactionRollbackRequest, couchbase_transactions_v1_transactions_pb.TransactionRollbackResponse>;
  transactionGet: grpc.handleUnaryCall<couchbase_transactions_v1_transactions_pb.TransactionGetRequest, couchbase_transactions_v1_transactions_pb.TransactionGetResponse>;
  transactionInsert: grpc.handleUnaryCall<couchbase_transactions_v1_transactions_pb.TransactionInsertRequest, couchbase_transactions_v1_transactions_pb.TransactionInsertResponse>;
  transactionReplace: grpc.handleUnaryCall<couchbase_transactions_v1_transactions_pb.TransactionReplaceRequest, couchbase_transactions_v1_transactions_pb.TransactionReplaceResponse>;
  transactionRemove: grpc.handleUnaryCall<couchbase_transactions_v1_transactions_pb.TransactionRemoveRequest, couchbase_transactions_v1_transactions_pb.TransactionRemoveResponse>;
}

export class TransactionsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  transactionBeginAttempt(argument: couchbase_transactions_v1_transactions_pb.TransactionBeginAttemptRequest, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionBeginAttemptResponse>): grpc.ClientUnaryCall;
  transactionBeginAttempt(argument: couchbase_transactions_v1_transactions_pb.TransactionBeginAttemptRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionBeginAttemptResponse>): grpc.ClientUnaryCall;
  transactionBeginAttempt(argument: couchbase_transactions_v1_transactions_pb.TransactionBeginAttemptRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionBeginAttemptResponse>): grpc.ClientUnaryCall;
  transactionCommit(argument: couchbase_transactions_v1_transactions_pb.TransactionCommitRequest, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionCommitResponse>): grpc.ClientUnaryCall;
  transactionCommit(argument: couchbase_transactions_v1_transactions_pb.TransactionCommitRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionCommitResponse>): grpc.ClientUnaryCall;
  transactionCommit(argument: couchbase_transactions_v1_transactions_pb.TransactionCommitRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionCommitResponse>): grpc.ClientUnaryCall;
  transactionRollback(argument: couchbase_transactions_v1_transactions_pb.TransactionRollbackRequest, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionRollbackResponse>): grpc.ClientUnaryCall;
  transactionRollback(argument: couchbase_transactions_v1_transactions_pb.TransactionRollbackRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionRollbackResponse>): grpc.ClientUnaryCall;
  transactionRollback(argument: couchbase_transactions_v1_transactions_pb.TransactionRollbackRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionRollbackResponse>): grpc.ClientUnaryCall;
  transactionGet(argument: couchbase_transactions_v1_transactions_pb.TransactionGetRequest, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionGetResponse>): grpc.ClientUnaryCall;
  transactionGet(argument: couchbase_transactions_v1_transactions_pb.TransactionGetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionGetResponse>): grpc.ClientUnaryCall;
  transactionGet(argument: couchbase_transactions_v1_transactions_pb.TransactionGetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionGetResponse>): grpc.ClientUnaryCall;
  transactionInsert(argument: couchbase_transactions_v1_transactions_pb.TransactionInsertRequest, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionInsertResponse>): grpc.ClientUnaryCall;
  transactionInsert(argument: couchbase_transactions_v1_transactions_pb.TransactionInsertRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionInsertResponse>): grpc.ClientUnaryCall;
  transactionInsert(argument: couchbase_transactions_v1_transactions_pb.TransactionInsertRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionInsertResponse>): grpc.ClientUnaryCall;
  transactionReplace(argument: couchbase_transactions_v1_transactions_pb.TransactionReplaceRequest, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionReplaceResponse>): grpc.ClientUnaryCall;
  transactionReplace(argument: couchbase_transactions_v1_transactions_pb.TransactionReplaceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionReplaceResponse>): grpc.ClientUnaryCall;
  transactionReplace(argument: couchbase_transactions_v1_transactions_pb.TransactionReplaceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionReplaceResponse>): grpc.ClientUnaryCall;
  transactionRemove(argument: couchbase_transactions_v1_transactions_pb.TransactionRemoveRequest, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionRemoveResponse>): grpc.ClientUnaryCall;
  transactionRemove(argument: couchbase_transactions_v1_transactions_pb.TransactionRemoveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionRemoveResponse>): grpc.ClientUnaryCall;
  transactionRemove(argument: couchbase_transactions_v1_transactions_pb.TransactionRemoveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_transactions_v1_transactions_pb.TransactionRemoveResponse>): grpc.ClientUnaryCall;
}
