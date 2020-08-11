// package: Catalyst.Protocol.IPPN
// file: IPPN.proto

import * as jspb from "google-protobuf";
import * as Peer_pb from "./Peer_pb";
import * as Deltas_pb from "./Deltas_pb";

export class PeerNeighborsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerNeighborsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PeerNeighborsRequest): PeerNeighborsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerNeighborsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerNeighborsRequest;
  static deserializeBinaryFromReader(message: PeerNeighborsRequest, reader: jspb.BinaryReader): PeerNeighborsRequest;
}

export namespace PeerNeighborsRequest {
  export type AsObject = {
  }
}

export class PeerNeighborsResponse extends jspb.Message {
  clearPeersList(): void;
  getPeersList(): Array<Peer_pb.PeerId>;
  setPeersList(value: Array<Peer_pb.PeerId>): void;
  addPeers(value?: Peer_pb.PeerId, index?: number): Peer_pb.PeerId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerNeighborsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PeerNeighborsResponse): PeerNeighborsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerNeighborsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerNeighborsResponse;
  static deserializeBinaryFromReader(message: PeerNeighborsResponse, reader: jspb.BinaryReader): PeerNeighborsResponse;
}

export namespace PeerNeighborsResponse {
  export type AsObject = {
    peersList: Array<Peer_pb.PeerId.AsObject>,
  }
}

export class PingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
  }
}

export class PingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
  }
}

export class LatestDeltaHashRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LatestDeltaHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LatestDeltaHashRequest): LatestDeltaHashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LatestDeltaHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LatestDeltaHashRequest;
  static deserializeBinaryFromReader(message: LatestDeltaHashRequest, reader: jspb.BinaryReader): LatestDeltaHashRequest;
}

export namespace LatestDeltaHashRequest {
  export type AsObject = {
  }
}

export class LatestDeltaHashResponse extends jspb.Message {
  getIssync(): boolean;
  setIssync(value: boolean): void;

  hasDeltaindex(): boolean;
  clearDeltaindex(): void;
  getDeltaindex(): Deltas_pb.DeltaIndex | undefined;
  setDeltaindex(value?: Deltas_pb.DeltaIndex): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LatestDeltaHashResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LatestDeltaHashResponse): LatestDeltaHashResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LatestDeltaHashResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LatestDeltaHashResponse;
  static deserializeBinaryFromReader(message: LatestDeltaHashResponse, reader: jspb.BinaryReader): LatestDeltaHashResponse;
}

export namespace LatestDeltaHashResponse {
  export type AsObject = {
    issync: boolean,
    deltaindex?: Deltas_pb.DeltaIndex.AsObject,
  }
}

export class DeltaHistoryRequest extends jspb.Message {
  getRange(): number;
  setRange(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeltaHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeltaHistoryRequest): DeltaHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeltaHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeltaHistoryRequest;
  static deserializeBinaryFromReader(message: DeltaHistoryRequest, reader: jspb.BinaryReader): DeltaHistoryRequest;
}

export namespace DeltaHistoryRequest {
  export type AsObject = {
    range: number,
    height: number,
  }
}

export class DeltaHistoryResponse extends jspb.Message {
  clearDeltaindexList(): void;
  getDeltaindexList(): Array<Deltas_pb.DeltaIndex>;
  setDeltaindexList(value: Array<Deltas_pb.DeltaIndex>): void;
  addDeltaindex(value?: Deltas_pb.DeltaIndex, index?: number): Deltas_pb.DeltaIndex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeltaHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeltaHistoryResponse): DeltaHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeltaHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeltaHistoryResponse;
  static deserializeBinaryFromReader(message: DeltaHistoryResponse, reader: jspb.BinaryReader): DeltaHistoryResponse;
}

export namespace DeltaHistoryResponse {
  export type AsObject = {
    deltaindexList: Array<Deltas_pb.DeltaIndex.AsObject>,
  }
}

