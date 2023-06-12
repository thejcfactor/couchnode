// source: couchbase/search/v1/search.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.couchbase.search.v1.BooleanFieldQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.BooleanQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.ConjunctionQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.DateRange', null, global);
goog.exportSymbol('proto.couchbase.search.v1.DateRangeFacet', null, global);
goog.exportSymbol('proto.couchbase.search.v1.DateRangeQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.DisjunctionQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.DocIdQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.Facet', null, global);
goog.exportSymbol('proto.couchbase.search.v1.Facet.FacetCase', null, global);
goog.exportSymbol('proto.couchbase.search.v1.FieldSorting', null, global);
goog.exportSymbol('proto.couchbase.search.v1.GeoBoundingBoxQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.GeoDistanceQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.GeoDistanceSorting', null, global);
goog.exportSymbol('proto.couchbase.search.v1.GeoPolygonQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.IdSorting', null, global);
goog.exportSymbol('proto.couchbase.search.v1.LatLng', null, global);
goog.exportSymbol('proto.couchbase.search.v1.MatchAllQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.MatchNoneQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.MatchPhraseQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.MatchQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.MatchQuery.Operator', null, global);
goog.exportSymbol('proto.couchbase.search.v1.NumericRange', null, global);
goog.exportSymbol('proto.couchbase.search.v1.NumericRangeFacet', null, global);
goog.exportSymbol('proto.couchbase.search.v1.NumericRangeQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.PhraseQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.PrefixQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.Query', null, global);
goog.exportSymbol('proto.couchbase.search.v1.Query.QueryCase', null, global);
goog.exportSymbol('proto.couchbase.search.v1.QueryStringQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.RegexpQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.ScoreSorting', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryRequest', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryRequest.HighlightStyle', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryRequest.ScanConsistency', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.FacetResult', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.FacetResult.SearchFacetCase', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.Fragment', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.Location', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.MetaData', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult', null, global);
goog.exportSymbol('proto.couchbase.search.v1.SearchQueryResponse.TermResult', null, global);
goog.exportSymbol('proto.couchbase.search.v1.Sorting', null, global);
goog.exportSymbol('proto.couchbase.search.v1.Sorting.SortingCase', null, global);
goog.exportSymbol('proto.couchbase.search.v1.TermFacet', null, global);
goog.exportSymbol('proto.couchbase.search.v1.TermQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.TermRangeQuery', null, global);
goog.exportSymbol('proto.couchbase.search.v1.WildcardQuery', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.BooleanFieldQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.BooleanFieldQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.BooleanFieldQuery.displayName = 'proto.couchbase.search.v1.BooleanFieldQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.BooleanQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.BooleanQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.BooleanQuery.displayName = 'proto.couchbase.search.v1.BooleanQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.ConjunctionQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.ConjunctionQuery.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.ConjunctionQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.ConjunctionQuery.displayName = 'proto.couchbase.search.v1.ConjunctionQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.DateRangeQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.DateRangeQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.DateRangeQuery.displayName = 'proto.couchbase.search.v1.DateRangeQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.DisjunctionQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.DisjunctionQuery.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.DisjunctionQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.DisjunctionQuery.displayName = 'proto.couchbase.search.v1.DisjunctionQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.DocIdQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.DocIdQuery.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.DocIdQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.DocIdQuery.displayName = 'proto.couchbase.search.v1.DocIdQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.LatLng = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.LatLng, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.LatLng.displayName = 'proto.couchbase.search.v1.LatLng';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.GeoBoundingBoxQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.GeoBoundingBoxQuery.displayName = 'proto.couchbase.search.v1.GeoBoundingBoxQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.GeoDistanceQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.GeoDistanceQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.GeoDistanceQuery.displayName = 'proto.couchbase.search.v1.GeoDistanceQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.GeoPolygonQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.GeoPolygonQuery.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.GeoPolygonQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.GeoPolygonQuery.displayName = 'proto.couchbase.search.v1.GeoPolygonQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.MatchAllQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.MatchAllQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.MatchAllQuery.displayName = 'proto.couchbase.search.v1.MatchAllQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.MatchNoneQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.MatchNoneQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.MatchNoneQuery.displayName = 'proto.couchbase.search.v1.MatchNoneQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.MatchPhraseQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.MatchPhraseQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.MatchPhraseQuery.displayName = 'proto.couchbase.search.v1.MatchPhraseQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.MatchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.MatchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.MatchQuery.displayName = 'proto.couchbase.search.v1.MatchQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.NumericRangeQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.NumericRangeQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.NumericRangeQuery.displayName = 'proto.couchbase.search.v1.NumericRangeQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.PhraseQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.PhraseQuery.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.PhraseQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.PhraseQuery.displayName = 'proto.couchbase.search.v1.PhraseQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.PrefixQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.PrefixQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.PrefixQuery.displayName = 'proto.couchbase.search.v1.PrefixQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.QueryStringQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.QueryStringQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.QueryStringQuery.displayName = 'proto.couchbase.search.v1.QueryStringQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.RegexpQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.RegexpQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.RegexpQuery.displayName = 'proto.couchbase.search.v1.RegexpQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.TermQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.TermQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.TermQuery.displayName = 'proto.couchbase.search.v1.TermQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.TermRangeQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.TermRangeQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.TermRangeQuery.displayName = 'proto.couchbase.search.v1.TermRangeQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.WildcardQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.WildcardQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.WildcardQuery.displayName = 'proto.couchbase.search.v1.WildcardQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.Query = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.search.v1.Query.oneofGroups_);
};
goog.inherits(proto.couchbase.search.v1.Query, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.Query.displayName = 'proto.couchbase.search.v1.Query';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.FieldSorting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.FieldSorting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.FieldSorting.displayName = 'proto.couchbase.search.v1.FieldSorting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.GeoDistanceSorting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.GeoDistanceSorting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.GeoDistanceSorting.displayName = 'proto.couchbase.search.v1.GeoDistanceSorting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.IdSorting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.IdSorting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.IdSorting.displayName = 'proto.couchbase.search.v1.IdSorting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.ScoreSorting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.ScoreSorting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.ScoreSorting.displayName = 'proto.couchbase.search.v1.ScoreSorting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.Sorting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.search.v1.Sorting.oneofGroups_);
};
goog.inherits(proto.couchbase.search.v1.Sorting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.Sorting.displayName = 'proto.couchbase.search.v1.Sorting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.DateRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.DateRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.DateRange.displayName = 'proto.couchbase.search.v1.DateRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.DateRangeFacet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.DateRangeFacet.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.DateRangeFacet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.DateRangeFacet.displayName = 'proto.couchbase.search.v1.DateRangeFacet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.NumericRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.NumericRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.NumericRange.displayName = 'proto.couchbase.search.v1.NumericRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.NumericRangeFacet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.NumericRangeFacet.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.NumericRangeFacet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.NumericRangeFacet.displayName = 'proto.couchbase.search.v1.NumericRangeFacet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.TermFacet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.TermFacet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.TermFacet.displayName = 'proto.couchbase.search.v1.TermFacet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.Facet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.search.v1.Facet.oneofGroups_);
};
goog.inherits(proto.couchbase.search.v1.Facet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.Facet.displayName = 'proto.couchbase.search.v1.Facet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.SearchQueryRequest.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryRequest.displayName = 'proto.couchbase.search.v1.SearchQueryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.SearchQueryResponse.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.displayName = 'proto.couchbase.search.v1.SearchQueryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.SearchQueryResponse.Location.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.Location.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.SearchQueryResponse.Fragment.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.Fragment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.Fragment.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.Fragment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.search.v1.SearchQueryResponse.FacetResult.oneofGroups_);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.FacetResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.FacetResult.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.FacetResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.TermResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.TermResult.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.TermResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.repeatedFields_, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.MetaData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.MetaData.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.MetaData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.displayName = 'proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.BooleanFieldQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.BooleanFieldQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.BooleanFieldQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.BooleanFieldQuery}
 */
proto.couchbase.search.v1.BooleanFieldQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.BooleanFieldQuery;
  return proto.couchbase.search.v1.BooleanFieldQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.BooleanFieldQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.BooleanFieldQuery}
 */
proto.couchbase.search.v1.BooleanFieldQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.BooleanFieldQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.BooleanFieldQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.BooleanFieldQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.BooleanFieldQuery} returns this
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.BooleanFieldQuery} returns this
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.BooleanFieldQuery} returns this
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.BooleanFieldQuery} returns this
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool value = 6;
 * @return {boolean}
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.getValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.BooleanFieldQuery} returns this
 */
proto.couchbase.search.v1.BooleanFieldQuery.prototype.setValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.BooleanQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.BooleanQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.BooleanQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.BooleanQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    must: (f = msg.getMust()) && proto.couchbase.search.v1.ConjunctionQuery.toObject(includeInstance, f),
    mustNot: (f = msg.getMustNot()) && proto.couchbase.search.v1.DisjunctionQuery.toObject(includeInstance, f),
    should: (f = msg.getShould()) && proto.couchbase.search.v1.DisjunctionQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.BooleanQuery}
 */
proto.couchbase.search.v1.BooleanQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.BooleanQuery;
  return proto.couchbase.search.v1.BooleanQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.BooleanQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.BooleanQuery}
 */
proto.couchbase.search.v1.BooleanQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = new proto.couchbase.search.v1.ConjunctionQuery;
      reader.readMessage(value,proto.couchbase.search.v1.ConjunctionQuery.deserializeBinaryFromReader);
      msg.setMust(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.DisjunctionQuery;
      reader.readMessage(value,proto.couchbase.search.v1.DisjunctionQuery.deserializeBinaryFromReader);
      msg.setMustNot(value);
      break;
    case 4:
      var value = new proto.couchbase.search.v1.DisjunctionQuery;
      reader.readMessage(value,proto.couchbase.search.v1.DisjunctionQuery.deserializeBinaryFromReader);
      msg.setShould(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.BooleanQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.BooleanQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.BooleanQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.BooleanQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMust();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.search.v1.ConjunctionQuery.serializeBinaryToWriter
    );
  }
  f = message.getMustNot();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.search.v1.DisjunctionQuery.serializeBinaryToWriter
    );
  }
  f = message.getShould();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.couchbase.search.v1.DisjunctionQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.BooleanQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.BooleanQuery} returns this
 */
proto.couchbase.search.v1.BooleanQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.BooleanQuery} returns this
 */
proto.couchbase.search.v1.BooleanQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.BooleanQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConjunctionQuery must = 2;
 * @return {?proto.couchbase.search.v1.ConjunctionQuery}
 */
proto.couchbase.search.v1.BooleanQuery.prototype.getMust = function() {
  return /** @type{?proto.couchbase.search.v1.ConjunctionQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.ConjunctionQuery, 2));
};


/**
 * @param {?proto.couchbase.search.v1.ConjunctionQuery|undefined} value
 * @return {!proto.couchbase.search.v1.BooleanQuery} returns this
*/
proto.couchbase.search.v1.BooleanQuery.prototype.setMust = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.BooleanQuery} returns this
 */
proto.couchbase.search.v1.BooleanQuery.prototype.clearMust = function() {
  return this.setMust(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.BooleanQuery.prototype.hasMust = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DisjunctionQuery must_not = 3;
 * @return {?proto.couchbase.search.v1.DisjunctionQuery}
 */
proto.couchbase.search.v1.BooleanQuery.prototype.getMustNot = function() {
  return /** @type{?proto.couchbase.search.v1.DisjunctionQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.DisjunctionQuery, 3));
};


/**
 * @param {?proto.couchbase.search.v1.DisjunctionQuery|undefined} value
 * @return {!proto.couchbase.search.v1.BooleanQuery} returns this
*/
proto.couchbase.search.v1.BooleanQuery.prototype.setMustNot = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.BooleanQuery} returns this
 */
proto.couchbase.search.v1.BooleanQuery.prototype.clearMustNot = function() {
  return this.setMustNot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.BooleanQuery.prototype.hasMustNot = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DisjunctionQuery should = 4;
 * @return {?proto.couchbase.search.v1.DisjunctionQuery}
 */
proto.couchbase.search.v1.BooleanQuery.prototype.getShould = function() {
  return /** @type{?proto.couchbase.search.v1.DisjunctionQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.DisjunctionQuery, 4));
};


/**
 * @param {?proto.couchbase.search.v1.DisjunctionQuery|undefined} value
 * @return {!proto.couchbase.search.v1.BooleanQuery} returns this
*/
proto.couchbase.search.v1.BooleanQuery.prototype.setShould = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.BooleanQuery} returns this
 */
proto.couchbase.search.v1.BooleanQuery.prototype.clearShould = function() {
  return this.setShould(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.BooleanQuery.prototype.hasShould = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.ConjunctionQuery.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.ConjunctionQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.ConjunctionQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.ConjunctionQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.ConjunctionQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.couchbase.search.v1.Query.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.ConjunctionQuery}
 */
proto.couchbase.search.v1.ConjunctionQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.ConjunctionQuery;
  return proto.couchbase.search.v1.ConjunctionQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.ConjunctionQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.ConjunctionQuery}
 */
proto.couchbase.search.v1.ConjunctionQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = new proto.couchbase.search.v1.Query;
      reader.readMessage(value,proto.couchbase.search.v1.Query.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.ConjunctionQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.ConjunctionQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.ConjunctionQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.ConjunctionQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.couchbase.search.v1.Query.serializeBinaryToWriter
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.ConjunctionQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.ConjunctionQuery} returns this
 */
proto.couchbase.search.v1.ConjunctionQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.ConjunctionQuery} returns this
 */
proto.couchbase.search.v1.ConjunctionQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.ConjunctionQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Query queries = 2;
 * @return {!Array<!proto.couchbase.search.v1.Query>}
 */
proto.couchbase.search.v1.ConjunctionQuery.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.Query>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.Query, 2));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.Query>} value
 * @return {!proto.couchbase.search.v1.ConjunctionQuery} returns this
