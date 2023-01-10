// source: couchbase/kv.v1.proto
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

var google_rpc_status_pb = require('../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.couchbase.kv.v1.AppendRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.AppendRequest.DurabilitySpecCase', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.AppendResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.DecrementRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.DecrementRequest.DurabilitySpecCase', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.DecrementResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.DocumentCompressionType', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.DocumentContentType', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.DurabilityLevel', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.ExistsRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.ExistsResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.GetAndLockRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.GetAndTouchRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.GetReplicaRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.GetRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.GetResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.IncrementRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.IncrementRequest.DurabilitySpecCase', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.IncrementResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.InsertRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.InsertRequest.DurabilitySpecCase', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.InsertResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.LegacyDurabilitySpec', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.LookupInRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.LookupInRequest.Flags', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.LookupInRequest.Spec', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.LookupInRequest.Spec.Flags', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.LookupInRequest.Spec.Operation', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.LookupInResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.LookupInResponse.Spec', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.MutateInRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.MutateInRequest.DurabilitySpecCase', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.MutateInRequest.Flags', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.MutateInRequest.Spec', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.MutateInRequest.Spec.Flags', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.MutateInRequest.Spec.Operation', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.MutateInRequest.StoreSemantic', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.MutateInResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.MutateInResponse.Spec', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.MutationToken', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.PrependRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.PrependRequest.DurabilitySpecCase', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.PrependResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.RangeScanRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.RangeScanRequest.Range', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.RangeScanRequest.Sampling', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.RangeScanResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.RangeScanResponse.Document', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.RemoveRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.RemoveRequest.DurabilitySpecCase', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.RemoveResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.ReplaceRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.ReplaceRequest.DurabilitySpecCase', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.ReplaceResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.TouchRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.TouchResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.UnlockRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.UnlockResponse', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.UpsertRequest', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.UpsertRequest.DurabilitySpecCase', null, global);
goog.exportSymbol('proto.couchbase.kv.v1.UpsertResponse', null, global);
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
proto.couchbase.kv.v1.LegacyDurabilitySpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.LegacyDurabilitySpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.LegacyDurabilitySpec.displayName = 'proto.couchbase.kv.v1.LegacyDurabilitySpec';
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
proto.couchbase.kv.v1.MutationToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.MutationToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.MutationToken.displayName = 'proto.couchbase.kv.v1.MutationToken';
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
proto.couchbase.kv.v1.GetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.GetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.GetRequest.displayName = 'proto.couchbase.kv.v1.GetRequest';
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
proto.couchbase.kv.v1.GetAndTouchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.GetAndTouchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.GetAndTouchRequest.displayName = 'proto.couchbase.kv.v1.GetAndTouchRequest';
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
proto.couchbase.kv.v1.GetAndLockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.GetAndLockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.GetAndLockRequest.displayName = 'proto.couchbase.kv.v1.GetAndLockRequest';
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
proto.couchbase.kv.v1.GetReplicaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.GetReplicaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.GetReplicaRequest.displayName = 'proto.couchbase.kv.v1.GetReplicaRequest';
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
proto.couchbase.kv.v1.GetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.GetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.GetResponse.displayName = 'proto.couchbase.kv.v1.GetResponse';
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
proto.couchbase.kv.v1.UnlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.UnlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.UnlockRequest.displayName = 'proto.couchbase.kv.v1.UnlockRequest';
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
proto.couchbase.kv.v1.UnlockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.UnlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.UnlockResponse.displayName = 'proto.couchbase.kv.v1.UnlockResponse';
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
proto.couchbase.kv.v1.TouchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.TouchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.TouchRequest.displayName = 'proto.couchbase.kv.v1.TouchRequest';
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
proto.couchbase.kv.v1.TouchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.TouchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.TouchResponse.displayName = 'proto.couchbase.kv.v1.TouchResponse';
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
proto.couchbase.kv.v1.ExistsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.ExistsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.ExistsRequest.displayName = 'proto.couchbase.kv.v1.ExistsRequest';
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
proto.couchbase.kv.v1.ExistsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.ExistsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.ExistsResponse.displayName = 'proto.couchbase.kv.v1.ExistsResponse';
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
proto.couchbase.kv.v1.InsertRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.kv.v1.InsertRequest.oneofGroups_);
};
goog.inherits(proto.couchbase.kv.v1.InsertRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.InsertRequest.displayName = 'proto.couchbase.kv.v1.InsertRequest';
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
proto.couchbase.kv.v1.InsertResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.InsertResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.InsertResponse.displayName = 'proto.couchbase.kv.v1.InsertResponse';
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
proto.couchbase.kv.v1.UpsertRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.kv.v1.UpsertRequest.oneofGroups_);
};
goog.inherits(proto.couchbase.kv.v1.UpsertRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.UpsertRequest.displayName = 'proto.couchbase.kv.v1.UpsertRequest';
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
proto.couchbase.kv.v1.UpsertResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.UpsertResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.UpsertResponse.displayName = 'proto.couchbase.kv.v1.UpsertResponse';
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
proto.couchbase.kv.v1.ReplaceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.kv.v1.ReplaceRequest.oneofGroups_);
};
goog.inherits(proto.couchbase.kv.v1.ReplaceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.ReplaceRequest.displayName = 'proto.couchbase.kv.v1.ReplaceRequest';
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
proto.couchbase.kv.v1.ReplaceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.ReplaceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.ReplaceResponse.displayName = 'proto.couchbase.kv.v1.ReplaceResponse';
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
proto.couchbase.kv.v1.RemoveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.kv.v1.RemoveRequest.oneofGroups_);
};
goog.inherits(proto.couchbase.kv.v1.RemoveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.RemoveRequest.displayName = 'proto.couchbase.kv.v1.RemoveRequest';
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
proto.couchbase.kv.v1.RemoveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.RemoveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.RemoveResponse.displayName = 'proto.couchbase.kv.v1.RemoveResponse';
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
proto.couchbase.kv.v1.IncrementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.kv.v1.IncrementRequest.oneofGroups_);
};
goog.inherits(proto.couchbase.kv.v1.IncrementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.IncrementRequest.displayName = 'proto.couchbase.kv.v1.IncrementRequest';
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
proto.couchbase.kv.v1.IncrementResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.IncrementResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.IncrementResponse.displayName = 'proto.couchbase.kv.v1.IncrementResponse';
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
proto.couchbase.kv.v1.DecrementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.kv.v1.DecrementRequest.oneofGroups_);
};
goog.inherits(proto.couchbase.kv.v1.DecrementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.DecrementRequest.displayName = 'proto.couchbase.kv.v1.DecrementRequest';
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
proto.couchbase.kv.v1.DecrementResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.DecrementResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.DecrementResponse.displayName = 'proto.couchbase.kv.v1.DecrementResponse';
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
proto.couchbase.kv.v1.AppendRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.kv.v1.AppendRequest.oneofGroups_);
};
goog.inherits(proto.couchbase.kv.v1.AppendRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.AppendRequest.displayName = 'proto.couchbase.kv.v1.AppendRequest';
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
proto.couchbase.kv.v1.AppendResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.AppendResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.AppendResponse.displayName = 'proto.couchbase.kv.v1.AppendResponse';
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
proto.couchbase.kv.v1.PrependRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.couchbase.kv.v1.PrependRequest.oneofGroups_);
};
goog.inherits(proto.couchbase.kv.v1.PrependRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.PrependRequest.displayName = 'proto.couchbase.kv.v1.PrependRequest';
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
proto.couchbase.kv.v1.PrependResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.PrependResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.PrependResponse.displayName = 'proto.couchbase.kv.v1.PrependResponse';
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
proto.couchbase.kv.v1.LookupInRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.kv.v1.LookupInRequest.repeatedFields_, null);
};
goog.inherits(proto.couchbase.kv.v1.LookupInRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.LookupInRequest.displayName = 'proto.couchbase.kv.v1.LookupInRequest';
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
proto.couchbase.kv.v1.LookupInRequest.Spec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.LookupInRequest.Spec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.LookupInRequest.Spec.displayName = 'proto.couchbase.kv.v1.LookupInRequest.Spec';
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
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.LookupInRequest.Spec.Flags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.displayName = 'proto.couchbase.kv.v1.LookupInRequest.Spec.Flags';
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
proto.couchbase.kv.v1.LookupInRequest.Flags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.LookupInRequest.Flags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.LookupInRequest.Flags.displayName = 'proto.couchbase.kv.v1.LookupInRequest.Flags';
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
proto.couchbase.kv.v1.LookupInResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.kv.v1.LookupInResponse.repeatedFields_, null);
};
goog.inherits(proto.couchbase.kv.v1.LookupInResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.LookupInResponse.displayName = 'proto.couchbase.kv.v1.LookupInResponse';
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
proto.couchbase.kv.v1.LookupInResponse.Spec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.LookupInResponse.Spec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.LookupInResponse.Spec.displayName = 'proto.couchbase.kv.v1.LookupInResponse.Spec';
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
proto.couchbase.kv.v1.MutateInRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.kv.v1.MutateInRequest.repeatedFields_, proto.couchbase.kv.v1.MutateInRequest.oneofGroups_);
};
goog.inherits(proto.couchbase.kv.v1.MutateInRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.MutateInRequest.displayName = 'proto.couchbase.kv.v1.MutateInRequest';
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
proto.couchbase.kv.v1.MutateInRequest.Spec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.MutateInRequest.Spec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.MutateInRequest.Spec.displayName = 'proto.couchbase.kv.v1.MutateInRequest.Spec';
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
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.MutateInRequest.Spec.Flags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.displayName = 'proto.couchbase.kv.v1.MutateInRequest.Spec.Flags';
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
proto.couchbase.kv.v1.MutateInRequest.Flags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.MutateInRequest.Flags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.MutateInRequest.Flags.displayName = 'proto.couchbase.kv.v1.MutateInRequest.Flags';
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
proto.couchbase.kv.v1.MutateInResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.kv.v1.MutateInResponse.repeatedFields_, null);
};
goog.inherits(proto.couchbase.kv.v1.MutateInResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.MutateInResponse.displayName = 'proto.couchbase.kv.v1.MutateInResponse';
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
proto.couchbase.kv.v1.MutateInResponse.Spec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.MutateInResponse.Spec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.MutateInResponse.Spec.displayName = 'proto.couchbase.kv.v1.MutateInResponse.Spec';
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
proto.couchbase.kv.v1.RangeScanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.RangeScanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.RangeScanRequest.displayName = 'proto.couchbase.kv.v1.RangeScanRequest';
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
proto.couchbase.kv.v1.RangeScanRequest.Range = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.RangeScanRequest.Range, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.RangeScanRequest.Range.displayName = 'proto.couchbase.kv.v1.RangeScanRequest.Range';
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
proto.couchbase.kv.v1.RangeScanRequest.Sampling = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.RangeScanRequest.Sampling, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.RangeScanRequest.Sampling.displayName = 'proto.couchbase.kv.v1.RangeScanRequest.Sampling';
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
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.displayName = 'proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements';
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
proto.couchbase.kv.v1.RangeScanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.couchbase.kv.v1.RangeScanResponse.repeatedFields_, null);
};
goog.inherits(proto.couchbase.kv.v1.RangeScanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.RangeScanResponse.displayName = 'proto.couchbase.kv.v1.RangeScanResponse';
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
proto.couchbase.kv.v1.RangeScanResponse.Document = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.RangeScanResponse.Document, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.RangeScanResponse.Document.displayName = 'proto.couchbase.kv.v1.RangeScanResponse.Document';
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
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.displayName = 'proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData';
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
proto.couchbase.kv.v1.LegacyDurabilitySpec.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.LegacyDurabilitySpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    numReplicated: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numPersisted: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.LegacyDurabilitySpec;
  return proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.LegacyDurabilitySpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumReplicated(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumPersisted(value);
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
proto.couchbase.kv.v1.LegacyDurabilitySpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.LegacyDurabilitySpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumReplicated();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getNumPersisted();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 num_replicated = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.LegacyDurabilitySpec.prototype.getNumReplicated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.LegacyDurabilitySpec} returns this
 */
proto.couchbase.kv.v1.LegacyDurabilitySpec.prototype.setNumReplicated = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 num_persisted = 2;
 * @return {number}
 */
proto.couchbase.kv.v1.LegacyDurabilitySpec.prototype.getNumPersisted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.LegacyDurabilitySpec} returns this
 */
proto.couchbase.kv.v1.LegacyDurabilitySpec.prototype.setNumPersisted = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.couchbase.kv.v1.MutationToken.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.MutationToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.MutationToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutationToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    vbucketId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    vbucketUuid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    seqNo: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.MutationToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.MutationToken;
  return proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.MutationToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVbucketId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVbucketUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeqNo(value);
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
proto.couchbase.kv.v1.MutationToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.MutationToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVbucketId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getVbucketUuid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSeqNo();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.MutationToken.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.MutationToken} returns this
 */
