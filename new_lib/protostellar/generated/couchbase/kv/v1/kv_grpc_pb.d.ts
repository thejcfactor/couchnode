// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.kv.v1
// file: couchbase/kv/v1/kv.proto

import * as couchbase_kv_v1_kv_pb from "../../../couchbase/kv/v1/kv_pb";
import * as grpc from "grpc";

interface IKvServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  get: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.GetRequest, couchbase_kv_v1_kv_pb.GetResponse>;
  getAndTouch: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.GetAndTouchRequest, couchbase_kv_v1_kv_pb.GetAndTouchResponse>;
  getAndLock: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.GetAndLockRequest, couchbase_kv_v1_kv_pb.GetAndLockResponse>;
  unlock: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.UnlockRequest, couchbase_kv_v1_kv_pb.UnlockResponse>;
  getReplica: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.GetReplicaRequest, couchbase_kv_v1_kv_pb.GetReplicaResponse>;
  touch: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.TouchRequest, couchbase_kv_v1_kv_pb.TouchResponse>;
  exists: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.ExistsRequest, couchbase_kv_v1_kv_pb.ExistsResponse>;
  insert: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.InsertRequest, couchbase_kv_v1_kv_pb.InsertResponse>;
  upsert: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.UpsertRequest, couchbase_kv_v1_kv_pb.UpsertResponse>;
  replace: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.ReplaceRequest, couchbase_kv_v1_kv_pb.ReplaceResponse>;
  remove: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.RemoveRequest, couchbase_kv_v1_kv_pb.RemoveResponse>;
  increment: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.IncrementRequest, couchbase_kv_v1_kv_pb.IncrementResponse>;
  decrement: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.DecrementRequest, couchbase_kv_v1_kv_pb.DecrementResponse>;
  append: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.AppendRequest, couchbase_kv_v1_kv_pb.AppendResponse>;
  prepend: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.PrependRequest, couchbase_kv_v1_kv_pb.PrependResponse>;
  lookupIn: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.LookupInRequest, couchbase_kv_v1_kv_pb.LookupInResponse>;
  mutateIn: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.MutateInRequest, couchbase_kv_v1_kv_pb.MutateInResponse>;
  rangeScan: grpc.MethodDefinition<couchbase_kv_v1_kv_pb.RangeScanRequest, couchbase_kv_v1_kv_pb.RangeScanResponse>;
}

export const KvServiceService: IKvServiceService;

export interface IKvServiceServer extends grpc.UntypedServiceImplementation {
  get: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.GetRequest, couchbase_kv_v1_kv_pb.GetResponse>;
  getAndTouch: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.GetAndTouchRequest, couchbase_kv_v1_kv_pb.GetAndTouchResponse>;
  getAndLock: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.GetAndLockRequest, couchbase_kv_v1_kv_pb.GetAndLockResponse>;
  unlock: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.UnlockRequest, couchbase_kv_v1_kv_pb.UnlockResponse>;
  getReplica: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.GetReplicaRequest, couchbase_kv_v1_kv_pb.GetReplicaResponse>;
  touch: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.TouchRequest, couchbase_kv_v1_kv_pb.TouchResponse>;
  exists: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.ExistsRequest, couchbase_kv_v1_kv_pb.ExistsResponse>;
  insert: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.InsertRequest, couchbase_kv_v1_kv_pb.InsertResponse>;
  upsert: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.UpsertRequest, couchbase_kv_v1_kv_pb.UpsertResponse>;
  replace: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.ReplaceRequest, couchbase_kv_v1_kv_pb.ReplaceResponse>;
  remove: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.RemoveRequest, couchbase_kv_v1_kv_pb.RemoveResponse>;
  increment: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.IncrementRequest, couchbase_kv_v1_kv_pb.IncrementResponse>;
  decrement: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.DecrementRequest, couchbase_kv_v1_kv_pb.DecrementResponse>;
  append: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.AppendRequest, couchbase_kv_v1_kv_pb.AppendResponse>;
  prepend: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.PrependRequest, couchbase_kv_v1_kv_pb.PrependResponse>;
  lookupIn: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.LookupInRequest, couchbase_kv_v1_kv_pb.LookupInResponse>;
  mutateIn: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.MutateInRequest, couchbase_kv_v1_kv_pb.MutateInResponse>;
  rangeScan: grpc.handleUnaryCall<couchbase_kv_v1_kv_pb.RangeScanRequest, couchbase_kv_v1_kv_pb.RangeScanResponse>;
}

