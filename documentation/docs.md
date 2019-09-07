# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [Common.proto](#Common.proto)
    - [PeerId](#Catalyst.Protocol.Common.PeerId)
    - [PeerInfo](#Catalyst.Protocol.Common.PeerInfo)
    - [ProtocolErrorMessageSigned](#Catalyst.Protocol.Common.ProtocolErrorMessageSigned)
    - [ProtocolMessage](#Catalyst.Protocol.Common.ProtocolMessage)
    - [ProtocolMessageSigned](#Catalyst.Protocol.Common.ProtocolMessageSigned)
    - [SigningContext](#Catalyst.Protocol.Common.SigningContext)
  
    - [Network](#Catalyst.Protocol.Common.Network)
    - [SignatureType](#Catalyst.Protocol.Common.SignatureType)
  
  
  

- [Deltas.proto](#Deltas.proto)
    - [CandidateDeltaBroadcast](#Catalyst.Protocol.Deltas.CandidateDeltaBroadcast)
    - [Delta](#Catalyst.Protocol.Deltas.Delta)
    - [DeltaDfsHashBroadcast](#Catalyst.Protocol.Deltas.DeltaDfsHashBroadcast)
    - [FavouriteDeltaBroadcast](#Catalyst.Protocol.Deltas.FavouriteDeltaBroadcast)
  
  
  
  

- [DfsMarketplace.proto](#DfsMarketplace.proto)
    - [BlockChallengeBroadcast](#Catalyst.Protocol.DfsMarketplace.BlockChallengeBroadcast)
    - [BlockChallengeRequest](#Catalyst.Protocol.DfsMarketplace.BlockChallengeRequest)
    - [BlockChallengeResponse](#Catalyst.Protocol.DfsMarketplace.BlockChallengeResponse)
  
  
  
  

- [IPPN.proto](#IPPN.proto)
    - [PeerNeighborsRequest](#Catalyst.Protocol.IPPN.PeerNeighborsRequest)
    - [PeerNeighborsResponse](#Catalyst.Protocol.IPPN.PeerNeighborsResponse)
    - [PingRequest](#Catalyst.Protocol.IPPN.PingRequest)
    - [PingResponse](#Catalyst.Protocol.IPPN.PingResponse)
  
  
  
  

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
  
  
  

- [Transaction.proto](#Transaction.proto)
    - [CFTransactionEntry](#Catalyst.Protocol.Transaction.CFTransactionEntry)
    - [CoinbaseEntry](#Catalyst.Protocol.Transaction.CoinbaseEntry)
    - [EntryRangeProof](#Catalyst.Protocol.Transaction.EntryRangeProof)
    - [STTransactionEntry](#Catalyst.Protocol.Transaction.STTransactionEntry)
    - [TransactionBroadcast](#Catalyst.Protocol.Transaction.TransactionBroadcast)
  
    - [TransactionType](#Catalyst.Protocol.Transaction.TransactionType)
  
  
  

- [Scalar Value Types](#scalar-value-types)



<a name="Common.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Common.proto



<a name="Catalyst.Protocol.Common.PeerId"></a>

### PeerId
Aggregated size of the fields in PeerId should be 42 bytes as specified in
https://github.com/catalyst-network/protocol-blueprint/blob/master/PeerProtocol.md


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| clientId | [bytes](#bytes) |  | 2 bytes |
| protocolVersion | [bytes](#bytes) |  | 2 bytes |
| ip | [bytes](#bytes) |  | 16 bytes |
| port | [bytes](#bytes) |  | 2 bytes |
| publicKey | [bytes](#bytes) |  | 20 bytes |






<a name="Catalyst.Protocol.Common.PeerInfo"></a>

### PeerInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerId | [PeerId](#Catalyst.Protocol.Common.PeerId) |  | is peerId of network |
| reputation | [int32](#int32) |  | reputation of peer |
| blackListed | [bool](#bool) |  | is to check if the peer is blackListed |
| isAwolPeer | [bool](#bool) |  | is when the peer cannot be reached on the network |
| inactiveFor | [google.protobuf.Duration](#google.protobuf.Duration) |  | is how long the peer has beekn inactive for |
| lastSeen | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | is when the peer was last seen |
| modified | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | modified is when the peer was last modified |
| created | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | created is when the peer was created |






<a name="Catalyst.Protocol.Common.ProtocolErrorMessageSigned"></a>

### ProtocolErrorMessageSigned
Provides a network error message, for when a node cant send/ build a valid response


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature | [bytes](#bytes) |  |  |
| peerId | [PeerId](#Catalyst.Protocol.Common.PeerId) |  |  |
| correlationId | [bytes](#bytes) |  |  |
| code | [int32](#int32) |  |  |






<a name="Catalyst.Protocol.Common.ProtocolMessage"></a>

### ProtocolMessage
Core protocol messages to be sent across the network.
- peerId is the sender&#39;s peerId
- correlationId is a 16 bytes guid used to match responses to their original requests
- type_url is the shortened protocol name of the message type being encoded in the value field (cf Any from protobuf WellKnownTypes)
- value is the actual value of the message being wrapped (cf Any from protobuf WellKnownTypes)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerId | [PeerId](#Catalyst.Protocol.Common.PeerId) |  |  |
| correlationId | [bytes](#bytes) |  |  |
| type_url | [string](#string) |  |  |
| value | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Common.ProtocolMessageSigned"></a>

### ProtocolMessageSigned
A wrapper around the service message, the contents of service message should be signed by the sender to avoid tampering mid-transit.
To verify use message.peerId.publicKey


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature | [bytes](#bytes) |  |  |
| message | [ProtocolMessage](#Catalyst.Protocol.Common.ProtocolMessage) |  |  |






<a name="Catalyst.Protocol.Common.SigningContext"></a>

### SigningContext



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| network | [Network](#Catalyst.Protocol.Common.Network) |  | is the network unum (mainet / devnet etc) |
| signatureType | [SignatureType](#Catalyst.Protocol.Common.SignatureType) |  | contains info on whether the signature is for a protocol message or a transaction. |





 


<a name="Catalyst.Protocol.Common.Network"></a>

### Network


| Name | Number | Description |
| ---- | ------ | ----------- |
| NETWORK_UNKNOWN | 0 |  |
| MAINNET | 1 |  |
| DEVNET | 2 |  |
| TESTNET | 3 |  |



<a name="Catalyst.Protocol.Common.SignatureType"></a>

### SignatureType


| Name | Number | Description |
| ---- | ------ | ----------- |
| SIGNATURE_TYPE_UNKNOWN | 0 |  |
| TRANSACTION_PUBLIC | 1 |  |
| TRANSACTION_CONFIDENTIAL | 2 |  |
| PROTOCOL_RPC | 3 |  |
| PROTOCOL_PEER | 4 |  |


 

 

 



<a name="Deltas.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Deltas.proto



<a name="Catalyst.Protocol.Deltas.CandidateDeltaBroadcast"></a>

### CandidateDeltaBroadcast
CandidateDeltaBroadcast

DeltaHash: The hash computed for the current delta produced by ProducerId.
	This is meant to be used when voting for most popular hashes.
PreviousDeltaDfsHash: The DFS address for the content of the delta preceding this candidate.
ProducerId: Identifier of the producer of the candidate.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Hash | [bytes](#bytes) |  |  |
| ProducerId | [Catalyst.Protocol.Common.PeerId](#Catalyst.Protocol.Common.PeerId) |  |  |
| PreviousDeltaDfsHash | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Deltas.Delta"></a>

### Delta
Delta

version:
PreviousDeltaDfsHash: address for the content of the previous delta on the DFS
MerkleRoot:
MerklePoda: proof of delegated authority for active wokers
TimeStamp:
STEntries:
CFEntries:
CBEntries: one per active worker


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Version | [uint32](#uint32) |  |  |
| PreviousDeltaDfsHash | [bytes](#bytes) |  |  |
| MerkleRoot | [bytes](#bytes) |  |  |
| MerklePoda | [bytes](#bytes) |  |  |
| TimeStamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| STEntries | [Catalyst.Protocol.Transaction.STTransactionEntry](#Catalyst.Protocol.Transaction.STTransactionEntry) | repeated |  |
| CFEntries | [Catalyst.Protocol.Transaction.CFTransactionEntry](#Catalyst.Protocol.Transaction.CFTransactionEntry) | repeated |  |
| CBEntries | [Catalyst.Protocol.Transaction.CoinbaseEntry](#Catalyst.Protocol.Transaction.CoinbaseEntry) | repeated |  |






<a name="Catalyst.Protocol.Deltas.DeltaDfsHashBroadcast"></a>

### DeltaDfsHashBroadcast
DeltaDfsHashBroadcast

DeltaDfsHash: The DFS address at which the full content of the delta can be retrieved.
PreviousDeltaDfsHash: The DFS address for the content of the delta preceding this candidate.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| DeltaDfsHash | [bytes](#bytes) |  |  |
| PreviousDeltaDfsHash | [bytes](#bytes) |  |  |






<a name="Catalyst.Protocol.Deltas.FavouriteDeltaBroadcast"></a>

### FavouriteDeltaBroadcast
FavouriteDeltaBroadcast

CandidateDeltaBroadcast: The candidate favoured by the voter broadcasting this message.
VoterId: The PeerId of the participant submitting its vote to the network.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Candidate | [CandidateDeltaBroadcast](#Catalyst.Protocol.Deltas.CandidateDeltaBroadcast) |  |  |
| VoterId | [Catalyst.Protocol.Common.PeerId](#Catalyst.Protocol.Common.PeerId) |  |  |





 

 

 

 



<a name="DfsMarketplace.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## DfsMarketplace.proto



<a name="Catalyst.Protocol.DfsMarketplace.BlockChallengeBroadcast"></a>

### BlockChallengeBroadcast



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| originalChallenge | [BlockChallengeRequest](#Catalyst.Protocol.DfsMarketplace.BlockChallengeRequest) |  |  |
| answer | [string](#string) |  |  |
| challengedPeer | [Catalyst.Protocol.Common.PeerId](#Catalyst.Protocol.Common.PeerId) |  |  |
| challengedBy | [Catalyst.Protocol.Common.PeerId](#Catalyst.Protocol.Common.PeerId) |  |  |






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
| Peers | [Catalyst.Protocol.Common.PeerId](#Catalyst.Protocol.Common.PeerId) | repeated |  |






<a name="Catalyst.Protocol.IPPN.PingRequest"></a>

### PingRequest







<a name="Catalyst.Protocol.IPPN.PingResponse"></a>

### PingResponse






 

 

 

 



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
| transaction | [Catalyst.Protocol.Transaction.TransactionBroadcast](#Catalyst.Protocol.Transaction.TransactionBroadcast) |  |  |






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
| transactions | [Catalyst.Protocol.Transaction.TransactionBroadcast](#Catalyst.Protocol.Transaction.TransactionBroadcast) | repeated |  |






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
| PeerInfo | [Catalyst.Protocol.Common.PeerInfo](#Catalyst.Protocol.Common.PeerInfo) | repeated |  |






<a name="Catalyst.Protocol.Rpc.Node.GetPeerListRequest"></a>

### GetPeerListRequest







<a name="Catalyst.Protocol.Rpc.Node.GetPeerListResponse"></a>

### GetPeerListResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Peers | [Catalyst.Protocol.Common.PeerId](#Catalyst.Protocol.Common.PeerId) | repeated |  |






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
| signingContext | [Catalyst.Protocol.Common.SigningContext](#Catalyst.Protocol.Common.SigningContext) |  |  |






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
| signingContext | [Catalyst.Protocol.Common.SigningContext](#Catalyst.Protocol.Common.SigningContext) |  |  |






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


 

 

 



<a name="Transaction.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## Transaction.proto



<a name="Catalyst.Protocol.Transaction.CFTransactionEntry"></a>

### CFTransactionEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Address | [bytes](#bytes) |  | 32 bytes, account address derived from the public key |
| PedersenCommit | [bytes](#bytes) |  | 32 bytes |
| EntryRangeProofs | [EntryRangeProof](#Catalyst.Protocol.Transaction.EntryRangeProof) |  |  |






<a name="Catalyst.Protocol.Transaction.CoinbaseEntry"></a>

### CoinbaseEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| Address | [bytes](#bytes) |  | 32 bytes, account address derived from the public key |
| Amount | [uint64](#uint64) |  | max 8 bytes (always positive). |






<a name="Catalyst.Protocol.Transaction.EntryRangeProof"></a>

### EntryRangeProof
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






<a name="Catalyst.Protocol.Transaction.STTransactionEntry"></a>

### STTransactionEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| FromAddress | [bytes](#bytes) |  | Adress of sender |
| ToAddress | [bytes](#bytes) |  | Address of reciever. |
| Amount | [uint64](#uint64) |  | 8 byte amount |






<a name="Catalyst.Protocol.Transaction.TransactionBroadcast"></a>

### TransactionBroadcast



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| TransactionType | [TransactionType](#Catalyst.Protocol.Transaction.TransactionType) |  | 0 for non-confidential transaction, 1 for confidential transaction |
| TimeStamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | Timestamp transaction was created |
| TransactionFees | [uint64](#uint64) |  | 8 bytes, clear text, fees * 10^12 - always positive |
| LockTime | [uint64](#uint64) |  | 32 bits |
| STEntries | [STTransactionEntry](#Catalyst.Protocol.Transaction.STTransactionEntry) | repeated | 0 field for confidential transaction |
| CFEntries | [CFTransactionEntry](#Catalyst.Protocol.Transaction.CFTransactionEntry) | repeated | 0 field for non-confidential transaction |
| Signature | [bytes](#bytes) |  | 64 bytes |
| Init | [bytes](#bytes) |  | 0 field for smart contract deployment |
| Data | [bytes](#bytes) |  | 0 field for smart contract calls |
| From | [bytes](#bytes) |  | PubKey: 32 bytes, (255 bits or 256 with last bit to 0) public key (account address derived from the public key) |





 


<a name="Catalyst.Protocol.Transaction.TransactionType"></a>

### TransactionType


| Name | Number | Description |
| ---- | ------ | ----------- |
| NORMAL | 0 | Public transaction type. |
| CONFIDENTIAL | 1 | Private transaction type. |


 

 

 



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