*/
proto.couchbase.search.v1.ConjunctionQuery.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.couchbase.search.v1.Query=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.Query}
 */
proto.couchbase.search.v1.ConjunctionQuery.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.couchbase.search.v1.Query, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.ConjunctionQuery} returns this
 */
proto.couchbase.search.v1.ConjunctionQuery.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.DateRangeQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.DateRangeQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.DateRangeQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dateTimeParser: jspb.Message.getFieldWithDefault(msg, 3, ""),
    startDate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    endDate: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.DateRangeQuery}
 */
proto.couchbase.search.v1.DateRangeQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.DateRangeQuery;
  return proto.couchbase.search.v1.DateRangeQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.DateRangeQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.DateRangeQuery}
 */
proto.couchbase.search.v1.DateRangeQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDateTimeParser(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.DateRangeQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.DateRangeQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.DateRangeQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.DateRangeQuery} returns this
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.DateRangeQuery} returns this
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.DateRangeQuery} returns this
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.DateRangeQuery} returns this
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string date_time_parser = 3;
 * @return {string}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.getDateTimeParser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.DateRangeQuery} returns this
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.setDateTimeParser = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.DateRangeQuery} returns this
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.clearDateTimeParser = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.hasDateTimeParser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string start_date = 4;
 * @return {string}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.DateRangeQuery} returns this
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.setStartDate = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.DateRangeQuery} returns this
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.clearStartDate = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string end_date = 5;
 * @return {string}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.DateRangeQuery} returns this
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.setEndDate = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.DateRangeQuery} returns this
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.clearEndDate = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.DateRangeQuery.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.DisjunctionQuery.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.DisjunctionQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.DisjunctionQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.DisjunctionQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.couchbase.search.v1.Query.toObject, includeInstance),
    minimum: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.DisjunctionQuery}
 */
proto.couchbase.search.v1.DisjunctionQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.DisjunctionQuery;
  return proto.couchbase.search.v1.DisjunctionQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.DisjunctionQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.DisjunctionQuery}
 */
proto.couchbase.search.v1.DisjunctionQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = new proto.couchbase.search.v1.Query;
      reader.readMessage(value,proto.couchbase.search.v1.Query.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinimum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.DisjunctionQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.DisjunctionQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.DisjunctionQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.couchbase.search.v1.Query.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.DisjunctionQuery} returns this
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.DisjunctionQuery} returns this
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Query queries = 2;
 * @return {!Array<!proto.couchbase.search.v1.Query>}
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.Query>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.Query, 2));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.Query>} value
 * @return {!proto.couchbase.search.v1.DisjunctionQuery} returns this
*/
proto.couchbase.search.v1.DisjunctionQuery.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.couchbase.search.v1.Query=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.Query}
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.couchbase.search.v1.Query, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.DisjunctionQuery} returns this
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};


/**
 * optional uint32 minimum = 3;
 * @return {number}
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.getMinimum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.DisjunctionQuery} returns this
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.setMinimum = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.DisjunctionQuery} returns this
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.clearMinimum = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.DisjunctionQuery.prototype.hasMinimum = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.DocIdQuery.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.DocIdQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.DocIdQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.DocIdQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.DocIdQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    idsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.DocIdQuery}
 */
proto.couchbase.search.v1.DocIdQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.DocIdQuery;
  return proto.couchbase.search.v1.DocIdQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.DocIdQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.DocIdQuery}
 */
proto.couchbase.search.v1.DocIdQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.DocIdQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.DocIdQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.DocIdQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.DocIdQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.DocIdQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.DocIdQuery} returns this
 */
proto.couchbase.search.v1.DocIdQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.DocIdQuery} returns this
 */
proto.couchbase.search.v1.DocIdQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.DocIdQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string ids = 3;
 * @return {!Array<string>}
 */
proto.couchbase.search.v1.DocIdQuery.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.couchbase.search.v1.DocIdQuery} returns this
 */
proto.couchbase.search.v1.DocIdQuery.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.DocIdQuery} returns this
 */
proto.couchbase.search.v1.DocIdQuery.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.DocIdQuery} returns this
 */
proto.couchbase.search.v1.DocIdQuery.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.LatLng.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.LatLng.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.LatLng} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.LatLng.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.LatLng}
 */
proto.couchbase.search.v1.LatLng.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.LatLng;
  return proto.couchbase.search.v1.LatLng.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.LatLng} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.LatLng}
 */
proto.couchbase.search.v1.LatLng.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.LatLng.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.LatLng.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.LatLng} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.LatLng.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double latitude = 1;
 * @return {number}
 */
proto.couchbase.search.v1.LatLng.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.LatLng} returns this
 */
proto.couchbase.search.v1.LatLng.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.couchbase.search.v1.LatLng.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.LatLng} returns this
 */
proto.couchbase.search.v1.LatLng.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.GeoBoundingBoxQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.GeoBoundingBoxQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    topLeft: (f = msg.getTopLeft()) && proto.couchbase.search.v1.LatLng.toObject(includeInstance, f),
    bottomRight: (f = msg.getBottomRight()) && proto.couchbase.search.v1.LatLng.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.GeoBoundingBoxQuery}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.GeoBoundingBoxQuery;
  return proto.couchbase.search.v1.GeoBoundingBoxQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.GeoBoundingBoxQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.GeoBoundingBoxQuery}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.LatLng;
      reader.readMessage(value,proto.couchbase.search.v1.LatLng.deserializeBinaryFromReader);
      msg.setTopLeft(value);
      break;
    case 4:
      var value = new proto.couchbase.search.v1.LatLng;
      reader.readMessage(value,proto.couchbase.search.v1.LatLng.deserializeBinaryFromReader);
      msg.setBottomRight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.GeoBoundingBoxQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.GeoBoundingBoxQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTopLeft();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.search.v1.LatLng.serializeBinaryToWriter
    );
  }
  f = message.getBottomRight();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.couchbase.search.v1.LatLng.serializeBinaryToWriter
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.GeoBoundingBoxQuery} returns this
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.GeoBoundingBoxQuery} returns this
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.GeoBoundingBoxQuery} returns this
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.GeoBoundingBoxQuery} returns this
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LatLng top_left = 3;
 * @return {?proto.couchbase.search.v1.LatLng}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.getTopLeft = function() {
  return /** @type{?proto.couchbase.search.v1.LatLng} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.LatLng, 3));
};


/**
 * @param {?proto.couchbase.search.v1.LatLng|undefined} value
 * @return {!proto.couchbase.search.v1.GeoBoundingBoxQuery} returns this
*/
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.setTopLeft = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.GeoBoundingBoxQuery} returns this
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.clearTopLeft = function() {
  return this.setTopLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.hasTopLeft = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LatLng bottom_right = 4;
 * @return {?proto.couchbase.search.v1.LatLng}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.getBottomRight = function() {
  return /** @type{?proto.couchbase.search.v1.LatLng} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.LatLng, 4));
};


/**
 * @param {?proto.couchbase.search.v1.LatLng|undefined} value
 * @return {!proto.couchbase.search.v1.GeoBoundingBoxQuery} returns this
*/
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.setBottomRight = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.GeoBoundingBoxQuery} returns this
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.clearBottomRight = function() {
  return this.setBottomRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoBoundingBoxQuery.prototype.hasBottomRight = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.GeoDistanceQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.GeoDistanceQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.GeoDistanceQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    center: (f = msg.getCenter()) && proto.couchbase.search.v1.LatLng.toObject(includeInstance, f),
    distance: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.GeoDistanceQuery}
 */
proto.couchbase.search.v1.GeoDistanceQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.GeoDistanceQuery;
  return proto.couchbase.search.v1.GeoDistanceQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.GeoDistanceQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.GeoDistanceQuery}
 */
proto.couchbase.search.v1.GeoDistanceQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.LatLng;
      reader.readMessage(value,proto.couchbase.search.v1.LatLng.deserializeBinaryFromReader);
      msg.setCenter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDistance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.GeoDistanceQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.GeoDistanceQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.GeoDistanceQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCenter();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.search.v1.LatLng.serializeBinaryToWriter
    );
  }
  f = message.getDistance();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.GeoDistanceQuery} returns this
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.GeoDistanceQuery} returns this
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.GeoDistanceQuery} returns this
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.GeoDistanceQuery} returns this
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LatLng center = 3;
 * @return {?proto.couchbase.search.v1.LatLng}
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.getCenter = function() {
  return /** @type{?proto.couchbase.search.v1.LatLng} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.LatLng, 3));
};


/**
 * @param {?proto.couchbase.search.v1.LatLng|undefined} value
 * @return {!proto.couchbase.search.v1.GeoDistanceQuery} returns this
*/
proto.couchbase.search.v1.GeoDistanceQuery.prototype.setCenter = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.GeoDistanceQuery} returns this
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.clearCenter = function() {
  return this.setCenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.hasCenter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string distance = 4;
 * @return {string}
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.getDistance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.GeoDistanceQuery} returns this
 */
proto.couchbase.search.v1.GeoDistanceQuery.prototype.setDistance = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.GeoPolygonQuery.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.GeoPolygonQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.GeoPolygonQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.GeoPolygonQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    verticesList: jspb.Message.toObjectList(msg.getVerticesList(),
    proto.couchbase.search.v1.LatLng.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.GeoPolygonQuery}
 */
proto.couchbase.search.v1.GeoPolygonQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.GeoPolygonQuery;
  return proto.couchbase.search.v1.GeoPolygonQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.GeoPolygonQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.GeoPolygonQuery}
 */
proto.couchbase.search.v1.GeoPolygonQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.LatLng;
      reader.readMessage(value,proto.couchbase.search.v1.LatLng.deserializeBinaryFromReader);
      msg.addVertices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.GeoPolygonQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.GeoPolygonQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.GeoPolygonQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVerticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.couchbase.search.v1.LatLng.serializeBinaryToWriter
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.GeoPolygonQuery} returns this
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.GeoPolygonQuery} returns this
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.GeoPolygonQuery} returns this
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.GeoPolygonQuery} returns this
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated LatLng vertices = 3;
 * @return {!Array<!proto.couchbase.search.v1.LatLng>}
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.getVerticesList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.LatLng>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.LatLng, 3));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.LatLng>} value
 * @return {!proto.couchbase.search.v1.GeoPolygonQuery} returns this
*/
proto.couchbase.search.v1.GeoPolygonQuery.prototype.setVerticesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.couchbase.search.v1.LatLng=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.LatLng}
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.addVertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.couchbase.search.v1.LatLng, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.GeoPolygonQuery} returns this
 */
proto.couchbase.search.v1.GeoPolygonQuery.prototype.clearVerticesList = function() {
  return this.setVerticesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.MatchAllQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.MatchAllQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.MatchAllQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.MatchAllQuery.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.MatchAllQuery}
 */
proto.couchbase.search.v1.MatchAllQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.MatchAllQuery;
  return proto.couchbase.search.v1.MatchAllQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.MatchAllQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.MatchAllQuery}
 */
proto.couchbase.search.v1.MatchAllQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.MatchAllQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.MatchAllQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.MatchAllQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.MatchAllQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.MatchNoneQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.MatchNoneQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.MatchNoneQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.MatchNoneQuery.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.MatchNoneQuery}
 */
proto.couchbase.search.v1.MatchNoneQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.MatchNoneQuery;
  return proto.couchbase.search.v1.MatchNoneQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.MatchNoneQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.MatchNoneQuery}
 */
proto.couchbase.search.v1.MatchNoneQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.MatchNoneQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.MatchNoneQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.MatchNoneQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.MatchNoneQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.MatchPhraseQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.MatchPhraseQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.MatchPhraseQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phrase: jspb.Message.getFieldWithDefault(msg, 3, ""),
    analyzer: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.MatchPhraseQuery}
 */
proto.couchbase.search.v1.MatchPhraseQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.MatchPhraseQuery;
  return proto.couchbase.search.v1.MatchPhraseQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.MatchPhraseQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.MatchPhraseQuery}
 */
proto.couchbase.search.v1.MatchPhraseQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhrase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalyzer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.MatchPhraseQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.MatchPhraseQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.MatchPhraseQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhrase();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.MatchPhraseQuery} returns this
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.MatchPhraseQuery} returns this
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.MatchPhraseQuery} returns this
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.MatchPhraseQuery} returns this
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string phrase = 3;
 * @return {string}
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.getPhrase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.MatchPhraseQuery} returns this
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.setPhrase = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string analyzer = 4;
 * @return {string}
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.getAnalyzer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.MatchPhraseQuery} returns this
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.setAnalyzer = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.MatchPhraseQuery} returns this
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.clearAnalyzer = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.MatchPhraseQuery.prototype.hasAnalyzer = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.MatchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.MatchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.MatchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.MatchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    analyzer: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fuzziness: jspb.Message.getFieldWithDefault(msg, 5, 0),
    operator: jspb.Message.getFieldWithDefault(msg, 6, 0),
    prefixLength: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.MatchQuery}
 */
