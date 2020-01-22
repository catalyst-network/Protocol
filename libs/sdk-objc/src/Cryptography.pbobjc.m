// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Cryptography.proto

// This CPP symbol can be defined to use imports that match up to the framework
// imports needed when using CocoaPods.
#if !defined(GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS)
 #define GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS 0
#endif

#if GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS
 #import <Protobuf/GPBProtocolBuffers_RuntimeSupport.h>
#else
 #import "GPBProtocolBuffers_RuntimeSupport.h"
#endif

 #import "Cryptography.pbobjc.h"
 #import "Network.pbobjc.h"
// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

#pragma mark - CryptographyRoot

@implementation CryptographyRoot

// No extensions in the file and none of the imports (direct or indirect)
// defined extensions, so no need to generate +extensionRegistry.

@end

#pragma mark - CryptographyRoot_FileDescriptor

static GPBFileDescriptor *CryptographyRoot_FileDescriptor(void) {
  // This is called by +initialize so there is no need to worry
  // about thread safety of the singleton.
  static GPBFileDescriptor *descriptor = NULL;
  if (!descriptor) {
    GPB_DEBUG_CHECK_RUNTIME_VERSIONS();
    descriptor = [[GPBFileDescriptor alloc] initWithPackage:@"Catalyst.Protocol.Cryptography"
                                                     syntax:GPBFileSyntaxProto3];
  }
  return descriptor;
}

#pragma mark - Enum SignatureType

GPBEnumDescriptor *SignatureType_EnumDescriptor(void) {
  static GPBEnumDescriptor *descriptor = NULL;
  if (!descriptor) {
    static const char *valueNames =
        "SignatureTypeUnknown\000TransactionPublic\000T"
        "ransactionConfidential\000ProtocolRpc\000Proto"
        "colPeer\000";
    static const int32_t values[] = {
        SignatureType_SignatureTypeUnknown,
        SignatureType_TransactionPublic,
        SignatureType_TransactionConfidential,
        SignatureType_ProtocolRpc,
        SignatureType_ProtocolPeer,
    };
    GPBEnumDescriptor *worker =
        [GPBEnumDescriptor allocDescriptorForName:GPBNSStringifySymbol(SignatureType)
                                       valueNames:valueNames
                                           values:values
                                            count:(uint32_t)(sizeof(values) / sizeof(int32_t))
                                     enumVerifier:SignatureType_IsValidValue];
    if (!OSAtomicCompareAndSwapPtrBarrier(nil, worker, (void * volatile *)&descriptor)) {
      [worker release];
    }
  }
  return descriptor;
}

BOOL SignatureType_IsValidValue(int32_t value__) {
  switch (value__) {
    case SignatureType_SignatureTypeUnknown:
    case SignatureType_TransactionPublic:
    case SignatureType_TransactionConfidential:
    case SignatureType_ProtocolRpc:
    case SignatureType_ProtocolPeer:
      return YES;
    default:
      return NO;
  }
}

#pragma mark - Enum ErrorCode

GPBEnumDescriptor *ErrorCode_EnumDescriptor(void) {
  static GPBEnumDescriptor *descriptor = NULL;
  if (!descriptor) {
    static const char *valueNames =
        "ErrorCodeUnknown\000InvalidSignature\000Invali"
        "dPublicKey\000InvalidPrivateKey\000SignatureVe"
        "rificationFailure\000InvalidContextLength\000N"
        "oError\000";
    static const int32_t values[] = {
        ErrorCode_ErrorCodeUnknown,
        ErrorCode_InvalidSignature,
        ErrorCode_InvalidPublicKey,
        ErrorCode_InvalidPrivateKey,
        ErrorCode_SignatureVerificationFailure,
        ErrorCode_InvalidContextLength,
        ErrorCode_NoError,
    };
    GPBEnumDescriptor *worker =
        [GPBEnumDescriptor allocDescriptorForName:GPBNSStringifySymbol(ErrorCode)
                                       valueNames:valueNames
                                           values:values
                                            count:(uint32_t)(sizeof(values) / sizeof(int32_t))
                                     enumVerifier:ErrorCode_IsValidValue];
    if (!OSAtomicCompareAndSwapPtrBarrier(nil, worker, (void * volatile *)&descriptor)) {
      [worker release];
    }
  }
  return descriptor;
}

