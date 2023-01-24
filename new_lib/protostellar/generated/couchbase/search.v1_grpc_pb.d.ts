// GENERATED CODE -- DO NOT EDIT!

// package: couchbase.search.v1
// file: couchbase/search.v1.proto

import * as couchbase_search_v1_pb from "../couchbase/search.v1_pb";
import * as grpc from "grpc";

interface ISearchService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  searchQuery: grpc.MethodDefinition<couchbase_search_v1_pb.SearchQueryRequest, couchbase_search_v1_pb.SearchQueryResponse>;
}

export const SearchService: ISearchService;

export interface ISearchServer extends grpc.UntypedServiceImplementation {
  searchQuery: grpc.handleServerStreamingCall<couchbase_search_v1_pb.SearchQueryRequest, couchbase_search_v1_pb.SearchQueryResponse>;
}

export class SearchClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  searchQuery(argument: couchbase_search_v1_pb.SearchQueryRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_search_v1_pb.SearchQueryResponse>;
  searchQuery(argument: couchbase_search_v1_pb.SearchQueryRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<couchbase_search_v1_pb.SearchQueryResponse>;
}