proto.couchbase.search.v1.MatchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.MatchQuery;
  return proto.couchbase.search.v1.MatchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.MatchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.MatchQuery}
 */
proto.couchbase.search.v1.MatchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalyzer(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFuzziness(value);
      break;
    case 6:
      var value = /** @type {!proto.couchbase.search.v1.MatchQuery.Operator} */ (reader.readEnum());
      msg.setOperator(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrefixLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.MatchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.MatchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.MatchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.MatchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {!proto.couchbase.search.v1.MatchQuery.Operator} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.couchbase.search.v1.MatchQuery.Operator = {
  OPERATOR_OR: 0,
  OPERATOR_AND: 1
};

/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.MatchQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.MatchQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.MatchQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.MatchQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.couchbase.search.v1.MatchQuery.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string analyzer = 4;
 * @return {string}
 */
proto.couchbase.search.v1.MatchQuery.prototype.getAnalyzer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.setAnalyzer = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.clearAnalyzer = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.MatchQuery.prototype.hasAnalyzer = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 fuzziness = 5;
 * @return {number}
 */
proto.couchbase.search.v1.MatchQuery.prototype.getFuzziness = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.setFuzziness = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.clearFuzziness = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.MatchQuery.prototype.hasFuzziness = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Operator operator = 6;
 * @return {!proto.couchbase.search.v1.MatchQuery.Operator}
 */
proto.couchbase.search.v1.MatchQuery.prototype.getOperator = function() {
  return /** @type {!proto.couchbase.search.v1.MatchQuery.Operator} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.couchbase.search.v1.MatchQuery.Operator} value
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.setOperator = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.clearOperator = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.MatchQuery.prototype.hasOperator = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 prefix_length = 7;
 * @return {number}
 */
proto.couchbase.search.v1.MatchQuery.prototype.getPrefixLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.setPrefixLength = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.MatchQuery} returns this
 */
proto.couchbase.search.v1.MatchQuery.prototype.clearPrefixLength = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.MatchQuery.prototype.hasPrefixLength = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.NumericRangeQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.NumericRangeQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.NumericRangeQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    min: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    max: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    inclusiveMin: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    inclusiveMax: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.NumericRangeQuery}
 */
proto.couchbase.search.v1.NumericRangeQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.NumericRangeQuery;
  return proto.couchbase.search.v1.NumericRangeQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.NumericRangeQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.NumericRangeQuery}
 */
proto.couchbase.search.v1.NumericRangeQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMax(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInclusiveMin(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInclusiveMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.NumericRangeQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.NumericRangeQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.NumericRangeQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float min = 3;
 * @return {number}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.setMin = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.clearMin = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.hasMin = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float max = 4;
 * @return {number}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.setMax = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.clearMax = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.hasMax = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool inclusive_min = 5;
 * @return {boolean}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.getInclusiveMin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.setInclusiveMin = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.clearInclusiveMin = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.hasInclusiveMin = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool inclusive_max = 6;
 * @return {boolean}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.getInclusiveMax = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.setInclusiveMax = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.NumericRangeQuery} returns this
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.clearInclusiveMax = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.NumericRangeQuery.prototype.hasInclusiveMax = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.PhraseQuery.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.PhraseQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.PhraseQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.PhraseQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.PhraseQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    termsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.PhraseQuery}
 */
proto.couchbase.search.v1.PhraseQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.PhraseQuery;
  return proto.couchbase.search.v1.PhraseQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.PhraseQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.PhraseQuery}
 */
proto.couchbase.search.v1.PhraseQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTerms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.PhraseQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.PhraseQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.PhraseQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.PhraseQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTermsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.PhraseQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.PhraseQuery} returns this
 */
proto.couchbase.search.v1.PhraseQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.PhraseQuery} returns this
 */
proto.couchbase.search.v1.PhraseQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.PhraseQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.PhraseQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.PhraseQuery} returns this
 */
proto.couchbase.search.v1.PhraseQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.PhraseQuery} returns this
 */
proto.couchbase.search.v1.PhraseQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.PhraseQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string terms = 3;
 * @return {!Array<string>}
 */
proto.couchbase.search.v1.PhraseQuery.prototype.getTermsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.couchbase.search.v1.PhraseQuery} returns this
 */
proto.couchbase.search.v1.PhraseQuery.prototype.setTermsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.PhraseQuery} returns this
 */
proto.couchbase.search.v1.PhraseQuery.prototype.addTerms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.PhraseQuery} returns this
 */
proto.couchbase.search.v1.PhraseQuery.prototype.clearTermsList = function() {
  return this.setTermsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.PrefixQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.PrefixQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.PrefixQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.PrefixQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    prefix: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.PrefixQuery}
 */
proto.couchbase.search.v1.PrefixQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.PrefixQuery;
  return proto.couchbase.search.v1.PrefixQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.PrefixQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.PrefixQuery}
 */
proto.couchbase.search.v1.PrefixQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.PrefixQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.PrefixQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.PrefixQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.PrefixQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.PrefixQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.PrefixQuery} returns this
 */
proto.couchbase.search.v1.PrefixQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.PrefixQuery} returns this
 */
proto.couchbase.search.v1.PrefixQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.PrefixQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.PrefixQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.PrefixQuery} returns this
 */
proto.couchbase.search.v1.PrefixQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.PrefixQuery} returns this
 */
proto.couchbase.search.v1.PrefixQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.PrefixQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string prefix = 3;
 * @return {string}
 */
proto.couchbase.search.v1.PrefixQuery.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.PrefixQuery} returns this
 */
proto.couchbase.search.v1.PrefixQuery.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.QueryStringQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.QueryStringQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.QueryStringQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.QueryStringQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    queryString: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.QueryStringQuery}
 */
proto.couchbase.search.v1.QueryStringQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.QueryStringQuery;
  return proto.couchbase.search.v1.QueryStringQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.QueryStringQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.QueryStringQuery}
 */
proto.couchbase.search.v1.QueryStringQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueryString(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.QueryStringQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.QueryStringQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.QueryStringQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.QueryStringQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getQueryString();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.QueryStringQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.QueryStringQuery} returns this
 */
proto.couchbase.search.v1.QueryStringQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.QueryStringQuery} returns this
 */
proto.couchbase.search.v1.QueryStringQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.QueryStringQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string query_string = 3;
 * @return {string}
 */
proto.couchbase.search.v1.QueryStringQuery.prototype.getQueryString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.QueryStringQuery} returns this
 */
proto.couchbase.search.v1.QueryStringQuery.prototype.setQueryString = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.RegexpQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.RegexpQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.RegexpQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.RegexpQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    regexp: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.RegexpQuery}
 */
proto.couchbase.search.v1.RegexpQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.RegexpQuery;
  return proto.couchbase.search.v1.RegexpQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.RegexpQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.RegexpQuery}
 */
proto.couchbase.search.v1.RegexpQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegexp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.RegexpQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.RegexpQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.RegexpQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.RegexpQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRegexp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.RegexpQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.RegexpQuery} returns this
 */
proto.couchbase.search.v1.RegexpQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.RegexpQuery} returns this
 */
proto.couchbase.search.v1.RegexpQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.RegexpQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.RegexpQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.RegexpQuery} returns this
 */
proto.couchbase.search.v1.RegexpQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.RegexpQuery} returns this
 */
proto.couchbase.search.v1.RegexpQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.RegexpQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string regexp = 3;
 * @return {string}
 */
proto.couchbase.search.v1.RegexpQuery.prototype.getRegexp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.RegexpQuery} returns this
 */
proto.couchbase.search.v1.RegexpQuery.prototype.setRegexp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.TermQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.TermQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.TermQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.TermQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    term: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fuzziness: jspb.Message.getFieldWithDefault(msg, 4, 0),
    prefixLength: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.TermQuery}
 */
proto.couchbase.search.v1.TermQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.TermQuery;
  return proto.couchbase.search.v1.TermQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.TermQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.TermQuery}
 */
proto.couchbase.search.v1.TermQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFuzziness(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrefixLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.TermQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.TermQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.TermQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.TermQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.TermQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.TermQuery} returns this
 */
proto.couchbase.search.v1.TermQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.TermQuery} returns this
 */
proto.couchbase.search.v1.TermQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.TermQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.TermQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.TermQuery} returns this
 */
proto.couchbase.search.v1.TermQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.TermQuery} returns this
 */
proto.couchbase.search.v1.TermQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.TermQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string term = 3;
 * @return {string}
 */
proto.couchbase.search.v1.TermQuery.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.TermQuery} returns this
 */
proto.couchbase.search.v1.TermQuery.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 fuzziness = 4;
 * @return {number}
 */
proto.couchbase.search.v1.TermQuery.prototype.getFuzziness = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.TermQuery} returns this
 */
proto.couchbase.search.v1.TermQuery.prototype.setFuzziness = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.TermQuery} returns this
 */
proto.couchbase.search.v1.TermQuery.prototype.clearFuzziness = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.TermQuery.prototype.hasFuzziness = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 prefix_length = 5;
 * @return {number}
 */
proto.couchbase.search.v1.TermQuery.prototype.getPrefixLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.TermQuery} returns this
 */
proto.couchbase.search.v1.TermQuery.prototype.setPrefixLength = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.TermQuery} returns this
 */
proto.couchbase.search.v1.TermQuery.prototype.clearPrefixLength = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.TermQuery.prototype.hasPrefixLength = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.TermRangeQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.TermRangeQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.TermRangeQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    min: jspb.Message.getFieldWithDefault(msg, 5, ""),
    max: jspb.Message.getFieldWithDefault(msg, 6, ""),
    inclusiveMin: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    inclusiveMax: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.TermRangeQuery}
 */
proto.couchbase.search.v1.TermRangeQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.TermRangeQuery;
  return proto.couchbase.search.v1.TermRangeQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.TermRangeQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.TermRangeQuery}
 */
proto.couchbase.search.v1.TermRangeQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMin(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMax(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInclusiveMin(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInclusiveMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.TermRangeQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.TermRangeQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.TermRangeQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string min = 5;
 * @return {string}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.getMin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.setMin = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.clearMin = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.hasMin = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string max = 6;
 * @return {string}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.getMax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.setMax = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.clearMax = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.hasMax = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool inclusive_min = 7;
 * @return {boolean}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.getInclusiveMin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.setInclusiveMin = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.clearInclusiveMin = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.hasInclusiveMin = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool inclusive_max = 8;
 * @return {boolean}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.getInclusiveMax = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.setInclusiveMax = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.TermRangeQuery} returns this
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.clearInclusiveMax = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.TermRangeQuery.prototype.hasInclusiveMax = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.WildcardQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.WildcardQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.WildcardQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.WildcardQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    boost: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    wildcard: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.WildcardQuery}
 */
proto.couchbase.search.v1.WildcardQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.WildcardQuery;
  return proto.couchbase.search.v1.WildcardQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.WildcardQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.WildcardQuery}
 */
proto.couchbase.search.v1.WildcardQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBoost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWildcard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.WildcardQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.WildcardQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.WildcardQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.WildcardQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWildcard();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional float boost = 1;
 * @return {number}
 */
proto.couchbase.search.v1.WildcardQuery.prototype.getBoost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.WildcardQuery} returns this
 */
proto.couchbase.search.v1.WildcardQuery.prototype.setBoost = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.WildcardQuery} returns this
 */
proto.couchbase.search.v1.WildcardQuery.prototype.clearBoost = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.WildcardQuery.prototype.hasBoost = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.WildcardQuery.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.WildcardQuery} returns this
 */
proto.couchbase.search.v1.WildcardQuery.prototype.setField = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.WildcardQuery} returns this
 */
proto.couchbase.search.v1.WildcardQuery.prototype.clearField = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.WildcardQuery.prototype.hasField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string wildcard = 3;
 * @return {string}
 */
proto.couchbase.search.v1.WildcardQuery.prototype.getWildcard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.WildcardQuery} returns this
 */
proto.couchbase.search.v1.WildcardQuery.prototype.setWildcard = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.search.v1.Query.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]];

/**
 * @enum {number}
 */
proto.couchbase.search.v1.Query.QueryCase = {
  QUERY_NOT_SET: 0,
  BOOLEAN_FIELD_QUERY: 1,
  BOOLEAN_QUERY: 2,
  CONJUNCTION_QUERY: 3,
  DATE_RANGE_QUERY: 4,
  DISJUNCTION_QUERY: 5,
  DOC_ID_QUERY: 6,
  GEO_BOUNDING_BOX_QUERY: 7,
  GEO_DISTANCE_QUERY: 8,
  GEO_POLYGON_QUERY: 9,
  MATCH_ALL_QUERY: 10,
  MATCH_NONE_QUERY: 11,
  MATCH_PHRASE_QUERY: 12,
  MATCH_QUERY: 13,
  NUMERIC_RANGE_QUERY: 14,
  PHRASE_QUERY: 15,
  PREFIX_QUERY: 16,
  QUERY_STRING_QUERY: 17,
  REGEXP_QUERY: 18,
  TERM_QUERY: 19,
  TERM_RANGE_QUERY: 20,
  WILDCARD_QUERY: 21
};

