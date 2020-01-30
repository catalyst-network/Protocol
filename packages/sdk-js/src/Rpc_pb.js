/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var Peer_pb = require('./Peer_pb.js');
var Cryptography_pb = require('./Cryptography_pb.js');
var Deltas_pb = require('./Deltas_pb.js');
var Wire_pb = require('./Wire_pb.js');
var Transaction_pb = require('./Transaction_pb.js');
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.ResponseCode', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SendManyRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SendManyResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SendToRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SendToResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.VersionRequest', null, global);
goog.exportSymbol('proto.Catalyst.Protocol.Rpc.Node.VersionResponse', null, global);

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
proto.Catalyst.Protocol.Rpc.Node.VersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.VersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.VersionRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.VersionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.VersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.VersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VersionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.VersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.VersionRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.VersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.VersionRequest;
  return proto.Catalyst.Protocol.Rpc.Node.VersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.VersionRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.VersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.VersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.VersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.VersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.VersionRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.VersionRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.VersionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.VersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.VersionResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.VersionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.VersionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.VersionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VersionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.VersionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.VersionResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.VersionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.VersionResponse;
  return proto.Catalyst.Protocol.Rpc.Node.VersionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.VersionResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.VersionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
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
proto.Catalyst.Protocol.Rpc.Node.VersionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.VersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.VersionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.VersionResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.VersionResponse.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.GetInfoRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.GetInfoResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest;
  return proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse;
  return proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.CreateWalletResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest;
  return proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.ListWalletRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse;
  return proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.ListWalletResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest;
  return proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse;
  return proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.CreateAddressResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.GetAddressRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.GetAddressResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest;
  return proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.ListAddressRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse;
  return proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.ListAddressResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest;
  return proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse;
  return proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.ValidateAddressResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.GetBalanceResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest;
  return proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse;
  return proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest;
  return proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse;
  return proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest;
  return proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse;
  return proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && Wire_pb.TransactionBroadcast.toObject(includeInstance, f)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest;
  return proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Wire_pb.TransactionBroadcast;
      reader.readMessage(value,Wire_pb.TransactionBroadcast.deserializeBinaryFromReader);
      msg.setTransaction(value);
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
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Wire_pb.TransactionBroadcast.serializeBinaryToWriter
    );
  }
};


/**
 * optional Catalyst.Protocol.Wire.TransactionBroadcast transaction = 1;
 * @return {?proto.Catalyst.Protocol.Wire.TransactionBroadcast}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.prototype.getTransaction = function() {
  return /** @type{?proto.Catalyst.Protocol.Wire.TransactionBroadcast} */ (
    jspb.Message.getWrapperField(this, Wire_pb.TransactionBroadcast, 1));
};


