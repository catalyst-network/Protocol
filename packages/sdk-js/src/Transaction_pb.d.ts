// package: Catalyst.Protocol.Transaction
// file: Transaction.proto

import * as jspb from "google-protobuf";
import * as Cryptography_pb from "./Cryptography_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PublicEntry extends jspb.Message {
  getReceiverAddress(): Uint8Array | string;
  getReceiverAddress_asU8(): Uint8Array;
  getReceiverAddress_asB64(): string;
  setReceiverAddress(value: Uint8Array | string): void;

  getSenderAddress(): Uint8Array | string;
  getSenderAddress_asU8(): Uint8Array;
  getSenderAddress_asB64(): string;
  setSenderAddress(value: Uint8Array | string): void;

  getAmount(): Uint8Array | string;
  getAmount_asU8(): Uint8Array;
  getAmount_asB64(): string;
  setAmount(value: Uint8Array | string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getGasPrice(): Uint8Array | string;
  getGasPrice_asU8(): Uint8Array;
  getGasPrice_asB64(): string;
  setGasPrice(value: Uint8Array | string): void;

  getGasLimit(): number;
  setGasLimit(value: number): void;

  getNonce(): number;
  setNonce(value: number): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): Cryptography_pb.Signature | undefined;
  setSignature(value?: Cryptography_pb.Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicEntry.AsObject;
  static toObject(includeInstance: boolean, msg: PublicEntry): PublicEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicEntry;
  static deserializeBinaryFromReader(message: PublicEntry, reader: jspb.BinaryReader): PublicEntry;
}

export namespace PublicEntry {
  export type AsObject = {
    receiverAddress: Uint8Array | string,
    senderAddress: Uint8Array | string,
    amount: Uint8Array | string,
    data: Uint8Array | string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    gasPrice: Uint8Array | string,
    gasLimit: number,
    nonce: number,
    signature?: Cryptography_pb.Signature.AsObject,
  }
}

export class ConfidentialEntry extends jspb.Message {
  getReceiverPublicKey(): Uint8Array | string;
  getReceiverPublicKey_asU8(): Uint8Array;
  getReceiverPublicKey_asB64(): string;
  setReceiverPublicKey(value: Uint8Array | string): void;

  getSenderPublicKey(): Uint8Array | string;
  getSenderPublicKey_asU8(): Uint8Array;
  getSenderPublicKey_asB64(): string;
  setSenderPublicKey(value: Uint8Array | string): void;

  getPedersenCommitment(): Uint8Array | string;
  getPedersenCommitment_asU8(): Uint8Array;
  getPedersenCommitment_asB64(): string;
  setPedersenCommitment(value: Uint8Array | string): void;

  hasRangeProof(): boolean;
  clearRangeProof(): void;
  getRangeProof(): RangeProof | undefined;
  setRangeProof(value?: RangeProof): void;

  getTransactionFees(): Uint8Array | string;
  getTransactionFees_asU8(): Uint8Array;
  getTransactionFees_asB64(): string;
  setTransactionFees(value: Uint8Array | string): void;

  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfidentialEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ConfidentialEntry): ConfidentialEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfidentialEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfidentialEntry;
  static deserializeBinaryFromReader(message: ConfidentialEntry, reader: jspb.BinaryReader): ConfidentialEntry;
}

export namespace ConfidentialEntry {
  export type AsObject = {
    receiverPublicKey: Uint8Array | string,
    senderPublicKey: Uint8Array | string,
    pedersenCommitment: Uint8Array | string,
    rangeProof?: RangeProof.AsObject,
    transactionFees: Uint8Array | string,
    nonce: number,
  }
}

export class CoinbaseEntry extends jspb.Message {
  getReceiverPublicKey(): Uint8Array | string;
  getReceiverPublicKey_asU8(): Uint8Array;
  getReceiverPublicKey_asB64(): string;
  setReceiverPublicKey(value: Uint8Array | string): void;

  getAmount(): Uint8Array | string;
  getAmount_asU8(): Uint8Array;
  getAmount_asB64(): string;
  setAmount(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoinbaseEntry.AsObject;
  static toObject(includeInstance: boolean, msg: CoinbaseEntry): CoinbaseEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CoinbaseEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoinbaseEntry;
  static deserializeBinaryFromReader(message: CoinbaseEntry, reader: jspb.BinaryReader): CoinbaseEntry;
}

export namespace CoinbaseEntry {
  export type AsObject = {
    receiverPublicKey: Uint8Array | string,
    amount: Uint8Array | string,
  }
}

export class RangeProof extends jspb.Message {
  clearValueCommitmentList(): void;
  getValueCommitmentList(): Array<Uint8Array | string>;
  getValueCommitmentList_asU8(): Array<Uint8Array>;
  getValueCommitmentList_asB64(): Array<string>;
  setValueCommitmentList(value: Array<Uint8Array | string>): void;
  addValueCommitment(value: Uint8Array | string, index?: number): Uint8Array | string;