/**
 * @return {proto.couchbase.search.v1.Query.QueryCase}
 */
proto.couchbase.search.v1.Query.prototype.getQueryCase = function() {
  return /** @type {proto.couchbase.search.v1.Query.QueryCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.search.v1.Query.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.Query.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.Query.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.Query} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.Query.toObject = function(includeInstance, msg) {
  var f, obj = {
    booleanFieldQuery: (f = msg.getBooleanFieldQuery()) && proto.couchbase.search.v1.BooleanFieldQuery.toObject(includeInstance, f),
    booleanQuery: (f = msg.getBooleanQuery()) && proto.couchbase.search.v1.BooleanQuery.toObject(includeInstance, f),
    conjunctionQuery: (f = msg.getConjunctionQuery()) && proto.couchbase.search.v1.ConjunctionQuery.toObject(includeInstance, f),
    dateRangeQuery: (f = msg.getDateRangeQuery()) && proto.couchbase.search.v1.DateRangeQuery.toObject(includeInstance, f),
    disjunctionQuery: (f = msg.getDisjunctionQuery()) && proto.couchbase.search.v1.DisjunctionQuery.toObject(includeInstance, f),
    docIdQuery: (f = msg.getDocIdQuery()) && proto.couchbase.search.v1.DocIdQuery.toObject(includeInstance, f),
    geoBoundingBoxQuery: (f = msg.getGeoBoundingBoxQuery()) && proto.couchbase.search.v1.GeoBoundingBoxQuery.toObject(includeInstance, f),
    geoDistanceQuery: (f = msg.getGeoDistanceQuery()) && proto.couchbase.search.v1.GeoDistanceQuery.toObject(includeInstance, f),
    geoPolygonQuery: (f = msg.getGeoPolygonQuery()) && proto.couchbase.search.v1.GeoPolygonQuery.toObject(includeInstance, f),
    matchAllQuery: (f = msg.getMatchAllQuery()) && proto.couchbase.search.v1.MatchAllQuery.toObject(includeInstance, f),
    matchNoneQuery: (f = msg.getMatchNoneQuery()) && proto.couchbase.search.v1.MatchNoneQuery.toObject(includeInstance, f),
    matchPhraseQuery: (f = msg.getMatchPhraseQuery()) && proto.couchbase.search.v1.MatchPhraseQuery.toObject(includeInstance, f),
    matchQuery: (f = msg.getMatchQuery()) && proto.couchbase.search.v1.MatchQuery.toObject(includeInstance, f),
    numericRangeQuery: (f = msg.getNumericRangeQuery()) && proto.couchbase.search.v1.NumericRangeQuery.toObject(includeInstance, f),
    phraseQuery: (f = msg.getPhraseQuery()) && proto.couchbase.search.v1.PhraseQuery.toObject(includeInstance, f),
    prefixQuery: (f = msg.getPrefixQuery()) && proto.couchbase.search.v1.PrefixQuery.toObject(includeInstance, f),
    queryStringQuery: (f = msg.getQueryStringQuery()) && proto.couchbase.search.v1.QueryStringQuery.toObject(includeInstance, f),
    regexpQuery: (f = msg.getRegexpQuery()) && proto.couchbase.search.v1.RegexpQuery.toObject(includeInstance, f),
    termQuery: (f = msg.getTermQuery()) && proto.couchbase.search.v1.TermQuery.toObject(includeInstance, f),
    termRangeQuery: (f = msg.getTermRangeQuery()) && proto.couchbase.search.v1.TermRangeQuery.toObject(includeInstance, f),
    wildcardQuery: (f = msg.getWildcardQuery()) && proto.couchbase.search.v1.WildcardQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.Query}
 */
proto.couchbase.search.v1.Query.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.Query;
  return proto.couchbase.search.v1.Query.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.Query} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.Query}
 */
proto.couchbase.search.v1.Query.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.couchbase.search.v1.BooleanFieldQuery;
      reader.readMessage(value,proto.couchbase.search.v1.BooleanFieldQuery.deserializeBinaryFromReader);
      msg.setBooleanFieldQuery(value);
      break;
    case 2:
      var value = new proto.couchbase.search.v1.BooleanQuery;
      reader.readMessage(value,proto.couchbase.search.v1.BooleanQuery.deserializeBinaryFromReader);
      msg.setBooleanQuery(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.ConjunctionQuery;
      reader.readMessage(value,proto.couchbase.search.v1.ConjunctionQuery.deserializeBinaryFromReader);
      msg.setConjunctionQuery(value);
      break;
    case 4:
      var value = new proto.couchbase.search.v1.DateRangeQuery;
      reader.readMessage(value,proto.couchbase.search.v1.DateRangeQuery.deserializeBinaryFromReader);
      msg.setDateRangeQuery(value);
      break;
    case 5:
      var value = new proto.couchbase.search.v1.DisjunctionQuery;
      reader.readMessage(value,proto.couchbase.search.v1.DisjunctionQuery.deserializeBinaryFromReader);
      msg.setDisjunctionQuery(value);
      break;
    case 6:
      var value = new proto.couchbase.search.v1.DocIdQuery;
      reader.readMessage(value,proto.couchbase.search.v1.DocIdQuery.deserializeBinaryFromReader);
      msg.setDocIdQuery(value);
      break;
    case 7:
      var value = new proto.couchbase.search.v1.GeoBoundingBoxQuery;
      reader.readMessage(value,proto.couchbase.search.v1.GeoBoundingBoxQuery.deserializeBinaryFromReader);
      msg.setGeoBoundingBoxQuery(value);
      break;
    case 8:
      var value = new proto.couchbase.search.v1.GeoDistanceQuery;
      reader.readMessage(value,proto.couchbase.search.v1.GeoDistanceQuery.deserializeBinaryFromReader);
      msg.setGeoDistanceQuery(value);
      break;
    case 9:
      var value = new proto.couchbase.search.v1.GeoPolygonQuery;
      reader.readMessage(value,proto.couchbase.search.v1.GeoPolygonQuery.deserializeBinaryFromReader);
      msg.setGeoPolygonQuery(value);
      break;
    case 10:
      var value = new proto.couchbase.search.v1.MatchAllQuery;
      reader.readMessage(value,proto.couchbase.search.v1.MatchAllQuery.deserializeBinaryFromReader);
      msg.setMatchAllQuery(value);
      break;
    case 11:
      var value = new proto.couchbase.search.v1.MatchNoneQuery;
      reader.readMessage(value,proto.couchbase.search.v1.MatchNoneQuery.deserializeBinaryFromReader);
      msg.setMatchNoneQuery(value);
      break;
    case 12:
      var value = new proto.couchbase.search.v1.MatchPhraseQuery;
      reader.readMessage(value,proto.couchbase.search.v1.MatchPhraseQuery.deserializeBinaryFromReader);
      msg.setMatchPhraseQuery(value);
      break;
    case 13:
      var value = new proto.couchbase.search.v1.MatchQuery;
      reader.readMessage(value,proto.couchbase.search.v1.MatchQuery.deserializeBinaryFromReader);
      msg.setMatchQuery(value);
      break;
    case 14:
      var value = new proto.couchbase.search.v1.NumericRangeQuery;
      reader.readMessage(value,proto.couchbase.search.v1.NumericRangeQuery.deserializeBinaryFromReader);
      msg.setNumericRangeQuery(value);
      break;
    case 15:
      var value = new proto.couchbase.search.v1.PhraseQuery;
      reader.readMessage(value,proto.couchbase.search.v1.PhraseQuery.deserializeBinaryFromReader);
      msg.setPhraseQuery(value);
      break;
    case 16:
      var value = new proto.couchbase.search.v1.PrefixQuery;
      reader.readMessage(value,proto.couchbase.search.v1.PrefixQuery.deserializeBinaryFromReader);
      msg.setPrefixQuery(value);
      break;
    case 17:
      var value = new proto.couchbase.search.v1.QueryStringQuery;
      reader.readMessage(value,proto.couchbase.search.v1.QueryStringQuery.deserializeBinaryFromReader);
      msg.setQueryStringQuery(value);
      break;
    case 18:
      var value = new proto.couchbase.search.v1.RegexpQuery;
      reader.readMessage(value,proto.couchbase.search.v1.RegexpQuery.deserializeBinaryFromReader);
      msg.setRegexpQuery(value);
      break;
    case 19:
      var value = new proto.couchbase.search.v1.TermQuery;
      reader.readMessage(value,proto.couchbase.search.v1.TermQuery.deserializeBinaryFromReader);
      msg.setTermQuery(value);
      break;
    case 20:
      var value = new proto.couchbase.search.v1.TermRangeQuery;
      reader.readMessage(value,proto.couchbase.search.v1.TermRangeQuery.deserializeBinaryFromReader);
      msg.setTermRangeQuery(value);
      break;
    case 21:
      var value = new proto.couchbase.search.v1.WildcardQuery;
      reader.readMessage(value,proto.couchbase.search.v1.WildcardQuery.deserializeBinaryFromReader);
      msg.setWildcardQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.Query.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.Query.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.Query} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.Query.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBooleanFieldQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.couchbase.search.v1.BooleanFieldQuery.serializeBinaryToWriter
    );
  }
  f = message.getBooleanQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.search.v1.BooleanQuery.serializeBinaryToWriter
    );
  }
  f = message.getConjunctionQuery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.search.v1.ConjunctionQuery.serializeBinaryToWriter
    );
  }
  f = message.getDateRangeQuery();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.couchbase.search.v1.DateRangeQuery.serializeBinaryToWriter
    );
  }
  f = message.getDisjunctionQuery();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.couchbase.search.v1.DisjunctionQuery.serializeBinaryToWriter
    );
  }
  f = message.getDocIdQuery();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.couchbase.search.v1.DocIdQuery.serializeBinaryToWriter
    );
  }
  f = message.getGeoBoundingBoxQuery();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.couchbase.search.v1.GeoBoundingBoxQuery.serializeBinaryToWriter
    );
  }
  f = message.getGeoDistanceQuery();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.couchbase.search.v1.GeoDistanceQuery.serializeBinaryToWriter
    );
  }
  f = message.getGeoPolygonQuery();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.couchbase.search.v1.GeoPolygonQuery.serializeBinaryToWriter
    );
  }
  f = message.getMatchAllQuery();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.couchbase.search.v1.MatchAllQuery.serializeBinaryToWriter
    );
  }
  f = message.getMatchNoneQuery();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.couchbase.search.v1.MatchNoneQuery.serializeBinaryToWriter
    );
  }
  f = message.getMatchPhraseQuery();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.couchbase.search.v1.MatchPhraseQuery.serializeBinaryToWriter
    );
  }
  f = message.getMatchQuery();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.couchbase.search.v1.MatchQuery.serializeBinaryToWriter
    );
  }
  f = message.getNumericRangeQuery();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.couchbase.search.v1.NumericRangeQuery.serializeBinaryToWriter
    );
  }
  f = message.getPhraseQuery();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.couchbase.search.v1.PhraseQuery.serializeBinaryToWriter
    );
  }
  f = message.getPrefixQuery();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.couchbase.search.v1.PrefixQuery.serializeBinaryToWriter
    );
  }
  f = message.getQueryStringQuery();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.couchbase.search.v1.QueryStringQuery.serializeBinaryToWriter
    );
  }
  f = message.getRegexpQuery();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.couchbase.search.v1.RegexpQuery.serializeBinaryToWriter
    );
  }
  f = message.getTermQuery();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.couchbase.search.v1.TermQuery.serializeBinaryToWriter
    );
  }
  f = message.getTermRangeQuery();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.couchbase.search.v1.TermRangeQuery.serializeBinaryToWriter
    );
  }
  f = message.getWildcardQuery();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.couchbase.search.v1.WildcardQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional BooleanFieldQuery boolean_field_query = 1;
 * @return {?proto.couchbase.search.v1.BooleanFieldQuery}
 */