proto.couchbase.kv.v1.MutationToken.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 vbucket_id = 2;
 * @return {number}
 */
proto.couchbase.kv.v1.MutationToken.prototype.getVbucketId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.MutationToken} returns this
 */
proto.couchbase.kv.v1.MutationToken.prototype.setVbucketId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 vbucket_uuid = 3;
 * @return {number}
 */
proto.couchbase.kv.v1.MutationToken.prototype.getVbucketUuid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.MutationToken} returns this
 */
proto.couchbase.kv.v1.MutationToken.prototype.setVbucketUuid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 seq_no = 4;
 * @return {number}
 */
proto.couchbase.kv.v1.MutationToken.prototype.getSeqNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.MutationToken} returns this
 */
proto.couchbase.kv.v1.MutationToken.prototype.setSeqNo = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.couchbase.kv.v1.GetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.GetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.GetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.GetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.couchbase.kv.v1.GetRequest}
 */
proto.couchbase.kv.v1.GetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.GetRequest;
  return proto.couchbase.kv.v1.GetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.GetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.GetRequest}
 */
proto.couchbase.kv.v1.GetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.couchbase.kv.v1.GetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.GetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.GetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.GetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.GetRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetRequest} returns this
 */
proto.couchbase.kv.v1.GetRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.GetRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetRequest} returns this
 */
proto.couchbase.kv.v1.GetRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.GetRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetRequest} returns this
 */
proto.couchbase.kv.v1.GetRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.GetRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetRequest} returns this
 */
proto.couchbase.kv.v1.GetRequest.prototype.setKey = function(value) {
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
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.GetAndTouchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.GetAndTouchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.GetAndTouchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.GetAndTouchRequest}
 */
proto.couchbase.kv.v1.GetAndTouchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.GetAndTouchRequest;
  return proto.couchbase.kv.v1.GetAndTouchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.GetAndTouchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.GetAndTouchRequest}
 */
proto.couchbase.kv.v1.GetAndTouchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
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
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.GetAndTouchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.GetAndTouchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.GetAndTouchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetAndTouchRequest} returns this
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetAndTouchRequest} returns this
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetAndTouchRequest} returns this
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetAndTouchRequest} returns this
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp expiry = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.kv.v1.GetAndTouchRequest} returns this
*/
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.GetAndTouchRequest} returns this
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.GetAndTouchRequest.prototype.hasExpiry = function() {
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
proto.couchbase.kv.v1.GetAndLockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.GetAndLockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.GetAndLockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.GetAndLockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lockTime: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.couchbase.kv.v1.GetAndLockRequest}
 */
proto.couchbase.kv.v1.GetAndLockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.GetAndLockRequest;
  return proto.couchbase.kv.v1.GetAndLockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.GetAndLockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.GetAndLockRequest}
 */
proto.couchbase.kv.v1.GetAndLockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLockTime(value);
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
proto.couchbase.kv.v1.GetAndLockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.GetAndLockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.GetAndLockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.GetAndLockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLockTime();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.GetAndLockRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetAndLockRequest} returns this
 */
proto.couchbase.kv.v1.GetAndLockRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.GetAndLockRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetAndLockRequest} returns this
 */
proto.couchbase.kv.v1.GetAndLockRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.GetAndLockRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetAndLockRequest} returns this
 */
proto.couchbase.kv.v1.GetAndLockRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.GetAndLockRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetAndLockRequest} returns this
 */
proto.couchbase.kv.v1.GetAndLockRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 lock_time = 5;
 * @return {number}
 */
proto.couchbase.kv.v1.GetAndLockRequest.prototype.getLockTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.GetAndLockRequest} returns this
 */
proto.couchbase.kv.v1.GetAndLockRequest.prototype.setLockTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.couchbase.kv.v1.GetReplicaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.GetReplicaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.GetReplicaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.GetReplicaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    replicaIndex: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.couchbase.kv.v1.GetReplicaRequest}
 */
proto.couchbase.kv.v1.GetReplicaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.GetReplicaRequest;
  return proto.couchbase.kv.v1.GetReplicaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.GetReplicaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.GetReplicaRequest}
 */
proto.couchbase.kv.v1.GetReplicaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReplicaIndex(value);
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
proto.couchbase.kv.v1.GetReplicaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.GetReplicaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.GetReplicaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.GetReplicaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReplicaIndex();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.GetReplicaRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetReplicaRequest} returns this
 */
proto.couchbase.kv.v1.GetReplicaRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.GetReplicaRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetReplicaRequest} returns this
 */
proto.couchbase.kv.v1.GetReplicaRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.GetReplicaRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetReplicaRequest} returns this
 */
proto.couchbase.kv.v1.GetReplicaRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.GetReplicaRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.GetReplicaRequest} returns this
 */
proto.couchbase.kv.v1.GetReplicaRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 replica_index = 5;
 * @return {number}
 */
proto.couchbase.kv.v1.GetReplicaRequest.prototype.getReplicaIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.GetReplicaRequest} returns this
 */
proto.couchbase.kv.v1.GetReplicaRequest.prototype.setReplicaIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.couchbase.kv.v1.GetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.GetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.GetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.GetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: msg.getContent_asB64(),
    contentType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    compressionType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    cas: jspb.Message.getFieldWithDefault(msg, 3, 0),
    expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.GetResponse}
 */
proto.couchbase.kv.v1.GetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.GetResponse;
  return proto.couchbase.kv.v1.GetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.GetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.GetResponse}
 */
proto.couchbase.kv.v1.GetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 2:
      var value = /** @type {!proto.couchbase.kv.v1.DocumentContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 5:
      var value = /** @type {!proto.couchbase.kv.v1.DocumentCompressionType} */ (reader.readEnum());
      msg.setCompressionType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
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
proto.couchbase.kv.v1.GetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.GetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.GetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.GetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCompressionType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes content = 1;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.kv.v1.GetResponse.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes content = 1;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.couchbase.kv.v1.GetResponse.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.couchbase.kv.v1.GetResponse.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.kv.v1.GetResponse} returns this
 */
proto.couchbase.kv.v1.GetResponse.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional DocumentContentType content_type = 2;
 * @return {!proto.couchbase.kv.v1.DocumentContentType}
 */
proto.couchbase.kv.v1.GetResponse.prototype.getContentType = function() {
  return /** @type {!proto.couchbase.kv.v1.DocumentContentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DocumentContentType} value
 * @return {!proto.couchbase.kv.v1.GetResponse} returns this
 */
proto.couchbase.kv.v1.GetResponse.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional DocumentCompressionType compression_type = 5;
 * @return {!proto.couchbase.kv.v1.DocumentCompressionType}
 */
proto.couchbase.kv.v1.GetResponse.prototype.getCompressionType = function() {
  return /** @type {!proto.couchbase.kv.v1.DocumentCompressionType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DocumentCompressionType} value
 * @return {!proto.couchbase.kv.v1.GetResponse} returns this
 */
proto.couchbase.kv.v1.GetResponse.prototype.setCompressionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional uint64 cas = 3;
 * @return {number}
 */
proto.couchbase.kv.v1.GetResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.GetResponse} returns this
 */
proto.couchbase.kv.v1.GetResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp expiry = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.kv.v1.GetResponse.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.kv.v1.GetResponse} returns this
*/
proto.couchbase.kv.v1.GetResponse.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.GetResponse} returns this
 */
proto.couchbase.kv.v1.GetResponse.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.GetResponse.prototype.hasExpiry = function() {
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
proto.couchbase.kv.v1.UnlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.UnlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.UnlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.UnlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cas: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.couchbase.kv.v1.UnlockRequest}
 */
proto.couchbase.kv.v1.UnlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.UnlockRequest;
  return proto.couchbase.kv.v1.UnlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.UnlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.UnlockRequest}
 */
proto.couchbase.kv.v1.UnlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
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
proto.couchbase.kv.v1.UnlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.UnlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.UnlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.UnlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.UnlockRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.UnlockRequest} returns this
 */
proto.couchbase.kv.v1.UnlockRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.UnlockRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.UnlockRequest} returns this
 */
proto.couchbase.kv.v1.UnlockRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.UnlockRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.UnlockRequest} returns this
 */
proto.couchbase.kv.v1.UnlockRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.UnlockRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.UnlockRequest} returns this
 */
proto.couchbase.kv.v1.UnlockRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 cas = 5;
 * @return {number}
 */
proto.couchbase.kv.v1.UnlockRequest.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.UnlockRequest} returns this
 */
proto.couchbase.kv.v1.UnlockRequest.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.couchbase.kv.v1.UnlockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.UnlockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.UnlockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.UnlockResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.couchbase.kv.v1.UnlockResponse}
 */
proto.couchbase.kv.v1.UnlockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.UnlockResponse;
  return proto.couchbase.kv.v1.UnlockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.UnlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.UnlockResponse}
 */
proto.couchbase.kv.v1.UnlockResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.couchbase.kv.v1.UnlockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.UnlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.UnlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.UnlockResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.couchbase.kv.v1.TouchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.TouchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.TouchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.TouchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.TouchRequest}
 */
proto.couchbase.kv.v1.TouchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.TouchRequest;
  return proto.couchbase.kv.v1.TouchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.TouchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.TouchRequest}
 */
proto.couchbase.kv.v1.TouchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
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
proto.couchbase.kv.v1.TouchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.TouchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.TouchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.TouchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.TouchRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.TouchRequest} returns this
 */
proto.couchbase.kv.v1.TouchRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.TouchRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.TouchRequest} returns this
 */
proto.couchbase.kv.v1.TouchRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.TouchRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.TouchRequest} returns this
 */
proto.couchbase.kv.v1.TouchRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.TouchRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.TouchRequest} returns this
 */
proto.couchbase.kv.v1.TouchRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp expiry = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.kv.v1.TouchRequest.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.kv.v1.TouchRequest} returns this
*/
proto.couchbase.kv.v1.TouchRequest.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.TouchRequest} returns this
 */
proto.couchbase.kv.v1.TouchRequest.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.TouchRequest.prototype.hasExpiry = function() {
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
proto.couchbase.kv.v1.TouchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.TouchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.TouchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.TouchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cas: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mutationToken: (f = msg.getMutationToken()) && proto.couchbase.kv.v1.MutationToken.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.TouchResponse}
 */
proto.couchbase.kv.v1.TouchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.TouchResponse;
  return proto.couchbase.kv.v1.TouchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.TouchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.TouchResponse}
 */
proto.couchbase.kv.v1.TouchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 2:
      var value = new proto.couchbase.kv.v1.MutationToken;
      reader.readMessage(value,proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader);
      msg.setMutationToken(value);
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
proto.couchbase.kv.v1.TouchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.TouchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.TouchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.TouchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMutationToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 cas = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.TouchResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.TouchResponse} returns this
 */
proto.couchbase.kv.v1.TouchResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MutationToken mutation_token = 2;
 * @return {?proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.TouchResponse.prototype.getMutationToken = function() {
  return /** @type{?proto.couchbase.kv.v1.MutationToken} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutationToken, 2));
};


/**
 * @param {?proto.couchbase.kv.v1.MutationToken|undefined} value
 * @return {!proto.couchbase.kv.v1.TouchResponse} returns this
*/
proto.couchbase.kv.v1.TouchResponse.prototype.setMutationToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.TouchResponse} returns this
 */
proto.couchbase.kv.v1.TouchResponse.prototype.clearMutationToken = function() {
  return this.setMutationToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.TouchResponse.prototype.hasMutationToken = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.couchbase.kv.v1.ExistsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.ExistsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.ExistsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.ExistsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.couchbase.kv.v1.ExistsRequest}
 */
proto.couchbase.kv.v1.ExistsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.ExistsRequest;
  return proto.couchbase.kv.v1.ExistsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.ExistsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.ExistsRequest}
 */
proto.couchbase.kv.v1.ExistsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.couchbase.kv.v1.ExistsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.ExistsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.ExistsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.ExistsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.ExistsRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.ExistsRequest} returns this
 */
proto.couchbase.kv.v1.ExistsRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.ExistsRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.ExistsRequest} returns this
 */
proto.couchbase.kv.v1.ExistsRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.ExistsRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.ExistsRequest} returns this
 */
proto.couchbase.kv.v1.ExistsRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.ExistsRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.ExistsRequest} returns this
 */
proto.couchbase.kv.v1.ExistsRequest.prototype.setKey = function(value) {
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
proto.couchbase.kv.v1.ExistsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.ExistsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.ExistsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.ExistsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    cas: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.couchbase.kv.v1.ExistsResponse}
 */
proto.couchbase.kv.v1.ExistsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.ExistsResponse;
  return proto.couchbase.kv.v1.ExistsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.ExistsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.ExistsResponse}
 */
proto.couchbase.kv.v1.ExistsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
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
proto.couchbase.kv.v1.ExistsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.ExistsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.ExistsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.ExistsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional bool result = 1;
 * @return {boolean}
 */