  getBitCommitment(): Uint8Array | string;
  getBitCommitment_asU8(): Uint8Array;
  getBitCommitment_asB64(): string;
  setBitCommitment(value: Uint8Array | string): void;

  getPerBitBlindingFactorCommitment(): Uint8Array | string;
  getPerBitBlindingFactorCommitment_asU8(): Uint8Array;
  getPerBitBlindingFactorCommitment_asB64(): string;
  setPerBitBlindingFactorCommitment(value: Uint8Array | string): void;

  getPolyCommitmentT1(): Uint8Array | string;
  getPolyCommitmentT1_asU8(): Uint8Array;
  getPolyCommitmentT1_asB64(): string;
  setPolyCommitmentT1(value: Uint8Array | string): void;

  getPolyCommitmentT2(): Uint8Array | string;
  getPolyCommitmentT2_asU8(): Uint8Array;
  getPolyCommitmentT2_asB64(): string;
  setPolyCommitmentT2(value: Uint8Array | string): void;

  getProofOfShareTau(): Uint8Array | string;
  getProofOfShareTau_asU8(): Uint8Array;
  getProofOfShareTau_asB64(): string;
  setProofOfShareTau(value: Uint8Array | string): void;

  getProofOfShareMu(): Uint8Array | string;
  getProofOfShareMu_asU8(): Uint8Array;
  getProofOfShareMu_asB64(): string;
  setProofOfShareMu(value: Uint8Array | string): void;

  clearAggregatedVectorPolynomialLList(): void;
  getAggregatedVectorPolynomialLList(): Array<Uint8Array | string>;
  getAggregatedVectorPolynomialLList_asU8(): Array<Uint8Array>;
  getAggregatedVectorPolynomialLList_asB64(): Array<string>;
  setAggregatedVectorPolynomialLList(value: Array<Uint8Array | string>): void;
  addAggregatedVectorPolynomialL(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearAggregatedVectorPolynomialRList(): void;
  getAggregatedVectorPolynomialRList(): Array<Uint8Array | string>;
  getAggregatedVectorPolynomialRList_asU8(): Array<Uint8Array>;
  getAggregatedVectorPolynomialRList_asB64(): Array<string>;
  setAggregatedVectorPolynomialRList(value: Array<Uint8Array | string>): void;
  addAggregatedVectorPolynomialR(value: Uint8Array | string, index?: number): Uint8Array | string;

  getAPrime0(): Uint8Array | string;
  getAPrime0_asU8(): Uint8Array;
  getAPrime0_asB64(): string;
  setAPrime0(value: Uint8Array | string): void;

  getBPrime0(): Uint8Array | string;
  getBPrime0_asU8(): Uint8Array;
  getBPrime0_asB64(): string;
  setBPrime0(value: Uint8Array | string): void;

  getT(): Uint8Array | string;
  getT_asU8(): Uint8Array;
  getT_asB64(): string;
  setT(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeProof.AsObject;
  static toObject(includeInstance: boolean, msg: RangeProof): RangeProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RangeProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeProof;
  static deserializeBinaryFromReader(message: RangeProof, reader: jspb.BinaryReader): RangeProof;
}

export namespace RangeProof {
  export type AsObject = {
    valueCommitmentList: Array<Uint8Array | string>,
    bitCommitment: Uint8Array | string,
    perBitBlindingFactorCommitment: Uint8Array | string,
    polyCommitmentT1: Uint8Array | string,
    polyCommitmentT2: Uint8Array | string,
    proofOfShareTau: Uint8Array | string,
    proofOfShareMu: Uint8Array | string,
    aggregatedVectorPolynomialLList: Array<Uint8Array | string>,
    aggregatedVectorPolynomialRList: Array<Uint8Array | string>,
    aPrime0: Uint8Array | string,
    bPrime0: Uint8Array | string,
    t: Uint8Array | string,
  }
}

export interface TransactionTypeMap {
  TRANSACTION_TYPE_UNKNOWN: 0;
  PUBLIC: 1;
  CONFIDENTIAL: 2;
}

export const TransactionType: TransactionTypeMap;