BOOL ErrorCode_IsValidValue(int32_t value__) {
  switch (value__) {
    case ErrorCode_ErrorCodeUnknown:
    case ErrorCode_InvalidSignature:
    case ErrorCode_InvalidPublicKey:
    case ErrorCode_InvalidPrivateKey:
    case ErrorCode_SignatureVerificationFailure:
    case ErrorCode_InvalidContextLength:
    case ErrorCode_NoError:
      return YES;
    default:
      return NO;
  }
}

#pragma mark - Signature

@implementation Signature

@dynamic hasSigningContext, signingContext;
@dynamic rawBytes;

typedef struct Signature__storage_ {
  uint32_t _has_storage_[1];
  SigningContext *signingContext;
  NSData *rawBytes;
} Signature__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "signingContext",
        .dataTypeSpecific.className = GPBStringifySymbol(SigningContext),
        .number = Signature_FieldNumber_SigningContext,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(Signature__storage_, signingContext),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "rawBytes",
        .dataTypeSpecific.className = NULL,
        .number = Signature_FieldNumber_RawBytes,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(Signature__storage_, rawBytes),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeBytes,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[Signature class]
                                     rootClass:[CryptographyRoot class]
                                          file:CryptographyRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(Signature__storage_)
                                         flags:GPBDescriptorInitializationFlag_None];
    NSAssert(descriptor == nil, @"Startup recursed!");
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

#pragma mark - SigningContext

@implementation SigningContext

@dynamic networkType;
@dynamic signatureType;

typedef struct SigningContext__storage_ {
  uint32_t _has_storage_[1];
  NetworkType networkType;
  SignatureType signatureType;
} SigningContext__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "networkType",
        .dataTypeSpecific.enumDescFunc = NetworkType_EnumDescriptor,
        .number = SigningContext_FieldNumber_NetworkType,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(SigningContext__storage_, networkType),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldHasEnumDescriptor),
        .dataType = GPBDataTypeEnum,
      },
      {
        .name = "signatureType",
        .dataTypeSpecific.enumDescFunc = SignatureType_EnumDescriptor,
        .number = SigningContext_FieldNumber_SignatureType,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(SigningContext__storage_, signatureType),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldHasEnumDescriptor),
        .dataType = GPBDataTypeEnum,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[SigningContext class]
                                     rootClass:[CryptographyRoot class]
                                          file:CryptographyRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(SigningContext__storage_)
                                         flags:GPBDescriptorInitializationFlag_None];
    NSAssert(descriptor == nil, @"Startup recursed!");
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end

int32_t SigningContext_NetworkType_RawValue(SigningContext *message) {
  GPBDescriptor *descriptor = [SigningContext descriptor];
  GPBFieldDescriptor *field = [descriptor fieldWithNumber:SigningContext_FieldNumber_NetworkType];
  return GPBGetMessageInt32Field(message, field);
}

void SetSigningContext_NetworkType_RawValue(SigningContext *message, int32_t value) {
  GPBDescriptor *descriptor = [SigningContext descriptor];
  GPBFieldDescriptor *field = [descriptor fieldWithNumber:SigningContext_FieldNumber_NetworkType];
  GPBSetInt32IvarWithFieldInternal(message, field, value, descriptor.file.syntax);
}

int32_t SigningContext_SignatureType_RawValue(SigningContext *message) {
  GPBDescriptor *descriptor = [SigningContext descriptor];
  GPBFieldDescriptor *field = [descriptor fieldWithNumber:SigningContext_FieldNumber_SignatureType];
  return GPBGetMessageInt32Field(message, field);
}

void SetSigningContext_SignatureType_RawValue(SigningContext *message, int32_t value) {
  GPBDescriptor *descriptor = [SigningContext descriptor];
  GPBFieldDescriptor *field = [descriptor fieldWithNumber:SigningContext_FieldNumber_SignatureType];
  GPBSetInt32IvarWithFieldInternal(message, field, value, descriptor.file.syntax);
}


#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