/** @param {?proto.Catalyst.Protocol.Wire.TransactionBroadcast|undefined} value */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responseCode: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse;
  return proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Catalyst.Protocol.Rpc.Node.ResponseCode} */ (reader.readEnum());
      msg.setResponseCode(value);
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
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional ResponseCode response_code = 1;
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ResponseCode}
 */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.prototype.getResponseCode = function() {
  return /** @type {!proto.Catalyst.Protocol.Rpc.Node.ResponseCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.Catalyst.Protocol.Rpc.Node.ResponseCode} value */
proto.Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse.prototype.setResponseCode = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SendToRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SendToRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SendToRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SendToRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SendToRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendToRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SendToRequest;
  return proto.Catalyst.Protocol.Rpc.Node.SendToRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendToRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SendToRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SendToRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SendToRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.SendToRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SendToResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SendToResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SendToResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SendToResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SendToResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendToResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SendToResponse;
  return proto.Catalyst.Protocol.Rpc.Node.SendToResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendToResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SendToResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SendToResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SendToResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.SendToResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest;
  return proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.SendToFromRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse;
  return proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.SendToFromResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SendManyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SendManyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SendManyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendManyRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendManyRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SendManyRequest;
  return proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendManyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendManyRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendManyRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.SendManyRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SendManyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SendManyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SendManyResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendManyResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendManyResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SendManyResponse;
  return proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendManyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendManyResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendManyResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.SendManyResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest;
  return proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse;
  return proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.SendFromManyResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest;
  return proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.AddNodeRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse;
  return proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.AddNodeResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



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
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.repeatedFields_, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peersList: jspb.Message.toObjectList(msg.getPeersList(),
    Peer_pb.PeerId.toObject, includeInstance)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Peer_pb.PeerId;
      reader.readMessage(value,Peer_pb.PeerId.deserializeBinaryFromReader);
      msg.addPeers(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      Peer_pb.PeerId.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Catalyst.Protocol.Peer.PeerId peers = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Catalyst.Protocol.Peer.PeerId>}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.prototype.getPeersList = function() {
  return /** @type{!Array.<!proto.Catalyst.Protocol.Peer.PeerId>} */ (
    jspb.Message.getRepeatedWrapperField(this, Peer_pb.PeerId, 1));
};


/** @param {!Array.<!proto.Catalyst.Protocol.Peer.PeerId>} value */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.prototype.setPeersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Catalyst.Protocol.Peer.PeerId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Catalyst.Protocol.Peer.PeerId}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.prototype.addPeers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Catalyst.Protocol.Peer.PeerId, opt_index);
};


proto.Catalyst.Protocol.Rpc.Node.GetPeerListResponse.prototype.clearPeersList = function() {
  this.setPeersList([]);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64(),
    ip: msg.getIp_asB64()
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIp(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getIp_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.prototype.setPublicKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes ip = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.prototype.getIp = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes ip = 2;
 * This is a type-conversion wrapper around `getIp()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.prototype.getIp_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIp()));
};


/**
 * optional bytes ip = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIp()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.prototype.getIp_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIp()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest.prototype.setIp = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reputation: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReputation(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReputation();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 reputation = 1;
 * @return {number}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.prototype.getReputation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse.prototype.setReputation = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64(),
    ip: msg.getIp_asB64(),
    blacklist: jspb.Message.getFieldWithDefault(msg, 3, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest;
  return proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIp(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlacklist(value);
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
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getIp_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getBlacklist();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.setPublicKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes ip = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.getIp = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes ip = 2;
 * This is a type-conversion wrapper around `getIp()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.getIp_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIp()));
};


/**
 * optional bytes ip = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIp()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.getIp_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIp()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.setIp = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool blacklist = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.getBlacklist = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest.prototype.setBlacklist = function(value) {
  jspb.Message.setField(this, 3, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64(),
    ip: msg.getIp_asB64(),
    blacklist: jspb.Message.getFieldWithDefault(msg, 3, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse;
  return proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIp(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlacklist(value);
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
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getIp_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getBlacklist();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.setPublicKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes ip = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.getIp = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes ip = 2;
 * This is a type-conversion wrapper around `getIp()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.getIp_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIp()));
};


/**
 * optional bytes ip = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIp()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.getIp_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIp()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.setIp = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool blacklist = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.getBlacklist = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse.prototype.setBlacklist = function(value) {
  jspb.Message.setField(this, 3, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64(),
    ip: msg.getIp_asB64()
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIp(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getIp_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.prototype.setPublicKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes ip = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.prototype.getIp = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes ip = 2;
 * This is a type-conversion wrapper around `getIp()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.prototype.getIp_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIp()));
};


/**
 * optional bytes ip = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIp()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.prototype.getIp_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIp()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest.prototype.setIp = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerInfoList: jspb.Message.toObjectList(msg.getPeerInfoList(),
    Peer_pb.PeerInfo.toObject, includeInstance)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Peer_pb.PeerInfo;
      reader.readMessage(value,Peer_pb.PeerInfo.deserializeBinaryFromReader);
      msg.addPeerInfo(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      Peer_pb.PeerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Catalyst.Protocol.Peer.PeerInfo peer_info = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Catalyst.Protocol.Peer.PeerInfo>}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.prototype.getPeerInfoList = function() {
  return /** @type{!Array.<!proto.Catalyst.Protocol.Peer.PeerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, Peer_pb.PeerInfo, 1));
};


/** @param {!Array.<!proto.Catalyst.Protocol.Peer.PeerInfo>} value */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.prototype.setPeerInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Catalyst.Protocol.Peer.PeerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Catalyst.Protocol.Peer.PeerInfo}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.prototype.addPeerInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Catalyst.Protocol.Peer.PeerInfo, opt_index);
};


