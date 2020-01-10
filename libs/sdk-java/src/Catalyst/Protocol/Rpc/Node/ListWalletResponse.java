// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Rpc.proto

package Catalyst.Protocol.Rpc.Node;

/**
 * Protobuf type {@code Catalyst.Protocol.Rpc.Node.ListWalletResponse}
 */
public  final class ListWalletResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:Catalyst.Protocol.Rpc.Node.ListWalletResponse)
    ListWalletResponseOrBuilder {
  // Use ListWalletResponse.newBuilder() to construct.
  private ListWalletResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private ListWalletResponse() {
    query_ = "";
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private ListWalletResponse(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    int mutable_bitField0_ = 0;
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          default: {
            if (!input.skipField(tag)) {
              done = true;
            }
            break;
          }
          case 10: {
            java.lang.String s = input.readStringRequireUtf8();

            query_ = s;
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
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_ListWalletResponse_descriptor;
  }

  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_ListWalletResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            Catalyst.Protocol.Rpc.Node.ListWalletResponse.class, Catalyst.Protocol.Rpc.Node.ListWalletResponse.Builder.class);
  }

  public static final int QUERY_FIELD_NUMBER = 1;
  private volatile java.lang.Object query_;
  /**
   * <code>string query = 1;</code>
   */
  public java.lang.String getQuery() {
    java.lang.Object ref = query_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      query_ = s;
      return s;
    }
  }
  /**
   * <code>string query = 1;</code>
   */
  public com.google.protobuf.ByteString
      getQueryBytes() {
    java.lang.Object ref = query_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      query_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  private byte memoizedIsInitialized = -1;
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!getQueryBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, query_);
    }
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getQueryBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, query_);
    }
    memoizedSize = size;
    return size;
  }

  private static final long serialVersionUID = 0L;
  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof Catalyst.Protocol.Rpc.Node.ListWalletResponse)) {
      return super.equals(obj);
    }
    Catalyst.Protocol.Rpc.Node.ListWalletResponse other = (Catalyst.Protocol.Rpc.Node.ListWalletResponse) obj;

    boolean result = true;
    result = result && getQuery()
        .equals(other.getQuery());
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + QUERY_FIELD_NUMBER;
    hash = (53 * hash) + getQuery().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(Catalyst.Protocol.Rpc.Node.ListWalletResponse prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
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
   * Protobuf type {@code Catalyst.Protocol.Rpc.Node.ListWalletResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:Catalyst.Protocol.Rpc.Node.ListWalletResponse)
      Catalyst.Protocol.Rpc.Node.ListWalletResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_ListWalletResponse_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_ListWalletResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              Catalyst.Protocol.Rpc.Node.ListWalletResponse.class, Catalyst.Protocol.Rpc.Node.ListWalletResponse.Builder.class);
    }

    // Construct using Catalyst.Protocol.Rpc.Node.ListWalletResponse.newBuilder()
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
    public Builder clear() {
      super.clear();
      query_ = "";

      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_ListWalletResponse_descriptor;
    }

    public Catalyst.Protocol.Rpc.Node.ListWalletResponse getDefaultInstanceForType() {
      return Catalyst.Protocol.Rpc.Node.ListWalletResponse.getDefaultInstance();
    }

    public Catalyst.Protocol.Rpc.Node.ListWalletResponse build() {
      Catalyst.Protocol.Rpc.Node.ListWalletResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public Catalyst.Protocol.Rpc.Node.ListWalletResponse buildPartial() {
      Catalyst.Protocol.Rpc.Node.ListWalletResponse result = new Catalyst.Protocol.Rpc.Node.ListWalletResponse(this);
      result.query_ = query_;
      onBuilt();
      return result;
    }

    public Builder clone() {
      return (Builder) super.clone();
    }
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        Object value) {
      return (Builder) super.setField(field, value);
    }
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return (Builder) super.clearField(field);
    }
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return (Builder) super.clearOneof(oneof);
    }
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, Object value) {
      return (Builder) super.setRepeatedField(field, index, value);
    }
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        Object value) {
      return (Builder) super.addRepeatedField(field, value);
    }
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof Catalyst.Protocol.Rpc.Node.ListWalletResponse) {
        return mergeFrom((Catalyst.Protocol.Rpc.Node.ListWalletResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(Catalyst.Protocol.Rpc.Node.ListWalletResponse other) {
      if (other == Catalyst.Protocol.Rpc.Node.ListWalletResponse.getDefaultInstance()) return this;
      if (!other.getQuery().isEmpty()) {
        query_ = other.query_;
        onChanged();
      }
      onChanged();
      return this;
    }

    public final boolean isInitialized() {
      return true;
    }

    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      Catalyst.Protocol.Rpc.Node.ListWalletResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (Catalyst.Protocol.Rpc.Node.ListWalletResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object query_ = "";
    /**
     * <code>string query = 1;</code>
     */
    public java.lang.String getQuery() {
      java.lang.Object ref = query_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        query_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string query = 1;</code>
     */
    public com.google.protobuf.ByteString
        getQueryBytes() {
      java.lang.Object ref = query_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        query_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string query = 1;</code>
     */
    public Builder setQuery(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      query_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string query = 1;</code>
     */
    public Builder clearQuery() {
      
      query_ = getDefaultInstance().getQuery();
      onChanged();
      return this;
    }
    /**
     * <code>string query = 1;</code>
     */
    public Builder setQueryBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      query_ = value;
      onChanged();
      return this;
    }
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return this;
    }

    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return this;
    }


    // @@protoc_insertion_point(builder_scope:Catalyst.Protocol.Rpc.Node.ListWalletResponse)
  }

  // @@protoc_insertion_point(class_scope:Catalyst.Protocol.Rpc.Node.ListWalletResponse)
  private static final Catalyst.Protocol.Rpc.Node.ListWalletResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new Catalyst.Protocol.Rpc.Node.ListWalletResponse();
  }

  public static Catalyst.Protocol.Rpc.Node.ListWalletResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ListWalletResponse>
      PARSER = new com.google.protobuf.AbstractParser<ListWalletResponse>() {
    public ListWalletResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new ListWalletResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<ListWalletResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ListWalletResponse> getParserForType() {
    return PARSER;
  }

  public Catalyst.Protocol.Rpc.Node.ListWalletResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

