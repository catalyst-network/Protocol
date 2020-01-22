// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Network.proto

#ifndef PROTOBUF_Network_2eproto__INCLUDED
#define PROTOBUF_Network_2eproto__INCLUDED

#include <string>

#include <google/protobuf/stubs/common.h>

#if GOOGLE_PROTOBUF_VERSION < 3002000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please update
#error your headers.
#endif
#if 3002000 < GOOGLE_PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/generated_enum_reflection.h>
// @@protoc_insertion_point(includes)
namespace Catalyst {
namespace Protocol {
namespace Network {
}  // namespace Network
}  // namespace Protocol
}  // namespace Catalyst

namespace Catalyst {
namespace Protocol {
namespace Network {

namespace protobuf_Network_2eproto {
// Internal implementation detail -- do not call these.
struct TableStruct {
  static const ::google::protobuf::uint32 offsets[];
  static void InitDefaultsImpl();
  static void Shutdown();
};
void AddDescriptors();
void InitDefaults();
}  // namespace protobuf_Network_2eproto

enum NetworkType {
  NETWORK_TYPE_UNKNOWN = 0,
  MAINNET = 1,
  DEVNET = 2,
  TESTNET = 3,
  NetworkType_INT_MIN_SENTINEL_DO_NOT_USE_ = ::google::protobuf::kint32min,
  NetworkType_INT_MAX_SENTINEL_DO_NOT_USE_ = ::google::protobuf::kint32max
};
bool NetworkType_IsValid(int value);
const NetworkType NetworkType_MIN = NETWORK_TYPE_UNKNOWN;
const NetworkType NetworkType_MAX = TESTNET;
const int NetworkType_ARRAYSIZE = NetworkType_MAX + 1;

const ::google::protobuf::EnumDescriptor* NetworkType_descriptor();
inline const ::std::string& NetworkType_Name(NetworkType value) {
  return ::google::protobuf::internal::NameOfEnum(
    NetworkType_descriptor(), value);
}
inline bool NetworkType_Parse(
    const ::std::string& name, NetworkType* value) {
  return ::google::protobuf::internal::ParseNamedEnum<NetworkType>(
    NetworkType_descriptor(), name, value);
}
// ===================================================================


// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)


}  // namespace Network
}  // namespace Protocol
}  // namespace Catalyst

#ifndef SWIG
namespace google {
namespace protobuf {

template <> struct is_proto_enum< ::Catalyst::Protocol::Network::NetworkType> : ::google::protobuf::internal::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::Catalyst::Protocol::Network::NetworkType>() {
  return ::Catalyst::Protocol::Network::NetworkType_descriptor();
}

}  // namespace protobuf
}  // namespace google
#endif  // SWIG

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_Network_2eproto__INCLUDED