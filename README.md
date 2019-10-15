<div align="center">
  <img alt="ReDoc logo" src="https://raw.githubusercontent.com/catalyst-network/Community/master/media-pack/logo.png" width="400px" />

  ### Protocol Specification

[![Discord](https://img.shields.io/discord/629667101774446593?color=blueviolet&label=discord)](https://discord.gg/anTP7xm)
![GitHub followers](https://img.shields.io/github/followers/catalyst-network?style=social)
![GitHub stars](https://img.shields.io/github/stars/catalyst-network/community?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/catalystnetorg?style=social)
![Subreddit subscribers](https://img.shields.io/reddit/subreddit-subscribers/catalystnet?style=social)
</div>

<div align="center">

![Build Status](https://dev.azure.com/AtlasCityIO/protobuffs%20protocol%20sdk%20csharp/_apis/build/status/protocol-protobuffs%20-%20generate%20C%23%20files?branchName=develop)](https://dev.azure.com/AtlasCityIO/protobuffs%20protocol%20sdk%20csharp/_build/latest?definitionId=8&branchName=develop)

The Catalyst Network protocol is defined using the Protobuffs seralisation format.

</div>

<!-- TOC -->

**Table of Contents**

- [Background](#background)
  - [What's a Protobuff?](#whats-a-protobuff)
  - [Why Protobuffs](#why-protobuffs)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

<!-- /TOC -->

## Background

#### What's a Protobuff?

From Google - https://developers.google.com/protocol-buffers/

> Protocol buffers are Google's language-neutral, platform-neutral,
> extensible mechanism for serializing structured data.


#### Why Protobuffs

Protocol Buffers are a way of encoding structured data in an efficient yet extensible format.

From Google - https://developers.google.com/protocol-buffers/docs/overview

> Protocol buffers have many advantages over XML for serializing
> structured data. Protocol buffers are:
> 
> -   simpler,
> -   3 to 10 times smaller,
> -   20 to 100 times faster,
> -   less ambiguous and
> -   generate data access classes that are easier to use programmatically

But the biggest benefit to Catalyst Network is the interoperability offered by protobuffs. Protobuffs are implemented in a variety of languages and allow us to quickly generate code for you to interact and build upon the Catalyst Network! No more figuring out some obscure language or having to learn snowflaked schemas.

## Install

To install protobuffs on Ubuntu:

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

## Usage

TODO. We don't have this section done yet. If you'd like to help us by opening a PR for it, please do so!

## Contribute

**Take a look at our organization-wide [Contributing Guide](https://github.com/catalyst-network/Community/blob/master/CONTRIBUTING.md).** You'll find most of your questions answered there.

As far as code goes, we would be happy to accept PRs! If you want to work on something, it'd be good to talk beforehand to make sure nobody else is working on it. You can reach us [on Discord](https://discord.gg/anTP7xm), or in the [issues section](https://github.com/catalyst-network/protocol-protobuffs/issues).

Please note that we have a [Code of Conduct](CODE_OF_CONDUCT.md), and that all activity in the [@catalyst-network](https://github.com/catalyst-network) organization falls under it. Read it when you get the chance, as being part of this community means that you agree to abide by it. Thanks.

## License

[GPL](LICENSE) © 2019 Catalyst Network
