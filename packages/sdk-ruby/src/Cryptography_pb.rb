# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Cryptography.proto

require 'google/protobuf'

require 'Network_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "Catalyst.Protocol.Cryptography.Signature" do
    optional :signing_context, :message, 1, "Catalyst.Protocol.Cryptography.SigningContext"
    optional :raw_bytes, :bytes, 2
  end
  add_message "Catalyst.Protocol.Cryptography.SigningContext" do
    optional :network_type, :enum, 1, "Catalyst.Protocol.Network.NetworkType"
    optional :signature_type, :enum, 2, "Catalyst.Protocol.Cryptography.SignatureType"
  end
  add_message "Catalyst.Protocol.Cryptography.SignatureBatch" do
    repeated :signatures, :bytes, 1
    repeated :public_keys, :bytes, 2
    repeated :messages, :bytes, 3
    optional :context, :bytes, 4
  end
  add_enum "Catalyst.Protocol.Cryptography.SignatureType" do
    value :SIGNATURE_TYPE_UNKNOWN, 0
    value :TRANSACTION_PUBLIC, 1
    value :TRANSACTION_CONFIDENTIAL, 2
    value :PROTOCOL_RPC, 3
    value :PROTOCOL_PEER, 4
  end
  add_enum "Catalyst.Protocol.Cryptography.ErrorCode" do
    value :ERROR_CODE_UNKNOWN, 0
    value :INVALID_SIGNATURE, 1
    value :INVALID_PUBLIC_KEY, 2
    value :INVALID_PRIVATE_KEY, 3
    value :SIGNATURE_VERIFICATION_FAILURE, 4
    value :INVALID_CONTEXT_LENGTH, 5
    value :INVALID_BATCH_MESSAGE, 6
    value :ARRAYS_NOT_EQUAL_LENGTH, 7
    value :BATCH_VERIFICATION_FAILURE, 8
    value :NO_ERROR, 418
  end
end

module Catalyst
  module Protocol
    module Cryptography
      Signature = Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Cryptography.Signature").msgclass
      SigningContext = Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Cryptography.SigningContext").msgclass
      SignatureBatch = Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Cryptography.SignatureBatch").msgclass
      SignatureType = Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Cryptography.SignatureType").enummodule
      ErrorCode = Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Cryptography.ErrorCode").enummodule
    end
  end
end
