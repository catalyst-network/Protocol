// package: Catalyst.Protocol.Rpc.Node
// file: Rpc.proto

import * as jspb from "google-protobuf";
import * as Peer_pb from "./Peer_pb";
import * as Cryptography_pb from "./Cryptography_pb";
import * as Deltas_pb from "./Deltas_pb";
import * as Wire_pb from "./Wire_pb";
import * as Transaction_pb from "./Transaction_pb";

export class VersionRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VersionRequest): VersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionRequest;
  static deserializeBinaryFromReader(message: VersionRequest, reader: jspb.BinaryReader): VersionRequest;
}

export namespace VersionRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class VersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VersionResponse): VersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionResponse;
  static deserializeBinaryFromReader(message: VersionResponse, reader: jspb.BinaryReader): VersionResponse;
}

export namespace VersionResponse {
  export type AsObject = {
    version: string,
  }
}

export class GetInfoRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
  static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class GetInfoResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoResponse): GetInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoResponse;
  static deserializeBinaryFromReader(message: GetInfoResponse, reader: jspb.BinaryReader): GetInfoResponse;
}

export namespace GetInfoResponse {
  export type AsObject = {
    query: string,
  }
}

export class CreateWalletRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWalletRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWalletRequest): CreateWalletRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWalletRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWalletRequest;
  static deserializeBinaryFromReader(message: CreateWalletRequest, reader: jspb.BinaryReader): CreateWalletRequest;
}

export namespace CreateWalletRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class CreateWalletResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWalletResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWalletResponse): CreateWalletResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWalletResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWalletResponse;
  static deserializeBinaryFromReader(message: CreateWalletResponse, reader: jspb.BinaryReader): CreateWalletResponse;
}

export namespace CreateWalletResponse {
  export type AsObject = {
    query: string,
  }
}

export class ListWalletRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWalletRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWalletRequest): ListWalletRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWalletRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWalletRequest;
  static deserializeBinaryFromReader(message: ListWalletRequest, reader: jspb.BinaryReader): ListWalletRequest;
}

export namespace ListWalletRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class ListWalletResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWalletResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWalletResponse): ListWalletResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWalletResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWalletResponse;
  static deserializeBinaryFromReader(message: ListWalletResponse, reader: jspb.BinaryReader): ListWalletResponse;
}

export namespace ListWalletResponse {
  export type AsObject = {
    query: string,
  }
}

export class CreateAddressRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAddressRequest): CreateAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAddressRequest;
  static deserializeBinaryFromReader(message: CreateAddressRequest, reader: jspb.BinaryReader): CreateAddressRequest;
}

export namespace CreateAddressRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class CreateAddressResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAddressResponse): CreateAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAddressResponse;
  static deserializeBinaryFromReader(message: CreateAddressResponse, reader: jspb.BinaryReader): CreateAddressResponse;
}

export namespace CreateAddressResponse {
  export type AsObject = {
    query: string,
  }
}

export class GetAddressRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressRequest): GetAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressRequest;
  static deserializeBinaryFromReader(message: GetAddressRequest, reader: jspb.BinaryReader): GetAddressRequest;
}

export namespace GetAddressRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class GetAddressResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressResponse): GetAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressResponse;
  static deserializeBinaryFromReader(message: GetAddressResponse, reader: jspb.BinaryReader): GetAddressResponse;
}

export namespace GetAddressResponse {
  export type AsObject = {
    query: string,
  }
}

export class ListAddressRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAddressRequest): ListAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAddressRequest;
  static deserializeBinaryFromReader(message: ListAddressRequest, reader: jspb.BinaryReader): ListAddressRequest;
}

export namespace ListAddressRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class ListAddressResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAddressResponse): ListAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAddressResponse;
  static deserializeBinaryFromReader(message: ListAddressResponse, reader: jspb.BinaryReader): ListAddressResponse;
}

export namespace ListAddressResponse {
  export type AsObject = {
    query: string,
  }
}

export class ValidateAddressRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateAddressRequest): ValidateAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateAddressRequest;
  static deserializeBinaryFromReader(message: ValidateAddressRequest, reader: jspb.BinaryReader): ValidateAddressRequest;
}