proto.couchbase.kv.v1.ExistsResponse.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.kv.v1.ExistsResponse} returns this
 */
proto.couchbase.kv.v1.ExistsResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint64 cas = 2;
 * @return {number}
 */
proto.couchbase.kv.v1.ExistsResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.ExistsResponse} returns this
 */
proto.couchbase.kv.v1.ExistsResponse.prototype.setCas = function(value) {
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
proto.couchbase.kv.v1.InsertRequest.oneofGroups_ = [[8,9]];

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.InsertRequest.DurabilitySpecCase = {
  DURABILITY_SPEC_NOT_SET: 0,
  LEGACY_DURABILITY_SPEC: 8,
  DURABILITY_LEVEL: 9
};

/**
 * @return {proto.couchbase.kv.v1.InsertRequest.DurabilitySpecCase}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getDurabilitySpecCase = function() {
  return /** @type {proto.couchbase.kv.v1.InsertRequest.DurabilitySpecCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.kv.v1.InsertRequest.oneofGroups_[0]));
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
proto.couchbase.kv.v1.InsertRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.InsertRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.InsertRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.InsertRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: msg.getContent_asB64(),
    contentType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    legacyDurabilitySpec: (f = msg.getLegacyDurabilitySpec()) && proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject(includeInstance, f),
    durabilityLevel: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.couchbase.kv.v1.InsertRequest}
 */
proto.couchbase.kv.v1.InsertRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.InsertRequest;
  return proto.couchbase.kv.v1.InsertRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.InsertRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.InsertRequest}
 */