export class KvServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  get(argument: couchbase_kv_v1_kv_pb.GetRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetResponse>): grpc.ClientUnaryCall;
  get(argument: couchbase_kv_v1_kv_pb.GetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetResponse>): grpc.ClientUnaryCall;
  get(argument: couchbase_kv_v1_kv_pb.GetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetResponse>): grpc.ClientUnaryCall;
  getAndTouch(argument: couchbase_kv_v1_kv_pb.GetAndTouchRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetAndTouchResponse>): grpc.ClientUnaryCall;
  getAndTouch(argument: couchbase_kv_v1_kv_pb.GetAndTouchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetAndTouchResponse>): grpc.ClientUnaryCall;
  getAndTouch(argument: couchbase_kv_v1_kv_pb.GetAndTouchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetAndTouchResponse>): grpc.ClientUnaryCall;
  getAndLock(argument: couchbase_kv_v1_kv_pb.GetAndLockRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetAndLockResponse>): grpc.ClientUnaryCall;
  getAndLock(argument: couchbase_kv_v1_kv_pb.GetAndLockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetAndLockResponse>): grpc.ClientUnaryCall;
  getAndLock(argument: couchbase_kv_v1_kv_pb.GetAndLockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetAndLockResponse>): grpc.ClientUnaryCall;
  unlock(argument: couchbase_kv_v1_kv_pb.UnlockRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: couchbase_kv_v1_kv_pb.UnlockRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.UnlockResponse>): grpc.ClientUnaryCall;
  unlock(argument: couchbase_kv_v1_kv_pb.UnlockRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.UnlockResponse>): grpc.ClientUnaryCall;
  getReplica(argument: couchbase_kv_v1_kv_pb.GetReplicaRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetReplicaResponse>): grpc.ClientUnaryCall;
  getReplica(argument: couchbase_kv_v1_kv_pb.GetReplicaRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetReplicaResponse>): grpc.ClientUnaryCall;
  getReplica(argument: couchbase_kv_v1_kv_pb.GetReplicaRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.GetReplicaResponse>): grpc.ClientUnaryCall;
  touch(argument: couchbase_kv_v1_kv_pb.TouchRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.TouchResponse>): grpc.ClientUnaryCall;
  touch(argument: couchbase_kv_v1_kv_pb.TouchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.TouchResponse>): grpc.ClientUnaryCall;
  touch(argument: couchbase_kv_v1_kv_pb.TouchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.TouchResponse>): grpc.ClientUnaryCall;
  exists(argument: couchbase_kv_v1_kv_pb.ExistsRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.ExistsResponse>): grpc.ClientUnaryCall;
  exists(argument: couchbase_kv_v1_kv_pb.ExistsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.ExistsResponse>): grpc.ClientUnaryCall;
  exists(argument: couchbase_kv_v1_kv_pb.ExistsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.ExistsResponse>): grpc.ClientUnaryCall;
  insert(argument: couchbase_kv_v1_kv_pb.InsertRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.InsertResponse>): grpc.ClientUnaryCall;
  insert(argument: couchbase_kv_v1_kv_pb.InsertRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.InsertResponse>): grpc.ClientUnaryCall;
  insert(argument: couchbase_kv_v1_kv_pb.InsertRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.InsertResponse>): grpc.ClientUnaryCall;
  upsert(argument: couchbase_kv_v1_kv_pb.UpsertRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.UpsertResponse>): grpc.ClientUnaryCall;
  upsert(argument: couchbase_kv_v1_kv_pb.UpsertRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.UpsertResponse>): grpc.ClientUnaryCall;
  upsert(argument: couchbase_kv_v1_kv_pb.UpsertRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.UpsertResponse>): grpc.ClientUnaryCall;
  replace(argument: couchbase_kv_v1_kv_pb.ReplaceRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.ReplaceResponse>): grpc.ClientUnaryCall;
  replace(argument: couchbase_kv_v1_kv_pb.ReplaceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.ReplaceResponse>): grpc.ClientUnaryCall;
  replace(argument: couchbase_kv_v1_kv_pb.ReplaceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.ReplaceResponse>): grpc.ClientUnaryCall;
  remove(argument: couchbase_kv_v1_kv_pb.RemoveRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.RemoveResponse>): grpc.ClientUnaryCall;
  remove(argument: couchbase_kv_v1_kv_pb.RemoveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.RemoveResponse>): grpc.ClientUnaryCall;
  remove(argument: couchbase_kv_v1_kv_pb.RemoveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.RemoveResponse>): grpc.ClientUnaryCall;
  increment(argument: couchbase_kv_v1_kv_pb.IncrementRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.IncrementResponse>): grpc.ClientUnaryCall;
  increment(argument: couchbase_kv_v1_kv_pb.IncrementRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.IncrementResponse>): grpc.ClientUnaryCall;
  increment(argument: couchbase_kv_v1_kv_pb.IncrementRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.IncrementResponse>): grpc.ClientUnaryCall;
  decrement(argument: couchbase_kv_v1_kv_pb.DecrementRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.DecrementResponse>): grpc.ClientUnaryCall;
  decrement(argument: couchbase_kv_v1_kv_pb.DecrementRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.DecrementResponse>): grpc.ClientUnaryCall;
  decrement(argument: couchbase_kv_v1_kv_pb.DecrementRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.DecrementResponse>): grpc.ClientUnaryCall;
  append(argument: couchbase_kv_v1_kv_pb.AppendRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.AppendResponse>): grpc.ClientUnaryCall;
  append(argument: couchbase_kv_v1_kv_pb.AppendRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.AppendResponse>): grpc.ClientUnaryCall;
  append(argument: couchbase_kv_v1_kv_pb.AppendRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.AppendResponse>): grpc.ClientUnaryCall;
  prepend(argument: couchbase_kv_v1_kv_pb.PrependRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.PrependResponse>): grpc.ClientUnaryCall;
  prepend(argument: couchbase_kv_v1_kv_pb.PrependRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.PrependResponse>): grpc.ClientUnaryCall;
  prepend(argument: couchbase_kv_v1_kv_pb.PrependRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.PrependResponse>): grpc.ClientUnaryCall;
  lookupIn(argument: couchbase_kv_v1_kv_pb.LookupInRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.LookupInResponse>): grpc.ClientUnaryCall;
  lookupIn(argument: couchbase_kv_v1_kv_pb.LookupInRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.LookupInResponse>): grpc.ClientUnaryCall;
  lookupIn(argument: couchbase_kv_v1_kv_pb.LookupInRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.LookupInResponse>): grpc.ClientUnaryCall;
  mutateIn(argument: couchbase_kv_v1_kv_pb.MutateInRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.MutateInResponse>): grpc.ClientUnaryCall;
  mutateIn(argument: couchbase_kv_v1_kv_pb.MutateInRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.MutateInResponse>): grpc.ClientUnaryCall;
  mutateIn(argument: couchbase_kv_v1_kv_pb.MutateInRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.MutateInResponse>): grpc.ClientUnaryCall;
  rangeScan(argument: couchbase_kv_v1_kv_pb.RangeScanRequest, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.RangeScanResponse>): grpc.ClientUnaryCall;
  rangeScan(argument: couchbase_kv_v1_kv_pb.RangeScanRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.RangeScanResponse>): grpc.ClientUnaryCall;
  rangeScan(argument: couchbase_kv_v1_kv_pb.RangeScanRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_kv_v1_kv_pb.RangeScanResponse>): grpc.ClientUnaryCall;
}
