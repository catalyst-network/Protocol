// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Cryptography.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "Cryptography.pb.h"

#include <algorithm>

#include <google/protobuf/stubs/common.h>
#include <google/protobuf/stubs/port.h>
#include <google/protobuf/stubs/once.h>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/wire_format_lite_inl.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)

namespace Catalyst {
namespace Protocol {
namespace Cryptography {
class SignatureDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<Signature> {
} _Signature_default_instance_;
class SigningContextDefaultTypeInternal : public ::google::protobuf::internal::ExplicitlyConstructed<SigningContext> {
} _SigningContext_default_instance_;

namespace protobuf_Cryptography_2eproto {


namespace {

::google::protobuf::Metadata file_level_metadata[2];
const ::google::protobuf::EnumDescriptor* file_level_enum_descriptors[2];

}  // namespace

const ::google::protobuf::uint32 TableStruct::offsets[] = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Signature, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Signature, signing_context_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Signature, raw_bytes_),
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(SigningContext, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(SigningContext, network_type_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(SigningContext, signature_type_),
};

static const ::google::protobuf::internal::MigrationSchema schemas[] = {
  { 0, -1, sizeof(Signature)},
  { 6, -1, sizeof(SigningContext)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&_Signature_default_instance_),
  reinterpret_cast<const ::google::protobuf::Message*>(&_SigningContext_default_instance_),
};

namespace {

void protobuf_AssignDescriptors() {
  AddDescriptors();
  ::google::protobuf::MessageFactory* factory = NULL;
  AssignDescriptors(
      "Cryptography.proto", schemas, file_default_instances, TableStruct::offsets, factory,
      file_level_metadata, file_level_enum_descriptors, NULL);
}

void protobuf_AssignDescriptorsOnce() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &protobuf_AssignDescriptors);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::internal::RegisterAllTypes(file_level_metadata, 2);
}

}  // namespace

void TableStruct::Shutdown() {
  _Signature_default_instance_.Shutdown();
  delete file_level_metadata[0].reflection;
  _SigningContext_default_instance_.Shutdown();
  delete file_level_metadata[1].reflection;
}

void TableStruct::InitDefaultsImpl() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::internal::InitProtobufDefaults();
  ::Catalyst::Protocol::Network::protobuf_Network_2eproto::InitDefaults();
  _Signature_default_instance_.DefaultConstruct();
  _SigningContext_default_instance_.DefaultConstruct();
  _Signature_default_instance_.get_mutable()->signing_context_ = const_cast< ::Catalyst::Protocol::Cryptography::SigningContext*>(
      ::Catalyst::Protocol::Cryptography::SigningContext::internal_default_instance());
}

void InitDefaults() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &TableStruct::InitDefaultsImpl);
}
void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] = {
      "\n\022Cryptography.proto\022\036Catalyst.Protocol."
      "Cryptography\032\rNetwork.proto\"g\n\tSignature"
      "\022G\n\017signing_context\030\001 \001(\0132..Catalyst.Pro"
      "tocol.Cryptography.SigningContext\022\021\n\traw"
      "_bytes\030\002 \001(\014\"\225\001\n\016SigningContext\022<\n\014netwo"
      "rk_type\030\001 \001(\0162&.Catalyst.Protocol.Networ"
      "k.NetworkType\022E\n\016signature_type\030\002 \001(\0162-."
      "Catalyst.Protocol.Cryptography.Signature"
      "Type*\206\001\n\rSignatureType\022\032\n\026SIGNATURE_TYPE"
      "_UNKNOWN\020\000\022\026\n\022TRANSACTION_PUBLIC\020\001\022\034\n\030TR"
      "ANSACTION_CONFIDENTIAL\020\002\022\020\n\014PROTOCOL_RPC"
      "\020\003\022\021\n\rPROTOCOL_PEER\020\004*\272\001\n\tErrorCode\022\026\n\022E"
      "RROR_CODE_UNKNOWN\020\000\022\025\n\021INVALID_SIGNATURE"
      "\020\001\022\026\n\022INVALID_PUBLIC_KEY\020\002\022\027\n\023INVALID_PR"
      "IVATE_KEY\020\003\022\"\n\036SIGNATURE_VERIFICATION_FA"
      "ILURE\020\004\022\032\n\026INVALID_CONTEXT_LENGTH\020\005\022\r\n\010N"
      "O_ERROR\020\242\003B\002P\001b\006proto3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 662);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "Cryptography.proto", &protobuf_RegisterTypes);
  ::Catalyst::Protocol::Network::protobuf_Network_2eproto::AddDescriptors();
  ::google::protobuf::internal::OnShutdown(&TableStruct::Shutdown);
}