proto.couchbase.kv.v1.InsertRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {!proto.couchbase.kv.v1.DocumentContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
      break;
    case 8:
      var value = new proto.couchbase.kv.v1.LegacyDurabilitySpec;
      reader.readMessage(value,proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader);
      msg.setLegacyDurabilitySpec(value);
      break;
    case 9:
      var value = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (reader.readEnum());
      msg.setDurabilityLevel(value);
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
proto.couchbase.kv.v1.InsertRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.InsertRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.InsertRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.InsertRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLegacyDurabilitySpec();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
 */
proto.couchbase.kv.v1.InsertRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
 */
proto.couchbase.kv.v1.InsertRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
 */
proto.couchbase.kv.v1.InsertRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
 */
proto.couchbase.kv.v1.InsertRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes content = 5;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes content = 5;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
 */
proto.couchbase.kv.v1.InsertRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional DocumentContentType content_type = 6;
 * @return {!proto.couchbase.kv.v1.DocumentContentType}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getContentType = function() {
  return /** @type {!proto.couchbase.kv.v1.DocumentContentType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DocumentContentType} value
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
 */
proto.couchbase.kv.v1.InsertRequest.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp expiry = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
*/
proto.couchbase.kv.v1.InsertRequest.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
 */
proto.couchbase.kv.v1.InsertRequest.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.hasExpiry = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LegacyDurabilitySpec legacy_durability_spec = 8;
 * @return {?proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getLegacyDurabilitySpec = function() {
  return /** @type{?proto.couchbase.kv.v1.LegacyDurabilitySpec} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LegacyDurabilitySpec, 8));
};


/**
 * @param {?proto.couchbase.kv.v1.LegacyDurabilitySpec|undefined} value
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
*/
proto.couchbase.kv.v1.InsertRequest.prototype.setLegacyDurabilitySpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.couchbase.kv.v1.InsertRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
 */
proto.couchbase.kv.v1.InsertRequest.prototype.clearLegacyDurabilitySpec = function() {
  return this.setLegacyDurabilitySpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.hasLegacyDurabilitySpec = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DurabilityLevel durability_level = 9;
 * @return {!proto.couchbase.kv.v1.DurabilityLevel}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.getDurabilityLevel = function() {
  return /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DurabilityLevel} value
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
 */
proto.couchbase.kv.v1.InsertRequest.prototype.setDurabilityLevel = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.couchbase.kv.v1.InsertRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.InsertRequest} returns this
 */
proto.couchbase.kv.v1.InsertRequest.prototype.clearDurabilityLevel = function() {
  return jspb.Message.setOneofField(this, 9, proto.couchbase.kv.v1.InsertRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.InsertRequest.prototype.hasDurabilityLevel = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.couchbase.kv.v1.InsertResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.InsertResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.InsertResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.InsertResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cas: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mutationToken: (f = msg.getMutationToken()) && proto.couchbase.kv.v1.MutationToken.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.InsertResponse}
 */
proto.couchbase.kv.v1.InsertResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.InsertResponse;
  return proto.couchbase.kv.v1.InsertResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.InsertResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.InsertResponse}
 */
proto.couchbase.kv.v1.InsertResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 2:
      var value = new proto.couchbase.kv.v1.MutationToken;
      reader.readMessage(value,proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader);
      msg.setMutationToken(value);
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
proto.couchbase.kv.v1.InsertResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.InsertResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.InsertResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.InsertResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMutationToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 cas = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.InsertResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.InsertResponse} returns this
 */
proto.couchbase.kv.v1.InsertResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MutationToken mutation_token = 2;
 * @return {?proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.InsertResponse.prototype.getMutationToken = function() {
  return /** @type{?proto.couchbase.kv.v1.MutationToken} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutationToken, 2));
};


/**
 * @param {?proto.couchbase.kv.v1.MutationToken|undefined} value
 * @return {!proto.couchbase.kv.v1.InsertResponse} returns this
*/
proto.couchbase.kv.v1.InsertResponse.prototype.setMutationToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.InsertResponse} returns this
 */
proto.couchbase.kv.v1.InsertResponse.prototype.clearMutationToken = function() {
  return this.setMutationToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.InsertResponse.prototype.hasMutationToken = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.kv.v1.UpsertRequest.oneofGroups_ = [[8,9]];

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.UpsertRequest.DurabilitySpecCase = {
  DURABILITY_SPEC_NOT_SET: 0,
  LEGACY_DURABILITY_SPEC: 8,
  DURABILITY_LEVEL: 9
};

/**
 * @return {proto.couchbase.kv.v1.UpsertRequest.DurabilitySpecCase}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getDurabilitySpecCase = function() {
  return /** @type {proto.couchbase.kv.v1.UpsertRequest.DurabilitySpecCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.kv.v1.UpsertRequest.oneofGroups_[0]));
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
proto.couchbase.kv.v1.UpsertRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.UpsertRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.UpsertRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.UpsertRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: msg.getContent_asB64(),
    contentType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    legacyDurabilitySpec: (f = msg.getLegacyDurabilitySpec()) && proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject(includeInstance, f),
    durabilityLevel: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.couchbase.kv.v1.UpsertRequest}
 */
proto.couchbase.kv.v1.UpsertRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.UpsertRequest;
  return proto.couchbase.kv.v1.UpsertRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.UpsertRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.UpsertRequest}
 */
proto.couchbase.kv.v1.UpsertRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {!proto.couchbase.kv.v1.DocumentContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
      break;
    case 8:
      var value = new proto.couchbase.kv.v1.LegacyDurabilitySpec;
      reader.readMessage(value,proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader);
      msg.setLegacyDurabilitySpec(value);
      break;
    case 9:
      var value = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (reader.readEnum());
      msg.setDurabilityLevel(value);
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
proto.couchbase.kv.v1.UpsertRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.UpsertRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.UpsertRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.UpsertRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLegacyDurabilitySpec();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes content = 5;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes content = 5;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional DocumentContentType content_type = 6;
 * @return {!proto.couchbase.kv.v1.DocumentContentType}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getContentType = function() {
  return /** @type {!proto.couchbase.kv.v1.DocumentContentType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DocumentContentType} value
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp expiry = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
*/
proto.couchbase.kv.v1.UpsertRequest.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.hasExpiry = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LegacyDurabilitySpec legacy_durability_spec = 8;
 * @return {?proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getLegacyDurabilitySpec = function() {
  return /** @type{?proto.couchbase.kv.v1.LegacyDurabilitySpec} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LegacyDurabilitySpec, 8));
};


/**
 * @param {?proto.couchbase.kv.v1.LegacyDurabilitySpec|undefined} value
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
*/
proto.couchbase.kv.v1.UpsertRequest.prototype.setLegacyDurabilitySpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.couchbase.kv.v1.UpsertRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.clearLegacyDurabilitySpec = function() {
  return this.setLegacyDurabilitySpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.hasLegacyDurabilitySpec = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DurabilityLevel durability_level = 9;
 * @return {!proto.couchbase.kv.v1.DurabilityLevel}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.getDurabilityLevel = function() {
  return /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DurabilityLevel} value
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.setDurabilityLevel = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.couchbase.kv.v1.UpsertRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.UpsertRequest} returns this
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.clearDurabilityLevel = function() {
  return jspb.Message.setOneofField(this, 9, proto.couchbase.kv.v1.UpsertRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.UpsertRequest.prototype.hasDurabilityLevel = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.couchbase.kv.v1.UpsertResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.UpsertResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.UpsertResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.UpsertResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cas: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mutationToken: (f = msg.getMutationToken()) && proto.couchbase.kv.v1.MutationToken.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.UpsertResponse}
 */
proto.couchbase.kv.v1.UpsertResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.UpsertResponse;
  return proto.couchbase.kv.v1.UpsertResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.UpsertResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.UpsertResponse}
 */
proto.couchbase.kv.v1.UpsertResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 2:
      var value = new proto.couchbase.kv.v1.MutationToken;
      reader.readMessage(value,proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader);
      msg.setMutationToken(value);
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
proto.couchbase.kv.v1.UpsertResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.UpsertResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.UpsertResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.UpsertResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMutationToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 cas = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.UpsertResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.UpsertResponse} returns this
 */
proto.couchbase.kv.v1.UpsertResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MutationToken mutation_token = 2;
 * @return {?proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.UpsertResponse.prototype.getMutationToken = function() {
  return /** @type{?proto.couchbase.kv.v1.MutationToken} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutationToken, 2));
};


/**
 * @param {?proto.couchbase.kv.v1.MutationToken|undefined} value
 * @return {!proto.couchbase.kv.v1.UpsertResponse} returns this
*/
proto.couchbase.kv.v1.UpsertResponse.prototype.setMutationToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.UpsertResponse} returns this
 */
proto.couchbase.kv.v1.UpsertResponse.prototype.clearMutationToken = function() {
  return this.setMutationToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.UpsertResponse.prototype.hasMutationToken = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.kv.v1.ReplaceRequest.oneofGroups_ = [[9,10]];

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.ReplaceRequest.DurabilitySpecCase = {
  DURABILITY_SPEC_NOT_SET: 0,
  LEGACY_DURABILITY_SPEC: 9,
  DURABILITY_LEVEL: 10
};

/**
 * @return {proto.couchbase.kv.v1.ReplaceRequest.DurabilitySpecCase}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getDurabilitySpecCase = function() {
  return /** @type {proto.couchbase.kv.v1.ReplaceRequest.DurabilitySpecCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.kv.v1.ReplaceRequest.oneofGroups_[0]));
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
proto.couchbase.kv.v1.ReplaceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.ReplaceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.ReplaceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.ReplaceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: msg.getContent_asB64(),
    contentType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    cas: jspb.Message.getFieldWithDefault(msg, 7, 0),
    expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    legacyDurabilitySpec: (f = msg.getLegacyDurabilitySpec()) && proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject(includeInstance, f),
    durabilityLevel: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.couchbase.kv.v1.ReplaceRequest}
 */
proto.couchbase.kv.v1.ReplaceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.ReplaceRequest;
  return proto.couchbase.kv.v1.ReplaceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.ReplaceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.ReplaceRequest}
 */
proto.couchbase.kv.v1.ReplaceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {!proto.couchbase.kv.v1.DocumentContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
      break;
    case 9:
      var value = new proto.couchbase.kv.v1.LegacyDurabilitySpec;
      reader.readMessage(value,proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader);
      msg.setLegacyDurabilitySpec(value);
      break;
    case 10:
      var value = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (reader.readEnum());
      msg.setDurabilityLevel(value);
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
proto.couchbase.kv.v1.ReplaceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.ReplaceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.ReplaceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.ReplaceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
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
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLegacyDurabilitySpec();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes content = 5;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes content = 5;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional DocumentContentType content_type = 6;
 * @return {!proto.couchbase.kv.v1.DocumentContentType}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getContentType = function() {
  return /** @type {!proto.couchbase.kv.v1.DocumentContentType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DocumentContentType} value
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional uint64 cas = 7;
 * @return {number}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.setCas = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.clearCas = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.hasCas = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp expiry = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
*/
proto.couchbase.kv.v1.ReplaceRequest.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.hasExpiry = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional LegacyDurabilitySpec legacy_durability_spec = 9;
 * @return {?proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getLegacyDurabilitySpec = function() {
  return /** @type{?proto.couchbase.kv.v1.LegacyDurabilitySpec} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LegacyDurabilitySpec, 9));
};


/**
 * @param {?proto.couchbase.kv.v1.LegacyDurabilitySpec|undefined} value
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
*/
proto.couchbase.kv.v1.ReplaceRequest.prototype.setLegacyDurabilitySpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.couchbase.kv.v1.ReplaceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.clearLegacyDurabilitySpec = function() {
  return this.setLegacyDurabilitySpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.hasLegacyDurabilitySpec = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional DurabilityLevel durability_level = 10;
 * @return {!proto.couchbase.kv.v1.DurabilityLevel}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.getDurabilityLevel = function() {
  return /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DurabilityLevel} value
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.setDurabilityLevel = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.couchbase.kv.v1.ReplaceRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.ReplaceRequest} returns this
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.clearDurabilityLevel = function() {
  return jspb.Message.setOneofField(this, 10, proto.couchbase.kv.v1.ReplaceRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.ReplaceRequest.prototype.hasDurabilityLevel = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.couchbase.kv.v1.ReplaceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.ReplaceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.ReplaceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.ReplaceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cas: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mutationToken: (f = msg.getMutationToken()) && proto.couchbase.kv.v1.MutationToken.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.ReplaceResponse}
 */
proto.couchbase.kv.v1.ReplaceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.ReplaceResponse;
  return proto.couchbase.kv.v1.ReplaceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.ReplaceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.ReplaceResponse}
 */
proto.couchbase.kv.v1.ReplaceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 2:
      var value = new proto.couchbase.kv.v1.MutationToken;
      reader.readMessage(value,proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader);
      msg.setMutationToken(value);
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
proto.couchbase.kv.v1.ReplaceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.ReplaceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.ReplaceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.ReplaceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMutationToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 cas = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.ReplaceResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.ReplaceResponse} returns this
 */
proto.couchbase.kv.v1.ReplaceResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MutationToken mutation_token = 2;
 * @return {?proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.ReplaceResponse.prototype.getMutationToken = function() {
  return /** @type{?proto.couchbase.kv.v1.MutationToken} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutationToken, 2));
};


/**
 * @param {?proto.couchbase.kv.v1.MutationToken|undefined} value
 * @return {!proto.couchbase.kv.v1.ReplaceResponse} returns this
*/
proto.couchbase.kv.v1.ReplaceResponse.prototype.setMutationToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.ReplaceResponse} returns this
 */
proto.couchbase.kv.v1.ReplaceResponse.prototype.clearMutationToken = function() {
  return this.setMutationToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.ReplaceResponse.prototype.hasMutationToken = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.kv.v1.RemoveRequest.oneofGroups_ = [[6,7]];

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.RemoveRequest.DurabilitySpecCase = {
  DURABILITY_SPEC_NOT_SET: 0,
  LEGACY_DURABILITY_SPEC: 6,
  DURABILITY_LEVEL: 7
};

/**
 * @return {proto.couchbase.kv.v1.RemoveRequest.DurabilitySpecCase}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.getDurabilitySpecCase = function() {
  return /** @type {proto.couchbase.kv.v1.RemoveRequest.DurabilitySpecCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.kv.v1.RemoveRequest.oneofGroups_[0]));
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
proto.couchbase.kv.v1.RemoveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.RemoveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.RemoveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RemoveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cas: jspb.Message.getFieldWithDefault(msg, 5, 0),
    legacyDurabilitySpec: (f = msg.getLegacyDurabilitySpec()) && proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject(includeInstance, f),
    durabilityLevel: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.couchbase.kv.v1.RemoveRequest}
 */
proto.couchbase.kv.v1.RemoveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.RemoveRequest;
  return proto.couchbase.kv.v1.RemoveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.RemoveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.RemoveRequest}
 */
proto.couchbase.kv.v1.RemoveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 6:
      var value = new proto.couchbase.kv.v1.LegacyDurabilitySpec;
      reader.readMessage(value,proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader);
      msg.setLegacyDurabilitySpec(value);
      break;
    case 7:
      var value = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (reader.readEnum());
      msg.setDurabilityLevel(value);
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
proto.couchbase.kv.v1.RemoveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.RemoveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.RemoveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RemoveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
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
  f = message.getLegacyDurabilitySpec();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.RemoveRequest} returns this
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.RemoveRequest} returns this
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.RemoveRequest} returns this
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.RemoveRequest} returns this
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 cas = 5;
 * @return {number}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.RemoveRequest} returns this
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.setCas = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.RemoveRequest} returns this
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.clearCas = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.hasCas = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional LegacyDurabilitySpec legacy_durability_spec = 6;
 * @return {?proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.getLegacyDurabilitySpec = function() {
  return /** @type{?proto.couchbase.kv.v1.LegacyDurabilitySpec} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LegacyDurabilitySpec, 6));
};


/**
 * @param {?proto.couchbase.kv.v1.LegacyDurabilitySpec|undefined} value
 * @return {!proto.couchbase.kv.v1.RemoveRequest} returns this
*/
proto.couchbase.kv.v1.RemoveRequest.prototype.setLegacyDurabilitySpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.couchbase.kv.v1.RemoveRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.RemoveRequest} returns this
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.clearLegacyDurabilitySpec = function() {
  return this.setLegacyDurabilitySpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.hasLegacyDurabilitySpec = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DurabilityLevel durability_level = 7;
 * @return {!proto.couchbase.kv.v1.DurabilityLevel}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.getDurabilityLevel = function() {
  return /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DurabilityLevel} value
 * @return {!proto.couchbase.kv.v1.RemoveRequest} returns this
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.setDurabilityLevel = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.couchbase.kv.v1.RemoveRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.RemoveRequest} returns this
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.clearDurabilityLevel = function() {
  return jspb.Message.setOneofField(this, 7, proto.couchbase.kv.v1.RemoveRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.RemoveRequest.prototype.hasDurabilityLevel = function() {
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
proto.couchbase.kv.v1.RemoveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.RemoveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.RemoveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RemoveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cas: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mutationToken: (f = msg.getMutationToken()) && proto.couchbase.kv.v1.MutationToken.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.RemoveResponse}
 */
proto.couchbase.kv.v1.RemoveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.RemoveResponse;
  return proto.couchbase.kv.v1.RemoveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.RemoveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.RemoveResponse}
 */
proto.couchbase.kv.v1.RemoveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 2:
      var value = new proto.couchbase.kv.v1.MutationToken;
      reader.readMessage(value,proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader);
      msg.setMutationToken(value);
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
proto.couchbase.kv.v1.RemoveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.RemoveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.RemoveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RemoveResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMutationToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 cas = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.RemoveResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.RemoveResponse} returns this
 */
proto.couchbase.kv.v1.RemoveResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MutationToken mutation_token = 2;
 * @return {?proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.RemoveResponse.prototype.getMutationToken = function() {
  return /** @type{?proto.couchbase.kv.v1.MutationToken} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutationToken, 2));
};


/**
 * @param {?proto.couchbase.kv.v1.MutationToken|undefined} value
 * @return {!proto.couchbase.kv.v1.RemoveResponse} returns this
*/
proto.couchbase.kv.v1.RemoveResponse.prototype.setMutationToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.RemoveResponse} returns this
 */
proto.couchbase.kv.v1.RemoveResponse.prototype.clearMutationToken = function() {
  return this.setMutationToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.RemoveResponse.prototype.hasMutationToken = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.kv.v1.IncrementRequest.oneofGroups_ = [[8,9]];

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.IncrementRequest.DurabilitySpecCase = {
  DURABILITY_SPEC_NOT_SET: 0,
  LEGACY_DURABILITY_SPEC: 8,
  DURABILITY_LEVEL: 9
};

/**
 * @return {proto.couchbase.kv.v1.IncrementRequest.DurabilitySpecCase}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.getDurabilitySpecCase = function() {
  return /** @type {proto.couchbase.kv.v1.IncrementRequest.DurabilitySpecCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.kv.v1.IncrementRequest.oneofGroups_[0]));
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
proto.couchbase.kv.v1.IncrementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.IncrementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.IncrementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.IncrementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    delta: jspb.Message.getFieldWithDefault(msg, 5, 0),
    expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    initial: jspb.Message.getFieldWithDefault(msg, 7, 0),
    legacyDurabilitySpec: (f = msg.getLegacyDurabilitySpec()) && proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject(includeInstance, f),
    durabilityLevel: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.couchbase.kv.v1.IncrementRequest}
 */
proto.couchbase.kv.v1.IncrementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.IncrementRequest;
  return proto.couchbase.kv.v1.IncrementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.IncrementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.IncrementRequest}
 */
proto.couchbase.kv.v1.IncrementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDelta(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitial(value);
      break;
    case 8:
      var value = new proto.couchbase.kv.v1.LegacyDurabilitySpec;
      reader.readMessage(value,proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader);
      msg.setLegacyDurabilitySpec(value);
      break;
    case 9:
      var value = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (reader.readEnum());
      msg.setDurabilityLevel(value);
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
proto.couchbase.kv.v1.IncrementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.IncrementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.IncrementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.IncrementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getLegacyDurabilitySpec();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 delta = 5;
 * @return {number}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.setDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp expiry = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
*/
proto.couchbase.kv.v1.IncrementRequest.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.hasExpiry = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 initial = 7;
 * @return {number}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.getInitial = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.setInitial = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.clearInitial = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.hasInitial = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LegacyDurabilitySpec legacy_durability_spec = 8;
 * @return {?proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.getLegacyDurabilitySpec = function() {
  return /** @type{?proto.couchbase.kv.v1.LegacyDurabilitySpec} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LegacyDurabilitySpec, 8));
};


/**
 * @param {?proto.couchbase.kv.v1.LegacyDurabilitySpec|undefined} value
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
*/
proto.couchbase.kv.v1.IncrementRequest.prototype.setLegacyDurabilitySpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.couchbase.kv.v1.IncrementRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.clearLegacyDurabilitySpec = function() {
  return this.setLegacyDurabilitySpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.hasLegacyDurabilitySpec = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DurabilityLevel durability_level = 9;
 * @return {!proto.couchbase.kv.v1.DurabilityLevel}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.getDurabilityLevel = function() {
  return /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DurabilityLevel} value
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.setDurabilityLevel = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.couchbase.kv.v1.IncrementRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.IncrementRequest} returns this
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.clearDurabilityLevel = function() {
  return jspb.Message.setOneofField(this, 9, proto.couchbase.kv.v1.IncrementRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.IncrementRequest.prototype.hasDurabilityLevel = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.couchbase.kv.v1.IncrementResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.IncrementResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.IncrementResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.IncrementResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cas: jspb.Message.getFieldWithDefault(msg, 1, 0),
    content: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mutationToken: (f = msg.getMutationToken()) && proto.couchbase.kv.v1.MutationToken.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.IncrementResponse}
 */
proto.couchbase.kv.v1.IncrementResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.IncrementResponse;
  return proto.couchbase.kv.v1.IncrementResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.IncrementResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.IncrementResponse}
 */
proto.couchbase.kv.v1.IncrementResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContent(value);
      break;
    case 3:
      var value = new proto.couchbase.kv.v1.MutationToken;
      reader.readMessage(value,proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader);
      msg.setMutationToken(value);
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
proto.couchbase.kv.v1.IncrementResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.IncrementResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.IncrementResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.IncrementResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getContent();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMutationToken();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 cas = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.IncrementResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.IncrementResponse} returns this
 */
proto.couchbase.kv.v1.IncrementResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 content = 2;
 * @return {number}
 */
proto.couchbase.kv.v1.IncrementResponse.prototype.getContent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.IncrementResponse} returns this
 */
proto.couchbase.kv.v1.IncrementResponse.prototype.setContent = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional MutationToken mutation_token = 3;
 * @return {?proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.IncrementResponse.prototype.getMutationToken = function() {
  return /** @type{?proto.couchbase.kv.v1.MutationToken} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutationToken, 3));
};


/**
 * @param {?proto.couchbase.kv.v1.MutationToken|undefined} value
 * @return {!proto.couchbase.kv.v1.IncrementResponse} returns this
*/
proto.couchbase.kv.v1.IncrementResponse.prototype.setMutationToken = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.IncrementResponse} returns this
 */
proto.couchbase.kv.v1.IncrementResponse.prototype.clearMutationToken = function() {
  return this.setMutationToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.IncrementResponse.prototype.hasMutationToken = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.kv.v1.DecrementRequest.oneofGroups_ = [[8,9]];

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.DecrementRequest.DurabilitySpecCase = {
  DURABILITY_SPEC_NOT_SET: 0,
  LEGACY_DURABILITY_SPEC: 8,
  DURABILITY_LEVEL: 9
};

/**
 * @return {proto.couchbase.kv.v1.DecrementRequest.DurabilitySpecCase}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.getDurabilitySpecCase = function() {
  return /** @type {proto.couchbase.kv.v1.DecrementRequest.DurabilitySpecCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.kv.v1.DecrementRequest.oneofGroups_[0]));
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
proto.couchbase.kv.v1.DecrementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.DecrementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.DecrementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.DecrementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    delta: jspb.Message.getFieldWithDefault(msg, 5, 0),
    expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    initial: jspb.Message.getFieldWithDefault(msg, 7, 0),
    legacyDurabilitySpec: (f = msg.getLegacyDurabilitySpec()) && proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject(includeInstance, f),
    durabilityLevel: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.couchbase.kv.v1.DecrementRequest}
 */
proto.couchbase.kv.v1.DecrementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.DecrementRequest;
  return proto.couchbase.kv.v1.DecrementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.DecrementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.DecrementRequest}
 */
proto.couchbase.kv.v1.DecrementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDelta(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInitial(value);
      break;
    case 8:
      var value = new proto.couchbase.kv.v1.LegacyDurabilitySpec;
      reader.readMessage(value,proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader);
      msg.setLegacyDurabilitySpec(value);
      break;
    case 9:
      var value = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (reader.readEnum());
      msg.setDurabilityLevel(value);
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
proto.couchbase.kv.v1.DecrementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.DecrementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.DecrementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.DecrementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getLegacyDurabilitySpec();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 delta = 5;
 * @return {number}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.setDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp expiry = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
*/
proto.couchbase.kv.v1.DecrementRequest.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.hasExpiry = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 initial = 7;
 * @return {number}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.getInitial = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.setInitial = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.clearInitial = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.hasInitial = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LegacyDurabilitySpec legacy_durability_spec = 8;
 * @return {?proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.getLegacyDurabilitySpec = function() {
  return /** @type{?proto.couchbase.kv.v1.LegacyDurabilitySpec} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LegacyDurabilitySpec, 8));
};


/**
 * @param {?proto.couchbase.kv.v1.LegacyDurabilitySpec|undefined} value
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
*/
proto.couchbase.kv.v1.DecrementRequest.prototype.setLegacyDurabilitySpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.couchbase.kv.v1.DecrementRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.clearLegacyDurabilitySpec = function() {
  return this.setLegacyDurabilitySpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.hasLegacyDurabilitySpec = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DurabilityLevel durability_level = 9;
 * @return {!proto.couchbase.kv.v1.DurabilityLevel}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.getDurabilityLevel = function() {
  return /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DurabilityLevel} value
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.setDurabilityLevel = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.couchbase.kv.v1.DecrementRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.DecrementRequest} returns this
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.clearDurabilityLevel = function() {
  return jspb.Message.setOneofField(this, 9, proto.couchbase.kv.v1.DecrementRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.DecrementRequest.prototype.hasDurabilityLevel = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.couchbase.kv.v1.DecrementResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.DecrementResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.DecrementResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.DecrementResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cas: jspb.Message.getFieldWithDefault(msg, 1, 0),
    content: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mutationToken: (f = msg.getMutationToken()) && proto.couchbase.kv.v1.MutationToken.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.DecrementResponse}
 */
proto.couchbase.kv.v1.DecrementResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.DecrementResponse;
  return proto.couchbase.kv.v1.DecrementResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.DecrementResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.DecrementResponse}
 */
proto.couchbase.kv.v1.DecrementResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContent(value);
      break;
    case 3:
      var value = new proto.couchbase.kv.v1.MutationToken;
      reader.readMessage(value,proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader);
      msg.setMutationToken(value);
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
proto.couchbase.kv.v1.DecrementResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.DecrementResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.DecrementResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.DecrementResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getContent();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMutationToken();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 cas = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.DecrementResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.DecrementResponse} returns this
 */
proto.couchbase.kv.v1.DecrementResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 content = 2;
 * @return {number}
 */
proto.couchbase.kv.v1.DecrementResponse.prototype.getContent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.DecrementResponse} returns this
 */
proto.couchbase.kv.v1.DecrementResponse.prototype.setContent = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional MutationToken mutation_token = 3;
 * @return {?proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.DecrementResponse.prototype.getMutationToken = function() {
  return /** @type{?proto.couchbase.kv.v1.MutationToken} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutationToken, 3));
};


/**
 * @param {?proto.couchbase.kv.v1.MutationToken|undefined} value
 * @return {!proto.couchbase.kv.v1.DecrementResponse} returns this
*/
proto.couchbase.kv.v1.DecrementResponse.prototype.setMutationToken = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.DecrementResponse} returns this
 */
proto.couchbase.kv.v1.DecrementResponse.prototype.clearMutationToken = function() {
  return this.setMutationToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.DecrementResponse.prototype.hasMutationToken = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.kv.v1.AppendRequest.oneofGroups_ = [[7,8]];

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.AppendRequest.DurabilitySpecCase = {
  DURABILITY_SPEC_NOT_SET: 0,
  LEGACY_DURABILITY_SPEC: 7,
  DURABILITY_LEVEL: 8
};

/**
 * @return {proto.couchbase.kv.v1.AppendRequest.DurabilitySpecCase}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getDurabilitySpecCase = function() {
  return /** @type {proto.couchbase.kv.v1.AppendRequest.DurabilitySpecCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.kv.v1.AppendRequest.oneofGroups_[0]));
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
proto.couchbase.kv.v1.AppendRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.AppendRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.AppendRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.AppendRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: msg.getContent_asB64(),
    cas: jspb.Message.getFieldWithDefault(msg, 6, 0),
    legacyDurabilitySpec: (f = msg.getLegacyDurabilitySpec()) && proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject(includeInstance, f),
    durabilityLevel: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.couchbase.kv.v1.AppendRequest}
 */
proto.couchbase.kv.v1.AppendRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.AppendRequest;
  return proto.couchbase.kv.v1.AppendRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.AppendRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.AppendRequest}
 */
proto.couchbase.kv.v1.AppendRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 7:
      var value = new proto.couchbase.kv.v1.LegacyDurabilitySpec;
      reader.readMessage(value,proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader);
      msg.setLegacyDurabilitySpec(value);
      break;
    case 8:
      var value = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (reader.readEnum());
      msg.setDurabilityLevel(value);
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
proto.couchbase.kv.v1.AppendRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.AppendRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.AppendRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.AppendRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getLegacyDurabilitySpec();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
 */
proto.couchbase.kv.v1.AppendRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
 */
proto.couchbase.kv.v1.AppendRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
 */
proto.couchbase.kv.v1.AppendRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
 */
proto.couchbase.kv.v1.AppendRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes content = 5;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes content = 5;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
 */
proto.couchbase.kv.v1.AppendRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional uint64 cas = 6;
 * @return {number}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
 */
proto.couchbase.kv.v1.AppendRequest.prototype.setCas = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
 */
proto.couchbase.kv.v1.AppendRequest.prototype.clearCas = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.hasCas = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional LegacyDurabilitySpec legacy_durability_spec = 7;
 * @return {?proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getLegacyDurabilitySpec = function() {
  return /** @type{?proto.couchbase.kv.v1.LegacyDurabilitySpec} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LegacyDurabilitySpec, 7));
};


/**
 * @param {?proto.couchbase.kv.v1.LegacyDurabilitySpec|undefined} value
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
*/
proto.couchbase.kv.v1.AppendRequest.prototype.setLegacyDurabilitySpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.couchbase.kv.v1.AppendRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
 */
proto.couchbase.kv.v1.AppendRequest.prototype.clearLegacyDurabilitySpec = function() {
  return this.setLegacyDurabilitySpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.hasLegacyDurabilitySpec = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DurabilityLevel durability_level = 8;
 * @return {!proto.couchbase.kv.v1.DurabilityLevel}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.getDurabilityLevel = function() {
  return /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DurabilityLevel} value
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
 */
proto.couchbase.kv.v1.AppendRequest.prototype.setDurabilityLevel = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.couchbase.kv.v1.AppendRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.AppendRequest} returns this
 */
proto.couchbase.kv.v1.AppendRequest.prototype.clearDurabilityLevel = function() {
  return jspb.Message.setOneofField(this, 8, proto.couchbase.kv.v1.AppendRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.AppendRequest.prototype.hasDurabilityLevel = function() {
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
proto.couchbase.kv.v1.AppendResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.AppendResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.AppendResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.AppendResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cas: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mutationToken: (f = msg.getMutationToken()) && proto.couchbase.kv.v1.MutationToken.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.AppendResponse}
 */
proto.couchbase.kv.v1.AppendResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.AppendResponse;
  return proto.couchbase.kv.v1.AppendResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.AppendResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.AppendResponse}
 */
proto.couchbase.kv.v1.AppendResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 2:
      var value = new proto.couchbase.kv.v1.MutationToken;
      reader.readMessage(value,proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader);
      msg.setMutationToken(value);
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
proto.couchbase.kv.v1.AppendResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.AppendResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.AppendResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.AppendResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMutationToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 cas = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.AppendResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.AppendResponse} returns this
 */
proto.couchbase.kv.v1.AppendResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MutationToken mutation_token = 2;
 * @return {?proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.AppendResponse.prototype.getMutationToken = function() {
  return /** @type{?proto.couchbase.kv.v1.MutationToken} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutationToken, 2));
};


/**
 * @param {?proto.couchbase.kv.v1.MutationToken|undefined} value
 * @return {!proto.couchbase.kv.v1.AppendResponse} returns this
*/
proto.couchbase.kv.v1.AppendResponse.prototype.setMutationToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.AppendResponse} returns this
 */
proto.couchbase.kv.v1.AppendResponse.prototype.clearMutationToken = function() {
  return this.setMutationToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.AppendResponse.prototype.hasMutationToken = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.kv.v1.PrependRequest.oneofGroups_ = [[7,8]];

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.PrependRequest.DurabilitySpecCase = {
  DURABILITY_SPEC_NOT_SET: 0,
  LEGACY_DURABILITY_SPEC: 7,
  DURABILITY_LEVEL: 8
};

/**
 * @return {proto.couchbase.kv.v1.PrependRequest.DurabilitySpecCase}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getDurabilitySpecCase = function() {
  return /** @type {proto.couchbase.kv.v1.PrependRequest.DurabilitySpecCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.kv.v1.PrependRequest.oneofGroups_[0]));
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
proto.couchbase.kv.v1.PrependRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.PrependRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.PrependRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.PrependRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    content: msg.getContent_asB64(),
    cas: jspb.Message.getFieldWithDefault(msg, 6, 0),
    legacyDurabilitySpec: (f = msg.getLegacyDurabilitySpec()) && proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject(includeInstance, f),
    durabilityLevel: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.couchbase.kv.v1.PrependRequest}
 */
proto.couchbase.kv.v1.PrependRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.PrependRequest;
  return proto.couchbase.kv.v1.PrependRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.PrependRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.PrependRequest}
 */
proto.couchbase.kv.v1.PrependRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 7:
      var value = new proto.couchbase.kv.v1.LegacyDurabilitySpec;
      reader.readMessage(value,proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader);
      msg.setLegacyDurabilitySpec(value);
      break;
    case 8:
      var value = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (reader.readEnum());
      msg.setDurabilityLevel(value);
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
proto.couchbase.kv.v1.PrependRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.PrependRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.PrependRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.PrependRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getLegacyDurabilitySpec();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
 */
proto.couchbase.kv.v1.PrependRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
 */
proto.couchbase.kv.v1.PrependRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
 */
proto.couchbase.kv.v1.PrependRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
 */
proto.couchbase.kv.v1.PrependRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes content = 5;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes content = 5;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
 */
proto.couchbase.kv.v1.PrependRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional uint64 cas = 6;
 * @return {number}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
 */
proto.couchbase.kv.v1.PrependRequest.prototype.setCas = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
 */
proto.couchbase.kv.v1.PrependRequest.prototype.clearCas = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.hasCas = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional LegacyDurabilitySpec legacy_durability_spec = 7;
 * @return {?proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getLegacyDurabilitySpec = function() {
  return /** @type{?proto.couchbase.kv.v1.LegacyDurabilitySpec} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LegacyDurabilitySpec, 7));
};


/**
 * @param {?proto.couchbase.kv.v1.LegacyDurabilitySpec|undefined} value
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
*/
proto.couchbase.kv.v1.PrependRequest.prototype.setLegacyDurabilitySpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.couchbase.kv.v1.PrependRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
 */
proto.couchbase.kv.v1.PrependRequest.prototype.clearLegacyDurabilitySpec = function() {
  return this.setLegacyDurabilitySpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.hasLegacyDurabilitySpec = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DurabilityLevel durability_level = 8;
 * @return {!proto.couchbase.kv.v1.DurabilityLevel}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.getDurabilityLevel = function() {
  return /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DurabilityLevel} value
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
 */
proto.couchbase.kv.v1.PrependRequest.prototype.setDurabilityLevel = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.couchbase.kv.v1.PrependRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.PrependRequest} returns this
 */
proto.couchbase.kv.v1.PrependRequest.prototype.clearDurabilityLevel = function() {
  return jspb.Message.setOneofField(this, 8, proto.couchbase.kv.v1.PrependRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.PrependRequest.prototype.hasDurabilityLevel = function() {
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
proto.couchbase.kv.v1.PrependResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.PrependResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.PrependResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.PrependResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cas: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mutationToken: (f = msg.getMutationToken()) && proto.couchbase.kv.v1.MutationToken.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.PrependResponse}
 */
proto.couchbase.kv.v1.PrependResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.PrependResponse;
  return proto.couchbase.kv.v1.PrependResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.PrependResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.PrependResponse}
 */
proto.couchbase.kv.v1.PrependResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 2:
      var value = new proto.couchbase.kv.v1.MutationToken;
      reader.readMessage(value,proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader);
      msg.setMutationToken(value);
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
proto.couchbase.kv.v1.PrependResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.PrependResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.PrependResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.PrependResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMutationToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 cas = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.PrependResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.PrependResponse} returns this
 */
proto.couchbase.kv.v1.PrependResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MutationToken mutation_token = 2;
 * @return {?proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.PrependResponse.prototype.getMutationToken = function() {
  return /** @type{?proto.couchbase.kv.v1.MutationToken} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutationToken, 2));
};


/**
 * @param {?proto.couchbase.kv.v1.MutationToken|undefined} value
 * @return {!proto.couchbase.kv.v1.PrependResponse} returns this
*/
proto.couchbase.kv.v1.PrependResponse.prototype.setMutationToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.PrependResponse} returns this
 */
proto.couchbase.kv.v1.PrependResponse.prototype.clearMutationToken = function() {
  return this.setMutationToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.PrependResponse.prototype.hasMutationToken = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.kv.v1.LookupInRequest.repeatedFields_ = [5];



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
proto.couchbase.kv.v1.LookupInRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.LookupInRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.LookupInRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    specsList: jspb.Message.toObjectList(msg.getSpecsList(),
    proto.couchbase.kv.v1.LookupInRequest.Spec.toObject, includeInstance),
    flags: (f = msg.getFlags()) && proto.couchbase.kv.v1.LookupInRequest.Flags.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.LookupInRequest}
 */
proto.couchbase.kv.v1.LookupInRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.LookupInRequest;
  return proto.couchbase.kv.v1.LookupInRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.LookupInRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.LookupInRequest}
 */
proto.couchbase.kv.v1.LookupInRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = new proto.couchbase.kv.v1.LookupInRequest.Spec;
      reader.readMessage(value,proto.couchbase.kv.v1.LookupInRequest.Spec.deserializeBinaryFromReader);
      msg.addSpecs(value);
      break;
    case 6:
      var value = new proto.couchbase.kv.v1.LookupInRequest.Flags;
      reader.readMessage(value,proto.couchbase.kv.v1.LookupInRequest.Flags.deserializeBinaryFromReader);
      msg.setFlags(value);
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
proto.couchbase.kv.v1.LookupInRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.LookupInRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.LookupInRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.couchbase.kv.v1.LookupInRequest.Spec.serializeBinaryToWriter
    );
  }
  f = message.getFlags();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.couchbase.kv.v1.LookupInRequest.Flags.serializeBinaryToWriter
    );
  }
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
proto.couchbase.kv.v1.LookupInRequest.Spec.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.LookupInRequest.Spec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Spec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    flags: (f = msg.getFlags()) && proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.LookupInRequest.Spec;
  return proto.couchbase.kv.v1.LookupInRequest.Spec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Spec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.couchbase.kv.v1.LookupInRequest.Spec.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = new proto.couchbase.kv.v1.LookupInRequest.Spec.Flags;
      reader.readMessage(value,proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.deserializeBinaryFromReader);
      msg.setFlags(value);
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
proto.couchbase.kv.v1.LookupInRequest.Spec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.LookupInRequest.Spec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Spec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFlags();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.Operation = {
  GET: 0,
  EXISTS: 1,
  COUNT: 2
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
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Spec.Flags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.toObject = function(includeInstance, msg) {
  var f, obj = {
    xattr: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec.Flags}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.LookupInRequest.Spec.Flags;
  return proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Spec.Flags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec.Flags}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setXattr(value);
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
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Spec.Flags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool xattr = 1;
 * @return {boolean}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.prototype.getXattr = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec.Flags} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.prototype.setXattr = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec.Flags} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.prototype.clearXattr = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.Flags.prototype.hasXattr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Operation operation = 1;
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec.Operation}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.prototype.getOperation = function() {
  return /** @type {!proto.couchbase.kv.v1.LookupInRequest.Spec.Operation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Spec.Operation} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Flags flags = 3;
 * @return {?proto.couchbase.kv.v1.LookupInRequest.Spec.Flags}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.prototype.getFlags = function() {
  return /** @type{?proto.couchbase.kv.v1.LookupInRequest.Spec.Flags} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LookupInRequest.Spec.Flags, 3));
};


/**
 * @param {?proto.couchbase.kv.v1.LookupInRequest.Spec.Flags|undefined} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec} returns this
*/
proto.couchbase.kv.v1.LookupInRequest.Spec.prototype.setFlags = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.prototype.clearFlags = function() {
  return this.setFlags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.LookupInRequest.Spec.prototype.hasFlags = function() {
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
proto.couchbase.kv.v1.LookupInRequest.Flags.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.LookupInRequest.Flags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Flags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInRequest.Flags.toObject = function(includeInstance, msg) {
  var f, obj = {
    accessDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Flags}
 */
proto.couchbase.kv.v1.LookupInRequest.Flags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.LookupInRequest.Flags;
  return proto.couchbase.kv.v1.LookupInRequest.Flags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Flags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Flags}
 */
proto.couchbase.kv.v1.LookupInRequest.Flags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccessDeleted(value);
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
proto.couchbase.kv.v1.LookupInRequest.Flags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.LookupInRequest.Flags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Flags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInRequest.Flags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool access_deleted = 1;
 * @return {boolean}
 */
proto.couchbase.kv.v1.LookupInRequest.Flags.prototype.getAccessDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Flags} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.Flags.prototype.setAccessDeleted = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Flags} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.Flags.prototype.clearAccessDeleted = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.LookupInRequest.Flags.prototype.hasAccessDeleted = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Spec specs = 5;
 * @return {!Array<!proto.couchbase.kv.v1.LookupInRequest.Spec>}
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.getSpecsList = function() {
  return /** @type{!Array<!proto.couchbase.kv.v1.LookupInRequest.Spec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.kv.v1.LookupInRequest.Spec, 5));
};


/**
 * @param {!Array<!proto.couchbase.kv.v1.LookupInRequest.Spec>} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest} returns this
*/
proto.couchbase.kv.v1.LookupInRequest.prototype.setSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.couchbase.kv.v1.LookupInRequest.Spec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.kv.v1.LookupInRequest.Spec}
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.addSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.couchbase.kv.v1.LookupInRequest.Spec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.kv.v1.LookupInRequest} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.clearSpecsList = function() {
  return this.setSpecsList([]);
};


/**
 * optional Flags flags = 6;
 * @return {?proto.couchbase.kv.v1.LookupInRequest.Flags}
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.getFlags = function() {
  return /** @type{?proto.couchbase.kv.v1.LookupInRequest.Flags} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LookupInRequest.Flags, 6));
};


/**
 * @param {?proto.couchbase.kv.v1.LookupInRequest.Flags|undefined} value
 * @return {!proto.couchbase.kv.v1.LookupInRequest} returns this
*/
proto.couchbase.kv.v1.LookupInRequest.prototype.setFlags = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.LookupInRequest} returns this
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.clearFlags = function() {
  return this.setFlags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.LookupInRequest.prototype.hasFlags = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.kv.v1.LookupInResponse.repeatedFields_ = [1];



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
proto.couchbase.kv.v1.LookupInResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.LookupInResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.LookupInResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    specsList: jspb.Message.toObjectList(msg.getSpecsList(),
    proto.couchbase.kv.v1.LookupInResponse.Spec.toObject, includeInstance),
    cas: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.couchbase.kv.v1.LookupInResponse}
 */
proto.couchbase.kv.v1.LookupInResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.LookupInResponse;
  return proto.couchbase.kv.v1.LookupInResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.LookupInResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.LookupInResponse}
 */
proto.couchbase.kv.v1.LookupInResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.couchbase.kv.v1.LookupInResponse.Spec;
      reader.readMessage(value,proto.couchbase.kv.v1.LookupInResponse.Spec.deserializeBinaryFromReader);
      msg.addSpecs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
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
proto.couchbase.kv.v1.LookupInResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.LookupInResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.LookupInResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.couchbase.kv.v1.LookupInResponse.Spec.serializeBinaryToWriter
    );
  }
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
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
proto.couchbase.kv.v1.LookupInResponse.Spec.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.LookupInResponse.Spec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.LookupInResponse.Spec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f),
    content: msg.getContent_asB64()
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
 * @return {!proto.couchbase.kv.v1.LookupInResponse.Spec}
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.LookupInResponse.Spec;
  return proto.couchbase.kv.v1.LookupInResponse.Spec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.LookupInResponse.Spec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.LookupInResponse.Spec}
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
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
proto.couchbase.kv.v1.LookupInResponse.Spec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.LookupInResponse.Spec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.LookupInResponse.Spec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional google.rpc.Status status = 1;
 * @return {?proto.google.rpc.Status}
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 1));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.couchbase.kv.v1.LookupInResponse.Spec} returns this
*/
proto.couchbase.kv.v1.LookupInResponse.Spec.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.LookupInResponse.Spec} returns this
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes content = 2;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes content = 2;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.kv.v1.LookupInResponse.Spec} returns this
 */
