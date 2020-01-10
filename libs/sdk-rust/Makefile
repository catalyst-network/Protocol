.PHONY: buildrust
buildrust:
	protoc --proto_path ../../src --rust_out src ../../src/*.proto

.PHONY: cargobuild
cargobuild:
	cargo build --manifest-path libs/sdk-rust/Cargo.toml

.PHONY: cargotest
cargotest:
	cargo test --manifest-path libs/sdk-rust/Cargo.toml