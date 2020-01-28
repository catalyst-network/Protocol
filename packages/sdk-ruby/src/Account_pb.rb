# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Account.proto

require 'google/protobuf'

require 'Cryptography_pb'
require 'Network_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("Account.proto", :syntax => :proto3) do
    add_message "Catalyst.Protocol.Account.Address" do
      optional :network_type, :enum, 1, "Catalyst.Protocol.Network.NetworkType"
      optional :account_type, :enum, 2, "Catalyst.Protocol.Account.AccountType"
      optional :public_key_hash, :bytes, 3
    end
    add_enum "Catalyst.Protocol.Account.AccountType" do
      value :ACCOUNT_TYPE_UNKNOWN, 0
      value :PUBLIC_ACCOUNT, 8
      value :CONFIDENTIAL_ACCOUNT, 16
      value :SMART_CONTRACT_ACCOUNT, 24
    end
  end
end

module Catalyst
  module Protocol
    module Account
      Address = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Account.Address").msgclass
      AccountType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Account.AccountType").enummodule
    end
  end
end
