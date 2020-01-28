# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: Network.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='Network.proto',
  package='Catalyst.Protocol.Network',
  syntax='proto3',
  serialized_options=_b('P\001'),
  serialized_pb=_b('\n\rNetwork.proto\x12\x19\x43\x61talyst.Protocol.Network*M\n\x0bNetworkType\x12\x18\n\x14NETWORK_TYPE_UNKNOWN\x10\x00\x12\x0b\n\x07MAINNET\x10\x01\x12\n\n\x06\x44\x45VNET\x10\x02\x12\x0b\n\x07TESTNET\x10\x03\x42\x02P\x01\x62\x06proto3')
)

_NETWORKTYPE = _descriptor.EnumDescriptor(
  name='NetworkType',
  full_name='Catalyst.Protocol.Network.NetworkType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='NETWORK_TYPE_UNKNOWN', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MAINNET', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DEVNET', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TESTNET', index=3, number=3,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=44,
  serialized_end=121,
)
_sym_db.RegisterEnumDescriptor(_NETWORKTYPE)

NetworkType = enum_type_wrapper.EnumTypeWrapper(_NETWORKTYPE)
NETWORK_TYPE_UNKNOWN = 0
MAINNET = 1
DEVNET = 2
TESTNET = 3


DESCRIPTOR.enum_types_by_name['NetworkType'] = _NETWORKTYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