proto.Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse.prototype.clearPeerInfoList = function() {
  this.setPeerInfoList([]);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deltaDfsHash: msg.getDeltaDfsHash_asB64()
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDeltaDfsHash(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeltaDfsHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes delta_dfs_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.prototype.getDeltaDfsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes delta_dfs_hash = 1;
 * This is a type-conversion wrapper around `getDeltaDfsHash()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.prototype.getDeltaDfsHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDeltaDfsHash()));
};


/**
 * optional bytes delta_dfs_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDeltaDfsHash()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.prototype.getDeltaDfsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDeltaDfsHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaRequest.prototype.setDeltaDfsHash = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    delta: (f = msg.getDelta()) && Deltas_pb.Delta.toObject(includeInstance, f)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Deltas_pb.Delta;
      reader.readMessage(value,Deltas_pb.Delta.deserializeBinaryFromReader);
      msg.setDelta(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelta();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Deltas_pb.Delta.serializeBinaryToWriter
    );
  }
};


/**
 * optional Catalyst.Protocol.Deltas.Delta delta = 1;
 * @return {?proto.Catalyst.Protocol.Deltas.Delta}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.prototype.getDelta = function() {
  return /** @type{?proto.Catalyst.Protocol.Deltas.Delta} */ (
    jspb.Message.getWrapperField(this, Deltas_pb.Delta, 1));
};


/** @param {?proto.Catalyst.Protocol.Deltas.Delta|undefined} value */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.prototype.setDelta = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.prototype.clearDelta = function() {
  this.setDelta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.GetDeltaResponse.prototype.hasDelta = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.repeatedFields_, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    Transaction_pb.PublicEntry.toObject, includeInstance)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Transaction_pb.PublicEntry;
      reader.readMessage(value,Transaction_pb.PublicEntry.deserializeBinaryFromReader);
      msg.addTransactions(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      Transaction_pb.PublicEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Catalyst.Protocol.Transaction.PublicEntry transactions = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.Catalyst.Protocol.Transaction.PublicEntry>}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.getTransactionsList = function() {
  return /** @type{!Array.<!proto.Catalyst.Protocol.Transaction.PublicEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, Transaction_pb.PublicEntry, 1));
};


/** @param {!Array.<!proto.Catalyst.Protocol.Transaction.PublicEntry>} value */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Catalyst.Protocol.Transaction.PublicEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Catalyst.Protocol.Transaction.PublicEntry}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Catalyst.Protocol.Transaction.PublicEntry, opt_index);
};


proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};



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
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: msg.getMessage_asB64(),
    keyId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signingContext: (f = msg.getSigningContext()) && Cryptography_pb.SigningContext.toObject(includeInstance, f)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest;
  return proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeyId(value);
      break;
    case 3:
      var value = new Cryptography_pb.SigningContext;
      reader.readMessage(value,Cryptography_pb.SigningContext.deserializeBinaryFromReader);
      msg.setSigningContext(value);
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
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSigningContext();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      Cryptography_pb.SigningContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes message = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.getMessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes message = 1;
 * This is a type-conversion wrapper around `getMessage()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.getMessage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMessage()));
};


/**
 * optional bytes message = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMessage()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.getMessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMessage()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string key_id = 2;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.getKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.setKeyId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Catalyst.Protocol.Cryptography.SigningContext signing_context = 3;
 * @return {?proto.Catalyst.Protocol.Cryptography.SigningContext}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.getSigningContext = function() {
  return /** @type{?proto.Catalyst.Protocol.Cryptography.SigningContext} */ (
    jspb.Message.getWrapperField(this, Cryptography_pb.SigningContext, 3));
};


