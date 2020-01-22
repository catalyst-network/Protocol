// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Rpc.proto

package Catalyst.Protocol.Rpc.Node;

/**
 * Protobuf type {@code Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest}
 */
public  final class SetPeerBlackListRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest)
    SetPeerBlackListRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use SetPeerBlackListRequest.newBuilder() to construct.
  private SetPeerBlackListRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private SetPeerBlackListRequest() {
    publicKey_ = com.google.protobuf.ByteString.EMPTY;
    ip_ = com.google.protobuf.ByteString.EMPTY;
    blacklist_ = false;
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private SetPeerBlackListRequest(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    int mutable_bitField0_ = 0;
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 10: {

            publicKey_ = input.readBytes();
            break;
          }
          case 18: {

            ip_ = input.readBytes();
            break;
          }
          case 24: {

            blacklist_ = input.readBool();
            break;
          }
          default: {
            if (!parseUnknownFieldProto3(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_SetPeerBlackListRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_SetPeerBlackListRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest.class, Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest.Builder.class);
  }

  public static final int PUBLICKEY_FIELD_NUMBER = 1;
  private com.google.protobuf.ByteString publicKey_;
  /**
   * <code>bytes publicKey = 1;</code>
   */
  public com.google.protobuf.ByteString getPublicKey() {
    return publicKey_;
  }

  public static final int IP_FIELD_NUMBER = 2;
  private com.google.protobuf.ByteString ip_;
  /**
   * <code>bytes ip = 2;</code>
   */
  public com.google.protobuf.ByteString getIp() {
    return ip_;
  }

  public static final int BLACKLIST_FIELD_NUMBER = 3;
  private boolean blacklist_;
  /**
   * <code>bool blacklist = 3;</code>
   */
  public boolean getBlacklist() {
    return blacklist_;
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!publicKey_.isEmpty()) {
      output.writeBytes(1, publicKey_);
    }
    if (!ip_.isEmpty()) {
      output.writeBytes(2, ip_);
    }
    if (blacklist_ != false) {
      output.writeBool(3, blacklist_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!publicKey_.isEmpty()) {
      size += com.google.protobuf.CodedOutputStream
        .computeBytesSize(1, publicKey_);
    }
    if (!ip_.isEmpty()) {
      size += com.google.protobuf.CodedOutputStream
        .computeBytesSize(2, ip_);
    }
    if (blacklist_ != false) {
      size += com.google.protobuf.CodedOutputStream
        .computeBoolSize(3, blacklist_);
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest)) {
      return super.equals(obj);
    }
    Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest other = (Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest) obj;

    boolean result = true;
    result = result && getPublicKey()
        .equals(other.getPublicKey());
    result = result && getIp()
        .equals(other.getIp());
    result = result && (getBlacklist()
        == other.getBlacklist());
    result = result && unknownFields.equals(other.unknownFields);
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + PUBLICKEY_FIELD_NUMBER;
    hash = (53 * hash) + getPublicKey().hashCode();
    hash = (37 * hash) + IP_FIELD_NUMBER;
    hash = (53 * hash) + getIp().hashCode();
    hash = (37 * hash) + BLACKLIST_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
        getBlacklist());
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest)
      Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_SetPeerBlackListRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_SetPeerBlackListRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest.class, Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest.Builder.class);
    }

    // Construct using Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      publicKey_ = com.google.protobuf.ByteString.EMPTY;

      ip_ = com.google.protobuf.ByteString.EMPTY;

      blacklist_ = false;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_SetPeerBlackListRequest_descriptor;
    }

    @java.lang.Override
    public Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest getDefaultInstanceForType() {
      return Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest.getDefaultInstance();
    }

    @java.lang.Override
    public Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest build() {
      Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest buildPartial() {
      Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest result = new Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest(this);
      result.publicKey_ = publicKey_;
      result.ip_ = ip_;
      result.blacklist_ = blacklist_;
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return (Builder) super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return (Builder) super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return (Builder) super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return (Builder) super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return (Builder) super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return (Builder) super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest) {
        return mergeFrom((Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest other) {
      if (other == Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest.getDefaultInstance()) return this;
      if (other.getPublicKey() != com.google.protobuf.ByteString.EMPTY) {
        setPublicKey(other.getPublicKey());
      }
      if (other.getIp() != com.google.protobuf.ByteString.EMPTY) {
        setIp(other.getIp());
      }
      if (other.getBlacklist() != false) {
        setBlacklist(other.getBlacklist());
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private com.google.protobuf.ByteString publicKey_ = com.google.protobuf.ByteString.EMPTY;
    /**
     * <code>bytes publicKey = 1;</code>
     */
    public com.google.protobuf.ByteString getPublicKey() {
      return publicKey_;
    }
    /**
     * <code>bytes publicKey = 1;</code>
     */
    public Builder setPublicKey(com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      publicKey_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>bytes publicKey = 1;</code>
     */
    public Builder clearPublicKey() {
      
      publicKey_ = getDefaultInstance().getPublicKey();
      onChanged();
      return this;
    }

    private com.google.protobuf.ByteString ip_ = com.google.protobuf.ByteString.EMPTY;
    /**
     * <code>bytes ip = 2;</code>
     */
    public com.google.protobuf.ByteString getIp() {
      return ip_;
    }
    /**
     * <code>bytes ip = 2;</code>
     */
    public Builder setIp(com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      ip_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>bytes ip = 2;</code>
     */
    public Builder clearIp() {
      
      ip_ = getDefaultInstance().getIp();
      onChanged();
      return this;
    }

    private boolean blacklist_ ;
    /**
     * <code>bool blacklist = 3;</code>
     */
    public boolean getBlacklist() {
      return blacklist_;
    }
    /**
     * <code>bool blacklist = 3;</code>
     */
    public Builder setBlacklist(boolean value) {
      
      blacklist_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>bool blacklist = 3;</code>
     */
    public Builder clearBlacklist() {
      
      blacklist_ = false;
      onChanged();
      return this;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFieldsProto3(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest)
  }

  // @@protoc_insertion_point(class_scope:Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest)
  private static final Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest();
  }

  public static Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<SetPeerBlackListRequest>
      PARSER = new com.google.protobuf.AbstractParser<SetPeerBlackListRequest>() {
    @java.lang.Override
    public SetPeerBlackListRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new SetPeerBlackListRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<SetPeerBlackListRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<SetPeerBlackListRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