void AddDescriptors() {
  static GOOGLE_PROTOBUF_DECLARE_ONCE(once);
  ::google::protobuf::GoogleOnceInit(&once, &AddDescriptorsImpl);
}
// Force AddDescriptors() to be called at static initialization time.
struct StaticDescriptorInitializer {
  StaticDescriptorInitializer() {
    AddDescriptors();
  }
} static_descriptor_initializer;

}  // namespace protobuf_Cryptography_2eproto

const ::google::protobuf::EnumDescriptor* SignatureType_descriptor() {
  protobuf_Cryptography_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_Cryptography_2eproto::file_level_enum_descriptors[0];
}
bool SignatureType_IsValid(int value) {
  switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    default:
      return false;
  }
}

const ::google::protobuf::EnumDescriptor* ErrorCode_descriptor() {
  protobuf_Cryptography_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_Cryptography_2eproto::file_level_enum_descriptors[1];
}
bool ErrorCode_IsValid(int value) {
  switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 418:
      return true;
    default:
      return false;
  }
}


// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int Signature::kSigningContextFieldNumber;
const int Signature::kRawBytesFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

Signature::Signature()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_Cryptography_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:Catalyst.Protocol.Cryptography.Signature)
}
Signature::Signature(const Signature& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  raw_bytes_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.raw_bytes().size() > 0) {
    raw_bytes_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.raw_bytes_);
  }
  if (from.has_signing_context()) {
    signing_context_ = new ::Catalyst::Protocol::Cryptography::SigningContext(*from.signing_context_);
  } else {
    signing_context_ = NULL;
  }
  // @@protoc_insertion_point(copy_constructor:Catalyst.Protocol.Cryptography.Signature)
}

void Signature::SharedCtor() {
  raw_bytes_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  signing_context_ = NULL;
  _cached_size_ = 0;
}

Signature::~Signature() {
  // @@protoc_insertion_point(destructor:Catalyst.Protocol.Cryptography.Signature)
  SharedDtor();
}

void Signature::SharedDtor() {
  raw_bytes_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (this != internal_default_instance()) {
    delete signing_context_;
  }
}

void Signature::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* Signature::descriptor() {
  protobuf_Cryptography_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_Cryptography_2eproto::file_level_metadata[0].descriptor;
}

const Signature& Signature::default_instance() {
  protobuf_Cryptography_2eproto::InitDefaults();
  return *internal_default_instance();
}

Signature* Signature::New(::google::protobuf::Arena* arena) const {
  Signature* n = new Signature;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void Signature::Clear() {
// @@protoc_insertion_point(message_clear_start:Catalyst.Protocol.Cryptography.Signature)
  raw_bytes_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (GetArenaNoVirtual() == NULL && signing_context_ != NULL) {
    delete signing_context_;
  }
  signing_context_ = NULL;
}

bool Signature::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:Catalyst.Protocol.Cryptography.Signature)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // .Catalyst.Protocol.Cryptography.SigningContext signing_context = 1;
      case 1: {
        if (tag == 10u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_signing_context()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // bytes raw_bytes = 2;
      case 2: {
        if (tag == 18u) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadBytes(
                input, this->mutable_raw_bytes()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0 ||
            ::google::protobuf::internal::WireFormatLite::GetTagWireType(tag) ==
            ::google::protobuf::internal::WireFormatLite::WIRETYPE_END_GROUP) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormatLite::SkipField(input, tag));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:Catalyst.Protocol.Cryptography.Signature)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:Catalyst.Protocol.Cryptography.Signature)
  return false;
#undef DO_
}

void Signature::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:Catalyst.Protocol.Cryptography.Signature)
  // .Catalyst.Protocol.Cryptography.SigningContext signing_context = 1;
  if (this->has_signing_context()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      1, *this->signing_context_, output);
  }

  // bytes raw_bytes = 2;
  if (this->raw_bytes().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::WriteBytesMaybeAliased(
      2, this->raw_bytes(), output);
  }

  // @@protoc_insertion_point(serialize_end:Catalyst.Protocol.Cryptography.Signature)
}