/** @param {?proto.Catalyst.Protocol.Cryptography.SigningContext|undefined} value */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.setSigningContext = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.clearSigningContext = function() {
  this.setSigningContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageRequest.prototype.hasSigningContext = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signature: msg.getSignature_asB64(),
    publicKey: msg.getPublicKey_asB64(),
    originalMessage: msg.getOriginalMessage_asB64()
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse;
  return proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOriginalMessage(value);
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
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getOriginalMessage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes signature = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes signature = 1;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.setSignature = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes public_key = 2;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.setPublicKey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes original_message = 3;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.getOriginalMessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes original_message = 3;
 * This is a type-conversion wrapper around `getOriginalMessage()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.getOriginalMessage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOriginalMessage()));
};


/**
 * optional bytes original_message = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOriginalMessage()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.getOriginalMessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOriginalMessage()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.SignMessageResponse.prototype.setOriginalMessage = function(value) {
  jspb.Message.setField(this, 3, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    signature: msg.getSignature_asB64(),
    publicKey: msg.getPublicKey_asB64(),
    message: msg.getMessage_asB64(),
    signingContext: (f = msg.getSigningContext()) && Cryptography_pb.SigningContext.toObject(includeInstance, f)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest;
  return proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMessage(value);
      break;
    case 4:
      var value = new Cryptography_pb.SigningContext;
      reader.readMessage(value,Cryptography_pb.SigningContext.deserializeBinaryFromReader);
      msg.setSigningContext(value);
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
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getMessage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getSigningContext();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      Cryptography_pb.SigningContext.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes signature = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes signature = 1;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.setSignature = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes public_key = 2;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.setPublicKey = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes message = 3;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.getMessage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes message = 3;
 * This is a type-conversion wrapper around `getMessage()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.getMessage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMessage()));
};


/**
 * optional bytes message = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMessage()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.getMessage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMessage()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional Catalyst.Protocol.Cryptography.SigningContext signing_context = 4;
 * @return {?proto.Catalyst.Protocol.Cryptography.SigningContext}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.getSigningContext = function() {
  return /** @type{?proto.Catalyst.Protocol.Cryptography.SigningContext} */ (
    jspb.Message.getWrapperField(this, Cryptography_pb.SigningContext, 4));
};


/** @param {?proto.Catalyst.Protocol.Cryptography.SigningContext|undefined} value */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.setSigningContext = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.clearSigningContext = function() {
  this.setSigningContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageRequest.prototype.hasSigningContext = function() {
  return jspb.Message.getField(this, 4) != null;
};



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
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isSignedByKey: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse;
  return proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSignedByKey(value);
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
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsSignedByKey();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_signed_by_key = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.prototype.getIsSignedByKey = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.VerifyMessageResponse.prototype.setIsSignedByKey = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest;
  return proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse;
  return proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.ServiceStatusResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fileName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    node: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest;
  return proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFileSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNode(value);
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
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileSize();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 file_size = 1;
 * @return {number}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.prototype.getFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.prototype.setFileSize = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string file_name = 2;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.prototype.setFileName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string node = 3;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.prototype.getNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.prototype.setNode = function(value) {
  jspb.Message.setField(this, 3, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responseCode: msg.getResponseCode_asB64(),
    dfsHash: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse;
  return proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResponseCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDfsHash(value);
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
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDfsHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes response_code = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.prototype.getResponseCode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes response_code = 1;
 * This is a type-conversion wrapper around `getResponseCode()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.prototype.getResponseCode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResponseCode()));
};


/**
 * optional bytes response_code = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResponseCode()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.prototype.getResponseCode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResponseCode()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.prototype.setResponseCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string dfs_hash = 2;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.prototype.getDfsHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse.prototype.setDfsHash = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chunkId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chunkBytes: msg.getChunkBytes_asB64(),
    correlationFileName: msg.getCorrelationFileName_asB64()
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest;
  return proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChunkId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChunkBytes(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCorrelationFileName(value);
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
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChunkId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getChunkBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getCorrelationFileName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional uint32 chunk_id = 1;
 * @return {number}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.getChunkId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.setChunkId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes chunk_bytes = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.getChunkBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chunk_bytes = 2;
 * This is a type-conversion wrapper around `getChunkBytes()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.getChunkBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChunkBytes()));
};


