// package: Catalyst.Protocol.Wire
// file: Wire.proto

import * as jspb from "google-protobuf";
import * as Cryptography_pb from "./Cryptography_pb";
import * as Peer_pb from "./Peer_pb";
import * as Transaction_pb from "./Transaction_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ProtocolErrorMessage extends jspb.Message {
  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): Cryptography_pb.Signature | undefined;
  setSignature(value?: Cryptography_pb.Signature): void;

  hasPeerId(): boolean;
  clearPeerId(): void;
  getPeerId(): Peer_pb.PeerId | undefined;
  setPeerId(value?: Peer_pb.PeerId): void;

  getCorrelationId(): Uint8Array | string;
  getCorrelationId_asU8(): Uint8Array;
  getCorrelationId_asB64(): string;
  setCorrelationId(value: Uint8Array | string): void;

  getCode(): number;
  setCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolErrorMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolErrorMessage): ProtocolErrorMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolErrorMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolErrorMessage;
  static deserializeBinaryFromReader(message: ProtocolErrorMessage, reader: jspb.BinaryReader): ProtocolErrorMessage;
}

export namespace ProtocolErrorMessage {
  export type AsObject = {
    signature?: Cryptography_pb.Signature.AsObject,
    peerId?: Peer_pb.PeerId.AsObject,
    correlationId: Uint8Array | string,
    code: number,
  }
}

export class ProtocolMessage extends jspb.Message {
  hasPeerId(): boolean;
  clearPeerId(): void;
  getPeerId(): Peer_pb.PeerId | undefined;
  setPeerId(value?: Peer_pb.PeerId): void;

  getCorrelationId(): Uint8Array | string;
  getCorrelationId_asU8(): Uint8Array;
  getCorrelationId_asB64(): string;
  setCorrelationId(value: Uint8Array | string): void;

  getTypeUrl(): string;
  setTypeUrl(value: string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): Cryptography_pb.Signature | undefined;
  setSignature(value?: Cryptography_pb.Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolMessage): ProtocolMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolMessage;
  static deserializeBinaryFromReader(message: ProtocolMessage, reader: jspb.BinaryReader): ProtocolMessage;
}

export namespace ProtocolMessage {
  export type AsObject = {
    peerId?: Peer_pb.PeerId.AsObject,
    correlationId: Uint8Array | string,
    typeUrl: string,
    value: Uint8Array | string,
    signature?: Cryptography_pb.Signature.AsObject,
  }
}

export class TransactionBroadcast extends jspb.Message {
  hasPublicEntry(): boolean;
  clearPublicEntry(): void;
  getPublicEntry(): Transaction_pb.PublicEntry | undefined;
  setPublicEntry(value?: Transaction_pb.PublicEntry): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionBroadcast.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionBroadcast): TransactionBroadcast.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionBroadcast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionBroadcast;
  static deserializeBinaryFromReader(message: TransactionBroadcast, reader: jspb.BinaryReader): TransactionBroadcast;
}

export namespace TransactionBroadcast {
  export type AsObject = {
    publicEntry?: Transaction_pb.PublicEntry.AsObject,
  }
}

export class CandidateDeltaBroadcast extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  hasProducerId(): boolean;
  clearProducerId(): void;
  getProducerId(): Peer_pb.PeerId | undefined;
  setProducerId(value?: Peer_pb.PeerId): void;

  getPreviousDeltaDfsHash(): Uint8Array | string;
  getPreviousDeltaDfsHash_asU8(): Uint8Array;
  getPreviousDeltaDfsHash_asB64(): string;
  setPreviousDeltaDfsHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandidateDeltaBroadcast.AsObject;
  static toObject(includeInstance: boolean, msg: CandidateDeltaBroadcast): CandidateDeltaBroadcast.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandidateDeltaBroadcast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandidateDeltaBroadcast;
  static deserializeBinaryFromReader(message: CandidateDeltaBroadcast, reader: jspb.BinaryReader): CandidateDeltaBroadcast;
}

export namespace CandidateDeltaBroadcast {
  export type AsObject = {
    hash: Uint8Array | string,
    producerId?: Peer_pb.PeerId.AsObject,
    previousDeltaDfsHash: Uint8Array | string,
  }
}

export class FavouriteDeltaBroadcast extends jspb.Message {
  hasCandidate(): boolean;
  clearCandidate(): void;
  getCandidate(): CandidateDeltaBroadcast | undefined;
  setCandidate(value?: CandidateDeltaBroadcast): void;

  hasVoterId(): boolean;
  clearVoterId(): void;
  getVoterId(): Peer_pb.PeerId | undefined;
  setVoterId(value?: Peer_pb.PeerId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FavouriteDeltaBroadcast.AsObject;
  static toObject(includeInstance: boolean, msg: FavouriteDeltaBroadcast): FavouriteDeltaBroadcast.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FavouriteDeltaBroadcast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FavouriteDeltaBroadcast;
  static deserializeBinaryFromReader(message: FavouriteDeltaBroadcast, reader: jspb.BinaryReader): FavouriteDeltaBroadcast;
}

export namespace FavouriteDeltaBroadcast {
  export type AsObject = {
    candidate?: CandidateDeltaBroadcast.AsObject,
    voterId?: Peer_pb.PeerId.AsObject,
  }
}

export class DeltaDfsHashBroadcast extends jspb.Message {
  getDeltaDfsHash(): Uint8Array | string;
  getDeltaDfsHash_asU8(): Uint8Array;
  getDeltaDfsHash_asB64(): string;
  setDeltaDfsHash(value: Uint8Array | string): void;

  getPreviousDeltaDfsHash(): Uint8Array | string;
  getPreviousDeltaDfsHash_asU8(): Uint8Array;
  getPreviousDeltaDfsHash_asB64(): string;
  setPreviousDeltaDfsHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeltaDfsHashBroadcast.AsObject;
  static toObject(includeInstance: boolean, msg: DeltaDfsHashBroadcast): DeltaDfsHashBroadcast.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeltaDfsHashBroadcast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeltaDfsHashBroadcast;
  static deserializeBinaryFromReader(message: DeltaDfsHashBroadcast, reader: jspb.BinaryReader): DeltaDfsHashBroadcast;
}

export namespace DeltaDfsHashBroadcast {
  export type AsObject = {
    deltaDfsHash: Uint8Array | string,
    previousDeltaDfsHash: Uint8Array | string,
  }
}

