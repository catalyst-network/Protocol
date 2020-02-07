// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Wire.proto

// This CPP symbol can be defined to use imports that match up to the framework
// imports needed when using CocoaPods.
#if !defined(GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS)
 #define GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS 0
#endif

#if GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS
 #import <Protobuf/GPBProtocolBuffers.h>
#else
 #import "GPBProtocolBuffers.h"
#endif

#if GOOGLE_PROTOBUF_OBJC_VERSION < 30002
#error This file was generated by a newer version of protoc which is incompatible with your Protocol Buffer library sources.
#endif
#if 30002 < GOOGLE_PROTOBUF_OBJC_MIN_SUPPORTED_VERSION
#error This file was generated by an older version of protoc which is incompatible with your Protocol Buffer library sources.
#endif

// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

CF_EXTERN_C_BEGIN

@class CandidateDeltaBroadcast;
@class PeerId;
@class PublicEntry;
@class Signature;

NS_ASSUME_NONNULL_BEGIN

#pragma mark - WireRoot

/**
 * Exposes the extension registry for this file.
 *
 * The base class provides:
 * @code
 *   + (GPBExtensionRegistry *)extensionRegistry;
 * @endcode
 * which is a @c GPBExtensionRegistry that includes all the extensions defined by
 * this file and all files that it depends on.
 **/
@interface WireRoot : GPBRootObject
@end

#pragma mark - ProtocolErrorMessage

typedef GPB_ENUM(ProtocolErrorMessage_FieldNumber) {
  ProtocolErrorMessage_FieldNumber_Signature = 1,
  ProtocolErrorMessage_FieldNumber_PeerId = 2,
  ProtocolErrorMessage_FieldNumber_CorrelationId = 3,
  ProtocolErrorMessage_FieldNumber_Code = 4,
};

/**
 * *
 * Provides a network error message, for when a node cant send/ build a valid response
 **/
@interface ProtocolErrorMessage : GPBMessage

@property(nonatomic, readwrite, strong, null_resettable) Signature *signature;
/** Test to see if @c signature has been set. */
@property(nonatomic, readwrite) BOOL hasSignature;

@property(nonatomic, readwrite, strong, null_resettable) PeerId *peerId;
/** Test to see if @c peerId has been set. */
@property(nonatomic, readwrite) BOOL hasPeerId;

@property(nonatomic, readwrite, copy, null_resettable) NSData *correlationId;

@property(nonatomic, readwrite) int32_t code;

@end

#pragma mark - ProtocolMessage

typedef GPB_ENUM(ProtocolMessage_FieldNumber) {
  ProtocolMessage_FieldNumber_PeerId = 1,
  ProtocolMessage_FieldNumber_CorrelationId = 2,
  ProtocolMessage_FieldNumber_TypeURL = 3,
  ProtocolMessage_FieldNumber_Value = 4,
  ProtocolMessage_FieldNumber_Signature = 5,
};

/**
 * *
 * A wrapper around the service message, the contents of service message should be signed by the sender to avoid tampering mid-transit.
 **/
@interface ProtocolMessage : GPBMessage

/** is the sender's peerId */
@property(nonatomic, readwrite, strong, null_resettable) PeerId *peerId;
/** Test to see if @c peerId has been set. */
@property(nonatomic, readwrite) BOOL hasPeerId;

/** is a 16 bytes guid used to match responses to their original requests */
@property(nonatomic, readwrite, copy, null_resettable) NSData *correlationId;

/** is the shortened protocol name of the message type being encoded in the value field (cf Any from protobuf WellKnownTypes) */
@property(nonatomic, readwrite, copy, null_resettable) NSString *typeURL;

/** is the actual value of the message being wrapped (cf Any from protobuf WellKnownTypes) */
@property(nonatomic, readwrite, copy, null_resettable) NSData *value;

/** is the ed25519ph context signature */
@property(nonatomic, readwrite, strong, null_resettable) Signature *signature;
/** Test to see if @c signature has been set. */
@property(nonatomic, readwrite) BOOL hasSignature;

@end

#pragma mark - TransactionBroadcast

typedef GPB_ENUM(TransactionBroadcast_FieldNumber) {
  TransactionBroadcast_FieldNumber_PublicEntry = 1,
};

@interface TransactionBroadcast : GPBMessage

/** 0 field for confidential transaction */
@property(nonatomic, readwrite, strong, null_resettable) PublicEntry *publicEntry;
/** Test to see if @c publicEntry has been set. */
@property(nonatomic, readwrite) BOOL hasPublicEntry;

@end

#pragma mark - CandidateDeltaBroadcast

typedef GPB_ENUM(CandidateDeltaBroadcast_FieldNumber) {
  CandidateDeltaBroadcast_FieldNumber_Hash_p = 1,
  CandidateDeltaBroadcast_FieldNumber_ProducerId = 2,
  CandidateDeltaBroadcast_FieldNumber_PreviousDeltaDfsHash = 3,
};

@interface CandidateDeltaBroadcast : GPBMessage

/** The hash computed for the current delta produced by ProducerId. This is meant to be used when voting for most popular hashes. */
@property(nonatomic, readwrite, copy, null_resettable) NSData *hash_p;

/** Identifier of the producer of the candidate. */
@property(nonatomic, readwrite, strong, null_resettable) PeerId *producerId;
/** Test to see if @c producerId has been set. */
@property(nonatomic, readwrite) BOOL hasProducerId;

/** The DFS address for the content of the delta preceding this candidate. */
@property(nonatomic, readwrite, copy, null_resettable) NSData *previousDeltaDfsHash;

@end

#pragma mark - FavouriteDeltaBroadcast

typedef GPB_ENUM(FavouriteDeltaBroadcast_FieldNumber) {
  FavouriteDeltaBroadcast_FieldNumber_Candidate = 1,
  FavouriteDeltaBroadcast_FieldNumber_VoterId = 2,
};

@interface FavouriteDeltaBroadcast : GPBMessage

/** The candidate favoured by the voter broadcasting this message. */
@property(nonatomic, readwrite, strong, null_resettable) CandidateDeltaBroadcast *candidate;
/** Test to see if @c candidate has been set. */
@property(nonatomic, readwrite) BOOL hasCandidate;

/** The PeerId of the participant submitting its vote to the network. */
@property(nonatomic, readwrite, strong, null_resettable) PeerId *voterId;
/** Test to see if @c voterId has been set. */
@property(nonatomic, readwrite) BOOL hasVoterId;

@end

#pragma mark - DeltaDfsHashBroadcast

typedef GPB_ENUM(DeltaDfsHashBroadcast_FieldNumber) {
  DeltaDfsHashBroadcast_FieldNumber_DeltaDfsHash = 1,
  DeltaDfsHashBroadcast_FieldNumber_PreviousDeltaDfsHash = 2,
};

@interface DeltaDfsHashBroadcast : GPBMessage

/** The DFS address at which the full content of the delta can be retrieved. */
@property(nonatomic, readwrite, copy, null_resettable) NSData *deltaDfsHash;

/** The DFS address for the content of the delta preceding this candidate. */
@property(nonatomic, readwrite, copy, null_resettable) NSData *previousDeltaDfsHash;

@end

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