::google::protobuf::uint8* Signature::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:Catalyst.Protocol.Cryptography.Signature)
  // .Catalyst.Protocol.Cryptography.SigningContext signing_context = 1;
  if (this->has_signing_context()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        1, *this->signing_context_, false, target);
  }

  // bytes raw_bytes = 2;
  if (this->raw_bytes().size() > 0) {
    target =
      ::google::protobuf::internal::WireFormatLite::WriteBytesToArray(
        2, this->raw_bytes(), target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:Catalyst.Protocol.Cryptography.Signature)
  return target;
}

size_t Signature::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:Catalyst.Protocol.Cryptography.Signature)
  size_t total_size = 0;

  // bytes raw_bytes = 2;
  if (this->raw_bytes().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::BytesSize(
        this->raw_bytes());
  }

  // .Catalyst.Protocol.Cryptography.SigningContext signing_context = 1;
  if (this->has_signing_context()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        *this->signing_context_);
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void Signature::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:Catalyst.Protocol.Cryptography.Signature)
  GOOGLE_DCHECK_NE(&from, this);
  const Signature* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const Signature>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:Catalyst.Protocol.Cryptography.Signature)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:Catalyst.Protocol.Cryptography.Signature)
    MergeFrom(*source);
  }
}

void Signature::MergeFrom(const Signature& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:Catalyst.Protocol.Cryptography.Signature)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.raw_bytes().size() > 0) {

    raw_bytes_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.raw_bytes_);
  }
  if (from.has_signing_context()) {
    mutable_signing_context()->::Catalyst::Protocol::Cryptography::SigningContext::MergeFrom(from.signing_context());
  }
}

void Signature::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:Catalyst.Protocol.Cryptography.Signature)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Signature::CopyFrom(const Signature& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:Catalyst.Protocol.Cryptography.Signature)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Signature::IsInitialized() const {
  return true;
}

void Signature::Swap(Signature* other) {
  if (other == this) return;
  InternalSwap(other);
}
void Signature::InternalSwap(Signature* other) {
  raw_bytes_.Swap(&other->raw_bytes_);
  std::swap(signing_context_, other->signing_context_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata Signature::GetMetadata() const {
  protobuf_Cryptography_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_Cryptography_2eproto::file_level_metadata[0];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// Signature

// .Catalyst.Protocol.Cryptography.SigningContext signing_context = 1;
bool Signature::has_signing_context() const {
  return this != internal_default_instance() && signing_context_ != NULL;
}
void Signature::clear_signing_context() {
  if (GetArenaNoVirtual() == NULL && signing_context_ != NULL) delete signing_context_;
  signing_context_ = NULL;
}
const ::Catalyst::Protocol::Cryptography::SigningContext& Signature::signing_context() const {
  // @@protoc_insertion_point(field_get:Catalyst.Protocol.Cryptography.Signature.signing_context)
  return signing_context_ != NULL ? *signing_context_
                         : *::Catalyst::Protocol::Cryptography::SigningContext::internal_default_instance();
}
::Catalyst::Protocol::Cryptography::SigningContext* Signature::mutable_signing_context() {
  
  if (signing_context_ == NULL) {
    signing_context_ = new ::Catalyst::Protocol::Cryptography::SigningContext;
  }
  // @@protoc_insertion_point(field_mutable:Catalyst.Protocol.Cryptography.Signature.signing_context)
  return signing_context_;
}
::Catalyst::Protocol::Cryptography::SigningContext* Signature::release_signing_context() {
  // @@protoc_insertion_point(field_release:Catalyst.Protocol.Cryptography.Signature.signing_context)
  
  ::Catalyst::Protocol::Cryptography::SigningContext* temp = signing_context_;
  signing_context_ = NULL;
  return temp;
}
void Signature::set_allocated_signing_context(::Catalyst::Protocol::Cryptography::SigningContext* signing_context) {
  delete signing_context_;
  signing_context_ = signing_context;
  if (signing_context) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:Catalyst.Protocol.Cryptography.Signature.signing_context)
}

// bytes raw_bytes = 2;
void Signature::clear_raw_bytes() {
  raw_bytes_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
const ::std::string& Signature::raw_bytes() const {
  // @@protoc_insertion_point(field_get:Catalyst.Protocol.Cryptography.Signature.raw_bytes)
  return raw_bytes_.GetNoArena();
}
void Signature::set_raw_bytes(const ::std::string& value) {
  
  raw_bytes_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:Catalyst.Protocol.Cryptography.Signature.raw_bytes)
}
#if LANG_CXX11
void Signature::set_raw_bytes(::std::string&& value) {
  
  raw_bytes_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:Catalyst.Protocol.Cryptography.Signature.raw_bytes)
}
#endif
void Signature::set_raw_bytes(const char* value) {
  
  raw_bytes_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:Catalyst.Protocol.Cryptography.Signature.raw_bytes)
}
void Signature::set_raw_bytes(const void* value, size_t size) {
  
  raw_bytes_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:Catalyst.Protocol.Cryptography.Signature.raw_bytes)
}
::std::string* Signature::mutable_raw_bytes() {
  
  // @@protoc_insertion_point(field_mutable:Catalyst.Protocol.Cryptography.Signature.raw_bytes)
  return raw_bytes_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
::std::string* Signature::release_raw_bytes() {
  // @@protoc_insertion_point(field_release:Catalyst.Protocol.Cryptography.Signature.raw_bytes)
  
  return raw_bytes_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
void Signature::set_allocated_raw_bytes(::std::string* raw_bytes) {
  if (raw_bytes != NULL) {
    
  } else {
    
  }
  raw_bytes_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), raw_bytes);
  // @@protoc_insertion_point(field_set_allocated:Catalyst.Protocol.Cryptography.Signature.raw_bytes)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int SigningContext::kNetworkTypeFieldNumber;
const int SigningContext::kSignatureTypeFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

SigningContext::SigningContext()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  if (GOOGLE_PREDICT_TRUE(this != internal_default_instance())) {
    protobuf_Cryptography_2eproto::InitDefaults();
  }
  SharedCtor();
  // @@protoc_insertion_point(constructor:Catalyst.Protocol.Cryptography.SigningContext)
}
SigningContext::SigningContext(const SigningContext& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      _cached_size_(0) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::memcpy(&network_type_, &from.network_type_,
    reinterpret_cast<char*>(&signature_type_) -
    reinterpret_cast<char*>(&network_type_) + sizeof(signature_type_));
  // @@protoc_insertion_point(copy_constructor:Catalyst.Protocol.Cryptography.SigningContext)
}

