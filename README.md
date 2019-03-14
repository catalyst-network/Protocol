# catalyst-network-protocol-protobuffs

The Catalyst Network protocol is defined using the Protobuffs seralisation format.

## What's a Protobuff?

From Google - https://developers.google.com/protocol-buffers/

> Protocol buffers are Google's language-neutral, platform-neutral,
> extensible mechanism for serializing structured data.


## Why Protobuffs

Protocol Buffers are a way of encoding structured data in an efficient yet extensible format.

From Google - https://developers.google.com/protocol-buffers/docs/overview

> Protocol buffers have many advantages over XML for serializing
> structured data. Protocol buffers:
> 
> -   are simpler
> -   are 3 to 10 times smaller
> -   are 20 to 100 times faster
> -   are less ambiguous
> -   generate data access classes that are easier to use programmatically

The biggest bennefit though to Catalyst Network is interoperbility. Protobuffs are implemented in a varaity of languages and allow us to quickly generate code for you to interact and build upon the Catalyst Network! No more figuring out some obscure language or having to learn snowflaked schemas.

## Install Protobuffs

To install protobuffs on ubuntu

 - Make sure you grab the latest version
	 - `$ curl -OL https://github.com/google/protobuf/releases/download/v3.2.0/protoc-3.2.0-linux-x86_64.zip`
- Unzip
	- `$ unzip protoc-3.2.0-linux-x86_64.zip -d protoc3`
- Move protoc to /usr/local/bin/
	- `$ sudo mv protoc3/bin/* /usr/local/bin/`
- Move protoc3/include to /usr/local/include/
	- `$ sudo mv protoc3/include/* /usr/local/include/`
- Optional: change owner
	- `$ sudo chwon [USER] /usr/local/bin/protoc`
	- ` $ sudo chwon -R [USER] /usr/local/include/google`
