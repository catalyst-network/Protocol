# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Transaction.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import Cryptography_pb2 as Cryptography__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='Transaction.proto',
  package='Catalyst.Protocol.Transaction',
  syntax='proto3',
  serialized_options=_b('P\001'),
  serialized_pb=_b('\n\x11Transaction.proto\x12\x1d\x43\x61talyst.Protocol.Transaction\x1a\x12\x43ryptography.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\x99\x02\n\x0bPublicEntry\x12\x18\n\x10receiver_address\x18\x01 \x01(\x0c\x12\x16\n\x0esender_address\x18\x02 \x01(\x0c\x12\x0e\n\x06\x61mount\x18\x03 \x01(\x0c\x12\x0c\n\x04\x64\x61ta\x18\x04 \x01(\x0c\x12-\n\ttimestamp\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x11\n\tgas_price\x18\x06 \x01(\x0c\x12\x11\n\tgas_limit\x18\x07 \x01(\x04\x12\x18\n\x10transaction_fees\x18\x08 \x01(\x0c\x12\r\n\x05nonce\x18\t \x01(\x04\x12<\n\tsignature\x18\n \x01(\x0b\x32).Catalyst.Protocol.Cryptography.Signature\"\xd1\x01\n\x11\x43onfidentialEntry\x12\x1b\n\x13receiver_public_key\x18\x01 \x01(\x0c\x12\x19\n\x11sender_public_key\x18\x02 \x01(\x0c\x12\x1b\n\x13pedersen_commitment\x18\x03 \x01(\x0c\x12>\n\x0brange_proof\x18\x04 \x01(\x0b\x32).Catalyst.Protocol.Transaction.RangeProof\x12\x18\n\x10transaction_fees\x18\x05 \x01(\x0c\x12\r\n\x05nonce\x18\x06 \x01(\x04\"<\n\rCoinbaseEntry\x12\x1b\n\x13receiver_public_key\x18\x01 \x01(\x0c\x12\x0e\n\x06\x61mount\x18\x02 \x01(\x0c\"\xda\x02\n\nRangeProof\x12\x18\n\x10value_commitment\x18\x01 \x03(\x0c\x12\x16\n\x0e\x62it_commitment\x18\x02 \x01(\x0c\x12*\n\"per_bit_blinding_factor_commitment\x18\x03 \x01(\x0c\x12\x1a\n\x12poly_commitment_t1\x18\x04 \x01(\x0c\x12\x1a\n\x12poly_commitment_t2\x18\x05 \x01(\x0c\x12\x1a\n\x12proof_of_share_tau\x18\x06 \x01(\x0c\x12\x19\n\x11proof_of_share_mu\x18\x07 \x01(\x0c\x12&\n\x1e\x61ggregated_vector_polynomial_l\x18\x08 \x03(\x0c\x12&\n\x1e\x61ggregated_vector_polynomial_r\x18\t \x03(\x0c\x12\x11\n\ta_prime_0\x18\n \x01(\x0c\x12\x11\n\tb_prime_0\x18\x0b \x01(\x0c\x12\t\n\x01t\x18\x0c \x01(\x0c*M\n\x0fTransactionType\x12\x1c\n\x18TRANSACTION_TYPE_UNKNOWN\x10\x00\x12\n\n\x06PUBLIC\x10\x01\x12\x10\n\x0c\x43ONFIDENTIAL\x10\x02\x42\x02P\x01\x62\x06proto3')
  ,
  dependencies=[Cryptography__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])

_TRANSACTIONTYPE = _descriptor.EnumDescriptor(
  name='TransactionType',
  full_name='Catalyst.Protocol.Transaction.TransactionType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='TRANSACTION_TYPE_UNKNOWN', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PUBLIC', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CONFIDENTIAL', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1012,
  serialized_end=1089,
)
_sym_db.RegisterEnumDescriptor(_TRANSACTIONTYPE)

TransactionType = enum_type_wrapper.EnumTypeWrapper(_TRANSACTIONTYPE)
TRANSACTION_TYPE_UNKNOWN = 0
PUBLIC = 1
CONFIDENTIAL = 2



_PUBLICENTRY = _descriptor.Descriptor(
  name='PublicEntry',
  full_name='Catalyst.Protocol.Transaction.PublicEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='receiver_address', full_name='Catalyst.Protocol.Transaction.PublicEntry.receiver_address', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sender_address', full_name='Catalyst.Protocol.Transaction.PublicEntry.sender_address', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='amount', full_name='Catalyst.Protocol.Transaction.PublicEntry.amount', index=2,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data', full_name='Catalyst.Protocol.Transaction.PublicEntry.data', index=3,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='Catalyst.Protocol.Transaction.PublicEntry.timestamp', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='gas_price', full_name='Catalyst.Protocol.Transaction.PublicEntry.gas_price', index=5,
      number=6, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='gas_limit', full_name='Catalyst.Protocol.Transaction.PublicEntry.gas_limit', index=6,
      number=7, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='transaction_fees', full_name='Catalyst.Protocol.Transaction.PublicEntry.transaction_fees', index=7,
      number=8, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='nonce', full_name='Catalyst.Protocol.Transaction.PublicEntry.nonce', index=8,
      number=9, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='signature', full_name='Catalyst.Protocol.Transaction.PublicEntry.signature', index=9,
      number=10, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=106,
  serialized_end=387,
)