export namespace ValidateAddressRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class ValidateAddressResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateAddressResponse): ValidateAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidateAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateAddressResponse;
  static deserializeBinaryFromReader(message: ValidateAddressResponse, reader: jspb.BinaryReader): ValidateAddressResponse;
}

export namespace ValidateAddressResponse {
  export type AsObject = {
    query: string,
  }
}

export class GetBalanceRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalanceRequest): GetBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceRequest;
  static deserializeBinaryFromReader(message: GetBalanceRequest, reader: jspb.BinaryReader): GetBalanceRequest;
}

export namespace GetBalanceRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class GetBalanceResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalanceResponse): GetBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceResponse;
  static deserializeBinaryFromReader(message: GetBalanceResponse, reader: jspb.BinaryReader): GetBalanceResponse;
}

export namespace GetBalanceResponse {
  export type AsObject = {
    query: string,
  }
}

export class CreateRawTransactionRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRawTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRawTransactionRequest): CreateRawTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRawTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRawTransactionRequest;
  static deserializeBinaryFromReader(message: CreateRawTransactionRequest, reader: jspb.BinaryReader): CreateRawTransactionRequest;
}

export namespace CreateRawTransactionRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class CreateRawTransactionResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRawTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRawTransactionResponse): CreateRawTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRawTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRawTransactionResponse;
  static deserializeBinaryFromReader(message: CreateRawTransactionResponse, reader: jspb.BinaryReader): CreateRawTransactionResponse;
}

export namespace CreateRawTransactionResponse {
  export type AsObject = {
    query: string,
  }
}

export class SignRawTransactionRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignRawTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignRawTransactionRequest): SignRawTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignRawTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignRawTransactionRequest;
  static deserializeBinaryFromReader(message: SignRawTransactionRequest, reader: jspb.BinaryReader): SignRawTransactionRequest;
}

export namespace SignRawTransactionRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class SignRawTransactionResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignRawTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignRawTransactionResponse): SignRawTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignRawTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignRawTransactionResponse;
  static deserializeBinaryFromReader(message: SignRawTransactionResponse, reader: jspb.BinaryReader): SignRawTransactionResponse;
}

export namespace SignRawTransactionResponse {
  export type AsObject = {
    query: string,
  }
}

export class DecodeRawTransactionRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecodeRawTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecodeRawTransactionRequest): DecodeRawTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecodeRawTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecodeRawTransactionRequest;
  static deserializeBinaryFromReader(message: DecodeRawTransactionRequest, reader: jspb.BinaryReader): DecodeRawTransactionRequest;
}

export namespace DecodeRawTransactionRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class DecodeRawTransactionResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecodeRawTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DecodeRawTransactionResponse): DecodeRawTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecodeRawTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecodeRawTransactionResponse;
  static deserializeBinaryFromReader(message: DecodeRawTransactionResponse, reader: jspb.BinaryReader): DecodeRawTransactionResponse;
}

export namespace DecodeRawTransactionResponse {
  export type AsObject = {
    query: string,
  }
}

export class BroadcastRawTransactionRequest extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): Wire_pb.TransactionBroadcast | undefined;
  setTransaction(value?: Wire_pb.TransactionBroadcast): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastRawTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastRawTransactionRequest): BroadcastRawTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastRawTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastRawTransactionRequest;
  static deserializeBinaryFromReader(message: BroadcastRawTransactionRequest, reader: jspb.BinaryReader): BroadcastRawTransactionRequest;
}

export namespace BroadcastRawTransactionRequest {
  export type AsObject = {
    transaction?: Wire_pb.TransactionBroadcast.AsObject,
  }
}

