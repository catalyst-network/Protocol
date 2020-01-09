// source: Rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.Catalyst.Protocol.Wire.TransactionBroadcast');

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
  /**
   * @public
   * @override
   */
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
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.Catalyst.Protocol.Wire.TransactionBroadcast.toObject, includeInstance)
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
      var value = new proto.Catalyst.Protocol.Wire.TransactionBroadcast;
      reader.readMessage(value,proto.Catalyst.Protocol.Wire.TransactionBroadcast.deserializeBinaryFromReader);
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
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Catalyst.Protocol.Wire.TransactionBroadcast.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Catalyst.Protocol.Wire.TransactionBroadcast transactions = 1;
 * @return {!Array<!proto.Catalyst.Protocol.Wire.TransactionBroadcast>}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.Catalyst.Protocol.Wire.TransactionBroadcast>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Catalyst.Protocol.Wire.TransactionBroadcast, 1));
};


/**
 * @param {!Array<!proto.Catalyst.Protocol.Wire.TransactionBroadcast>} value
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse} returns this
*/
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Catalyst.Protocol.Wire.TransactionBroadcast=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Catalyst.Protocol.Wire.TransactionBroadcast}
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Catalyst.Protocol.Wire.TransactionBroadcast, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse} returns this
 */
proto.Catalyst.Protocol.Rpc.Node.GetMempoolResponse.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