_CONFIDENTIALENTRY = _descriptor.Descriptor(
  name='ConfidentialEntry',
  full_name='Catalyst.Protocol.Transaction.ConfidentialEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='receiver_public_key', full_name='Catalyst.Protocol.Transaction.ConfidentialEntry.receiver_public_key', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sender_public_key', full_name='Catalyst.Protocol.Transaction.ConfidentialEntry.sender_public_key', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='pedersen_commitment', full_name='Catalyst.Protocol.Transaction.ConfidentialEntry.pedersen_commitment', index=2,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='range_proof', full_name='Catalyst.Protocol.Transaction.ConfidentialEntry.range_proof', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='transaction_fees', full_name='Catalyst.Protocol.Transaction.ConfidentialEntry.transaction_fees', index=4,
      number=5, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='nonce', full_name='Catalyst.Protocol.Transaction.ConfidentialEntry.nonce', index=5,
      number=6, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=390,
  serialized_end=599,
)


_COINBASEENTRY = _descriptor.Descriptor(
  name='CoinbaseEntry',
  full_name='Catalyst.Protocol.Transaction.CoinbaseEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='receiver_public_key', full_name='Catalyst.Protocol.Transaction.CoinbaseEntry.receiver_public_key', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='amount', full_name='Catalyst.Protocol.Transaction.CoinbaseEntry.amount', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=601,
  serialized_end=661,
)


_RANGEPROOF = _descriptor.Descriptor(
  name='RangeProof',
  full_name='Catalyst.Protocol.Transaction.RangeProof',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value_commitment', full_name='Catalyst.Protocol.Transaction.RangeProof.value_commitment', index=0,
      number=1, type=12, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bit_commitment', full_name='Catalyst.Protocol.Transaction.RangeProof.bit_commitment', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='per_bit_blinding_factor_commitment', full_name='Catalyst.Protocol.Transaction.RangeProof.per_bit_blinding_factor_commitment', index=2,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='poly_commitment_t1', full_name='Catalyst.Protocol.Transaction.RangeProof.poly_commitment_t1', index=3,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='poly_commitment_t2', full_name='Catalyst.Protocol.Transaction.RangeProof.poly_commitment_t2', index=4,
      number=5, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='proof_of_share_tau', full_name='Catalyst.Protocol.Transaction.RangeProof.proof_of_share_tau', index=5,
      number=6, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='proof_of_share_mu', full_name='Catalyst.Protocol.Transaction.RangeProof.proof_of_share_mu', index=6,
      number=7, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='aggregated_vector_polynomial_l', full_name='Catalyst.Protocol.Transaction.RangeProof.aggregated_vector_polynomial_l', index=7,
      number=8, type=12, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='aggregated_vector_polynomial_r', full_name='Catalyst.Protocol.Transaction.RangeProof.aggregated_vector_polynomial_r', index=8,
      number=9, type=12, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='a_prime_0', full_name='Catalyst.Protocol.Transaction.RangeProof.a_prime_0', index=9,
      number=10, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='b_prime_0', full_name='Catalyst.Protocol.Transaction.RangeProof.b_prime_0', index=10,
      number=11, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='t', full_name='Catalyst.Protocol.Transaction.RangeProof.t', index=11,
      number=12, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=664,
  serialized_end=1010,
)

_PUBLICENTRY.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_PUBLICENTRY.fields_by_name['signature'].message_type = Cryptography__pb2._SIGNATURE
_CONFIDENTIALENTRY.fields_by_name['range_proof'].message_type = _RANGEPROOF
DESCRIPTOR.message_types_by_name['PublicEntry'] = _PUBLICENTRY
DESCRIPTOR.message_types_by_name['ConfidentialEntry'] = _CONFIDENTIALENTRY
DESCRIPTOR.message_types_by_name['CoinbaseEntry'] = _COINBASEENTRY
DESCRIPTOR.message_types_by_name['RangeProof'] = _RANGEPROOF
DESCRIPTOR.enum_types_by_name['TransactionType'] = _TRANSACTIONTYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

PublicEntry = _reflection.GeneratedProtocolMessageType('PublicEntry', (_message.Message,), {
  'DESCRIPTOR' : _PUBLICENTRY,
  '__module__' : 'Transaction_pb2'
  # @@protoc_insertion_point(class_scope:Catalyst.Protocol.Transaction.PublicEntry)
  })
_sym_db.RegisterMessage(PublicEntry)

ConfidentialEntry = _reflection.GeneratedProtocolMessageType('ConfidentialEntry', (_message.Message,), {
  'DESCRIPTOR' : _CONFIDENTIALENTRY,
  '__module__' : 'Transaction_pb2'
  # @@protoc_insertion_point(class_scope:Catalyst.Protocol.Transaction.ConfidentialEntry)
  })
_sym_db.RegisterMessage(ConfidentialEntry)

CoinbaseEntry = _reflection.GeneratedProtocolMessageType('CoinbaseEntry', (_message.Message,), {
  'DESCRIPTOR' : _COINBASEENTRY,
  '__module__' : 'Transaction_pb2'
  # @@protoc_insertion_point(class_scope:Catalyst.Protocol.Transaction.CoinbaseEntry)
  })
_sym_db.RegisterMessage(CoinbaseEntry)

RangeProof = _reflection.GeneratedProtocolMessageType('RangeProof', (_message.Message,), {
  'DESCRIPTOR' : _RANGEPROOF,
  '__module__' : 'Transaction_pb2'
  # @@protoc_insertion_point(class_scope:Catalyst.Protocol.Transaction.RangeProof)
  })
_sym_db.RegisterMessage(RangeProof)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