proto.couchbase.kv.v1.LookupInResponse.Spec.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated Spec specs = 1;
 * @return {!Array<!proto.couchbase.kv.v1.LookupInResponse.Spec>}
 */
proto.couchbase.kv.v1.LookupInResponse.prototype.getSpecsList = function() {
  return /** @type{!Array<!proto.couchbase.kv.v1.LookupInResponse.Spec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.kv.v1.LookupInResponse.Spec, 1));
};


/**
 * @param {!Array<!proto.couchbase.kv.v1.LookupInResponse.Spec>} value
 * @return {!proto.couchbase.kv.v1.LookupInResponse} returns this
*/
proto.couchbase.kv.v1.LookupInResponse.prototype.setSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.couchbase.kv.v1.LookupInResponse.Spec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.kv.v1.LookupInResponse.Spec}
 */
proto.couchbase.kv.v1.LookupInResponse.prototype.addSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.couchbase.kv.v1.LookupInResponse.Spec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.kv.v1.LookupInResponse} returns this
 */
proto.couchbase.kv.v1.LookupInResponse.prototype.clearSpecsList = function() {
  return this.setSpecsList([]);
};


/**
 * optional uint64 cas = 2;
 * @return {number}
 */
proto.couchbase.kv.v1.LookupInResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.LookupInResponse} returns this
 */
