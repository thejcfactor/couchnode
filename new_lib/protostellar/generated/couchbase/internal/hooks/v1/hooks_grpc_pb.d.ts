// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.internal.hooks.v1
// file: couchbase/internal/hooks/v1/hooks.proto

import * as couchbase_internal_hooks_v1_hooks_pb from "../../../../couchbase/internal/hooks/v1/hooks_pb";
import * as grpc from "grpc";

interface IHooksServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createHooksContext: grpc.MethodDefinition<couchbase_internal_hooks_v1_hooks_pb.CreateHooksContextRequest, couchbase_internal_hooks_v1_hooks_pb.CreateHooksContextResponse>;
  destroyHooksContext: grpc.MethodDefinition<couchbase_internal_hooks_v1_hooks_pb.DestroyHooksContextRequest, couchbase_internal_hooks_v1_hooks_pb.DestroyHooksContextResponse>;
  addHooks: grpc.MethodDefinition<couchbase_internal_hooks_v1_hooks_pb.AddHooksRequest, couchbase_internal_hooks_v1_hooks_pb.AddHooksResponse>;
  watchBarrier: grpc.MethodDefinition<couchbase_internal_hooks_v1_hooks_pb.WatchBarrierRequest, couchbase_internal_hooks_v1_hooks_pb.WatchBarrierResponse>;
  signalBarrier: grpc.MethodDefinition<couchbase_internal_hooks_v1_hooks_pb.SignalBarrierRequest, couchbase_internal_hooks_v1_hooks_pb.SignalBarrierResponse>;
}

export const HooksServiceService: IHooksServiceService;

export interface IHooksServiceServer extends grpc.UntypedServiceImplementation {
  createHooksContext: grpc.handleUnaryCall<couchbase_internal_hooks_v1_hooks_pb.CreateHooksContextRequest, couchbase_internal_hooks_v1_hooks_pb.CreateHooksContextResponse>;
  destroyHooksContext: grpc.handleUnaryCall<couchbase_internal_hooks_v1_hooks_pb.DestroyHooksContextRequest, couchbase_internal_hooks_v1_hooks_pb.DestroyHooksContextResponse>;
  addHooks: grpc.handleUnaryCall<couchbase_internal_hooks_v1_hooks_pb.AddHooksRequest, couchbase_internal_hooks_v1_hooks_pb.AddHooksResponse>;
  watchBarrier: grpc.handleServerStreamingCall<couchbase_internal_hooks_v1_hooks_pb.WatchBarrierRequest, couchbase_internal_hooks_v1_hooks_pb.WatchBarrierResponse>;
  signalBarrier: grpc.handleUnaryCall<couchbase_internal_hooks_v1_hooks_pb.SignalBarrierRequest, couchbase_internal_hooks_v1_hooks_pb.SignalBarrierResponse>;
}

export class HooksServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createHooksContext(argument: couchbase_internal_hooks_v1_hooks_pb.CreateHooksContextRequest, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.CreateHooksContextResponse>): grpc.ClientUnaryCall;
  createHooksContext(argument: couchbase_internal_hooks_v1_hooks_pb.CreateHooksContextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.CreateHooksContextResponse>): grpc.ClientUnaryCall;
  createHooksContext(argument: couchbase_internal_hooks_v1_hooks_pb.CreateHooksContextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.CreateHooksContextResponse>): grpc.ClientUnaryCall;
  destroyHooksContext(argument: couchbase_internal_hooks_v1_hooks_pb.DestroyHooksContextRequest, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.DestroyHooksContextResponse>): grpc.ClientUnaryCall;
  destroyHooksContext(argument: couchbase_internal_hooks_v1_hooks_pb.DestroyHooksContextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.DestroyHooksContextResponse>): grpc.ClientUnaryCall;
  destroyHooksContext(argument: couchbase_internal_hooks_v1_hooks_pb.DestroyHooksContextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.DestroyHooksContextResponse>): grpc.ClientUnaryCall;
  addHooks(argument: couchbase_internal_hooks_v1_hooks_pb.AddHooksRequest, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.AddHooksResponse>): grpc.ClientUnaryCall;
  addHooks(argument: couchbase_internal_hooks_v1_hooks_pb.AddHooksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.AddHooksResponse>): grpc.ClientUnaryCall;
  addHooks(argument: couchbase_internal_hooks_v1_hooks_pb.AddHooksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.AddHooksResponse>): grpc.ClientUnaryCall;
  watchBarrier(argument: couchbase_internal_hooks_v1_hooks_pb.WatchBarrierRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_internal_hooks_v1_hooks_pb.WatchBarrierResponse>;
  watchBarrier(argument: couchbase_internal_hooks_v1_hooks_pb.WatchBarrierRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_internal_hooks_v1_hooks_pb.WatchBarrierResponse>;
  signalBarrier(argument: couchbase_internal_hooks_v1_hooks_pb.SignalBarrierRequest, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.SignalBarrierResponse>): grpc.ClientUnaryCall;
  signalBarrier(argument: couchbase_internal_hooks_v1_hooks_pb.SignalBarrierRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.SignalBarrierResponse>): grpc.ClientUnaryCall;
  signalBarrier(argument: couchbase_internal_hooks_v1_hooks_pb.SignalBarrierRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<couchbase_internal_hooks_v1_hooks_pb.SignalBarrierResponse>): grpc.ClientUnaryCall;
}
