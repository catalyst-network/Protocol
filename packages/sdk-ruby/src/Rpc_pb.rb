# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Rpc.proto

require 'google/protobuf'

require 'Peer_pb'
require 'Cryptography_pb'
require 'Deltas_pb'
require 'Wire_pb'
require 'Transaction_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("Rpc.proto", :syntax => :proto3) do
    add_message "Catalyst.Protocol.Rpc.Node.VersionRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.VersionResponse" do
      optional :version, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetInfoRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetInfoResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.CreateWalletRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.CreateWalletResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.ListWalletRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.ListWalletResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.CreateAddressRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.CreateAddressResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetAddressRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetAddressResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.ListAddressRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.ListAddressResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.ValidateAddressRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.ValidateAddressResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetBalanceRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetBalanceResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest" do
      optional :transaction, :message, 1, "Catalyst.Protocol.Wire.TransactionBroadcast"
    end
    add_message "Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse" do
      optional :response_code, :enum, 1, "Catalyst.Protocol.Rpc.Node.ResponseCode"
    end
    add_message "Catalyst.Protocol.Rpc.Node.SendToRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SendToResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SendToFromRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SendToFromResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SendManyRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SendManyResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SendFromManyRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SendFromManyResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.AddNodeRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.AddNodeResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetPeerListRequest" do
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetPeerListResponse" do
      repeated :peers, :message, 1, "Catalyst.Protocol.Peer.PeerId"
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest" do
      optional :public_key, :bytes, 1
      optional :ip, :bytes, 2
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse" do
      optional :reputation, :int32, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest" do
      optional :public_key, :bytes, 1
      optional :ip, :bytes, 2
      optional :blacklist, :bool, 3
    end
    add_message "Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse" do
      optional :public_key, :bytes, 1
      optional :ip, :bytes, 2
      optional :blacklist, :bool, 3
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest" do
      optional :public_key, :bytes, 1
      optional :ip, :bytes, 2
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse" do
      repeated :peer_info, :message, 1, "Catalyst.Protocol.Peer.PeerInfo"
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetDeltaRequest" do
      optional :delta_dfs_hash, :bytes, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetDeltaResponse" do
      optional :delta, :message, 1, "Catalyst.Protocol.Deltas.Delta"
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetMempoolRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetMempoolResponse" do
      repeated :transactions, :message, 1, "Catalyst.Protocol.Transaction.PublicEntry"
    end
    add_message "Catalyst.Protocol.Rpc.Node.SignMessageRequest" do
      optional :message, :bytes, 1
      optional :key_id, :string, 2
      optional :signing_context, :message, 3, "Catalyst.Protocol.Cryptography.SigningContext"
    end
    add_message "Catalyst.Protocol.Rpc.Node.SignMessageResponse" do
      optional :signature, :bytes, 1
      optional :public_key, :bytes, 2
      optional :original_message, :bytes, 3
    end
    add_message "Catalyst.Protocol.Rpc.Node.VerifyMessageRequest" do
      optional :signature, :bytes, 1
      optional :public_key, :bytes, 2
      optional :message, :bytes, 3
      optional :signing_context, :message, 4, "Catalyst.Protocol.Cryptography.SigningContext"
    end
    add_message "Catalyst.Protocol.Rpc.Node.VerifyMessageResponse" do
      optional :is_signed_by_key, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.ServiceStatusRequest" do
      optional :query, :bool, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.ServiceStatusResponse" do
      optional :query, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest" do
      optional :file_size, :uint64, 1
      optional :file_name, :string, 2
      optional :node, :string, 3
    end
    add_message "Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse" do
      optional :response_code, :bytes, 1
      optional :dfs_hash, :string, 2
    end
    add_message "Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest" do
      optional :chunk_id, :uint32, 1
      optional :chunk_bytes, :bytes, 2
      optional :correlation_file_name, :bytes, 3
    end
    add_message "Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse" do
      optional :response_code, :bytes, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.RemovePeerRequest" do
      optional :peer_ip, :bytes, 1
      optional :public_key, :bytes, 2
    end
    add_message "Catalyst.Protocol.Rpc.Node.RemovePeerResponse" do
      optional :deleted_count, :uint32, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetPeerCountRequest" do
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetPeerCountResponse" do
      optional :peer_count, :int32, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest" do
      optional :dfs_hash, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse" do
      optional :file_size, :uint64, 1
      optional :response_code, :bytes, 2
    end
    add_message "Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest" do
      optional :data_folder, :string, 1
    end
    add_message "Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse" do
      optional :query, :bool, 1
    end
    add_enum "Catalyst.Protocol.Rpc.Node.ResponseCode" do
      value :PENDING, 0
      value :SUCCESSFUL, 1
      value :ERROR, 2
      value :FINISHED, 3
      value :EXPIRED, 4
      value :FAILED, 5
      value :EXISTS, 6
    end
  end