proto.couchbase.search.v1.Query.prototype.getBooleanFieldQuery = function() {
  return /** @type{?proto.couchbase.search.v1.BooleanFieldQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.BooleanFieldQuery, 1));
};


/**
 * @param {?proto.couchbase.search.v1.BooleanFieldQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setBooleanFieldQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearBooleanFieldQuery = function() {
  return this.setBooleanFieldQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasBooleanFieldQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BooleanQuery boolean_query = 2;
 * @return {?proto.couchbase.search.v1.BooleanQuery}
 */
proto.couchbase.search.v1.Query.prototype.getBooleanQuery = function() {
  return /** @type{?proto.couchbase.search.v1.BooleanQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.BooleanQuery, 2));
};


/**
 * @param {?proto.couchbase.search.v1.BooleanQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setBooleanQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearBooleanQuery = function() {
  return this.setBooleanQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasBooleanQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ConjunctionQuery conjunction_query = 3;
 * @return {?proto.couchbase.search.v1.ConjunctionQuery}
 */
proto.couchbase.search.v1.Query.prototype.getConjunctionQuery = function() {
  return /** @type{?proto.couchbase.search.v1.ConjunctionQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.ConjunctionQuery, 3));
};


/**
 * @param {?proto.couchbase.search.v1.ConjunctionQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setConjunctionQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearConjunctionQuery = function() {
  return this.setConjunctionQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasConjunctionQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DateRangeQuery date_range_query = 4;
 * @return {?proto.couchbase.search.v1.DateRangeQuery}
 */
proto.couchbase.search.v1.Query.prototype.getDateRangeQuery = function() {
  return /** @type{?proto.couchbase.search.v1.DateRangeQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.DateRangeQuery, 4));
};


/**
 * @param {?proto.couchbase.search.v1.DateRangeQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setDateRangeQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearDateRangeQuery = function() {
  return this.setDateRangeQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasDateRangeQuery = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DisjunctionQuery disjunction_query = 5;
 * @return {?proto.couchbase.search.v1.DisjunctionQuery}
 */
proto.couchbase.search.v1.Query.prototype.getDisjunctionQuery = function() {
  return /** @type{?proto.couchbase.search.v1.DisjunctionQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.DisjunctionQuery, 5));
};


/**
 * @param {?proto.couchbase.search.v1.DisjunctionQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setDisjunctionQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearDisjunctionQuery = function() {
  return this.setDisjunctionQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasDisjunctionQuery = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DocIdQuery doc_id_query = 6;
 * @return {?proto.couchbase.search.v1.DocIdQuery}
 */
proto.couchbase.search.v1.Query.prototype.getDocIdQuery = function() {
  return /** @type{?proto.couchbase.search.v1.DocIdQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.DocIdQuery, 6));
};


/**
 * @param {?proto.couchbase.search.v1.DocIdQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setDocIdQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearDocIdQuery = function() {
  return this.setDocIdQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasDocIdQuery = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional GeoBoundingBoxQuery geo_bounding_box_query = 7;
 * @return {?proto.couchbase.search.v1.GeoBoundingBoxQuery}
 */
proto.couchbase.search.v1.Query.prototype.getGeoBoundingBoxQuery = function() {
  return /** @type{?proto.couchbase.search.v1.GeoBoundingBoxQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.GeoBoundingBoxQuery, 7));
};


/**
 * @param {?proto.couchbase.search.v1.GeoBoundingBoxQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setGeoBoundingBoxQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearGeoBoundingBoxQuery = function() {
  return this.setGeoBoundingBoxQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasGeoBoundingBoxQuery = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional GeoDistanceQuery geo_distance_query = 8;
 * @return {?proto.couchbase.search.v1.GeoDistanceQuery}
 */
proto.couchbase.search.v1.Query.prototype.getGeoDistanceQuery = function() {
  return /** @type{?proto.couchbase.search.v1.GeoDistanceQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.GeoDistanceQuery, 8));
};


/**
 * @param {?proto.couchbase.search.v1.GeoDistanceQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setGeoDistanceQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearGeoDistanceQuery = function() {
  return this.setGeoDistanceQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasGeoDistanceQuery = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional GeoPolygonQuery geo_polygon_query = 9;
 * @return {?proto.couchbase.search.v1.GeoPolygonQuery}
 */
proto.couchbase.search.v1.Query.prototype.getGeoPolygonQuery = function() {
  return /** @type{?proto.couchbase.search.v1.GeoPolygonQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.GeoPolygonQuery, 9));
};


/**
 * @param {?proto.couchbase.search.v1.GeoPolygonQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setGeoPolygonQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearGeoPolygonQuery = function() {
  return this.setGeoPolygonQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasGeoPolygonQuery = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional MatchAllQuery match_all_query = 10;
 * @return {?proto.couchbase.search.v1.MatchAllQuery}
 */
proto.couchbase.search.v1.Query.prototype.getMatchAllQuery = function() {
  return /** @type{?proto.couchbase.search.v1.MatchAllQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.MatchAllQuery, 10));
};


/**
 * @param {?proto.couchbase.search.v1.MatchAllQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setMatchAllQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearMatchAllQuery = function() {
  return this.setMatchAllQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasMatchAllQuery = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MatchNoneQuery match_none_query = 11;
 * @return {?proto.couchbase.search.v1.MatchNoneQuery}
 */
proto.couchbase.search.v1.Query.prototype.getMatchNoneQuery = function() {
  return /** @type{?proto.couchbase.search.v1.MatchNoneQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.MatchNoneQuery, 11));
};


/**
 * @param {?proto.couchbase.search.v1.MatchNoneQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setMatchNoneQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearMatchNoneQuery = function() {
  return this.setMatchNoneQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasMatchNoneQuery = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MatchPhraseQuery match_phrase_query = 12;
 * @return {?proto.couchbase.search.v1.MatchPhraseQuery}
 */
proto.couchbase.search.v1.Query.prototype.getMatchPhraseQuery = function() {
  return /** @type{?proto.couchbase.search.v1.MatchPhraseQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.MatchPhraseQuery, 12));
};


/**
 * @param {?proto.couchbase.search.v1.MatchPhraseQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setMatchPhraseQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearMatchPhraseQuery = function() {
  return this.setMatchPhraseQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasMatchPhraseQuery = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional MatchQuery match_query = 13;
 * @return {?proto.couchbase.search.v1.MatchQuery}
 */
proto.couchbase.search.v1.Query.prototype.getMatchQuery = function() {
  return /** @type{?proto.couchbase.search.v1.MatchQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.MatchQuery, 13));
};


/**
 * @param {?proto.couchbase.search.v1.MatchQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setMatchQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearMatchQuery = function() {
  return this.setMatchQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasMatchQuery = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional NumericRangeQuery numeric_range_query = 14;
 * @return {?proto.couchbase.search.v1.NumericRangeQuery}
 */
proto.couchbase.search.v1.Query.prototype.getNumericRangeQuery = function() {
  return /** @type{?proto.couchbase.search.v1.NumericRangeQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.NumericRangeQuery, 14));
};


/**
 * @param {?proto.couchbase.search.v1.NumericRangeQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setNumericRangeQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearNumericRangeQuery = function() {
  return this.setNumericRangeQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasNumericRangeQuery = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional PhraseQuery phrase_query = 15;
 * @return {?proto.couchbase.search.v1.PhraseQuery}
 */
proto.couchbase.search.v1.Query.prototype.getPhraseQuery = function() {
  return /** @type{?proto.couchbase.search.v1.PhraseQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.PhraseQuery, 15));
};


/**
 * @param {?proto.couchbase.search.v1.PhraseQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setPhraseQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearPhraseQuery = function() {
  return this.setPhraseQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasPhraseQuery = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PrefixQuery prefix_query = 16;
 * @return {?proto.couchbase.search.v1.PrefixQuery}
 */
proto.couchbase.search.v1.Query.prototype.getPrefixQuery = function() {
  return /** @type{?proto.couchbase.search.v1.PrefixQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.PrefixQuery, 16));
};


/**
 * @param {?proto.couchbase.search.v1.PrefixQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setPrefixQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearPrefixQuery = function() {
  return this.setPrefixQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasPrefixQuery = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional QueryStringQuery query_string_query = 17;
 * @return {?proto.couchbase.search.v1.QueryStringQuery}
 */
proto.couchbase.search.v1.Query.prototype.getQueryStringQuery = function() {
  return /** @type{?proto.couchbase.search.v1.QueryStringQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.QueryStringQuery, 17));
};


/**
 * @param {?proto.couchbase.search.v1.QueryStringQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setQueryStringQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearQueryStringQuery = function() {
  return this.setQueryStringQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasQueryStringQuery = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional RegexpQuery regexp_query = 18;
 * @return {?proto.couchbase.search.v1.RegexpQuery}
 */
proto.couchbase.search.v1.Query.prototype.getRegexpQuery = function() {
  return /** @type{?proto.couchbase.search.v1.RegexpQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.RegexpQuery, 18));
};


/**
 * @param {?proto.couchbase.search.v1.RegexpQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setRegexpQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearRegexpQuery = function() {
  return this.setRegexpQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasRegexpQuery = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional TermQuery term_query = 19;
 * @return {?proto.couchbase.search.v1.TermQuery}
 */
proto.couchbase.search.v1.Query.prototype.getTermQuery = function() {
  return /** @type{?proto.couchbase.search.v1.TermQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.TermQuery, 19));
};


/**
 * @param {?proto.couchbase.search.v1.TermQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setTermQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearTermQuery = function() {
  return this.setTermQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasTermQuery = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional TermRangeQuery term_range_query = 20;
 * @return {?proto.couchbase.search.v1.TermRangeQuery}
 */
proto.couchbase.search.v1.Query.prototype.getTermRangeQuery = function() {
  return /** @type{?proto.couchbase.search.v1.TermRangeQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.TermRangeQuery, 20));
};


/**
 * @param {?proto.couchbase.search.v1.TermRangeQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setTermRangeQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearTermRangeQuery = function() {
  return this.setTermRangeQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasTermRangeQuery = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional WildcardQuery wildcard_query = 21;
 * @return {?proto.couchbase.search.v1.WildcardQuery}
 */
proto.couchbase.search.v1.Query.prototype.getWildcardQuery = function() {
  return /** @type{?proto.couchbase.search.v1.WildcardQuery} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.WildcardQuery, 21));
};


/**
 * @param {?proto.couchbase.search.v1.WildcardQuery|undefined} value
 * @return {!proto.couchbase.search.v1.Query} returns this
*/
proto.couchbase.search.v1.Query.prototype.setWildcardQuery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.couchbase.search.v1.Query.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Query} returns this
 */
proto.couchbase.search.v1.Query.prototype.clearWildcardQuery = function() {
  return this.setWildcardQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Query.prototype.hasWildcardQuery = function() {
  return jspb.Message.getField(this, 21) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.FieldSorting.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.FieldSorting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.FieldSorting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.FieldSorting.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    descending: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    missing: jspb.Message.getFieldWithDefault(msg, 3, ""),
    mode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.FieldSorting}
 */
proto.couchbase.search.v1.FieldSorting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.FieldSorting;
  return proto.couchbase.search.v1.FieldSorting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.FieldSorting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.FieldSorting}
 */
proto.couchbase.search.v1.FieldSorting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDescending(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMissing(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.FieldSorting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.FieldSorting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.FieldSorting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.FieldSorting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescending();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMissing();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.couchbase.search.v1.FieldSorting.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.FieldSorting} returns this
 */
proto.couchbase.search.v1.FieldSorting.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool descending = 2;
 * @return {boolean}
 */
proto.couchbase.search.v1.FieldSorting.prototype.getDescending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.FieldSorting} returns this
 */
proto.couchbase.search.v1.FieldSorting.prototype.setDescending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string missing = 3;
 * @return {string}
 */
proto.couchbase.search.v1.FieldSorting.prototype.getMissing = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.FieldSorting} returns this
 */
proto.couchbase.search.v1.FieldSorting.prototype.setMissing = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string mode = 4;
 * @return {string}
 */
proto.couchbase.search.v1.FieldSorting.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.FieldSorting} returns this
 */
proto.couchbase.search.v1.FieldSorting.prototype.setMode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string type = 5;
 * @return {string}
 */
proto.couchbase.search.v1.FieldSorting.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.FieldSorting} returns this
 */
proto.couchbase.search.v1.FieldSorting.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.GeoDistanceSorting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.GeoDistanceSorting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.GeoDistanceSorting.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    descending: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    center: (f = msg.getCenter()) && proto.couchbase.search.v1.LatLng.toObject(includeInstance, f),
    unit: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.GeoDistanceSorting}
 */
proto.couchbase.search.v1.GeoDistanceSorting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.GeoDistanceSorting;
  return proto.couchbase.search.v1.GeoDistanceSorting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.GeoDistanceSorting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.GeoDistanceSorting}
 */
proto.couchbase.search.v1.GeoDistanceSorting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDescending(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.LatLng;
      reader.readMessage(value,proto.couchbase.search.v1.LatLng.deserializeBinaryFromReader);
      msg.setCenter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.GeoDistanceSorting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.GeoDistanceSorting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.GeoDistanceSorting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescending();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCenter();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.search.v1.LatLng.serializeBinaryToWriter
    );
  }
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.GeoDistanceSorting} returns this
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool descending = 2;
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.getDescending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.GeoDistanceSorting} returns this
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.setDescending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional LatLng center = 3;
 * @return {?proto.couchbase.search.v1.LatLng}
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.getCenter = function() {
  return /** @type{?proto.couchbase.search.v1.LatLng} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.LatLng, 3));
};


/**
 * @param {?proto.couchbase.search.v1.LatLng|undefined} value
 * @return {!proto.couchbase.search.v1.GeoDistanceSorting} returns this
*/
proto.couchbase.search.v1.GeoDistanceSorting.prototype.setCenter = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.GeoDistanceSorting} returns this
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.clearCenter = function() {
  return this.setCenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.hasCenter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string unit = 4;
 * @return {string}
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.GeoDistanceSorting} returns this
 */
proto.couchbase.search.v1.GeoDistanceSorting.prototype.setUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.IdSorting.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.IdSorting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.IdSorting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.IdSorting.toObject = function(includeInstance, msg) {
  var f, obj = {
    descending: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.IdSorting}
 */
proto.couchbase.search.v1.IdSorting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.IdSorting;
  return proto.couchbase.search.v1.IdSorting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.IdSorting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.IdSorting}
 */
proto.couchbase.search.v1.IdSorting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDescending(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.IdSorting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.IdSorting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.IdSorting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.IdSorting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescending();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool descending = 1;
 * @return {boolean}
 */
proto.couchbase.search.v1.IdSorting.prototype.getDescending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.IdSorting} returns this
 */
proto.couchbase.search.v1.IdSorting.prototype.setDescending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.ScoreSorting.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.ScoreSorting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.ScoreSorting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.ScoreSorting.toObject = function(includeInstance, msg) {
  var f, obj = {
    descending: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.ScoreSorting}
 */
proto.couchbase.search.v1.ScoreSorting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.ScoreSorting;
  return proto.couchbase.search.v1.ScoreSorting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.ScoreSorting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.ScoreSorting}
 */
proto.couchbase.search.v1.ScoreSorting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDescending(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.ScoreSorting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.ScoreSorting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.ScoreSorting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.ScoreSorting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescending();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool descending = 1;
 * @return {boolean}
 */
proto.couchbase.search.v1.ScoreSorting.prototype.getDescending = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.ScoreSorting} returns this
 */
proto.couchbase.search.v1.ScoreSorting.prototype.setDescending = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.search.v1.Sorting.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.couchbase.search.v1.Sorting.SortingCase = {
  SORTING_NOT_SET: 0,
  FIELD_SORTING: 1,
  GEO_DISTANCE_SORTING: 2,
  ID_SORTING: 3,
  SCORE_SORTING: 4
};

/**
 * @return {proto.couchbase.search.v1.Sorting.SortingCase}
 */
proto.couchbase.search.v1.Sorting.prototype.getSortingCase = function() {
  return /** @type {proto.couchbase.search.v1.Sorting.SortingCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.search.v1.Sorting.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.Sorting.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.Sorting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.Sorting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.Sorting.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldSorting: (f = msg.getFieldSorting()) && proto.couchbase.search.v1.FieldSorting.toObject(includeInstance, f),
    geoDistanceSorting: (f = msg.getGeoDistanceSorting()) && proto.couchbase.search.v1.GeoDistanceSorting.toObject(includeInstance, f),
    idSorting: (f = msg.getIdSorting()) && proto.couchbase.search.v1.IdSorting.toObject(includeInstance, f),
    scoreSorting: (f = msg.getScoreSorting()) && proto.couchbase.search.v1.ScoreSorting.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.Sorting}
 */
proto.couchbase.search.v1.Sorting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.Sorting;
  return proto.couchbase.search.v1.Sorting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.Sorting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.Sorting}
 */
proto.couchbase.search.v1.Sorting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.couchbase.search.v1.FieldSorting;
      reader.readMessage(value,proto.couchbase.search.v1.FieldSorting.deserializeBinaryFromReader);
      msg.setFieldSorting(value);
      break;
    case 2:
      var value = new proto.couchbase.search.v1.GeoDistanceSorting;
      reader.readMessage(value,proto.couchbase.search.v1.GeoDistanceSorting.deserializeBinaryFromReader);
      msg.setGeoDistanceSorting(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.IdSorting;
      reader.readMessage(value,proto.couchbase.search.v1.IdSorting.deserializeBinaryFromReader);
      msg.setIdSorting(value);
      break;
    case 4:
      var value = new proto.couchbase.search.v1.ScoreSorting;
      reader.readMessage(value,proto.couchbase.search.v1.ScoreSorting.deserializeBinaryFromReader);
      msg.setScoreSorting(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.Sorting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.Sorting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.Sorting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.Sorting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldSorting();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.couchbase.search.v1.FieldSorting.serializeBinaryToWriter
    );
  }
  f = message.getGeoDistanceSorting();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.search.v1.GeoDistanceSorting.serializeBinaryToWriter
    );
  }
  f = message.getIdSorting();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.search.v1.IdSorting.serializeBinaryToWriter
    );
  }
  f = message.getScoreSorting();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.couchbase.search.v1.ScoreSorting.serializeBinaryToWriter
    );
  }
};


/**
 * optional FieldSorting field_sorting = 1;
 * @return {?proto.couchbase.search.v1.FieldSorting}
 */
proto.couchbase.search.v1.Sorting.prototype.getFieldSorting = function() {
  return /** @type{?proto.couchbase.search.v1.FieldSorting} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.FieldSorting, 1));
};


/**
 * @param {?proto.couchbase.search.v1.FieldSorting|undefined} value
 * @return {!proto.couchbase.search.v1.Sorting} returns this
*/
proto.couchbase.search.v1.Sorting.prototype.setFieldSorting = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.couchbase.search.v1.Sorting.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Sorting} returns this
 */
proto.couchbase.search.v1.Sorting.prototype.clearFieldSorting = function() {
  return this.setFieldSorting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Sorting.prototype.hasFieldSorting = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GeoDistanceSorting geo_distance_sorting = 2;
 * @return {?proto.couchbase.search.v1.GeoDistanceSorting}
 */
proto.couchbase.search.v1.Sorting.prototype.getGeoDistanceSorting = function() {
  return /** @type{?proto.couchbase.search.v1.GeoDistanceSorting} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.GeoDistanceSorting, 2));
};


/**
 * @param {?proto.couchbase.search.v1.GeoDistanceSorting|undefined} value
 * @return {!proto.couchbase.search.v1.Sorting} returns this
*/
proto.couchbase.search.v1.Sorting.prototype.setGeoDistanceSorting = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.couchbase.search.v1.Sorting.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Sorting} returns this
 */
proto.couchbase.search.v1.Sorting.prototype.clearGeoDistanceSorting = function() {
  return this.setGeoDistanceSorting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Sorting.prototype.hasGeoDistanceSorting = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional IdSorting id_sorting = 3;
 * @return {?proto.couchbase.search.v1.IdSorting}
 */
proto.couchbase.search.v1.Sorting.prototype.getIdSorting = function() {
  return /** @type{?proto.couchbase.search.v1.IdSorting} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.IdSorting, 3));
};


/**
 * @param {?proto.couchbase.search.v1.IdSorting|undefined} value
 * @return {!proto.couchbase.search.v1.Sorting} returns this
*/
proto.couchbase.search.v1.Sorting.prototype.setIdSorting = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.couchbase.search.v1.Sorting.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Sorting} returns this
 */
proto.couchbase.search.v1.Sorting.prototype.clearIdSorting = function() {
  return this.setIdSorting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Sorting.prototype.hasIdSorting = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ScoreSorting score_sorting = 4;
 * @return {?proto.couchbase.search.v1.ScoreSorting}
 */
proto.couchbase.search.v1.Sorting.prototype.getScoreSorting = function() {
  return /** @type{?proto.couchbase.search.v1.ScoreSorting} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.ScoreSorting, 4));
};


/**
 * @param {?proto.couchbase.search.v1.ScoreSorting|undefined} value
 * @return {!proto.couchbase.search.v1.Sorting} returns this
*/
proto.couchbase.search.v1.Sorting.prototype.setScoreSorting = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.couchbase.search.v1.Sorting.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Sorting} returns this
 */
proto.couchbase.search.v1.Sorting.prototype.clearScoreSorting = function() {
  return this.setScoreSorting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Sorting.prototype.hasScoreSorting = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.DateRange.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.DateRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.DateRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.DateRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    start: jspb.Message.getFieldWithDefault(msg, 2, ""),
    end: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.DateRange}
 */
proto.couchbase.search.v1.DateRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.DateRange;
  return proto.couchbase.search.v1.DateRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.DateRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.DateRange}
 */
proto.couchbase.search.v1.DateRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStart(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.DateRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.DateRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.DateRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.DateRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.couchbase.search.v1.DateRange.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.DateRange} returns this
 */
proto.couchbase.search.v1.DateRange.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string start = 2;
 * @return {string}
 */
proto.couchbase.search.v1.DateRange.prototype.getStart = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.DateRange} returns this
 */
proto.couchbase.search.v1.DateRange.prototype.setStart = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.DateRange} returns this
 */
proto.couchbase.search.v1.DateRange.prototype.clearStart = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.DateRange.prototype.hasStart = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string end = 3;
 * @return {string}
 */
proto.couchbase.search.v1.DateRange.prototype.getEnd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.DateRange} returns this
 */
proto.couchbase.search.v1.DateRange.prototype.setEnd = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.DateRange} returns this
 */
proto.couchbase.search.v1.DateRange.prototype.clearEnd = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.DateRange.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.DateRangeFacet.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.DateRangeFacet.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.DateRangeFacet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.DateRangeFacet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.DateRangeFacet.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dateRangesList: jspb.Message.toObjectList(msg.getDateRangesList(),
    proto.couchbase.search.v1.DateRange.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.DateRangeFacet}
 */
proto.couchbase.search.v1.DateRangeFacet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.DateRangeFacet;
  return proto.couchbase.search.v1.DateRangeFacet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.DateRangeFacet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.DateRangeFacet}
 */
proto.couchbase.search.v1.DateRangeFacet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.DateRange;
      reader.readMessage(value,proto.couchbase.search.v1.DateRange.deserializeBinaryFromReader);
      msg.addDateRanges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.DateRangeFacet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.DateRangeFacet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.DateRangeFacet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.DateRangeFacet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDateRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.couchbase.search.v1.DateRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.couchbase.search.v1.DateRangeFacet.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.DateRangeFacet} returns this
 */
proto.couchbase.search.v1.DateRangeFacet.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.couchbase.search.v1.DateRangeFacet.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.DateRangeFacet} returns this
 */
