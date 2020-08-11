// package: Catalyst.Protocol.Deltas
// file: Deltas.proto

import * as jspb from "google-protobuf";
import * as Transaction_pb from "./Transaction_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DeltaIndex extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getCid(): Uint8Array | string;
  getCid_asU8(): Uint8Array;
  getCid_asB64(): string;
  setCid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeltaIndex.AsObject;
  static toObject(includeInstance: boolean, msg: DeltaIndex): DeltaIndex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeltaIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeltaIndex;
  static deserializeBinaryFromReader(message: DeltaIndex, reader: jspb.BinaryReader): DeltaIndex;
}

export namespace DeltaIndex {
  export type AsObject = {
    height: number,
    cid: Uint8Array | string,
  }
}

export class Delta extends jspb.Message {
  getPreviousDeltaDfsHash(): Uint8Array | string;
  getPreviousDeltaDfsHash_asU8(): Uint8Array;
  getPreviousDeltaDfsHash_asB64(): string;
  setPreviousDeltaDfsHash(value: Uint8Array | string): void;

  getMerkleRoot(): Uint8Array | string;
  getMerkleRoot_asU8(): Uint8Array;
  getMerkleRoot_asB64(): string;
  setMerkleRoot(value: Uint8Array | string): void;

  getMerklePoda(): Uint8Array | string;
  getMerklePoda_asU8(): Uint8Array;
  getMerklePoda_asB64(): string;
  setMerklePoda(value: Uint8Array | string): void;

  hasTimeStamp(): boolean;
  clearTimeStamp(): void;
  getTimeStamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeStamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearPublicEntriesList(): void;
  getPublicEntriesList(): Array<Transaction_pb.PublicEntry>;
  setPublicEntriesList(value: Array<Transaction_pb.PublicEntry>): void;
  addPublicEntries(value?: Transaction_pb.PublicEntry, index?: number): Transaction_pb.PublicEntry;

  clearConfidentialEntriesList(): void;
  getConfidentialEntriesList(): Array<Transaction_pb.ConfidentialEntry>;
  setConfidentialEntriesList(value: Array<Transaction_pb.ConfidentialEntry>): void;
  addConfidentialEntries(value?: Transaction_pb.ConfidentialEntry, index?: number): Transaction_pb.ConfidentialEntry;

  clearCoinbaseEntriesList(): void;
  getCoinbaseEntriesList(): Array<Transaction_pb.CoinbaseEntry>;
  setCoinbaseEntriesList(value: Array<Transaction_pb.CoinbaseEntry>): void;
  addCoinbaseEntries(value?: Transaction_pb.CoinbaseEntry, index?: number): Transaction_pb.CoinbaseEntry;

  getStateRoot(): Uint8Array | string;
  getStateRoot_asU8(): Uint8Array;
  getStateRoot_asB64(): string;
  setStateRoot(value: Uint8Array | string): void;

  getDeltaNumber(): number;
  setDeltaNumber(value: number): void;

  getGasUsed(): number;
  setGasUsed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Delta.AsObject;
  static toObject(includeInstance: boolean, msg: Delta): Delta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Delta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Delta;
  static deserializeBinaryFromReader(message: Delta, reader: jspb.BinaryReader): Delta;
}

export namespace Delta {
  export type AsObject = {
    previousDeltaDfsHash: Uint8Array | string,
    merkleRoot: Uint8Array | string,
    merklePoda: Uint8Array | string,
    timeStamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    publicEntriesList: Array<Transaction_pb.PublicEntry.AsObject>,
    confidentialEntriesList: Array<Transaction_pb.ConfidentialEntry.AsObject>,
    coinbaseEntriesList: Array<Transaction_pb.CoinbaseEntry.AsObject>,
    stateRoot: Uint8Array | string,
    deltaNumber: number,
    gasUsed: number,
  }
}

