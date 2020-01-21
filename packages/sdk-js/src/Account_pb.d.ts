// package: Catalyst.Protocol.Account
// file: Account.proto

import * as jspb from "google-protobuf";
import * as Cryptography_pb from "./Cryptography_pb";
import * as Network_pb from "./Network_pb";

export class Address extends jspb.Message {
  getNetworkType(): Network_pb.NetworkTypeMap[keyof Network_pb.NetworkTypeMap];
  setNetworkType(value: Network_pb.NetworkTypeMap[keyof Network_pb.NetworkTypeMap]): void;

  getAccountType(): AccountTypeMap[keyof AccountTypeMap];
  setAccountType(value: AccountTypeMap[keyof AccountTypeMap]): void;

  getPublicKeyHash(): Uint8Array | string;
  getPublicKeyHash_asU8(): Uint8Array;
  getPublicKeyHash_asB64(): string;
  setPublicKeyHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    networkType: Network_pb.NetworkTypeMap[keyof Network_pb.NetworkTypeMap],
    accountType: AccountTypeMap[keyof AccountTypeMap],
    publicKeyHash: Uint8Array | string,
  }
}

export interface AccountTypeMap {
  ACCOUNT_TYPE_UNKNOWN: 0;
  PUBLIC_ACCOUNT: 8;
  CONFIDENTIAL_ACCOUNT: 16;
  SMART_CONTRACT_ACCOUNT: 24;
}

export const AccountType: AccountTypeMap;