end

module Catalyst
  module Protocol
    module Rpc
      module Node
        VersionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.VersionRequest").msgclass
        VersionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.VersionResponse").msgclass
        GetInfoRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetInfoRequest").msgclass
        GetInfoResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetInfoResponse").msgclass
        CreateWalletRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.CreateWalletRequest").msgclass
        CreateWalletResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.CreateWalletResponse").msgclass
        ListWalletRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.ListWalletRequest").msgclass
        ListWalletResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.ListWalletResponse").msgclass
        CreateAddressRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.CreateAddressRequest").msgclass
        CreateAddressResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.CreateAddressResponse").msgclass
        GetAddressRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetAddressRequest").msgclass
        GetAddressResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetAddressResponse").msgclass
        ListAddressRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.ListAddressRequest").msgclass
        ListAddressResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.ListAddressResponse").msgclass
        ValidateAddressRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.ValidateAddressRequest").msgclass
        ValidateAddressResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.ValidateAddressResponse").msgclass
        GetBalanceRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetBalanceRequest").msgclass
        GetBalanceResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetBalanceResponse").msgclass
        CreateRawTransactionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest").msgclass
        CreateRawTransactionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse").msgclass
        SignRawTransactionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest").msgclass
        SignRawTransactionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse").msgclass
        DecodeRawTransactionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest").msgclass
        DecodeRawTransactionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse").msgclass
        BroadcastRawTransactionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest").msgclass
        BroadcastRawTransactionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse").msgclass
        SendToRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SendToRequest").msgclass
        SendToResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SendToResponse").msgclass
        SendToFromRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SendToFromRequest").msgclass
        SendToFromResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SendToFromResponse").msgclass
        SendManyRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SendManyRequest").msgclass
        SendManyResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SendManyResponse").msgclass
        SendFromManyRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SendFromManyRequest").msgclass
        SendFromManyResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SendFromManyResponse").msgclass
        AddNodeRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.AddNodeRequest").msgclass
        AddNodeResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.AddNodeResponse").msgclass
        GetPeerListRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetPeerListRequest").msgclass
        GetPeerListResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetPeerListResponse").msgclass
        GetPeerReputationRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest").msgclass
        GetPeerReputationResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse").msgclass
        SetPeerBlacklistRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SetPeerBlacklistRequest").msgclass
        SetPeerBlacklistResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SetPeerBlacklistResponse").msgclass
        GetPeerInfoRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest").msgclass
        GetPeerInfoResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse").msgclass
        GetConnectionCountRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest").msgclass
        GetConnectionCountResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse").msgclass
        GetDeltaRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetDeltaRequest").msgclass
        GetDeltaResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetDeltaResponse").msgclass
        GetMempoolRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetMempoolRequest").msgclass
        GetMempoolResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetMempoolResponse").msgclass
        SignMessageRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SignMessageRequest").msgclass
        SignMessageResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SignMessageResponse").msgclass
        VerifyMessageRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.VerifyMessageRequest").msgclass
        VerifyMessageResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.VerifyMessageResponse").msgclass
        ServiceStatusRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.ServiceStatusRequest").msgclass
        ServiceStatusResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.ServiceStatusResponse").msgclass
        AddFileToDfsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest").msgclass
        AddFileToDfsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse").msgclass
        TransferFileBytesRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest").msgclass
        TransferFileBytesResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse").msgclass
        RemovePeerRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.RemovePeerRequest").msgclass
        RemovePeerResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.RemovePeerResponse").msgclass
        GetPeerCountRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetPeerCountRequest").msgclass
        GetPeerCountResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetPeerCountResponse").msgclass
        GetFileFromDfsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest").msgclass
        GetFileFromDfsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse").msgclass
        SetPeerDataFolderRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest").msgclass
        SetPeerDataFolderResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse").msgclass
        ResponseCode = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Catalyst.Protocol.Rpc.Node.ResponseCode").enummodule
      end
    end
  end
end