/**
 * optional bytes chunk_bytes = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChunkBytes()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.getChunkBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChunkBytes()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.setChunkBytes = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes correlation_file_name = 3;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.getCorrelationFileName = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes correlation_file_name = 3;
 * This is a type-conversion wrapper around `getCorrelationFileName()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.getCorrelationFileName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCorrelationFileName()));
};


/**
 * optional bytes correlation_file_name = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCorrelationFileName()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.getCorrelationFileName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCorrelationFileName()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest.prototype.setCorrelationFileName = function(value) {
  jspb.Message.setField(this, 3, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responseCode: msg.getResponseCode_asB64()
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse;
  return proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResponseCode(value);
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
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes response_code = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.prototype.getResponseCode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes response_code = 1;
 * This is a type-conversion wrapper around `getResponseCode()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.prototype.getResponseCode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResponseCode()));
};


/**
 * optional bytes response_code = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResponseCode()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.prototype.getResponseCode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResponseCode()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse.prototype.setResponseCode = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerIp: msg.getPeerIp_asB64(),
    publicKey: msg.getPublicKey_asB64()
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest;
  return proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPeerIp(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
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
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerIp_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes peer_ip = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.prototype.getPeerIp = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes peer_ip = 1;
 * This is a type-conversion wrapper around `getPeerIp()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.prototype.getPeerIp_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPeerIp()));
};


/**
 * optional bytes peer_ip = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPeerIp()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.prototype.getPeerIp_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPeerIp()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.prototype.setPeerIp = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes public_key = 2;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerRequest.prototype.setPublicKey = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deletedCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse;
  return proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDeletedCount(value);
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
proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletedCount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 deleted_count = 1;
 * @return {number}
 */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.prototype.getDeletedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Catalyst.Protocol.Rpc.Node.RemovePeerResponse.prototype.setDeletedCount = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



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
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPeerCount(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeerCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 peer_count = 1;
 * @return {number}
 */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.prototype.getPeerCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Catalyst.Protocol.Rpc.Node.GetPeerCountResponse.prototype.setPeerCount = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dfsHash: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest;
  return proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDfsHash(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDfsHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string dfs_hash = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.prototype.getDfsHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest.prototype.setDfsHash = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    responseCode: msg.getResponseCode_asB64()
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse;
  return proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFileSize(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResponseCode(value);
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
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileSize();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getResponseCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint64 file_size = 1;
 * @return {number}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.prototype.getFileSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.prototype.setFileSize = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes response_code = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.prototype.getResponseCode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes response_code = 2;
 * This is a type-conversion wrapper around `getResponseCode()`
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.prototype.getResponseCode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResponseCode()));
};


/**
 * optional bytes response_code = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResponseCode()`
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.prototype.getResponseCode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResponseCode()));
};


/** @param {!(string|Uint8Array)} value */
proto.Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse.prototype.setResponseCode = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataFolder: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest;
  return proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataFolder(value);
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
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataFolder();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string data_folder = 1;
 * @return {string}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.prototype.getDataFolder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest.prototype.setDataFolder = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.displayName = 'proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse;
  return proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuery(value);
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
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool query = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.prototype.getQuery = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.Catalyst.Protocol.Rpc.Node.ResponseCode = {
  PENDING: 0,
  SUCCESSFUL: 1,
  ERROR: 2,
  FINISHED: 3,
  EXPIRED: 4,
  FAILED: 5,
  EXISTS: 6
};

goog.object.extend(exports, proto.Catalyst.Protocol.Rpc.Node);