proto.couchbase.search.v1.DateRangeFacet.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated DateRange date_ranges = 3;
 * @return {!Array<!proto.couchbase.search.v1.DateRange>}
 */
proto.couchbase.search.v1.DateRangeFacet.prototype.getDateRangesList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.DateRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.DateRange, 3));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.DateRange>} value
 * @return {!proto.couchbase.search.v1.DateRangeFacet} returns this
*/
proto.couchbase.search.v1.DateRangeFacet.prototype.setDateRangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.couchbase.search.v1.DateRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.DateRange}
 */
proto.couchbase.search.v1.DateRangeFacet.prototype.addDateRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.couchbase.search.v1.DateRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.DateRangeFacet} returns this
 */
proto.couchbase.search.v1.DateRangeFacet.prototype.clearDateRangesList = function() {
  return this.setDateRangesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.NumericRange.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.NumericRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.NumericRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.NumericRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    min: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    max: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.NumericRange}
 */
proto.couchbase.search.v1.NumericRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.NumericRange;
  return proto.couchbase.search.v1.NumericRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.NumericRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.NumericRange}
 */
proto.couchbase.search.v1.NumericRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.NumericRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.NumericRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.NumericRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.NumericRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.couchbase.search.v1.NumericRange.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.NumericRange} returns this
 */
proto.couchbase.search.v1.NumericRange.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float min = 2;
 * @return {number}
 */
proto.couchbase.search.v1.NumericRange.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.NumericRange} returns this
 */
proto.couchbase.search.v1.NumericRange.prototype.setMin = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.NumericRange} returns this
 */
proto.couchbase.search.v1.NumericRange.prototype.clearMin = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.NumericRange.prototype.hasMin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float max = 3;
 * @return {number}
 */
proto.couchbase.search.v1.NumericRange.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.NumericRange} returns this
 */
proto.couchbase.search.v1.NumericRange.prototype.setMax = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.NumericRange} returns this
 */
proto.couchbase.search.v1.NumericRange.prototype.clearMax = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.NumericRange.prototype.hasMax = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.NumericRangeFacet.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.NumericRangeFacet.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.NumericRangeFacet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.NumericRangeFacet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.NumericRangeFacet.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numericRangesList: jspb.Message.toObjectList(msg.getNumericRangesList(),
    proto.couchbase.search.v1.NumericRange.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.NumericRangeFacet}
 */
proto.couchbase.search.v1.NumericRangeFacet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.NumericRangeFacet;
  return proto.couchbase.search.v1.NumericRangeFacet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.NumericRangeFacet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.NumericRangeFacet}
 */
proto.couchbase.search.v1.NumericRangeFacet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.NumericRange;
      reader.readMessage(value,proto.couchbase.search.v1.NumericRange.deserializeBinaryFromReader);
      msg.addNumericRanges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.NumericRangeFacet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.NumericRangeFacet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.NumericRangeFacet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.NumericRangeFacet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNumericRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.couchbase.search.v1.NumericRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.couchbase.search.v1.NumericRangeFacet.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.NumericRangeFacet} returns this
 */
proto.couchbase.search.v1.NumericRangeFacet.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.couchbase.search.v1.NumericRangeFacet.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.NumericRangeFacet} returns this
 */
proto.couchbase.search.v1.NumericRangeFacet.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated NumericRange numeric_ranges = 3;
 * @return {!Array<!proto.couchbase.search.v1.NumericRange>}
 */
proto.couchbase.search.v1.NumericRangeFacet.prototype.getNumericRangesList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.NumericRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.NumericRange, 3));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.NumericRange>} value
 * @return {!proto.couchbase.search.v1.NumericRangeFacet} returns this
*/
proto.couchbase.search.v1.NumericRangeFacet.prototype.setNumericRangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.couchbase.search.v1.NumericRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.NumericRange}
 */
proto.couchbase.search.v1.NumericRangeFacet.prototype.addNumericRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.couchbase.search.v1.NumericRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.NumericRangeFacet} returns this
 */
proto.couchbase.search.v1.NumericRangeFacet.prototype.clearNumericRangesList = function() {
  return this.setNumericRangesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.TermFacet.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.TermFacet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.TermFacet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.TermFacet.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.TermFacet}
 */
proto.couchbase.search.v1.TermFacet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.TermFacet;
  return proto.couchbase.search.v1.TermFacet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.TermFacet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.TermFacet}
 */
proto.couchbase.search.v1.TermFacet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.TermFacet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.TermFacet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.TermFacet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.TermFacet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.couchbase.search.v1.TermFacet.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.TermFacet} returns this
 */
proto.couchbase.search.v1.TermFacet.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 size = 2;
 * @return {number}
 */
