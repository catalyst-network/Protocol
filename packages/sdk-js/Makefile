.PHONY: build
build:
	/usr/local/bin/protoc  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --proto_path ../../src/ --js_out=import_style=commonjs,binary:src --ts_out=src ../../src/*.proto
buildjs:
	/usr/local/bin/protoc --proto_path ../../src --js_out src ../../src/*.proto
