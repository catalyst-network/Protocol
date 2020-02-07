// package: Catalyst.Protocol.DfsMarketplace
// file: DfsMarketplace.proto

import * as jspb from "google-protobuf";
import * as Peer_pb from "./Peer_pb";

export class BlockChallengeRequest extends jspb.Message {
  getChallengeSalt(): string;
  setChallengeSalt(value: string): void;

  getMainFileCid(): string;
  setMainFileCid(value: string): void;

  getBlockIdxRandomGuid(): Uint8Array | string;
  getBlockIdxRandomGuid_asU8(): Uint8Array;
  getBlockIdxRandomGuid_asB64(): string;
  setBlockIdxRandomGuid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockChallengeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockChallengeRequest): BlockChallengeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockChallengeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockChallengeRequest;
  static deserializeBinaryFromReader(message: BlockChallengeRequest, reader: jspb.BinaryReader): BlockChallengeRequest;
}

export namespace BlockChallengeRequest {
  export type AsObject = {
    challengeSalt: string,
    mainFileCid: string,
    blockIdxRandomGuid: Uint8Array | string,
  }
}

export class BlockChallengeResponse extends jspb.Message {
  getAnswer(): string;
  setAnswer(value: string): void;

  getBlockChallengeRequestHash(): string;
  setBlockChallengeRequestHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockChallengeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockChallengeResponse): BlockChallengeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockChallengeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockChallengeResponse;
  static deserializeBinaryFromReader(message: BlockChallengeResponse, reader: jspb.BinaryReader): BlockChallengeResponse;
}

export namespace BlockChallengeResponse {
  export type AsObject = {
    answer: string,
    blockChallengeRequestHash: string,
  }
}

export class BlockChallengeBroadcast extends jspb.Message {
  hasOriginalChallenge(): boolean;
  clearOriginalChallenge(): void;
  getOriginalChallenge(): BlockChallengeRequest | undefined;
  setOriginalChallenge(value?: BlockChallengeRequest): void;

  getAnswer(): string;
  setAnswer(value: string): void;

  hasChallengedPeer(): boolean;
  clearChallengedPeer(): void;
  getChallengedPeer(): Peer_pb.PeerId | undefined;
  setChallengedPeer(value?: Peer_pb.PeerId): void;

  hasChallengedBy(): boolean;
  clearChallengedBy(): void;
  getChallengedBy(): Peer_pb.PeerId | undefined;
  setChallengedBy(value?: Peer_pb.PeerId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockChallengeBroadcast.AsObject;
  static toObject(includeInstance: boolean, msg: BlockChallengeBroadcast): BlockChallengeBroadcast.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockChallengeBroadcast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockChallengeBroadcast;
  static deserializeBinaryFromReader(message: BlockChallengeBroadcast, reader: jspb.BinaryReader): BlockChallengeBroadcast;
}

export namespace BlockChallengeBroadcast {
  export type AsObject = {
    originalChallenge?: BlockChallengeRequest.AsObject,
    answer: string,
    challengedPeer?: Peer_pb.PeerId.AsObject,
    challengedBy?: Peer_pb.PeerId.AsObject,
  }
}