export class BroadcastRawTransactionResponse extends jspb.Message {
  getResponseCode(): ResponseCodeMap[keyof ResponseCodeMap];
  setResponseCode(value: ResponseCodeMap[keyof ResponseCodeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastRawTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastRawTransactionResponse): BroadcastRawTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastRawTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastRawTransactionResponse;
  static deserializeBinaryFromReader(message: BroadcastRawTransactionResponse, reader: jspb.BinaryReader): BroadcastRawTransactionResponse;
}

export namespace BroadcastRawTransactionResponse {
  export type AsObject = {
    responseCode: ResponseCodeMap[keyof ResponseCodeMap],
  }
}

export class SendToRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendToRequest): SendToRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendToRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToRequest;
  static deserializeBinaryFromReader(message: SendToRequest, reader: jspb.BinaryReader): SendToRequest;
}

export namespace SendToRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class SendToResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendToResponse): SendToResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendToResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToResponse;
  static deserializeBinaryFromReader(message: SendToResponse, reader: jspb.BinaryReader): SendToResponse;
}

export namespace SendToResponse {
  export type AsObject = {
    query: string,
  }
}

export class SendToFromRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToFromRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendToFromRequest): SendToFromRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendToFromRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToFromRequest;
  static deserializeBinaryFromReader(message: SendToFromRequest, reader: jspb.BinaryReader): SendToFromRequest;
}

export namespace SendToFromRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class SendToFromResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendToFromResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendToFromResponse): SendToFromResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendToFromResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendToFromResponse;
  static deserializeBinaryFromReader(message: SendToFromResponse, reader: jspb.BinaryReader): SendToFromResponse;
}

export namespace SendToFromResponse {
  export type AsObject = {
    query: string,
  }
}

export class SendManyRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendManyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendManyRequest): SendManyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendManyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendManyRequest;
  static deserializeBinaryFromReader(message: SendManyRequest, reader: jspb.BinaryReader): SendManyRequest;
}

export namespace SendManyRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class SendManyResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendManyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendManyResponse): SendManyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendManyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendManyResponse;
  static deserializeBinaryFromReader(message: SendManyResponse, reader: jspb.BinaryReader): SendManyResponse;
}

export namespace SendManyResponse {
  export type AsObject = {
    query: string,
  }
}

export class SendFromManyRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFromManyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendFromManyRequest): SendFromManyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendFromManyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFromManyRequest;
  static deserializeBinaryFromReader(message: SendFromManyRequest, reader: jspb.BinaryReader): SendFromManyRequest;
}

export namespace SendFromManyRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class SendFromManyResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFromManyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendFromManyResponse): SendFromManyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendFromManyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFromManyResponse;
  static deserializeBinaryFromReader(message: SendFromManyResponse, reader: jspb.BinaryReader): SendFromManyResponse;
}

export namespace SendFromManyResponse {
  export type AsObject = {
    query: string,
  }
}

export class AddNodeRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddNodeRequest): AddNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddNodeRequest;
  static deserializeBinaryFromReader(message: AddNodeRequest, reader: jspb.BinaryReader): AddNodeRequest;
}

export namespace AddNodeRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class AddNodeResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddNodeResponse): AddNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddNodeResponse;
  static deserializeBinaryFromReader(message: AddNodeResponse, reader: jspb.BinaryReader): AddNodeResponse;
}

export namespace AddNodeResponse {
  export type AsObject = {
    query: string,
  }
}

export class GetPeerListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerListRequest): GetPeerListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerListRequest;
  static deserializeBinaryFromReader(message: GetPeerListRequest, reader: jspb.BinaryReader): GetPeerListRequest;
}

export namespace GetPeerListRequest {
  export type AsObject = {
  }
}

export class GetPeerListResponse extends jspb.Message {
  clearPeersList(): void;
  getPeersList(): Array<Peer_pb.PeerId>;
  setPeersList(value: Array<Peer_pb.PeerId>): void;
  addPeers(value?: Peer_pb.PeerId, index?: number): Peer_pb.PeerId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerListResponse): GetPeerListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerListResponse;
  static deserializeBinaryFromReader(message: GetPeerListResponse, reader: jspb.BinaryReader): GetPeerListResponse;
}

export namespace GetPeerListResponse {
  export type AsObject = {
    peersList: Array<Peer_pb.PeerId.AsObject>,
  }
}

