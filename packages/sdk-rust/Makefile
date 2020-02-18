all: build cargobuild cargotest

.PHONY: installgenrust
installgenrust:
	cargo install protobuf-codegen

.PHONY: build
build:
	/usr/local/bin/protoc --proto_path ../../src --rust_out src ../../src/*.proto

.PHONY: cargobuild
cargobuild:
	cargo build

.PHONY: cargotest
cargotest:
	cargo test