proto.couchbase.search.v1.TermFacet.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.TermFacet} returns this
 */
proto.couchbase.search.v1.TermFacet.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.search.v1.Facet.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.couchbase.search.v1.Facet.FacetCase = {
  FACET_NOT_SET: 0,
  DATE_RANGE_FACET: 1,
  NUMERIC_RANGE_FACET: 2,
  TERM_FACET: 3
};

/**
 * @return {proto.couchbase.search.v1.Facet.FacetCase}
 */
proto.couchbase.search.v1.Facet.prototype.getFacetCase = function() {
  return /** @type {proto.couchbase.search.v1.Facet.FacetCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.search.v1.Facet.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.Facet.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.Facet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.Facet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.Facet.toObject = function(includeInstance, msg) {
  var f, obj = {
    dateRangeFacet: (f = msg.getDateRangeFacet()) && proto.couchbase.search.v1.DateRangeFacet.toObject(includeInstance, f),
    numericRangeFacet: (f = msg.getNumericRangeFacet()) && proto.couchbase.search.v1.NumericRangeFacet.toObject(includeInstance, f),
    termFacet: (f = msg.getTermFacet()) && proto.couchbase.search.v1.TermFacet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.Facet}
 */
proto.couchbase.search.v1.Facet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.Facet;
  return proto.couchbase.search.v1.Facet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.Facet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.Facet}
 */
proto.couchbase.search.v1.Facet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.couchbase.search.v1.DateRangeFacet;
      reader.readMessage(value,proto.couchbase.search.v1.DateRangeFacet.deserializeBinaryFromReader);
      msg.setDateRangeFacet(value);
      break;
    case 2:
      var value = new proto.couchbase.search.v1.NumericRangeFacet;
      reader.readMessage(value,proto.couchbase.search.v1.NumericRangeFacet.deserializeBinaryFromReader);
      msg.setNumericRangeFacet(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.TermFacet;
      reader.readMessage(value,proto.couchbase.search.v1.TermFacet.deserializeBinaryFromReader);
      msg.setTermFacet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.Facet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.Facet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.Facet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.Facet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDateRangeFacet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.couchbase.search.v1.DateRangeFacet.serializeBinaryToWriter
    );
  }
  f = message.getNumericRangeFacet();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.search.v1.NumericRangeFacet.serializeBinaryToWriter
    );
  }
  f = message.getTermFacet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.search.v1.TermFacet.serializeBinaryToWriter
    );
  }
};


/**
 * optional DateRangeFacet date_range_facet = 1;
 * @return {?proto.couchbase.search.v1.DateRangeFacet}
 */
proto.couchbase.search.v1.Facet.prototype.getDateRangeFacet = function() {
  return /** @type{?proto.couchbase.search.v1.DateRangeFacet} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.DateRangeFacet, 1));
};


/**
 * @param {?proto.couchbase.search.v1.DateRangeFacet|undefined} value
 * @return {!proto.couchbase.search.v1.Facet} returns this
*/
proto.couchbase.search.v1.Facet.prototype.setDateRangeFacet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.couchbase.search.v1.Facet.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Facet} returns this
 */
proto.couchbase.search.v1.Facet.prototype.clearDateRangeFacet = function() {
  return this.setDateRangeFacet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Facet.prototype.hasDateRangeFacet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NumericRangeFacet numeric_range_facet = 2;
 * @return {?proto.couchbase.search.v1.NumericRangeFacet}
 */
proto.couchbase.search.v1.Facet.prototype.getNumericRangeFacet = function() {
  return /** @type{?proto.couchbase.search.v1.NumericRangeFacet} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.NumericRangeFacet, 2));
};


/**
 * @param {?proto.couchbase.search.v1.NumericRangeFacet|undefined} value
 * @return {!proto.couchbase.search.v1.Facet} returns this
*/
proto.couchbase.search.v1.Facet.prototype.setNumericRangeFacet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.couchbase.search.v1.Facet.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Facet} returns this
 */
proto.couchbase.search.v1.Facet.prototype.clearNumericRangeFacet = function() {
  return this.setNumericRangeFacet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Facet.prototype.hasNumericRangeFacet = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TermFacet term_facet = 3;
 * @return {?proto.couchbase.search.v1.TermFacet}
 */
proto.couchbase.search.v1.Facet.prototype.getTermFacet = function() {
  return /** @type{?proto.couchbase.search.v1.TermFacet} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.TermFacet, 3));
};


/**
 * @param {?proto.couchbase.search.v1.TermFacet|undefined} value
 * @return {!proto.couchbase.search.v1.Facet} returns this
*/
proto.couchbase.search.v1.Facet.prototype.setTermFacet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.couchbase.search.v1.Facet.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.Facet} returns this
 */
proto.couchbase.search.v1.Facet.prototype.clearTermFacet = function() {
  return this.setTermFacet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.Facet.prototype.hasTermFacet = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.SearchQueryRequest.repeatedFields_ = [8,9,10,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    indexName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    query: (f = msg.getQuery()) && proto.couchbase.search.v1.Query.toObject(includeInstance, f),
    scanConsistency: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    skip: jspb.Message.getFieldWithDefault(msg, 5, 0),
    includeExplanation: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    highlightStyle: jspb.Message.getFieldWithDefault(msg, 7, 0),
    highlightFieldsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    fieldsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    sortList: jspb.Message.toObjectList(msg.getSortList(),
    proto.couchbase.search.v1.Sorting.toObject, includeInstance),
    disableScoring: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    collectionsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    includeLocations: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    facetsMap: (f = msg.getFacetsMap()) ? f.toObject(includeInstance, proto.couchbase.search.v1.Facet.toObject) : [],
    bucketName: jspb.Message.getFieldWithDefault(msg, 15, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 16, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryRequest}
 */
proto.couchbase.search.v1.SearchQueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryRequest;
  return proto.couchbase.search.v1.SearchQueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryRequest}
 */
proto.couchbase.search.v1.SearchQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndexName(value);
      break;
    case 2:
      var value = new proto.couchbase.search.v1.Query;
      reader.readMessage(value,proto.couchbase.search.v1.Query.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 3:
      var value = /** @type {!proto.couchbase.search.v1.SearchQueryRequest.ScanConsistency} */ (reader.readEnum());
      msg.setScanConsistency(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSkip(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeExplanation(value);
      break;
    case 7:
      var value = /** @type {!proto.couchbase.search.v1.SearchQueryRequest.HighlightStyle} */ (reader.readEnum());
      msg.setHighlightStyle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addHighlightFields(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addFields(value);
      break;
    case 10:
      var value = new proto.couchbase.search.v1.Sorting;
      reader.readMessage(value,proto.couchbase.search.v1.Sorting.deserializeBinaryFromReader);
      msg.addSort(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableScoring(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addCollections(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeLocations(value);
      break;
    case 14:
      var value = msg.getFacetsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.couchbase.search.v1.Facet.deserializeBinaryFromReader, "", new proto.couchbase.search.v1.Facet());
         });
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndexName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.search.v1.Query.serializeBinaryToWriter
    );
  }
  f = message.getScanConsistency();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getSkip();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getIncludeExplanation();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getHighlightStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getHighlightFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getSortList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.couchbase.search.v1.Sorting.serializeBinaryToWriter
    );
  }
  f = message.getDisableScoring();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getCollectionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getIncludeLocations();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getFacetsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(14, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.couchbase.search.v1.Facet.serializeBinaryToWriter);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.couchbase.search.v1.SearchQueryRequest.ScanConsistency = {
  SCAN_CONSISTENCY_NOT_BOUNDED: 0
};

/**
 * @enum {number}
 */
proto.couchbase.search.v1.SearchQueryRequest.HighlightStyle = {
  HIGHLIGHT_STYLE_DEFAULT: 0,
  HIGHLIGHT_STYLE_HTML: 1,
  HIGHLIGHT_STYLE_ANSI: 2
};

/**
 * optional string index_name = 1;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getIndexName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setIndexName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Query query = 2;
 * @return {?proto.couchbase.search.v1.Query}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getQuery = function() {
  return /** @type{?proto.couchbase.search.v1.Query} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.Query, 2));
};


/**
 * @param {?proto.couchbase.search.v1.Query|undefined} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
*/
proto.couchbase.search.v1.SearchQueryRequest.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ScanConsistency scan_consistency = 3;
 * @return {!proto.couchbase.search.v1.SearchQueryRequest.ScanConsistency}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getScanConsistency = function() {
  return /** @type {!proto.couchbase.search.v1.SearchQueryRequest.ScanConsistency} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.couchbase.search.v1.SearchQueryRequest.ScanConsistency} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setScanConsistency = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 skip = 5;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getSkip = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setSkip = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool include_explanation = 6;
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getIncludeExplanation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setIncludeExplanation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional HighlightStyle highlight_style = 7;
 * @return {!proto.couchbase.search.v1.SearchQueryRequest.HighlightStyle}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getHighlightStyle = function() {
  return /** @type {!proto.couchbase.search.v1.SearchQueryRequest.HighlightStyle} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.couchbase.search.v1.SearchQueryRequest.HighlightStyle} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setHighlightStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * repeated string highlight_fields = 8;
 * @return {!Array<string>}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getHighlightFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setHighlightFieldsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.addHighlightFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.clearHighlightFieldsList = function() {
  return this.setHighlightFieldsList([]);
};


/**
 * repeated string fields = 9;
 * @return {!Array<string>}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setFieldsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.addFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


/**
 * repeated Sorting sort = 10;
 * @return {!Array<!proto.couchbase.search.v1.Sorting>}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getSortList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.Sorting>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.Sorting, 10));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.Sorting>} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
*/
proto.couchbase.search.v1.SearchQueryRequest.prototype.setSortList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.couchbase.search.v1.Sorting=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.Sorting}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.addSort = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.couchbase.search.v1.Sorting, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.clearSortList = function() {
  return this.setSortList([]);
};


/**
 * optional bool disable_scoring = 11;
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getDisableScoring = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setDisableScoring = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated string collections = 12;
 * @return {!Array<string>}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getCollectionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setCollectionsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.addCollections = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.clearCollectionsList = function() {
  return this.setCollectionsList([]);
};


/**
 * optional bool include_locations = 13;
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getIncludeLocations = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setIncludeLocations = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * map<string, Facet> facets = 14;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.couchbase.search.v1.Facet>}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getFacetsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.couchbase.search.v1.Facet>} */ (
      jspb.Message.getMapField(this, 14, opt_noLazyCreate,
      proto.couchbase.search.v1.Facet));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.clearFacetsMap = function() {
  this.getFacetsMap().clear();
  return this;};


/**
 * optional string bucket_name = 15;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.clearBucketName = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.hasBucketName = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string scope_name = 16;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryRequest} returns this
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.clearScopeName = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryRequest.prototype.hasScopeName = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.SearchQueryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    hitsList: jspb.Message.toObjectList(msg.getHitsList(),
    proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.toObject, includeInstance),
    facetsMap: (f = msg.getFacetsMap()) ? f.toObject(includeInstance, proto.couchbase.search.v1.SearchQueryResponse.FacetResult.toObject) : [],
    metaData: (f = msg.getMetaData()) && proto.couchbase.search.v1.SearchQueryResponse.MetaData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse}
 */
proto.couchbase.search.v1.SearchQueryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse;
  return proto.couchbase.search.v1.SearchQueryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse}
 */
proto.couchbase.search.v1.SearchQueryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow;
      reader.readMessage(value,proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.deserializeBinaryFromReader);
      msg.addHits(value);
      break;
    case 2:
      var value = msg.getFacetsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.couchbase.search.v1.SearchQueryResponse.FacetResult.deserializeBinaryFromReader, "", new proto.couchbase.search.v1.SearchQueryResponse.FacetResult());
         });
      break;
    case 3:
      var value = new proto.couchbase.search.v1.SearchQueryResponse.MetaData;
      reader.readMessage(value,proto.couchbase.search.v1.SearchQueryResponse.MetaData.deserializeBinaryFromReader);
      msg.setMetaData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.serializeBinaryToWriter
    );
  }
  f = message.getFacetsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.couchbase.search.v1.SearchQueryResponse.FacetResult.serializeBinaryToWriter);
  }
  f = message.getMetaData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.search.v1.SearchQueryResponse.MetaData.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    index: jspb.Message.getFieldWithDefault(msg, 3, ""),
    explanation: msg.getExplanation_asB64(),
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.couchbase.search.v1.SearchQueryResponse.Location.toObject, includeInstance),
    fragmentsMap: (f = msg.getFragmentsMap()) ? f.toObject(includeInstance, proto.couchbase.search.v1.SearchQueryResponse.Fragment.toObject) : [],
    fieldsMap: (f = msg.getFieldsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow;
  return proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScore(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIndex(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExplanation(value);
      break;
    case 5:
      var value = new proto.couchbase.search.v1.SearchQueryResponse.Location;
      reader.readMessage(value,proto.couchbase.search.v1.SearchQueryResponse.Location.deserializeBinaryFromReader);
      msg.addLocations(value);
      break;
    case 6:
      var value = msg.getFragmentsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.couchbase.search.v1.SearchQueryResponse.Fragment.deserializeBinaryFromReader, "", new proto.couchbase.search.v1.SearchQueryResponse.Fragment());
         });
      break;
    case 7:
      var value = msg.getFieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getIndex();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExplanation_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.couchbase.search.v1.SearchQueryResponse.Location.serializeBinaryToWriter
    );
  }
  f = message.getFragmentsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.couchbase.search.v1.SearchQueryResponse.Fragment.serializeBinaryToWriter);
  }
  f = message.getFieldsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double score = 2;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string index = 3;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.getIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.setIndex = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes explanation = 4;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.getExplanation = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes explanation = 4;
 * This is a type-conversion wrapper around `getExplanation()`
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.getExplanation_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExplanation()));
};