proto.couchbase.kv.v1.LookupInResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.kv.v1.MutateInRequest.repeatedFields_ = [5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.couchbase.kv.v1.MutateInRequest.oneofGroups_ = [[7,8]];

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.MutateInRequest.DurabilitySpecCase = {
  DURABILITY_SPEC_NOT_SET: 0,
  LEGACY_DURABILITY_SPEC: 7,
  DURABILITY_LEVEL: 8
};

/**
 * @return {proto.couchbase.kv.v1.MutateInRequest.DurabilitySpecCase}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getDurabilitySpecCase = function() {
  return /** @type {proto.couchbase.kv.v1.MutateInRequest.DurabilitySpecCase} */(jspb.Message.computeOneofCase(this, proto.couchbase.kv.v1.MutateInRequest.oneofGroups_[0]));
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
proto.couchbase.kv.v1.MutateInRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.MutateInRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.MutateInRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    specsList: jspb.Message.toObjectList(msg.getSpecsList(),
    proto.couchbase.kv.v1.MutateInRequest.Spec.toObject, includeInstance),
    storeSemantic: jspb.Message.getFieldWithDefault(msg, 6, 0),
    legacyDurabilitySpec: (f = msg.getLegacyDurabilitySpec()) && proto.couchbase.kv.v1.LegacyDurabilitySpec.toObject(includeInstance, f),
    durabilityLevel: jspb.Message.getFieldWithDefault(msg, 8, 0),
    cas: jspb.Message.getFieldWithDefault(msg, 9, 0),
    flags: (f = msg.getFlags()) && proto.couchbase.kv.v1.MutateInRequest.Flags.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.MutateInRequest}
 */
