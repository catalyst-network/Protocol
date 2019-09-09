# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [Account.proto](#Account.proto)
    - [Address](#Catalyst.Protocol.Account.Address)
  
    - [AccountType](#Catalyst.Protocol.Account.AccountType)
    - [HashType](#Catalyst.Protocol.Account.HashType)
  
  
  

- [Cryptography.proto](#Cryptography.proto)
    - [PrivateKey](#Catalyst.Protocol.Cryptography.PrivateKey)
    - [PublicKey](#Catalyst.Protocol.Cryptography.PublicKey)
  
  
  
  

- [Deltas.proto](#Deltas.proto)
    - [Delta](#Catalyst.Protocol.Deltas.Delta)
  
  
  
  

- [DfsMarketplace.proto](#DfsMarketplace.proto)
    - [BlockChallengeBroadcast](#Catalyst.Protocol.DfsMarketplace.BlockChallengeBroadcast)
    - [BlockChallengeRequest](#Catalyst.Protocol.DfsMarketplace.BlockChallengeRequest)
    - [BlockChallengeResponse](#Catalyst.Protocol.DfsMarketplace.BlockChallengeResponse)
  
  
  
  

- [IPPN.proto](#IPPN.proto)
    - [PeerNeighborsRequest](#Catalyst.Protocol.IPPN.PeerNeighborsRequest)
    - [PeerNeighborsResponse](#Catalyst.Protocol.IPPN.PeerNeighborsResponse)
    - [PingRequest](#Catalyst.Protocol.IPPN.PingRequest)
    - [PingResponse](#Catalyst.Protocol.IPPN.PingResponse)
  
  
  
  

- [Network.proto](#Network.proto)
  
    - [NetworkType](#Catalyst.Protocol.Network.NetworkType)
  
  
  

- [Peer.proto](#Peer.proto)
    - [PeerId](#Catalyst.Protocol.Peer.PeerId)
    - [PeerInfo](#Catalyst.Protocol.Peer.PeerInfo)
  
  
  
  

- [Rpc.proto](#Rpc.proto)
    - [AddFileToDfsRequest](#Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest)
    - [AddFileToDfsResponse](#Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse)
    - [AddNodeRequest](#Catalyst.Protocol.Rpc.Node.AddNodeRequest)
    - [AddNodeResponse](#Catalyst.Protocol.Rpc.Node.AddNodeResponse)
    - [BroadcastRawTransactionRequest](#Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest)
    - [BroadcastRawTransactionResponse](#Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse)
    - [CreateAddressRequest](#Catalyst.Protocol.Rpc.Node.CreateAddressRequest)
    - [CreateAddressResponse](#Catalyst.Protocol.Rpc.Node.CreateAddressResponse)
    - [CreateRawTransactionRequest](#Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest)
    - [CreateRawTransactionResponse](#Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse)
    - [CreateWalletRequest](#Catalyst.Protocol.Rpc.Node.CreateWalletRequest)
    - [CreateWalletResponse](#Catalyst.Protocol.Rpc.Node.CreateWalletResponse)
    - [DecodeRawTransactionRequest](#Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest)
    - [DecodeRawTransactionResponse](#Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse)
    - [GetAddressRequest](#Catalyst.Protocol.Rpc.Node.GetAddressRequest)
    - [GetAddressResponse](#Catalyst.Protocol.Rpc.Node.GetAddressResponse)
    - [GetBalanceRequest](#Catalyst.Protocol.Rpc.Node.GetBalanceRequest)
    - [GetBalanceResponse](#Catalyst.Protocol.Rpc.Node.GetBalanceResponse)
    - [GetConnectionCountRequest](#Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest)
    - [GetConnectionCountResponse](#Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse)
    - [GetDeltaRequest](#Catalyst.Protocol.Rpc.Node.GetDeltaRequest)
    - [GetDeltaResponse](#Catalyst.Protocol.Rpc.Node.GetDeltaResponse)
    - [GetFileFromDfsRequest](#Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest)
    - [GetFileFromDfsResponse](#Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse)
    - [GetInfoRequest](#Catalyst.Protocol.Rpc.Node.GetInfoRequest)
    - [GetInfoResponse](#Catalyst.Protocol.Rpc.Node.GetInfoResponse)
    - [GetMempoolRequest](#Catalyst.Protocol.Rpc.Node.GetMempoolRequest)
    - [GetMempoolResponse](#Catalyst.Protocol.Rpc.Node.GetMempoolResponse)
    - [GetPeerCountRequest](#Catalyst.Protocol.Rpc.Node.GetPeerCountRequest)
    - [GetPeerCountResponse](#Catalyst.Protocol.Rpc.Node.GetPeerCountResponse)
    - [GetPeerInfoRequest](#Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest)
    - [GetPeerInfoResponse](#Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse)
    - [GetPeerListRequest](#Catalyst.Protocol.Rpc.Node.GetPeerListRequest)
    - [GetPeerListResponse](#Catalyst.Protocol.Rpc.Node.GetPeerListResponse)
    - [GetPeerReputationRequest](#Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest)
    - [GetPeerReputationResponse](#Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse)
    - [ListAddressRequest](#Catalyst.Protocol.Rpc.Node.ListAddressRequest)
    - [ListAddressResponse](#Catalyst.Protocol.Rpc.Node.ListAddressResponse)
    - [ListWalletRequest](#Catalyst.Protocol.Rpc.Node.ListWalletRequest)
    - [ListWalletResponse](#Catalyst.Protocol.Rpc.Node.ListWalletResponse)
    - [RemovePeerRequest](#Catalyst.Protocol.Rpc.Node.RemovePeerRequest)
    - [RemovePeerResponse](#Catalyst.Protocol.Rpc.Node.RemovePeerResponse)
    - [SendFromManyRequest](#Catalyst.Protocol.Rpc.Node.SendFromManyRequest)
    - [SendFromManyResponse](#Catalyst.Protocol.Rpc.Node.SendFromManyResponse)
    - [SendManyRequest](#Catalyst.Protocol.Rpc.Node.SendManyRequest)
    - [SendManyResponse](#Catalyst.Protocol.Rpc.Node.SendManyResponse)
    - [SendToFromRequest](#Catalyst.Protocol.Rpc.Node.SendToFromRequest)
    - [SendToFromResponse](#Catalyst.Protocol.Rpc.Node.SendToFromResponse)
    - [SendToRequest](#Catalyst.Protocol.Rpc.Node.SendToRequest)
    - [SendToResponse](#Catalyst.Protocol.Rpc.Node.SendToResponse)
    - [ServiceStatusRequest](#Catalyst.Protocol.Rpc.Node.ServiceStatusRequest)
    - [ServiceStatusResponse](#Catalyst.Protocol.Rpc.Node.ServiceStatusResponse)
    - [SetPeerBlackListRequest](#Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest)
    - [SetPeerBlackListResponse](#Catalyst.Protocol.Rpc.Node.SetPeerBlackListResponse)
    - [SetPeerDataFolderRequest](#Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest)
    - [SetPeerDataFolderResponse](#Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse)
    - [SignMessageRequest](#Catalyst.Protocol.Rpc.Node.SignMessageRequest)
    - [SignMessageResponse](#Catalyst.Protocol.Rpc.Node.SignMessageResponse)
    - [SignRawTransactionRequest](#Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest)
    - [SignRawTransactionResponse](#Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse)
    - [TransferFileBytesRequest](#Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest)
    - [TransferFileBytesResponse](#Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse)
    - [ValidateAddressRequest](#Catalyst.Protocol.Rpc.Node.ValidateAddressRequest)
    - [ValidateAddressResponse](#Catalyst.Protocol.Rpc.Node.ValidateAddressResponse)
    - [VerifyMessageRequest](#Catalyst.Protocol.Rpc.Node.VerifyMessageRequest)
    - [VerifyMessageResponse](#Catalyst.Protocol.Rpc.Node.VerifyMessageResponse)
    - [VersionRequest](#Catalyst.Protocol.Rpc.Node.VersionRequest)
    - [VersionResponse](#Catalyst.Protocol.Rpc.Node.VersionResponse)
  
    - [ResponseCode](#Catalyst.Protocol.Rpc.Node.ResponseCode)
  
  
  

- [Signature.proto](#Signature.proto)
    - [Context](#Catalyst.Protocol.Signature.Context)
    - [Signature](#Catalyst.Protocol.Signature.Signature)
  
    - [SignatureType](#Catalyst.Protocol.Signature.SignatureType)
  
  
  

- [Transaction.proto](#Transaction.proto)
    - [BaseEntry](#Catalyst.Protocol.Transaction.BaseEntry)
    - [CoinbaseEntry](#Catalyst.Protocol.Transaction.CoinbaseEntry)
    - [ConfidentialEntry](#Catalyst.Protocol.Transaction.ConfidentialEntry)
    - [ContractEntry](#Catalyst.Protocol.Transaction.ContractEntry)
    - [PublicEntry](#Catalyst.Protocol.Transaction.PublicEntry)
    - [RangeProof](#Catalyst.Protocol.Transaction.RangeProof)
  
    - [TransactionType](#Catalyst.Protocol.Transaction.TransactionType)
  
  
  

- [Wire.proto](#Wire.proto)
    - [CandidateDeltaBroadcast](#Catalyst.Protocol.Wire.CandidateDeltaBroadcast)
    - [DeltaDfsHashBroadcast](#Catalyst.Protocol.Wire.DeltaDfsHashBroadcast)
    - [FavouriteDeltaBroadcast](#Catalyst.Protocol.Wire.FavouriteDeltaBroadcast)
    - [ProtocolErrorMessageSigned](#Catalyst.Protocol.Wire.ProtocolErrorMessageSigned)
    - [ProtocolMessageSigned](#Catalyst.Protocol.Wire.ProtocolMessageSigned)
    - [TransactionBroadcast](#Catalyst.Protocol.Wire.TransactionBroadcast)
  
  
  
  

- [Scalar Value Types](#scalar-value-types)



<a name="Account.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Account.proto



<a name="Catalyst.Protocol.Account.Address"></a>

### Address



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| SigningContext | [Catalyst.Protocol.Signature.Context](#Catalyst.Protocol.Signature.Context) |  |  |
| AccountType | [AccountType](#Catalyst.Protocol.Account.AccountType) |  |  |
| PublicKeyHashType | [HashType](#Catalyst.Protocol.Account.HashType) |  |  |
| PublicKeyHash | [bytes](#bytes) |  |  |





 


<a name="Catalyst.Protocol.Account.AccountType"></a>

### AccountType


| Name | Number | Description |
| ---- | ------ | ----------- |
| ACCOUNT_TYPE_UNKNOWN | 0 |  |
| PUBLIC_ACCOUNT | 1 |  |
| PRIVATE_ACCOUNT | 2 |  |
| SMART_CONTRACT_ACCOUNT | 3 |  |



<a name="Catalyst.Protocol.Account.HashType"></a>

### HashType


| Name | Number | Description |
| ---- | ------ | ----------- |
| HASH_TYPE_UNKONWN | 0 |  |
| BLAKE_256B_HASH | 1 |  |


 

 

 



<a name="Cryptography.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Cryptography.proto



<a name="Catalyst.Protocol.Cryptography.PrivateKey"></a>

### PrivateKey



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| RawBytes | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Cryptography.PublicKey"></a>

### PublicKey



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| RawBytes | [bytes](#bytes) |  |  |





 

 

 

 



<a name="Deltas.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Deltas.proto



<a name="Catalyst.Protocol.Deltas.Delta"></a>

### Delta



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| PreviousDeltaDfsHash | [bytes](#bytes) |  | address for the content of the previous delta on the DFS |
| MerkleRoot | [bytes](#bytes) |  |  |
| MerklePoda | [bytes](#bytes) |  | proof of delegated authority for active wokers |
| TimeStamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| PublicEntries | [Catalyst.Protocol.Transaction.PublicEntry](#Catalyst.Protocol.Transaction.PublicEntry) | repeated |  |
| ConfidentialEntries | [Catalyst.Protocol.Transaction.ConfidentialEntry](#Catalyst.Protocol.Transaction.ConfidentialEntry) | repeated |  |
| ContractEntries | [Catalyst.Protocol.Transaction.ContractEntry](#Catalyst.Protocol.Transaction.ContractEntry) | repeated |  |
| CoinbaseEntries | [Catalyst.Protocol.Transaction.CoinbaseEntry](#Catalyst.Protocol.Transaction.CoinbaseEntry) | repeated | one per active worker |





 

 

 

 



<a name="DfsMarketplace.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## DfsMarketplace.proto



<a name="Catalyst.Protocol.DfsMarketplace.BlockChallengeBroadcast"></a>

### BlockChallengeBroadcast



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| originalChallenge | [BlockChallengeRequest](#Catalyst.Protocol.DfsMarketplace.BlockChallengeRequest) |  |  |
| answer | [string](#string) |  |  |
| challengedPeer | [Catalyst.Protocol.Peer.PeerId](#Catalyst.Protocol.Peer.PeerId) |  |  |
| challengedBy | [Catalyst.Protocol.Peer.PeerId](#Catalyst.Protocol.Peer.PeerId) |  |  |






<a name="Catalyst.Protocol.DfsMarketplace.BlockChallengeRequest"></a>

### BlockChallengeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| challengeSalt | [string](#string) |  |  |
| mainFileCid | [string](#string) |  |  |
| blockIdxRandomGuid | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.DfsMarketplace.BlockChallengeResponse"></a>

### BlockChallengeResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| answer | [string](#string) |  |  |
| blockChallengeRequestHash | [string](#string) |  |  |





 

 

 

 



<a name="IPPN.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## IPPN.proto



<a name="Catalyst.Protocol.IPPN.PeerNeighborsRequest"></a>

### PeerNeighborsRequest







<a name="Catalyst.Protocol.IPPN.PeerNeighborsResponse"></a>

### PeerNeighborsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Peers | [Catalyst.Protocol.Peer.PeerId](#Catalyst.Protocol.Peer.PeerId) | repeated |  |






<a name="Catalyst.Protocol.IPPN.PingRequest"></a>

### PingRequest







<a name="Catalyst.Protocol.IPPN.PingResponse"></a>

### PingResponse






 

 

 

 



<a name="Network.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Network.proto


 


<a name="Catalyst.Protocol.Network.NetworkType"></a>

### NetworkType


| Name | Number | Description |
| ---- | ------ | ----------- |
| NETWORK_UNKNOWN | 0 | un-known network |
| MAINNET | 1 | main live network |
| DEVNET | 2 | local devnet |
| TESTNET | 3 | public testnet |


 

 

 



<a name="Peer.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Peer.proto



<a name="Catalyst.Protocol.Peer.PeerId"></a>

### PeerId
Aggregated size of the fields in PeerId should be 42 bytes as specified in
https://github.com/catalyst-network/protocol-blueprint/blob/master/PeerProtocol.md


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| protocolVersion | [bytes](#bytes) |  | 2 bytes |
| ip | [bytes](#bytes) |  | 16 bytes |
| port | [bytes](#bytes) |  | 2 bytes |
| publicKey | [Catalyst.Protocol.Cryptography.PublicKey](#Catalyst.Protocol.Cryptography.PublicKey) |  | Peers public key, node operators are encouraged to use the same, public key across all their nodes. |






<a name="Catalyst.Protocol.Peer.PeerInfo"></a>

### PeerInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerId | [PeerId](#Catalyst.Protocol.Peer.PeerId) |  | is peerId of network |
| reputation | [int32](#int32) |  | reputation of peer |
| blackListed | [bool](#bool) |  | is to check if the peer is blackListed |
| isAwolPeer | [bool](#bool) |  | is when the peer cannot be reached on the network |
| inactiveFor | [google.protobuf.Duration](#google.protobuf.Duration) |  | is how long the peer has beekn inactive for |
| lastSeen | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | is when the peer was last seen |
| modified | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | modified is when the peer was last modified |
| created | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | created is when the peer was created |





 

 

 

 



<a name="Rpc.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Rpc.proto



<a name="Catalyst.Protocol.Rpc.Node.AddFileToDfsRequest"></a>

### AddFileToDfsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileSize | [uint64](#uint64) |  |  |
| fileName | [string](#string) |  |  |
| node | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.AddFileToDfsResponse"></a>

### AddFileToDfsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| responseCode | [bytes](#bytes) |  |  |
| dfsHash | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.AddNodeRequest"></a>

### AddNodeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.AddNodeResponse"></a>

### AddNodeResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionRequest"></a>

### BroadcastRawTransactionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transaction | [Catalyst.Protocol.Wire.TransactionBroadcast](#Catalyst.Protocol.Wire.TransactionBroadcast) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.BroadcastRawTransactionResponse"></a>

### BroadcastRawTransactionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| responseCode | [ResponseCode](#Catalyst.Protocol.Rpc.Node.ResponseCode) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.CreateAddressRequest"></a>

### CreateAddressRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.CreateAddressResponse"></a>

### CreateAddressResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.CreateRawTransactionRequest"></a>

### CreateRawTransactionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.CreateRawTransactionResponse"></a>

### CreateRawTransactionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.CreateWalletRequest"></a>

### CreateWalletRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.CreateWalletResponse"></a>

### CreateWalletResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.DecodeRawTransactionRequest"></a>

### DecodeRawTransactionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.DecodeRawTransactionResponse"></a>

### DecodeRawTransactionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetAddressRequest"></a>

### GetAddressRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetAddressResponse"></a>

### GetAddressResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetBalanceRequest"></a>

### GetBalanceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetBalanceResponse"></a>

### GetBalanceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetConnectionCountRequest"></a>

### GetConnectionCountRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetConnectionCountResponse"></a>

### GetConnectionCountResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetDeltaRequest"></a>

### GetDeltaRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| DeltaDfsHash | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetDeltaResponse"></a>

### GetDeltaResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Delta | [Catalyst.Protocol.Deltas.Delta](#Catalyst.Protocol.Deltas.Delta) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetFileFromDfsRequest"></a>

### GetFileFromDfsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dfsHash | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetFileFromDfsResponse"></a>

### GetFileFromDfsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fileSize | [uint64](#uint64) |  |  |
| responseCode | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetInfoRequest"></a>

### GetInfoRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetInfoResponse"></a>

### GetInfoResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetMempoolRequest"></a>

### GetMempoolRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetMempoolResponse"></a>

### GetMempoolResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transactions | [Catalyst.Protocol.Wire.TransactionBroadcast](#Catalyst.Protocol.Wire.TransactionBroadcast) | repeated |  |






<a name="Catalyst.Protocol.Rpc.Node.GetPeerCountRequest"></a>

### GetPeerCountRequest







<a name="Catalyst.Protocol.Rpc.Node.GetPeerCountResponse"></a>

### GetPeerCountResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerCount | [int32](#int32) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetPeerInfoRequest"></a>

### GetPeerInfoRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| publicKey | [bytes](#bytes) |  |  |
| ip | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetPeerInfoResponse"></a>

### GetPeerInfoResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| PeerInfo | [Catalyst.Protocol.Peer.PeerInfo](#Catalyst.Protocol.Peer.PeerInfo) | repeated |  |






<a name="Catalyst.Protocol.Rpc.Node.GetPeerListRequest"></a>

### GetPeerListRequest







<a name="Catalyst.Protocol.Rpc.Node.GetPeerListResponse"></a>

### GetPeerListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Peers | [Catalyst.Protocol.Peer.PeerId](#Catalyst.Protocol.Peer.PeerId) | repeated |  |






<a name="Catalyst.Protocol.Rpc.Node.GetPeerReputationRequest"></a>

### GetPeerReputationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| publicKey | [bytes](#bytes) |  |  |
| ip | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.GetPeerReputationResponse"></a>

### GetPeerReputationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reputation | [int32](#int32) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.ListAddressRequest"></a>

### ListAddressRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.ListAddressResponse"></a>

### ListAddressResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.ListWalletRequest"></a>

### ListWalletRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.ListWalletResponse"></a>

### ListWalletResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.RemovePeerRequest"></a>

### RemovePeerRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerIp | [bytes](#bytes) |  |  |
| publicKey | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.RemovePeerResponse"></a>

### RemovePeerResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| deletedCount | [uint32](#uint32) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SendFromManyRequest"></a>

### SendFromManyRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SendFromManyResponse"></a>

### SendFromManyResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SendManyRequest"></a>

### SendManyRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SendManyResponse"></a>

### SendManyResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SendToFromRequest"></a>

### SendToFromRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SendToFromResponse"></a>

### SendToFromResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SendToRequest"></a>

### SendToRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SendToResponse"></a>

### SendToResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.ServiceStatusRequest"></a>

### ServiceStatusRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.ServiceStatusResponse"></a>

### ServiceStatusResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SetPeerBlackListRequest"></a>

### SetPeerBlackListRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| publicKey | [bytes](#bytes) |  |  |
| ip | [bytes](#bytes) |  |  |
| blacklist | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SetPeerBlackListResponse"></a>

### SetPeerBlackListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| publicKey | [bytes](#bytes) |  |  |
| ip | [bytes](#bytes) |  |  |
| blacklist | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SetPeerDataFolderRequest"></a>

### SetPeerDataFolderRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| datafolder | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SetPeerDataFolderResponse"></a>

### SetPeerDataFolderResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SignMessageRequest"></a>

### SignMessageRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [bytes](#bytes) |  |  |
| keyId | [string](#string) |  |  |
| signingContext | [Catalyst.Protocol.Signature.Context](#Catalyst.Protocol.Signature.Context) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SignMessageResponse"></a>

### SignMessageResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature | [bytes](#bytes) |  |  |
| publicKey | [bytes](#bytes) |  |  |
| originalMessage | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SignRawTransactionRequest"></a>

### SignRawTransactionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.SignRawTransactionResponse"></a>

### SignRawTransactionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.TransferFileBytesRequest"></a>

### TransferFileBytesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chunkId | [uint32](#uint32) |  |  |
| chunkBytes | [bytes](#bytes) |  |  |
| correlationFileName | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.TransferFileBytesResponse"></a>

### TransferFileBytesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| responseCode | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.ValidateAddressRequest"></a>

### ValidateAddressRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.ValidateAddressResponse"></a>

### ValidateAddressResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.VerifyMessageRequest"></a>

### VerifyMessageRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature | [bytes](#bytes) |  |  |
| publicKey | [bytes](#bytes) |  |  |
| message | [bytes](#bytes) |  |  |
| signingContext | [Catalyst.Protocol.Signature.Context](#Catalyst.Protocol.Signature.Context) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.VerifyMessageResponse"></a>

### VerifyMessageResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| isSignedByKey | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.VersionRequest"></a>

### VersionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [bool](#bool) |  |  |






<a name="Catalyst.Protocol.Rpc.Node.VersionResponse"></a>

### VersionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |





 


<a name="Catalyst.Protocol.Rpc.Node.ResponseCode"></a>

### ResponseCode


| Name | Number | Description |
| ---- | ------ | ----------- |
| PENDING | 0 |  |
| SUCCESSFUL | 1 |  |
| ERROR | 2 |  |
| FINISHED | 3 |  |
| EXPIRED | 4 |  |
| FAILED | 5 |  |


 

 

 



<a name="Signature.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Signature.proto



<a name="Catalyst.Protocol.Signature.Context"></a>

### Context



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| network | [Catalyst.Protocol.Network.NetworkType](#Catalyst.Protocol.Network.NetworkType) |  | is the network enum (mainet / devnet etc) |
| signatureType | [SignatureType](#Catalyst.Protocol.Signature.SignatureType) |  | contains info on whether the signature is for a protocol message or a transaction. |






<a name="Catalyst.Protocol.Signature.Signature"></a>

### Signature



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Context | [Context](#Catalyst.Protocol.Signature.Context) |  |  |
| Signature | [bytes](#bytes) |  |  |





 


<a name="Catalyst.Protocol.Signature.SignatureType"></a>

### SignatureType


| Name | Number | Description |
| ---- | ------ | ----------- |
| SIGNATURE_TYPE_UNKNOWN | 0 |  |
| TRANSACTION_PUBLIC | 1 |  |
| TRANSACTION_CONFIDENTIAL | 2 |  |
| PROTOCOL_RPC | 3 |  |
| PROTOCOL_PEER | 4 |  |


 

 

 



<a name="Transaction.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Transaction.proto



<a name="Catalyst.Protocol.Transaction.BaseEntry"></a>

### BaseEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Recipient | [Catalyst.Protocol.Cryptography.PublicKey](#Catalyst.Protocol.Cryptography.PublicKey) |  | PublicKey of receiver. |
| Sender | [Catalyst.Protocol.Cryptography.PublicKey](#Catalyst.Protocol.Cryptography.PublicKey) |  | PublicKey of sender. |
| TransactionFees | [sint64](#sint64) |  | 8 bytes, clear text, fees * 10^12 |






<a name="Catalyst.Protocol.Transaction.CoinbaseEntry"></a>

### CoinbaseEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| PublicKey | [Catalyst.Protocol.Cryptography.PublicKey](#Catalyst.Protocol.Cryptography.PublicKey) |  | public key behind the address where the Coinbase will be credited |
| Amount | [sint64](#sint64) |  | max 8 bytes |






<a name="Catalyst.Protocol.Transaction.ConfidentialEntry"></a>

### ConfidentialEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Base | [BaseEntry](#Catalyst.Protocol.Transaction.BaseEntry) |  |  |
| PedersenCommit | [bytes](#bytes) |  | 32 bytes |
| RangeProof | [RangeProof](#Catalyst.Protocol.Transaction.RangeProof) |  |  |






<a name="Catalyst.Protocol.Transaction.ContractEntry"></a>

### ContractEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Base | [BaseEntry](#Catalyst.Protocol.Transaction.BaseEntry) |  |  |
| Amount | [sint64](#sint64) |  | 8 byte amount |
| CallData | [bytes](#bytes) |  | Smart contract data. |






<a name="Catalyst.Protocol.Transaction.PublicEntry"></a>

### PublicEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Base | [BaseEntry](#Catalyst.Protocol.Transaction.BaseEntry) |  |  |
| Amount | [sint64](#sint64) |  | 8 byte amount |






<a name="Catalyst.Protocol.Transaction.RangeProof"></a>

### RangeProof
BulletProof-based range proof. See https://eprint.iacr.org/2017/1066.pdf for references to equations below.
Total byte size is (9&#43;2k)*32, where k = log_2(n*m), m is number of aggregates in proof, (2^n)-1 is upper range of values.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| V | [bytes](#bytes) | repeated | m * 32 bytes, value commitment (eq. 36) |
| A | [bytes](#bytes) |  | 32 bytes, bit commitment (eq. 48) |
| S | [bytes](#bytes) |  | 32 bytes, per bit blinding factor commitment (eq. 48) |
| T1 | [bytes](#bytes) |  | 32 bytes, poly commitment (eq. 54) |
| T2 | [bytes](#bytes) |  | 32 bytes, poly commitment (eq. 54) |
| TAU | [bytes](#bytes) |  | 32 bytes, proof of share (eq. 63) |
| MU | [bytes](#bytes) |  | 32 bytes, proof of share (eq. 63) |
| L | [bytes](#bytes) | repeated | k * 32 bytes, aggregated vector polynomial (eq. 63) |
| R | [bytes](#bytes) | repeated | k * 32 bytes, aggregated vector polynomial (eq. 63) |
| APrime0 | [bytes](#bytes) |  | 32 bytes (eq. 63) |
| BPrime0 | [bytes](#bytes) |  | 32 bytes (eq. 63) |
| t | [bytes](#bytes) |  |  |





 


<a name="Catalyst.Protocol.Transaction.TransactionType"></a>

### TransactionType


| Name | Number | Description |
| ---- | ------ | ----------- |
| TRANSACTION_TYPE_UNKNOWN | 0 | Unknown transaction type. |
| PUBLIC | 1 | Public transaction type. |
| CONFIDENTIAL | 2 | Private transaction type. |


 

 

 



<a name="Wire.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Wire.proto



<a name="Catalyst.Protocol.Wire.CandidateDeltaBroadcast"></a>

### CandidateDeltaBroadcast



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Hash | [bytes](#bytes) |  | The hash computed for the current delta produced by ProducerId. This is meant to be used when voting for most popular hashes. |
| ProducerId | [Catalyst.Protocol.Peer.PeerId](#Catalyst.Protocol.Peer.PeerId) |  | Identifier of the producer of the candidate. |
| PreviousDeltaDfsHash | [bytes](#bytes) |  | The DFS address for the content of the delta preceding this candidate. |






<a name="Catalyst.Protocol.Wire.DeltaDfsHashBroadcast"></a>

### DeltaDfsHashBroadcast



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| DeltaDfsHash | [bytes](#bytes) |  | The DFS address at which the full content of the delta can be retrieved. |
| PreviousDeltaDfsHash | [bytes](#bytes) |  | The DFS address for the content of the delta preceding this candidate. |






<a name="Catalyst.Protocol.Wire.FavouriteDeltaBroadcast"></a>

### FavouriteDeltaBroadcast



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Candidate | [CandidateDeltaBroadcast](#Catalyst.Protocol.Wire.CandidateDeltaBroadcast) |  | The candidate favoured by the voter broadcasting this message. |
| VoterId | [Catalyst.Protocol.Peer.PeerId](#Catalyst.Protocol.Peer.PeerId) |  | The PeerId of the participant submitting its vote to the network. |






<a name="Catalyst.Protocol.Wire.ProtocolErrorMessageSigned"></a>

### ProtocolErrorMessageSigned
Provides a network error message, for when a node cant send/ build a valid response


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature | [Catalyst.Protocol.Signature.Signature](#Catalyst.Protocol.Signature.Signature) |  |  |
| peerId | [Catalyst.Protocol.Peer.PeerId](#Catalyst.Protocol.Peer.PeerId) |  |  |
| correlationId | [bytes](#bytes) |  |  |
| code | [int32](#int32) |  |  |






<a name="Catalyst.Protocol.Wire.ProtocolMessageSigned"></a>

### ProtocolMessageSigned
A wrapper around the service message, the contents of service message should be signed by the sender to avoid tampering mid-transit.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerId | [Catalyst.Protocol.Peer.PeerId](#Catalyst.Protocol.Peer.PeerId) |  | is the sender&#39;s peerId |
| correlationId | [bytes](#bytes) |  | is a 16 bytes guid used to match responses to their original requests |
| type_url | [string](#string) |  | is the shortened protocol name of the message type being encoded in the value field (cf Any from protobuf WellKnownTypes) |
| value | [bytes](#bytes) |  | is the actual value of the message being wrapped (cf Any from protobuf WellKnownTypes) |
| signature | [Catalyst.Protocol.Signature.Signature](#Catalyst.Protocol.Signature.Signature) |  | is the ed25519ph context signature |






<a name="Catalyst.Protocol.Wire.TransactionBroadcast"></a>

### TransactionBroadcast



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | 32 bits |
| PublicEntries | [Catalyst.Protocol.Transaction.PublicEntry](#Catalyst.Protocol.Transaction.PublicEntry) | repeated | 0 field for confidential transaction |
| ConfidentialEntries | [Catalyst.Protocol.Transaction.ConfidentialEntry](#Catalyst.Protocol.Transaction.ConfidentialEntry) | repeated | 0 field for non-confidential transaction |
| ContractEntries | [Catalyst.Protocol.Transaction.ContractEntry](#Catalyst.Protocol.Transaction.ContractEntry) | repeated |  |





 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double" /> double |  | double | double | float |
| <a name="float" /> float |  | float | float | float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool" /> bool |  | bool | boolean | boolean |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |

