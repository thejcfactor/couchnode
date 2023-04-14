// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.analytics.v1
// file: couchbase/analytics/v1/analytics.proto

import * as couchbase_analytics_v1_analytics_pb from "../../../couchbase/analytics/v1/analytics_pb";
import * as grpc from "grpc";

interface IAnalyticsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  analyticsQuery: grpc.MethodDefinition<couchbase_analytics_v1_analytics_pb.AnalyticsQueryRequest, couchbase_analytics_v1_analytics_pb.AnalyticsQueryResponse>;
}

export const AnalyticsServiceService: IAnalyticsServiceService;

export interface IAnalyticsServiceServer extends grpc.UntypedServiceImplementation {
  analyticsQuery: grpc.handleServerStreamingCall<couchbase_analytics_v1_analytics_pb.AnalyticsQueryRequest, couchbase_analytics_v1_analytics_pb.AnalyticsQueryResponse>;
}

export class AnalyticsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  analyticsQuery(argument: couchbase_analytics_v1_analytics_pb.AnalyticsQueryRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_analytics_v1_analytics_pb.AnalyticsQueryResponse>;
  analyticsQuery(argument: couchbase_analytics_v1_analytics_pb.AnalyticsQueryRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_analytics_v1_analytics_pb.AnalyticsQueryResponse>;
}