proto.couchbase.kv.v1.MutateInRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.MutateInRequest;
  return proto.couchbase.kv.v1.MutateInRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.MutateInRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.MutateInRequest}
 */
proto.couchbase.kv.v1.MutateInRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = new proto.couchbase.kv.v1.MutateInRequest.Spec;
      reader.readMessage(value,proto.couchbase.kv.v1.MutateInRequest.Spec.deserializeBinaryFromReader);
      msg.addSpecs(value);
      break;
    case 6:
      var value = /** @type {!proto.couchbase.kv.v1.MutateInRequest.StoreSemantic} */ (reader.readEnum());
      msg.setStoreSemantic(value);
      break;
    case 7:
      var value = new proto.couchbase.kv.v1.LegacyDurabilitySpec;
      reader.readMessage(value,proto.couchbase.kv.v1.LegacyDurabilitySpec.deserializeBinaryFromReader);
      msg.setLegacyDurabilitySpec(value);
      break;
    case 8:
      var value = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (reader.readEnum());
      msg.setDurabilityLevel(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 10:
      var value = new proto.couchbase.kv.v1.MutateInRequest.Flags;
      reader.readMessage(value,proto.couchbase.kv.v1.MutateInRequest.Flags.deserializeBinaryFromReader);
      msg.setFlags(value);
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
proto.couchbase.kv.v1.MutateInRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.MutateInRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.MutateInRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.couchbase.kv.v1.MutateInRequest.Spec.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.couchbase.kv.v1.MutateInRequest.StoreSemantic} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getLegacyDurabilitySpec();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.couchbase.kv.v1.LegacyDurabilitySpec.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getFlags();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.couchbase.kv.v1.MutateInRequest.Flags.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.couchbase.kv.v1.MutateInRequest.StoreSemantic = {
  REPLACE: 0,
  UPSERT: 1,
  INSERT: 2
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
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.MutateInRequest.Spec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Spec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.toObject = function(includeInstance, msg) {
  var f, obj = {
    operation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: msg.getContent_asB64(),
    flags: (f = msg.getFlags()) && proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.MutateInRequest.Spec;
  return proto.couchbase.kv.v1.MutateInRequest.Spec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Spec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.couchbase.kv.v1.MutateInRequest.Spec.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 4:
      var value = new proto.couchbase.kv.v1.MutateInRequest.Spec.Flags;
      reader.readMessage(value,proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.deserializeBinaryFromReader);
      msg.setFlags(value);
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
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.MutateInRequest.Spec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Spec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getFlags();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Operation = {
  INSERT: 0,
  UPSERT: 1,
  REPLACE: 2,
  REMOVE: 3,
  ARRAY_APPEND: 4,
  ARRAY_PREPEND: 5,
  ARRAY_INSERT: 6,
  ARRAY_ADD_UNIQUE: 7,
  COUNTER: 8
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
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Spec.Flags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.toObject = function(includeInstance, msg) {
  var f, obj = {
    createPath: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    xattr: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec.Flags}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.MutateInRequest.Spec.Flags;
  return proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Spec.Flags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec.Flags}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreatePath(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setXattr(value);
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
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Spec.Flags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool create_path = 1;
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.prototype.getCreatePath = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec.Flags} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.prototype.setCreatePath = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec.Flags} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.prototype.clearCreatePath = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.prototype.hasCreatePath = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool xattr = 2;
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.prototype.getXattr = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec.Flags} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.prototype.setXattr = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec.Flags} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.prototype.clearXattr = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.Flags.prototype.hasXattr = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Operation operation = 1;
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec.Operation}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.getOperation = function() {
  return /** @type {!proto.couchbase.kv.v1.MutateInRequest.Spec.Operation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Spec.Operation} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes content = 3;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes content = 3;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional Flags flags = 4;
 * @return {?proto.couchbase.kv.v1.MutateInRequest.Spec.Flags}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.getFlags = function() {
  return /** @type{?proto.couchbase.kv.v1.MutateInRequest.Spec.Flags} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutateInRequest.Spec.Flags, 4));
};


/**
 * @param {?proto.couchbase.kv.v1.MutateInRequest.Spec.Flags|undefined} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec} returns this
*/
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.setFlags = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.clearFlags = function() {
  return this.setFlags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.Spec.prototype.hasFlags = function() {
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
proto.couchbase.kv.v1.MutateInRequest.Flags.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.MutateInRequest.Flags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Flags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInRequest.Flags.toObject = function(includeInstance, msg) {
  var f, obj = {
    accessDeleted: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Flags}
 */
proto.couchbase.kv.v1.MutateInRequest.Flags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.MutateInRequest.Flags;
  return proto.couchbase.kv.v1.MutateInRequest.Flags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Flags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Flags}
 */
proto.couchbase.kv.v1.MutateInRequest.Flags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccessDeleted(value);
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
proto.couchbase.kv.v1.MutateInRequest.Flags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.MutateInRequest.Flags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Flags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInRequest.Flags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool access_deleted = 1;
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.Flags.prototype.getAccessDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Flags} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.Flags.prototype.setAccessDeleted = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Flags} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.Flags.prototype.clearAccessDeleted = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.Flags.prototype.hasAccessDeleted = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Spec specs = 5;
 * @return {!Array<!proto.couchbase.kv.v1.MutateInRequest.Spec>}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getSpecsList = function() {
  return /** @type{!Array<!proto.couchbase.kv.v1.MutateInRequest.Spec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.kv.v1.MutateInRequest.Spec, 5));
};


/**
 * @param {!Array<!proto.couchbase.kv.v1.MutateInRequest.Spec>} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
*/
proto.couchbase.kv.v1.MutateInRequest.prototype.setSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.couchbase.kv.v1.MutateInRequest.Spec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.kv.v1.MutateInRequest.Spec}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.addSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.couchbase.kv.v1.MutateInRequest.Spec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.clearSpecsList = function() {
  return this.setSpecsList([]);
};


/**
 * optional StoreSemantic store_semantic = 6;
 * @return {!proto.couchbase.kv.v1.MutateInRequest.StoreSemantic}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getStoreSemantic = function() {
  return /** @type {!proto.couchbase.kv.v1.MutateInRequest.StoreSemantic} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.MutateInRequest.StoreSemantic} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.setStoreSemantic = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.clearStoreSemantic = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.hasStoreSemantic = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional LegacyDurabilitySpec legacy_durability_spec = 7;
 * @return {?proto.couchbase.kv.v1.LegacyDurabilitySpec}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getLegacyDurabilitySpec = function() {
  return /** @type{?proto.couchbase.kv.v1.LegacyDurabilitySpec} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.LegacyDurabilitySpec, 7));
};


/**
 * @param {?proto.couchbase.kv.v1.LegacyDurabilitySpec|undefined} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
*/
proto.couchbase.kv.v1.MutateInRequest.prototype.setLegacyDurabilitySpec = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.couchbase.kv.v1.MutateInRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.clearLegacyDurabilitySpec = function() {
  return this.setLegacyDurabilitySpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.hasLegacyDurabilitySpec = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DurabilityLevel durability_level = 8;
 * @return {!proto.couchbase.kv.v1.DurabilityLevel}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getDurabilityLevel = function() {
  return /** @type {!proto.couchbase.kv.v1.DurabilityLevel} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DurabilityLevel} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.setDurabilityLevel = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.couchbase.kv.v1.MutateInRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.clearDurabilityLevel = function() {
  return jspb.Message.setOneofField(this, 8, proto.couchbase.kv.v1.MutateInRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.hasDurabilityLevel = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 cas = 9;
 * @return {number}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.setCas = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.clearCas = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.hasCas = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Flags flags = 10;
 * @return {?proto.couchbase.kv.v1.MutateInRequest.Flags}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.getFlags = function() {
  return /** @type{?proto.couchbase.kv.v1.MutateInRequest.Flags} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutateInRequest.Flags, 10));
};


/**
 * @param {?proto.couchbase.kv.v1.MutateInRequest.Flags|undefined} value
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
*/
proto.couchbase.kv.v1.MutateInRequest.prototype.setFlags = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInRequest} returns this
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.clearFlags = function() {
  return this.setFlags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInRequest.prototype.hasFlags = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.kv.v1.MutateInResponse.repeatedFields_ = [1];



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
proto.couchbase.kv.v1.MutateInResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.MutateInResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.MutateInResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    specsList: jspb.Message.toObjectList(msg.getSpecsList(),
    proto.couchbase.kv.v1.MutateInResponse.Spec.toObject, includeInstance),
    cas: jspb.Message.getFieldWithDefault(msg, 2, 0),
    mutationToken: (f = msg.getMutationToken()) && proto.couchbase.kv.v1.MutationToken.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.MutateInResponse}
 */
proto.couchbase.kv.v1.MutateInResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.MutateInResponse;
  return proto.couchbase.kv.v1.MutateInResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.MutateInResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.MutateInResponse}
 */
proto.couchbase.kv.v1.MutateInResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.couchbase.kv.v1.MutateInResponse.Spec;
      reader.readMessage(value,proto.couchbase.kv.v1.MutateInResponse.Spec.deserializeBinaryFromReader);
      msg.addSpecs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 3:
      var value = new proto.couchbase.kv.v1.MutationToken;
      reader.readMessage(value,proto.couchbase.kv.v1.MutationToken.deserializeBinaryFromReader);
      msg.setMutationToken(value);
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
proto.couchbase.kv.v1.MutateInResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.MutateInResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.MutateInResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpecsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.couchbase.kv.v1.MutateInResponse.Spec.serializeBinaryToWriter
    );
  }
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMutationToken();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.kv.v1.MutationToken.serializeBinaryToWriter
    );
  }
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
proto.couchbase.kv.v1.MutateInResponse.Spec.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.MutateInResponse.Spec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.MutateInResponse.Spec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInResponse.Spec.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: msg.getContent_asB64()
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
 * @return {!proto.couchbase.kv.v1.MutateInResponse.Spec}
 */
proto.couchbase.kv.v1.MutateInResponse.Spec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.MutateInResponse.Spec;
  return proto.couchbase.kv.v1.MutateInResponse.Spec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.MutateInResponse.Spec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.MutateInResponse.Spec}
 */
proto.couchbase.kv.v1.MutateInResponse.Spec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
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
proto.couchbase.kv.v1.MutateInResponse.Spec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.MutateInResponse.Spec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.MutateInResponse.Spec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.MutateInResponse.Spec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes content = 1;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.kv.v1.MutateInResponse.Spec.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes content = 1;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.couchbase.kv.v1.MutateInResponse.Spec.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.couchbase.kv.v1.MutateInResponse.Spec.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.kv.v1.MutateInResponse.Spec} returns this
 */
proto.couchbase.kv.v1.MutateInResponse.Spec.prototype.setContent = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInResponse.Spec} returns this
 */
proto.couchbase.kv.v1.MutateInResponse.Spec.prototype.clearContent = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInResponse.Spec.prototype.hasContent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Spec specs = 1;
 * @return {!Array<!proto.couchbase.kv.v1.MutateInResponse.Spec>}
 */
proto.couchbase.kv.v1.MutateInResponse.prototype.getSpecsList = function() {
  return /** @type{!Array<!proto.couchbase.kv.v1.MutateInResponse.Spec>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.kv.v1.MutateInResponse.Spec, 1));
};


/**
 * @param {!Array<!proto.couchbase.kv.v1.MutateInResponse.Spec>} value
 * @return {!proto.couchbase.kv.v1.MutateInResponse} returns this
*/
proto.couchbase.kv.v1.MutateInResponse.prototype.setSpecsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.couchbase.kv.v1.MutateInResponse.Spec=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.kv.v1.MutateInResponse.Spec}
 */
proto.couchbase.kv.v1.MutateInResponse.prototype.addSpecs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.couchbase.kv.v1.MutateInResponse.Spec, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.kv.v1.MutateInResponse} returns this
 */
proto.couchbase.kv.v1.MutateInResponse.prototype.clearSpecsList = function() {
  return this.setSpecsList([]);
};


/**
 * optional uint64 cas = 2;
 * @return {number}
 */
proto.couchbase.kv.v1.MutateInResponse.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.MutateInResponse} returns this
 */
proto.couchbase.kv.v1.MutateInResponse.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional MutationToken mutation_token = 3;
 * @return {?proto.couchbase.kv.v1.MutationToken}
 */
proto.couchbase.kv.v1.MutateInResponse.prototype.getMutationToken = function() {
  return /** @type{?proto.couchbase.kv.v1.MutationToken} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.MutationToken, 3));
};


/**
 * @param {?proto.couchbase.kv.v1.MutationToken|undefined} value
 * @return {!proto.couchbase.kv.v1.MutateInResponse} returns this
*/
proto.couchbase.kv.v1.MutateInResponse.prototype.setMutationToken = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.MutateInResponse} returns this
 */