void SigningContext::SharedCtor() {
  ::memset(&network_type_, 0, reinterpret_cast<char*>(&signature_type_) -
    reinterpret_cast<char*>(&network_type_) + sizeof(signature_type_));
  _cached_size_ = 0;
}

SigningContext::~SigningContext() {
  // @@protoc_insertion_point(destructor:Catalyst.Protocol.Cryptography.SigningContext)
  SharedDtor();
}

void SigningContext::SharedDtor() {
}

void SigningContext::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* SigningContext::descriptor() {
  protobuf_Cryptography_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_Cryptography_2eproto::file_level_metadata[1].descriptor;
}

const SigningContext& SigningContext::default_instance() {
  protobuf_Cryptography_2eproto::InitDefaults();
  return *internal_default_instance();
}

SigningContext* SigningContext::New(::google::protobuf::Arena* arena) const {
  SigningContext* n = new SigningContext;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void SigningContext::Clear() {
// @@protoc_insertion_point(message_clear_start:Catalyst.Protocol.Cryptography.SigningContext)
  ::memset(&network_type_, 0, reinterpret_cast<char*>(&signature_type_) -
    reinterpret_cast<char*>(&network_type_) + sizeof(signature_type_));
}

bool SigningContext::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:Catalyst.Protocol.Cryptography.SigningContext)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // .Catalyst.Protocol.Network.NetworkType network_type = 1;
      case 1: {
        if (tag == 8u) {
          int value;
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   int, ::google::protobuf::internal::WireFormatLite::TYPE_ENUM>(
                 input, &value)));
          set_network_type(static_cast< ::Catalyst::Protocol::Network::NetworkType >(value));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // .Catalyst.Protocol.Cryptography.SignatureType signature_type = 2;
      case 2: {
        if (tag == 16u) {
          int value;
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   int, ::google::protobuf::internal::WireFormatLite::TYPE_ENUM>(
                 input, &value)));
          set_signature_type(static_cast< ::Catalyst::Protocol::Cryptography::SignatureType >(value));
        } else {
          goto handle_unusual;
        }
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0 ||
            ::google::protobuf::internal::WireFormatLite::GetTagWireType(tag) ==
            ::google::protobuf::internal::WireFormatLite::WIRETYPE_END_GROUP) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormatLite::SkipField(input, tag));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:Catalyst.Protocol.Cryptography.SigningContext)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:Catalyst.Protocol.Cryptography.SigningContext)
  return false;
#undef DO_
}

