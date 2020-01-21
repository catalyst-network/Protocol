// package: Catalyst.Protocol.Cryptography
// file: Cryptography.proto

import * as jspb from "google-protobuf";
import * as Network_pb from "./Network_pb";

export class Signature extends jspb.Message {
  hasSigningContext(): boolean;
  clearSigningContext(): void;
  getSigningContext(): SigningContext | undefined;
  setSigningContext(value?: SigningContext): void;

  getRawBytes(): Uint8Array | string;
  getRawBytes_asU8(): Uint8Array;
  getRawBytes_asB64(): string;
  setRawBytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    signingContext?: SigningContext.AsObject,
    rawBytes: Uint8Array | string,
  }
}

export class SigningContext extends jspb.Message {
  getNetworkType(): Network_pb.NetworkTypeMap[keyof Network_pb.NetworkTypeMap];
  setNetworkType(value: Network_pb.NetworkTypeMap[keyof Network_pb.NetworkTypeMap]): void;

  getSignatureType(): SignatureTypeMap[keyof SignatureTypeMap];
  setSignatureType(value: SignatureTypeMap[keyof SignatureTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigningContext.AsObject;
  static toObject(includeInstance: boolean, msg: SigningContext): SigningContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SigningContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigningContext;
  static deserializeBinaryFromReader(message: SigningContext, reader: jspb.BinaryReader): SigningContext;
}

export namespace SigningContext {
  export type AsObject = {
    networkType: Network_pb.NetworkTypeMap[keyof Network_pb.NetworkTypeMap],
    signatureType: SignatureTypeMap[keyof SignatureTypeMap],
  }
}

export class SignatureBatch extends jspb.Message {
  clearSignaturesList(): void;
  getSignaturesList(): Array<Uint8Array | string>;
  getSignaturesList_asU8(): Array<Uint8Array>;
  getSignaturesList_asB64(): Array<string>;
  setSignaturesList(value: Array<Uint8Array | string>): void;
  addSignatures(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearPublicKeysList(): void;
  getPublicKeysList(): Array<Uint8Array | string>;
  getPublicKeysList_asU8(): Array<Uint8Array>;
  getPublicKeysList_asB64(): Array<string>;
  setPublicKeysList(value: Array<Uint8Array | string>): void;
  addPublicKeys(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearMessagesList(): void;
  getMessagesList(): Array<Uint8Array | string>;
  getMessagesList_asU8(): Array<Uint8Array>;
  getMessagesList_asB64(): Array<string>;
  setMessagesList(value: Array<Uint8Array | string>): void;
  addMessages(value: Uint8Array | string, index?: number): Uint8Array | string;

  getContext(): Uint8Array | string;
  getContext_asU8(): Uint8Array;
  getContext_asB64(): string;
  setContext(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureBatch.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureBatch): SignatureBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureBatch;
  static deserializeBinaryFromReader(message: SignatureBatch, reader: jspb.BinaryReader): SignatureBatch;
}

export namespace SignatureBatch {
  export type AsObject = {
    signaturesList: Array<Uint8Array | string>,
    publicKeysList: Array<Uint8Array | string>,
    messagesList: Array<Uint8Array | string>,
    context: Uint8Array | string,
  }
}

export interface SignatureTypeMap {
  SIGNATURE_TYPE_UNKNOWN: 0;
  TRANSACTION_PUBLIC: 1;
  TRANSACTION_CONFIDENTIAL: 2;
  PROTOCOL_RPC: 3;
  PROTOCOL_PEER: 4;
}

export const SignatureType: SignatureTypeMap;

export interface ErrorCodeMap {
  ERROR_CODE_UNKNOWN: 0;
  INVALID_SIGNATURE: 1;
  INVALID_PUBLIC_KEY: 2;
  INVALID_PRIVATE_KEY: 3;
  SIGNATURE_VERIFICATION_FAILURE: 4;
  INVALID_CONTEXT_LENGTH: 5;
  INVALID_BATCH_MESSAGE: 6;
  ARRAYS_NOT_EQUAL_LENGTH: 7;
  BATCH_VERIFICATION_FAILURE: 8;
  NO_ERROR: 418;
}

export const ErrorCode: ErrorCodeMap;