export class GetPeerReputationRequest extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  getIp(): Uint8Array | string;
  getIp_asU8(): Uint8Array;
  getIp_asB64(): string;
  setIp(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerReputationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerReputationRequest): GetPeerReputationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerReputationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerReputationRequest;
  static deserializeBinaryFromReader(message: GetPeerReputationRequest, reader: jspb.BinaryReader): GetPeerReputationRequest;
}

export namespace GetPeerReputationRequest {
  export type AsObject = {
    publicKey: Uint8Array | string,
    ip: Uint8Array | string,
  }
}

export class GetPeerReputationResponse extends jspb.Message {
  getReputation(): number;
  setReputation(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerReputationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerReputationResponse): GetPeerReputationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerReputationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerReputationResponse;
  static deserializeBinaryFromReader(message: GetPeerReputationResponse, reader: jspb.BinaryReader): GetPeerReputationResponse;
}

export namespace GetPeerReputationResponse {
  export type AsObject = {
    reputation: number,
  }
}

export class SetPeerBlacklistRequest extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  getIp(): Uint8Array | string;
  getIp_asU8(): Uint8Array;
  getIp_asB64(): string;
  setIp(value: Uint8Array | string): void;

  getBlacklist(): boolean;
  setBlacklist(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPeerBlacklistRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPeerBlacklistRequest): SetPeerBlacklistRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPeerBlacklistRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPeerBlacklistRequest;
  static deserializeBinaryFromReader(message: SetPeerBlacklistRequest, reader: jspb.BinaryReader): SetPeerBlacklistRequest;
}

export namespace SetPeerBlacklistRequest {
  export type AsObject = {
    publicKey: Uint8Array | string,
    ip: Uint8Array | string,
    blacklist: boolean,
  }
}

export class SetPeerBlacklistResponse extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  getIp(): Uint8Array | string;
  getIp_asU8(): Uint8Array;
  getIp_asB64(): string;
  setIp(value: Uint8Array | string): void;

  getBlacklist(): boolean;
  setBlacklist(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPeerBlacklistResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPeerBlacklistResponse): SetPeerBlacklistResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPeerBlacklistResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPeerBlacklistResponse;
  static deserializeBinaryFromReader(message: SetPeerBlacklistResponse, reader: jspb.BinaryReader): SetPeerBlacklistResponse;
}

export namespace SetPeerBlacklistResponse {
  export type AsObject = {
    publicKey: Uint8Array | string,
    ip: Uint8Array | string,
    blacklist: boolean,
  }
}

export class GetPeerInfoRequest extends jspb.Message {
  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  getIp(): Uint8Array | string;
  getIp_asU8(): Uint8Array;
  getIp_asB64(): string;
  setIp(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerInfoRequest): GetPeerInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerInfoRequest;
  static deserializeBinaryFromReader(message: GetPeerInfoRequest, reader: jspb.BinaryReader): GetPeerInfoRequest;
}

export namespace GetPeerInfoRequest {
  export type AsObject = {
    publicKey: Uint8Array | string,
    ip: Uint8Array | string,
  }
}

export class GetPeerInfoResponse extends jspb.Message {
  clearPeerInfoList(): void;
  getPeerInfoList(): Array<Peer_pb.PeerInfo>;
  setPeerInfoList(value: Array<Peer_pb.PeerInfo>): void;
  addPeerInfo(value?: Peer_pb.PeerInfo, index?: number): Peer_pb.PeerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerInfoResponse): GetPeerInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerInfoResponse;
  static deserializeBinaryFromReader(message: GetPeerInfoResponse, reader: jspb.BinaryReader): GetPeerInfoResponse;
}

export namespace GetPeerInfoResponse {
  export type AsObject = {
    peerInfoList: Array<Peer_pb.PeerInfo.AsObject>,
  }
}

export class GetConnectionCountRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionCountRequest): GetConnectionCountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectionCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionCountRequest;
  static deserializeBinaryFromReader(message: GetConnectionCountRequest, reader: jspb.BinaryReader): GetConnectionCountRequest;
}

export namespace GetConnectionCountRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class GetConnectionCountResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionCountResponse): GetConnectionCountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectionCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionCountResponse;
  static deserializeBinaryFromReader(message: GetConnectionCountResponse, reader: jspb.BinaryReader): GetConnectionCountResponse;
}