void SigningContext::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:Catalyst.Protocol.Cryptography.SigningContext)
  // .Catalyst.Protocol.Network.NetworkType network_type = 1;
  if (this->network_type() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteEnum(
      1, this->network_type(), output);
  }

  // .Catalyst.Protocol.Cryptography.SignatureType signature_type = 2;
  if (this->signature_type() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteEnum(
      2, this->signature_type(), output);
  }

  // @@protoc_insertion_point(serialize_end:Catalyst.Protocol.Cryptography.SigningContext)
}

::google::protobuf::uint8* SigningContext::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic;  // Unused
  // @@protoc_insertion_point(serialize_to_array_start:Catalyst.Protocol.Cryptography.SigningContext)
  // .Catalyst.Protocol.Network.NetworkType network_type = 1;
  if (this->network_type() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteEnumToArray(
      1, this->network_type(), target);
  }

  // .Catalyst.Protocol.Cryptography.SignatureType signature_type = 2;
  if (this->signature_type() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteEnumToArray(
      2, this->signature_type(), target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:Catalyst.Protocol.Cryptography.SigningContext)
  return target;
}

size_t SigningContext::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:Catalyst.Protocol.Cryptography.SigningContext)
  size_t total_size = 0;

  // .Catalyst.Protocol.Network.NetworkType network_type = 1;
  if (this->network_type() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::EnumSize(this->network_type());
  }

  // .Catalyst.Protocol.Cryptography.SignatureType signature_type = 2;
  if (this->signature_type() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::EnumSize(this->signature_type());
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = cached_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void SigningContext::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:Catalyst.Protocol.Cryptography.SigningContext)
  GOOGLE_DCHECK_NE(&from, this);
  const SigningContext* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const SigningContext>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:Catalyst.Protocol.Cryptography.SigningContext)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:Catalyst.Protocol.Cryptography.SigningContext)
    MergeFrom(*source);
  }
}

void SigningContext::MergeFrom(const SigningContext& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:Catalyst.Protocol.Cryptography.SigningContext)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.network_type() != 0) {
    set_network_type(from.network_type());
  }
  if (from.signature_type() != 0) {
    set_signature_type(from.signature_type());
  }
}

void SigningContext::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:Catalyst.Protocol.Cryptography.SigningContext)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void SigningContext::CopyFrom(const SigningContext& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:Catalyst.Protocol.Cryptography.SigningContext)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool SigningContext::IsInitialized() const {
  return true;
}

void SigningContext::Swap(SigningContext* other) {
  if (other == this) return;
  InternalSwap(other);
}
void SigningContext::InternalSwap(SigningContext* other) {
  std::swap(network_type_, other->network_type_);
  std::swap(signature_type_, other->signature_type_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata SigningContext::GetMetadata() const {
  protobuf_Cryptography_2eproto::protobuf_AssignDescriptorsOnce();
  return protobuf_Cryptography_2eproto::file_level_metadata[1];
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// SigningContext

// .Catalyst.Protocol.Network.NetworkType network_type = 1;
void SigningContext::clear_network_type() {
  network_type_ = 0;
}
::Catalyst::Protocol::Network::NetworkType SigningContext::network_type() const {
  // @@protoc_insertion_point(field_get:Catalyst.Protocol.Cryptography.SigningContext.network_type)
  return static_cast< ::Catalyst::Protocol::Network::NetworkType >(network_type_);
}
void SigningContext::set_network_type(::Catalyst::Protocol::Network::NetworkType value) {
  
  network_type_ = value;
  // @@protoc_insertion_point(field_set:Catalyst.Protocol.Cryptography.SigningContext.network_type)
}

// .Catalyst.Protocol.Cryptography.SignatureType signature_type = 2;
void SigningContext::clear_signature_type() {
  signature_type_ = 0;
}
::Catalyst::Protocol::Cryptography::SignatureType SigningContext::signature_type() const {
  // @@protoc_insertion_point(field_get:Catalyst.Protocol.Cryptography.SigningContext.signature_type)
  return static_cast< ::Catalyst::Protocol::Cryptography::SignatureType >(signature_type_);
}
void SigningContext::set_signature_type(::Catalyst::Protocol::Cryptography::SignatureType value) {
  
  signature_type_ = value;
  // @@protoc_insertion_point(field_set:Catalyst.Protocol.Cryptography.SigningContext.signature_type)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace Cryptography
}  // namespace Protocol
}  // namespace Catalyst

// @@protoc_insertion_point(global_scope)