proto.couchbase.kv.v1.MutateInResponse.prototype.clearMutationToken = function() {
  return this.setMutationToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.MutateInResponse.prototype.hasMutationToken = function() {
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
proto.couchbase.kv.v1.RangeScanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.RangeScanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.RangeScanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scopeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    collectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    keyOnly: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    range: (f = msg.getRange()) && proto.couchbase.kv.v1.RangeScanRequest.Range.toObject(includeInstance, f),
    sampling: (f = msg.getSampling()) && proto.couchbase.kv.v1.RangeScanRequest.Sampling.toObject(includeInstance, f),
    snapshotRequirements: (f = msg.getSnapshotRequirements()) && proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.RangeScanRequest}
 */
proto.couchbase.kv.v1.RangeScanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.RangeScanRequest;
  return proto.couchbase.kv.v1.RangeScanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.RangeScanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.RangeScanRequest}
 */
proto.couchbase.kv.v1.RangeScanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopeName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionName(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeyOnly(value);
      break;
    case 7:
      var value = new proto.couchbase.kv.v1.RangeScanRequest.Range;
      reader.readMessage(value,proto.couchbase.kv.v1.RangeScanRequest.Range.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 8:
      var value = new proto.couchbase.kv.v1.RangeScanRequest.Sampling;
      reader.readMessage(value,proto.couchbase.kv.v1.RangeScanRequest.Sampling.deserializeBinaryFromReader);
      msg.setSampling(value);
      break;
    case 6:
      var value = new proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements;
      reader.readMessage(value,proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.deserializeBinaryFromReader);
      msg.setSnapshotRequirements(value);
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
proto.couchbase.kv.v1.RangeScanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.RangeScanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.RangeScanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScopeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCollectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKeyOnly();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.couchbase.kv.v1.RangeScanRequest.Range.serializeBinaryToWriter
    );
  }
  f = message.getSampling();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.couchbase.kv.v1.RangeScanRequest.Sampling.serializeBinaryToWriter
    );
  }
  f = message.getSnapshotRequirements();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.serializeBinaryToWriter
    );
  }
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
proto.couchbase.kv.v1.RangeScanRequest.Range.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.RangeScanRequest.Range.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.RangeScanRequest.Range} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.toObject = function(includeInstance, msg) {
  var f, obj = {
    startKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inclusiveStart: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    inclusiveEnd: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.Range}
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.RangeScanRequest.Range;
  return proto.couchbase.kv.v1.RangeScanRequest.Range.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.RangeScanRequest.Range} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.Range}
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndKey(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInclusiveStart(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInclusiveEnd(value);
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
proto.couchbase.kv.v1.RangeScanRequest.Range.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.RangeScanRequest.Range.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.RangeScanRequest.Range} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInclusiveStart();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getInclusiveEnd();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string start_key = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.prototype.getStartKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.Range} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.prototype.setStartKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string end_key = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.prototype.getEndKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.Range} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.prototype.setEndKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool inclusive_start = 3;
 * @return {boolean}
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.prototype.getInclusiveStart = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.Range} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.prototype.setInclusiveStart = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool inclusive_end = 4;
 * @return {boolean}
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.prototype.getInclusiveEnd = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.Range} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.Range.prototype.setInclusiveEnd = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.couchbase.kv.v1.RangeScanRequest.Sampling.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.RangeScanRequest.Sampling.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.RangeScanRequest.Sampling} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanRequest.Sampling.toObject = function(includeInstance, msg) {
  var f, obj = {
    seed: jspb.Message.getFieldWithDefault(msg, 1, 0),
    samples: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.Sampling}
 */
proto.couchbase.kv.v1.RangeScanRequest.Sampling.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.RangeScanRequest.Sampling;
  return proto.couchbase.kv.v1.RangeScanRequest.Sampling.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.RangeScanRequest.Sampling} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.Sampling}
 */
proto.couchbase.kv.v1.RangeScanRequest.Sampling.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSamples(value);
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
proto.couchbase.kv.v1.RangeScanRequest.Sampling.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.RangeScanRequest.Sampling.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.RangeScanRequest.Sampling} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanRequest.Sampling.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeed();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSamples();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 seed = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.RangeScanRequest.Sampling.prototype.getSeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.Sampling} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.Sampling.prototype.setSeed = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 samples = 2;
 * @return {number}
 */
proto.couchbase.kv.v1.RangeScanRequest.Sampling.prototype.getSamples = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.Sampling} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.Sampling.prototype.setSamples = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.toObject = function(includeInstance, msg) {
  var f, obj = {
    vbUuid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    seqno: jspb.Message.getFieldWithDefault(msg, 2, 0),
    checkSeqnoExists: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements}
 */
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements;
  return proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements}
 */
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVbUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeqno(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheckSeqnoExists(value);
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
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVbUuid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSeqno();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCheckSeqnoExists();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint64 vb_uuid = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.prototype.getVbUuid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.prototype.setVbUuid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 seqno = 2;
 * @return {number}
 */
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.prototype.getSeqno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.prototype.setSeqno = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool check_seqno_exists = 3;
 * @return {boolean}
 */
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.prototype.getCheckSeqnoExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements.prototype.setCheckSeqnoExists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string bucket_name = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.getBucketName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.setBucketName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string scope_name = 2;
 * @return {string}
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.getScopeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.setScopeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string collection_name = 3;
 * @return {string}
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.getCollectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.setCollectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool key_only = 9;
 * @return {boolean}
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.getKeyOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.setKeyOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional Range range = 7;
 * @return {?proto.couchbase.kv.v1.RangeScanRequest.Range}
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.getRange = function() {
  return /** @type{?proto.couchbase.kv.v1.RangeScanRequest.Range} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.RangeScanRequest.Range, 7));
};


/**
 * @param {?proto.couchbase.kv.v1.RangeScanRequest.Range|undefined} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest} returns this
*/
proto.couchbase.kv.v1.RangeScanRequest.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.RangeScanRequest} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.hasRange = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Sampling sampling = 8;
 * @return {?proto.couchbase.kv.v1.RangeScanRequest.Sampling}
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.getSampling = function() {
  return /** @type{?proto.couchbase.kv.v1.RangeScanRequest.Sampling} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.RangeScanRequest.Sampling, 8));
};


/**
 * @param {?proto.couchbase.kv.v1.RangeScanRequest.Sampling|undefined} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest} returns this
*/
proto.couchbase.kv.v1.RangeScanRequest.prototype.setSampling = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.RangeScanRequest} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.clearSampling = function() {
  return this.setSampling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.hasSampling = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SnapshotRequirements snapshot_requirements = 6;
 * @return {?proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements}
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.getSnapshotRequirements = function() {
  return /** @type{?proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements, 6));
};


/**
 * @param {?proto.couchbase.kv.v1.RangeScanRequest.SnapshotRequirements|undefined} value
 * @return {!proto.couchbase.kv.v1.RangeScanRequest} returns this
*/
proto.couchbase.kv.v1.RangeScanRequest.prototype.setSnapshotRequirements = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.RangeScanRequest} returns this
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.clearSnapshotRequirements = function() {
  return this.setSnapshotRequirements(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.RangeScanRequest.prototype.hasSnapshotRequirements = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.couchbase.kv.v1.RangeScanResponse.repeatedFields_ = [1];



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
proto.couchbase.kv.v1.RangeScanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.RangeScanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.RangeScanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    documentsList: jspb.Message.toObjectList(msg.getDocumentsList(),
    proto.couchbase.kv.v1.RangeScanResponse.Document.toObject, includeInstance)
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
 * @return {!proto.couchbase.kv.v1.RangeScanResponse}
 */
proto.couchbase.kv.v1.RangeScanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.RangeScanResponse;
  return proto.couchbase.kv.v1.RangeScanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.RangeScanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.RangeScanResponse}
 */
proto.couchbase.kv.v1.RangeScanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.couchbase.kv.v1.RangeScanResponse.Document;
      reader.readMessage(value,proto.couchbase.kv.v1.RangeScanResponse.Document.deserializeBinaryFromReader);
      msg.addDocuments(value);
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
proto.couchbase.kv.v1.RangeScanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.RangeScanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.RangeScanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.couchbase.kv.v1.RangeScanResponse.Document.serializeBinaryToWriter
    );
  }
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
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.RangeScanResponse.Document.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.RangeScanResponse.Document} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: msg.getContent_asB64(),
    metaData: (f = msg.getMetaData()) && proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.toObject(includeInstance, f)
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
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.RangeScanResponse.Document;
  return proto.couchbase.kv.v1.RangeScanResponse.Document.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.RangeScanResponse.Document} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 3:
      var value = new proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData;
      reader.readMessage(value,proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.deserializeBinaryFromReader);
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
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.RangeScanResponse.Document.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.RangeScanResponse.Document} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getMetaData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.serializeBinaryToWriter
    );
  }
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
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.toObject = function(opt_includeInstance) {
  return proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.toObject = function(includeInstance, msg) {
  var f, obj = {
    flags: jspb.Message.getFieldWithDefault(msg, 1, 0),
    expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    seqno: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cas: jspb.Message.getFieldWithDefault(msg, 4, 0),
    contentType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    compressionType: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData;
  return proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlags(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeqno(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCas(value);
      break;
    case 5:
      var value = /** @type {!proto.couchbase.kv.v1.DocumentContentType} */ (reader.readEnum());
      msg.setContentType(value);
      break;
    case 6:
      var value = /** @type {!proto.couchbase.kv.v1.DocumentCompressionType} */ (reader.readEnum());
      msg.setCompressionType(value);
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
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlags();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSeqno();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCas();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getCompressionType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional uint32 flags = 1;
 * @return {number}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.getFlags = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.setFlags = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp expiry = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} returns this
*/
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.hasExpiry = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 seqno = 3;
 * @return {number}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.getSeqno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.setSeqno = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 cas = 4;
 * @return {number}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.getCas = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.setCas = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional DocumentContentType content_type = 5;
 * @return {!proto.couchbase.kv.v1.DocumentContentType}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.getContentType = function() {
  return /** @type {!proto.couchbase.kv.v1.DocumentContentType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DocumentContentType} value
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.setContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional DocumentCompressionType compression_type = 6;
 * @return {!proto.couchbase.kv.v1.DocumentCompressionType}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.getCompressionType = function() {
  return /** @type {!proto.couchbase.kv.v1.DocumentCompressionType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.couchbase.kv.v1.DocumentCompressionType} value
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData.prototype.setCompressionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes content = 2;
 * @return {!(string|Uint8Array)}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes content = 2;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.setContent = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.clearContent = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.hasContent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MetaData meta_data = 3;
 * @return {?proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.getMetaData = function() {
  return /** @type{?proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData} */ (
    jspb.Message.getWrapperField(this, proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData, 3));
};


/**
 * @param {?proto.couchbase.kv.v1.RangeScanResponse.Document.MetaData|undefined} value
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document} returns this
*/
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.setMetaData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.clearMetaData = function() {
  return this.setMetaData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.couchbase.kv.v1.RangeScanResponse.Document.prototype.hasMetaData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Document documents = 1;
 * @return {!Array<!proto.couchbase.kv.v1.RangeScanResponse.Document>}
 */
proto.couchbase.kv.v1.RangeScanResponse.prototype.getDocumentsList = function() {
  return /** @type{!Array<!proto.couchbase.kv.v1.RangeScanResponse.Document>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.couchbase.kv.v1.RangeScanResponse.Document, 1));
};


/**
 * @param {!Array<!proto.couchbase.kv.v1.RangeScanResponse.Document>} value
 * @return {!proto.couchbase.kv.v1.RangeScanResponse} returns this
*/
proto.couchbase.kv.v1.RangeScanResponse.prototype.setDocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.couchbase.kv.v1.RangeScanResponse.Document=} opt_value
 * @param {number=} opt_index
 * @return {!proto.couchbase.kv.v1.RangeScanResponse.Document}
 */
proto.couchbase.kv.v1.RangeScanResponse.prototype.addDocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.couchbase.kv.v1.RangeScanResponse.Document, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.couchbase.kv.v1.RangeScanResponse} returns this
 */
proto.couchbase.kv.v1.RangeScanResponse.prototype.clearDocumentsList = function() {
  return this.setDocumentsList([]);
};


/**
 * @enum {number}
 */
proto.couchbase.kv.v1.DurabilityLevel = {
  MAJORITY: 0,
  MAJORITY_AND_PERSIST_TO_ACTIVE: 1,
  PERSIST_TO_MAJORITY: 2
};

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.DocumentContentType = {
  UNKNOWN: 0,
  BINARY: 1,
  JSON: 2
};

/**
 * @enum {number}
 */
proto.couchbase.kv.v1.DocumentCompressionType = {
  NONE: 0,
  SNAPPY: 1
};

goog.object.extend(exports, proto.couchbase.kv.v1);