/**
 * optional bytes explanation = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExplanation()`
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.getExplanation_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExplanation()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.setExplanation = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * repeated Location locations = 5;
 * @return {!Array<!proto.couchbase.search.v1.SearchQueryResponse.Location>}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.SearchQueryResponse.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.SearchQueryResponse.Location, 5));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.SearchQueryResponse.Location>} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.couchbase.search.v1.SearchQueryResponse.Location, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};


/**
 * map<string, Fragment> fragments = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.couchbase.search.v1.SearchQueryResponse.Fragment>}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.getFragmentsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.couchbase.search.v1.SearchQueryResponse.Fragment>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.couchbase.search.v1.SearchQueryResponse.Fragment));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.clearFragmentsMap = function() {
  this.getFragmentsMap().clear();
  return this;};


/**
 * map<string, bytes> fields = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.getFieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow.prototype.clearFieldsMap = function() {
  this.getFieldsMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 1, ""),
    term: jspb.Message.getFieldWithDefault(msg, 2, ""),
    position: jspb.Message.getFieldWithDefault(msg, 3, 0),
    start: jspb.Message.getFieldWithDefault(msg, 4, 0),
    end: jspb.Message.getFieldWithDefault(msg, 5, 0),
    arrayPositionsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location}
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.Location;
  return proto.couchbase.search.v1.SearchQueryResponse.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location}
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPosition(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStart(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnd(value);
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addArrayPositions(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getArrayPositionsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      6,
      f
    );
  }
};


/**
 * optional string field = 1;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string term = 2;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 position = 3;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 start = 4;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 end = 5;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.setEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated uint32 array_positions = 6;
 * @return {!Array<number>}
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.getArrayPositionsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.setArrayPositionsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.addArrayPositions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Location} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Location.prototype.clearArrayPositionsList = function() {
  return this.setArrayPositionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.Fragment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.Fragment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.toObject = function(includeInstance, msg) {
  var f, obj = {
    contentList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Fragment}
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.Fragment;
  return proto.couchbase.search.v1.SearchQueryResponse.Fragment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.Fragment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Fragment}
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.Fragment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.Fragment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string content = 1;
 * @return {!Array<string>}
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.prototype.getContentList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Fragment} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.prototype.setContentList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Fragment} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.prototype.addContent = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.Fragment} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.Fragment.prototype.clearContentList = function() {
  return this.setContentList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.SearchFacetCase = {
  SEARCH_FACET_NOT_SET: 0,
  TERM_FACET: 1,
  DATE_RANGE_FACET: 2,
  NUMERIC_RANGE_FACET: 3
};

/**
 * @return {proto.couchbase.search.v1.SearchQueryResponse.FacetResult.SearchFacetCase}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.getSearchFacetCase = function() {
  return /** @type {proto.couchbase.search.v1.SearchQueryResponse.FacetResult.SearchFacetCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.search.v1.SearchQueryResponse.FacetResult.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.FacetResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    termFacet: (f = msg.getTermFacet()) && proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.toObject(includeInstance, f),
    dateRangeFacet: (f = msg.getDateRangeFacet()) && proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.toObject(includeInstance, f),
    numericRangeFacet: (f = msg.getNumericRangeFacet()) && proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.FacetResult;
  return proto.couchbase.search.v1.SearchQueryResponse.FacetResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult;
      reader.readMessage(value,proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.deserializeBinaryFromReader);
      msg.setTermFacet(value);
      break;
    case 2:
      var value = new proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult;
      reader.readMessage(value,proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.deserializeBinaryFromReader);
      msg.setDateRangeFacet(value);
      break;
    case 3:
      var value = new proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult;
      reader.readMessage(value,proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.deserializeBinaryFromReader);
      msg.setNumericRangeFacet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.FacetResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTermFacet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.serializeBinaryToWriter
    );
  }
  f = message.getDateRangeFacet();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.serializeBinaryToWriter
    );
  }
  f = message.getNumericRangeFacet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional TermFacetResult term_facet = 1;
 * @return {?proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.getTermFacet = function() {
  return /** @type{?proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult, 1));
};


/**
 * @param {?proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult|undefined} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.setTermFacet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.couchbase.search.v1.SearchQueryResponse.FacetResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.clearTermFacet = function() {
  return this.setTermFacet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.hasTermFacet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DateRangeFacetResult date_range_facet = 2;
 * @return {?proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.getDateRangeFacet = function() {
  return /** @type{?proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult, 2));
};


/**
 * @param {?proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult|undefined} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.setDateRangeFacet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.couchbase.search.v1.SearchQueryResponse.FacetResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.clearDateRangeFacet = function() {
  return this.setDateRangeFacet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.hasDateRangeFacet = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional NumericRangeFacetResult numeric_range_facet = 3;
 * @return {?proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.getNumericRangeFacet = function() {
  return /** @type{?proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult, 3));
};


/**
 * @param {?proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult|undefined} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.setNumericRangeFacet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.couchbase.search.v1.SearchQueryResponse.FacetResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.FacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.clearNumericRangeFacet = function() {
  return this.setNumericRangeFacet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryResponse.FacetResult.prototype.hasNumericRangeFacet = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.TermResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.TermResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.TermResult;
  return proto.couchbase.search.v1.SearchQueryResponse.TermResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.TermResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.TermResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.TermResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 size = 3;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.TermResult.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    total: jspb.Message.getFieldWithDefault(msg, 3, 0),
    missing: jspb.Message.getFieldWithDefault(msg, 4, 0),
    other: jspb.Message.getFieldWithDefault(msg, 5, 0),
    termsList: jspb.Message.toObjectList(msg.getTermsList(),
    proto.couchbase.search.v1.SearchQueryResponse.TermResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult;
  return proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMissing(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOther(value);
      break;
    case 6:
      var value = new proto.couchbase.search.v1.SearchQueryResponse.TermResult;
      reader.readMessage(value,proto.couchbase.search.v1.SearchQueryResponse.TermResult.deserializeBinaryFromReader);
      msg.addTerms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMissing();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getOther();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTermsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.couchbase.search.v1.SearchQueryResponse.TermResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 total = 3;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 missing = 4;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.getMissing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.setMissing = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 other = 5;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.getOther = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.setOther = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated TermResult terms = 6;
 * @return {!Array<!proto.couchbase.search.v1.SearchQueryResponse.TermResult>}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.getTermsList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.SearchQueryResponse.TermResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.SearchQueryResponse.TermResult, 6));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.SearchQueryResponse.TermResult>} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.setTermsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.TermResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.addTerms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.couchbase.search.v1.SearchQueryResponse.TermResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.TermFacetResult.prototype.clearTermsList = function() {
  return this.setTermsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    start: (f = msg.getStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult;
  return proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEnd();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 size = 2;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.getStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.setStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.clearStart = function() {
  return this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.hasStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.getEnd = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.setEnd = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.clearEnd = function() {
  return this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    total: jspb.Message.getFieldWithDefault(msg, 3, 0),
    missing: jspb.Message.getFieldWithDefault(msg, 4, 0),
    other: jspb.Message.getFieldWithDefault(msg, 5, 0),
    dateRangesList: jspb.Message.toObjectList(msg.getDateRangesList(),
    proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult;
  return proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMissing(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOther(value);
      break;
    case 6:
      var value = new proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult;
      reader.readMessage(value,proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.deserializeBinaryFromReader);
      msg.addDateRanges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMissing();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getOther();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDateRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 total = 3;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 missing = 4;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.getMissing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.setMissing = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 other = 5;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.getOther = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.setOther = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated DateRangeResult date_ranges = 6;
 * @return {!Array<!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult>}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.getDateRangesList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult, 6));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult>} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.setDateRangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.addDateRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.couchbase.search.v1.SearchQueryResponse.DateRangeResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.DateRangeFacetResult.prototype.clearDateRangesList = function() {
  return this.setDateRangesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    min: jspb.Message.getFieldWithDefault(msg, 3, 0),
    max: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult;
  return proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMin();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getMax();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 size = 2;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 min = 3;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.prototype.setMin = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 max = 4;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.prototype.setMax = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    field: jspb.Message.getFieldWithDefault(msg, 2, ""),
    total: jspb.Message.getFieldWithDefault(msg, 3, 0),
    missing: jspb.Message.getFieldWithDefault(msg, 4, 0),
    other: jspb.Message.getFieldWithDefault(msg, 5, 0),
    numericRangesList: jspb.Message.toObjectList(msg.getNumericRangesList(),
    proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult;
  return proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setField(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMissing(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOther(value);
      break;
    case 6:
      var value = new proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult;
      reader.readMessage(value,proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.deserializeBinaryFromReader);
      msg.addNumericRanges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getField();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMissing();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getOther();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getNumericRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional string field = 2;
 * @return {string}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.getField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.setField = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 total = 3;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 missing = 4;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.getMissing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.setMissing = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 other = 5;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.getOther = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.setOther = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated NumericRangeResult numeric_ranges = 6;
 * @return {!Array<!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult>}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.getNumericRangesList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult, 6));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult>} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.setNumericRangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult}
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.addNumericRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.couchbase.search.v1.SearchQueryResponse.NumericRangeResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.NumericRangeFacetResult.prototype.clearNumericRangesList = function() {
  return this.setNumericRangesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.MetaData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.MetaData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.toObject = function(includeInstance, msg) {
  var f, obj = {
    metrics: (f = msg.getMetrics()) && proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.toObject(includeInstance, f),
    errorsMap: (f = msg.getErrorsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.MetaData}
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.MetaData;
  return proto.couchbase.search.v1.SearchQueryResponse.MetaData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.MetaData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.MetaData}
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics;
      reader.readMessage(value,proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.deserializeBinaryFromReader);
      msg.setMetrics(value);
      break;
    case 2:
      var value = msg.getErrorsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.MetaData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.MetaData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetrics();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.serializeBinaryToWriter
    );
  }
  f = message.getErrorsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional SearchMetrics metrics = 1;
 * @return {?proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics}
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.prototype.getMetrics = function() {
  return /** @type{?proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics, 1));
};


/**
 * @param {?proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics|undefined} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.MetaData} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.MetaData.prototype.setMetrics = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.MetaData} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.prototype.clearMetrics = function() {
  return this.setMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.prototype.hasMetrics = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, string> errors = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.prototype.getErrorsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.MetaData} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.MetaData.prototype.clearErrorsMap = function() {
  this.getErrorsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionTime: (f = msg.getExecutionTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    totalRows: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    totalPartitionCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    successPartitionCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    errorPartitionCount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics;
  return proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setExecutionTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalRows(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxScore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalPartitionCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSuccessPartitionCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setErrorPartitionCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTotalRows();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMaxScore();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTotalPartitionCount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSuccessPartitionCount();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getErrorPartitionCount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration execution_time = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.getExecutionTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.setExecutionTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.clearExecutionTime = function() {
  return this.setExecutionTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.hasExecutionTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 total_rows = 2;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.getTotalRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.setTotalRows = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double max_score = 3;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.getMaxScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.setMaxScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional uint64 total_partition_count = 4;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.getTotalPartitionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.setTotalPartitionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 success_partition_count = 5;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.getSuccessPartitionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.setSuccessPartitionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 error_partition_count = 6;
 * @return {number}
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.getErrorPartitionCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.SearchMetrics.prototype.setErrorPartitionCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated SearchQueryRow hits = 1;
 * @return {!Array<!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow>}
 */
proto.couchbase.search.v1.SearchQueryResponse.prototype.getHitsList = function() {
  return /** @type{!Array<!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow, 1));
};


/**
 * @param {!Array<!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow>} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.prototype.setHitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow}
 */
proto.couchbase.search.v1.SearchQueryResponse.prototype.addHits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.couchbase.search.v1.SearchQueryResponse.SearchQueryRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.prototype.clearHitsList = function() {
  return this.setHitsList([]);
};


/**
 * map<string, FacetResult> facets = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.couchbase.search.v1.SearchQueryResponse.FacetResult>}
 */
proto.couchbase.search.v1.SearchQueryResponse.prototype.getFacetsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.couchbase.search.v1.SearchQueryResponse.FacetResult>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.couchbase.search.v1.SearchQueryResponse.FacetResult));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.prototype.clearFacetsMap = function() {
  this.getFacetsMap().clear();
  return this;};


/**
 * optional MetaData meta_data = 3;
 * @return {?proto.couchbase.search.v1.SearchQueryResponse.MetaData}
 */
proto.couchbase.search.v1.SearchQueryResponse.prototype.getMetaData = function() {
  return /** @type{?proto.couchbase.search.v1.SearchQueryResponse.MetaData} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.search.v1.SearchQueryResponse.MetaData, 3));
};


/**
 * @param {?proto.couchbase.search.v1.SearchQueryResponse.MetaData|undefined} value
 * @return {!proto.couchbase.search.v1.SearchQueryResponse} returns this
*/
proto.couchbase.search.v1.SearchQueryResponse.prototype.setMetaData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.search.v1.SearchQueryResponse} returns this
 */
proto.couchbase.search.v1.SearchQueryResponse.prototype.clearMetaData = function() {
  return this.setMetaData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.search.v1.SearchQueryResponse.prototype.hasMetaData = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.couchbase.search.v1);
