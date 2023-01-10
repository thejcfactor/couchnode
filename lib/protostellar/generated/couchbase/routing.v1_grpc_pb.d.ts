// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.routing.v1
// file: couchbase/routing.v1.proto

import * as couchbase_routing_v1_pb from "../couchbase/routing.v1_pb";
import * as grpc from "grpc";

interface IRoutingService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  watchRouting: grpc.MethodDefinition<couchbase_routing_v1_pb.WatchRoutingRequest, couchbase_routing_v1_pb.WatchRoutingResponse>;
}

export const RoutingService: IRoutingService;

export interface IRoutingServer extends grpc.UntypedServiceImplementation {
  watchRouting: grpc.handleServerStreamingCall<couchbase_routing_v1_pb.WatchRoutingRequest, couchbase_routing_v1_pb.WatchRoutingResponse>;
}

export class RoutingClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  watchRouting(argument: couchbase_routing_v1_pb.WatchRoutingRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_routing_v1_pb.WatchRoutingResponse>;
  watchRouting(argument: couchbase_routing_v1_pb.WatchRoutingRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_routing_v1_pb.WatchRoutingResponse>;
}