export namespace GetConnectionCountResponse {
  export type AsObject = {
    query: string,
  }
}

export class GetDeltaRequest extends jspb.Message {
  getDeltaDfsHash(): Uint8Array | string;
  getDeltaDfsHash_asU8(): Uint8Array;
  getDeltaDfsHash_asB64(): string;
  setDeltaDfsHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeltaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeltaRequest): GetDeltaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeltaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeltaRequest;
  static deserializeBinaryFromReader(message: GetDeltaRequest, reader: jspb.BinaryReader): GetDeltaRequest;
}

export namespace GetDeltaRequest {
  export type AsObject = {
    deltaDfsHash: Uint8Array | string,
  }
}

export class GetDeltaResponse extends jspb.Message {
  hasDelta(): boolean;
  clearDelta(): void;
  getDelta(): Deltas_pb.Delta | undefined;
  setDelta(value?: Deltas_pb.Delta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeltaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeltaResponse): GetDeltaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeltaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeltaResponse;
  static deserializeBinaryFromReader(message: GetDeltaResponse, reader: jspb.BinaryReader): GetDeltaResponse;
}

export namespace GetDeltaResponse {
  export type AsObject = {
    delta?: Deltas_pb.Delta.AsObject,
  }
}

export class GetMempoolRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolRequest): GetMempoolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMempoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolRequest;
  static deserializeBinaryFromReader(message: GetMempoolRequest, reader: jspb.BinaryReader): GetMempoolRequest;
}

export namespace GetMempoolRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class GetMempoolResponse extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<Transaction_pb.PublicEntry>;
  setTransactionsList(value: Array<Transaction_pb.PublicEntry>): void;
  addTransactions(value?: Transaction_pb.PublicEntry, index?: number): Transaction_pb.PublicEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolResponse): GetMempoolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMempoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolResponse;
  static deserializeBinaryFromReader(message: GetMempoolResponse, reader: jspb.BinaryReader): GetMempoolResponse;
}

export namespace GetMempoolResponse {
  export type AsObject = {
    transactionsList: Array<Transaction_pb.PublicEntry.AsObject>,
  }
}

export class SignMessageRequest extends jspb.Message {
  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): void;

  getKeyId(): string;
  setKeyId(value: string): void;

  hasSigningContext(): boolean;
  clearSigningContext(): void;
  getSigningContext(): Cryptography_pb.SigningContext | undefined;
  setSigningContext(value?: Cryptography_pb.SigningContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignMessageRequest): SignMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignMessageRequest;
  static deserializeBinaryFromReader(message: SignMessageRequest, reader: jspb.BinaryReader): SignMessageRequest;
}

export namespace SignMessageRequest {
  export type AsObject = {
    message: Uint8Array | string,
    keyId: string,
    signingContext?: Cryptography_pb.SigningContext.AsObject,
  }
}

export class SignMessageResponse extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  getOriginalMessage(): Uint8Array | string;
  getOriginalMessage_asU8(): Uint8Array;
  getOriginalMessage_asB64(): string;
  setOriginalMessage(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignMessageResponse): SignMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignMessageResponse;
  static deserializeBinaryFromReader(message: SignMessageResponse, reader: jspb.BinaryReader): SignMessageResponse;
}

export namespace SignMessageResponse {
  export type AsObject = {
    signature: Uint8Array | string,
    publicKey: Uint8Array | string,
    originalMessage: Uint8Array | string,
  }
}

export class VerifyMessageRequest extends jspb.Message {
  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): void;

  hasSigningContext(): boolean;
  clearSigningContext(): void;
  getSigningContext(): Cryptography_pb.SigningContext | undefined;
  setSigningContext(value?: Cryptography_pb.SigningContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyMessageRequest): VerifyMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyMessageRequest;
  static deserializeBinaryFromReader(message: VerifyMessageRequest, reader: jspb.BinaryReader): VerifyMessageRequest;
}

export namespace VerifyMessageRequest {
  export type AsObject = {
    signature: Uint8Array | string,
    publicKey: Uint8Array | string,
    message: Uint8Array | string,
    signingContext?: Cryptography_pb.SigningContext.AsObject,
  }
}

