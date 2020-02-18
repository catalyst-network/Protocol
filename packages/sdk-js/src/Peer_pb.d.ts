// package: Catalyst.Protocol.Peer
// file: Peer.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class PeerId extends jspb.Message {
  getIp(): Uint8Array | string;
  getIp_asU8(): Uint8Array;
  getIp_asB64(): string;
  setIp(value: Uint8Array | string): void;

  getPort(): number;
  setPort(value: number): void;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerId.AsObject;
  static toObject(includeInstance: boolean, msg: PeerId): PeerId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerId;
  static deserializeBinaryFromReader(message: PeerId, reader: jspb.BinaryReader): PeerId;
}

export namespace PeerId {
  export type AsObject = {
    ip: Uint8Array | string,
    port: number,
    publicKey: Uint8Array | string,
  }
}

export class PeerInfo extends jspb.Message {
  hasPeerId(): boolean;
  clearPeerId(): void;
  getPeerId(): PeerId | undefined;
  setPeerId(value?: PeerId): void;

  getReputation(): number;
  setReputation(value: number): void;

  getIsBlacklisted(): boolean;
  setIsBlacklisted(value: boolean): void;

  getIsUnreachable(): boolean;
  setIsUnreachable(value: boolean): void;

  hasInactiveFor(): boolean;
  clearInactiveFor(): void;
  getInactiveFor(): google_protobuf_duration_pb.Duration | undefined;
  setInactiveFor(value?: google_protobuf_duration_pb.Duration): void;

  hasLastSeen(): boolean;
  clearLastSeen(): void;
  getLastSeen(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeen(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasModified(): boolean;
  clearModified(): void;
  getModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModified(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PeerInfo): PeerInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerInfo;
  static deserializeBinaryFromReader(message: PeerInfo, reader: jspb.BinaryReader): PeerInfo;
}

export namespace PeerInfo {
  export type AsObject = {
    peerId?: PeerId.AsObject,
    reputation: number,
    isBlacklisted: boolean,
    isUnreachable: boolean,
    inactiveFor?: google_protobuf_duration_pb.Duration.AsObject,
    lastSeen?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

