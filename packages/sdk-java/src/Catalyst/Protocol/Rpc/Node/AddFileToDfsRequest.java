// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Rpc.proto

package Catalyst.Protocol.Rpc.Node;

/**
 * Protobuf type {@code Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest}
 */
public  final class AddFileToDfsRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest)
    AddFileToDfsRequestOrBuilder {
  // Use AddFileToDfsRequest.newBuilder() to construct.
  private AddFileToDfsRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private AddFileToDfsRequest() {
    fileSize_ = 0L;
    fileName_ = "";
    node_ = "";
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
  }
  private AddFileToDfsRequest(
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
          case 8: {

            fileSize_ = input.readUInt64();
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            fileName_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            node_ = s;
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
    return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_AddFileToDfsRequest_descriptor;
  }

  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_AddFileToDfsRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.class, Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.Builder.class);
  }

  public static final int FILE_SIZE_FIELD_NUMBER = 1;
  private long fileSize_;
  /**
   * <code>uint64 file_size = 1;</code>
   */
  public long getFileSize() {
    return fileSize_;
  }

  public static final int FILE_NAME_FIELD_NUMBER = 2;
  private volatile java.lang.Object fileName_;
  /**
   * <code>string file_name = 2;</code>
   */
  public java.lang.String getFileName() {
    java.lang.Object ref = fileName_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      fileName_ = s;
      return s;
    }
  }
  /**
   * <code>string file_name = 2;</code>
   */
  public com.google.protobuf.ByteString
      getFileNameBytes() {
    java.lang.Object ref = fileName_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      fileName_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int NODE_FIELD_NUMBER = 3;
  private volatile java.lang.Object node_;
  /**
   * <code>string node = 3;</code>
   */
  public java.lang.String getNode() {
    java.lang.Object ref = node_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      node_ = s;
      return s;
    }
  }
  /**
   * <code>string node = 3;</code>
   */
  public com.google.protobuf.ByteString
      getNodeBytes() {
    java.lang.Object ref = node_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      node_ = b;
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
    if (fileSize_ != 0L) {
      output.writeUInt64(1, fileSize_);
    }
    if (!getFileNameBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, fileName_);
    }
    if (!getNodeBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, node_);
    }
  }

  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (fileSize_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt64Size(1, fileSize_);
    }
    if (!getFileNameBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, fileName_);
    }
    if (!getNodeBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, node_);
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
    if (!(obj instanceof Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest)) {
      return super.equals(obj);
    }
    Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest other = (Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest) obj;

    boolean result = true;
    result = result && (getFileSize()
        == other.getFileSize());
    result = result && getFileName()
        .equals(other.getFileName());
    result = result && getNode()
        .equals(other.getNode());
    return result;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + FILE_SIZE_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getFileSize());
    hash = (37 * hash) + FILE_NAME_FIELD_NUMBER;
    hash = (53 * hash) + getFileName().hashCode();
    hash = (37 * hash) + NODE_FIELD_NUMBER;
    hash = (53 * hash) + getNode().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parseFrom(
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
  public static Builder newBuilder(Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest prototype) {
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
   * Protobuf type {@code Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest)
      Catalyst.Protocol.Rpc.Node.AddFileToDfsRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_AddFileToDfsRequest_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_AddFileToDfsRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.class, Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.Builder.class);
    }

    // Construct using Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.newBuilder()
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
      fileSize_ = 0L;

      fileName_ = "";

      node_ = "";

      return this;
    }

    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return Catalyst.Protocol.Rpc.Node.Rpc.internal_static_Catalyst_Protocol_Rpc_Node_AddFileToDfsRequest_descriptor;
    }

    public Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest getDefaultInstanceForType() {
      return Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.getDefaultInstance();
    }

    public Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest build() {
      Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    public Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest buildPartial() {
      Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest result = new Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest(this);
      result.fileSize_ = fileSize_;
      result.fileName_ = fileName_;
      result.node_ = node_;
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
      if (other instanceof Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest) {
        return mergeFrom((Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest other) {
      if (other == Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest.getDefaultInstance()) return this;
      if (other.getFileSize() != 0L) {
        setFileSize(other.getFileSize());
      }
      if (!other.getFileName().isEmpty()) {
        fileName_ = other.fileName_;
        onChanged();
      }
      if (!other.getNode().isEmpty()) {
        node_ = other.node_;
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
      Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private long fileSize_ ;
    /**
     * <code>uint64 file_size = 1;</code>
     */
    public long getFileSize() {
      return fileSize_;
    }
    /**
     * <code>uint64 file_size = 1;</code>
     */
    public Builder setFileSize(long value) {
      
      fileSize_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint64 file_size = 1;</code>
     */
    public Builder clearFileSize() {
      
      fileSize_ = 0L;
      onChanged();
      return this;
    }

    private java.lang.Object fileName_ = "";
    /**
     * <code>string file_name = 2;</code>
     */
    public java.lang.String getFileName() {
      java.lang.Object ref = fileName_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        fileName_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string file_name = 2;</code>
     */
    public com.google.protobuf.ByteString
        getFileNameBytes() {
      java.lang.Object ref = fileName_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        fileName_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string file_name = 2;</code>
     */
    public Builder setFileName(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      fileName_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string file_name = 2;</code>
     */
    public Builder clearFileName() {
      
      fileName_ = getDefaultInstance().getFileName();
      onChanged();
      return this;
    }
    /**
     * <code>string file_name = 2;</code>
     */
    public Builder setFileNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      fileName_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object node_ = "";
    /**
     * <code>string node = 3;</code>
     */
    public java.lang.String getNode() {
      java.lang.Object ref = node_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        node_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string node = 3;</code>
     */
    public com.google.protobuf.ByteString
        getNodeBytes() {
      java.lang.Object ref = node_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        node_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string node = 3;</code>
     */
    public Builder setNode(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      node_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string node = 3;</code>
     */
    public Builder clearNode() {
      
      node_ = getDefaultInstance().getNode();
      onChanged();
      return this;
    }
    /**
     * <code>string node = 3;</code>
     */
    public Builder setNodeBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      node_ = value;
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


    // @@protoc_insertion_point(builder_scope:Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest)
  }

  // @@protoc_insertion_point(class_scope:Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest)
  private static final Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest();
  }

  public static Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<AddFileToDfsRequest>
      PARSER = new com.google.protobuf.AbstractParser<AddFileToDfsRequest>() {
    public AddFileToDfsRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
        return new AddFileToDfsRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<AddFileToDfsRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<AddFileToDfsRequest> getParserForType() {
    return PARSER;
  }

  public Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