export class VerifyMessageResponse extends jspb.Message {
  getIsSignedByKey(): boolean;
  setIsSignedByKey(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyMessageResponse): VerifyMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyMessageResponse;
  static deserializeBinaryFromReader(message: VerifyMessageResponse, reader: jspb.BinaryReader): VerifyMessageResponse;
}

export namespace VerifyMessageResponse {
  export type AsObject = {
    isSignedByKey: boolean,
  }
}

export class ServiceStatusRequest extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceStatusRequest): ServiceStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceStatusRequest;
  static deserializeBinaryFromReader(message: ServiceStatusRequest, reader: jspb.BinaryReader): ServiceStatusRequest;
}

export namespace ServiceStatusRequest {
  export type AsObject = {
    query: boolean,
  }
}

export class ServiceStatusResponse extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceStatusResponse): ServiceStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceStatusResponse;
  static deserializeBinaryFromReader(message: ServiceStatusResponse, reader: jspb.BinaryReader): ServiceStatusResponse;
}

export namespace ServiceStatusResponse {
  export type AsObject = {
    query: string,
  }
}

export class AddFileToDfsRequest extends jspb.Message {
  getFileSize(): number;
  setFileSize(value: number): void;

  getFileName(): string;
  setFileName(value: string): void;

  getNode(): string;
  setNode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddFileToDfsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddFileToDfsRequest): AddFileToDfsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddFileToDfsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddFileToDfsRequest;
  static deserializeBinaryFromReader(message: AddFileToDfsRequest, reader: jspb.BinaryReader): AddFileToDfsRequest;
}

export namespace AddFileToDfsRequest {
  export type AsObject = {
    fileSize: number,
    fileName: string,
    node: string,
  }
}

export class AddFileToDfsResponse extends jspb.Message {
  getResponseCode(): Uint8Array | string;
  getResponseCode_asU8(): Uint8Array;
  getResponseCode_asB64(): string;
  setResponseCode(value: Uint8Array | string): void;

  getDfsHash(): string;
  setDfsHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddFileToDfsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddFileToDfsResponse): AddFileToDfsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddFileToDfsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddFileToDfsResponse;
  static deserializeBinaryFromReader(message: AddFileToDfsResponse, reader: jspb.BinaryReader): AddFileToDfsResponse;
}

export namespace AddFileToDfsResponse {
  export type AsObject = {
    responseCode: Uint8Array | string,
    dfsHash: string,
  }
}

export class TransferFileBytesRequest extends jspb.Message {
  getChunkId(): number;
  setChunkId(value: number): void;

  getChunkBytes(): Uint8Array | string;
  getChunkBytes_asU8(): Uint8Array;
  getChunkBytes_asB64(): string;
  setChunkBytes(value: Uint8Array | string): void;

  getCorrelationFileName(): Uint8Array | string;
  getCorrelationFileName_asU8(): Uint8Array;
  getCorrelationFileName_asB64(): string;
  setCorrelationFileName(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferFileBytesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferFileBytesRequest): TransferFileBytesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferFileBytesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferFileBytesRequest;
  static deserializeBinaryFromReader(message: TransferFileBytesRequest, reader: jspb.BinaryReader): TransferFileBytesRequest;
}

export namespace TransferFileBytesRequest {
  export type AsObject = {
    chunkId: number,
    chunkBytes: Uint8Array | string,
    correlationFileName: Uint8Array | string,
  }
}

export class TransferFileBytesResponse extends jspb.Message {
  getResponseCode(): Uint8Array | string;
  getResponseCode_asU8(): Uint8Array;
  getResponseCode_asB64(): string;
  setResponseCode(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferFileBytesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferFileBytesResponse): TransferFileBytesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferFileBytesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferFileBytesResponse;
  static deserializeBinaryFromReader(message: TransferFileBytesResponse, reader: jspb.BinaryReader): TransferFileBytesResponse;
}

export namespace TransferFileBytesResponse {
  export type AsObject = {
    responseCode: Uint8Array | string,
  }
}

