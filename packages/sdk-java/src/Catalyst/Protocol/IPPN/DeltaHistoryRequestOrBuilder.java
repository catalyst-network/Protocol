// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: IPPN.proto

package Catalyst.Protocol.IPPN;

public interface DeltaHistoryRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:Catalyst.Protocol.IPPN.DeltaHistoryRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * The number of deltas CIDs a node requests.
   * </pre>
   *
   * <code>uint32 range = 1;</code>
   * @return The range.
   */
  int getRange();

  /**
   * <pre>
   * The given height the node wants the range from.
   * </pre>
   *
   * <code>uint32 height = 2;</code>
   * @return The height.
   */
  int getHeight();
}