export class RemovePeerRequest extends jspb.Message {
  getPeerIp(): Uint8Array | string;
  getPeerIp_asU8(): Uint8Array;
  getPeerIp_asB64(): string;
  setPeerIp(value: Uint8Array | string): void;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePeerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePeerRequest): RemovePeerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePeerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePeerRequest;
  static deserializeBinaryFromReader(message: RemovePeerRequest, reader: jspb.BinaryReader): RemovePeerRequest;
}

export namespace RemovePeerRequest {
  export type AsObject = {
    peerIp: Uint8Array | string,
    publicKey: Uint8Array | string,
  }
}

export class RemovePeerResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemovePeerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemovePeerResponse): RemovePeerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemovePeerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemovePeerResponse;
  static deserializeBinaryFromReader(message: RemovePeerResponse, reader: jspb.BinaryReader): RemovePeerResponse;
}

export namespace RemovePeerResponse {
  export type AsObject = {
    deletedCount: number,
  }
}

export class GetPeerCountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerCountRequest): GetPeerCountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerCountRequest;
  static deserializeBinaryFromReader(message: GetPeerCountRequest, reader: jspb.BinaryReader): GetPeerCountRequest;
}

export namespace GetPeerCountRequest {
  export type AsObject = {
  }
}

export class GetPeerCountResponse extends jspb.Message {
  getPeerCount(): number;
  setPeerCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerCountResponse): GetPeerCountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerCountResponse;
  static deserializeBinaryFromReader(message: GetPeerCountResponse, reader: jspb.BinaryReader): GetPeerCountResponse;
}

export namespace GetPeerCountResponse {
  export type AsObject = {
    peerCount: number,
  }
}

export class GetFileFromDfsRequest extends jspb.Message {
  getDfsHash(): string;
  setDfsHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileFromDfsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileFromDfsRequest): GetFileFromDfsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileFromDfsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileFromDfsRequest;
  static deserializeBinaryFromReader(message: GetFileFromDfsRequest, reader: jspb.BinaryReader): GetFileFromDfsRequest;
}

export namespace GetFileFromDfsRequest {
  export type AsObject = {
    dfsHash: string,
  }
}

export class GetFileFromDfsResponse extends jspb.Message {
  getFileSize(): number;
  setFileSize(value: number): void;

  getResponseCode(): Uint8Array | string;
  getResponseCode_asU8(): Uint8Array;
  getResponseCode_asB64(): string;
  setResponseCode(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileFromDfsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileFromDfsResponse): GetFileFromDfsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileFromDfsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileFromDfsResponse;
  static deserializeBinaryFromReader(message: GetFileFromDfsResponse, reader: jspb.BinaryReader): GetFileFromDfsResponse;
}

export namespace GetFileFromDfsResponse {
  export type AsObject = {
    fileSize: number,
    responseCode: Uint8Array | string,
  }
}

export class SetPeerDataFolderRequest extends jspb.Message {
  getDataFolder(): string;
  setDataFolder(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPeerDataFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPeerDataFolderRequest): SetPeerDataFolderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPeerDataFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPeerDataFolderRequest;
  static deserializeBinaryFromReader(message: SetPeerDataFolderRequest, reader: jspb.BinaryReader): SetPeerDataFolderRequest;
}

export namespace SetPeerDataFolderRequest {
  export type AsObject = {
    dataFolder: string,
  }
}

export class SetPeerDataFolderResponse extends jspb.Message {
  getQuery(): boolean;
  setQuery(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPeerDataFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetPeerDataFolderResponse): SetPeerDataFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPeerDataFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPeerDataFolderResponse;
  static deserializeBinaryFromReader(message: SetPeerDataFolderResponse, reader: jspb.BinaryReader): SetPeerDataFolderResponse;
}

export namespace SetPeerDataFolderResponse {
  export type AsObject = {
    query: boolean,
  }
}

export interface ResponseCodeMap {
  PENDING: 0;
  SUCCESSFUL: 1;
  ERROR: 2;
  FINISHED: 3;
  EXPIRED: 4;
  FAILED: 5;
  EXISTS: 6;
}

export const ResponseCode: ResponseCodeMap;

