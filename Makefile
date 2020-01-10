all: buildjs buildrust

.PHONY: buildjs
buildjs:
	cd libs/sdk-js && make build;

.PHONY: buildrust
buildrust:
	cd libs/sdk-rust && make build;

.PHONY: getproto
getproto:
	curl -OL https://github.com/google/protobuf/releases/download/v3.2.0/protoc-3.2.0-linux-x86_64.zip && unzip protoc-3.2.0-linux-x86_64.zip -d protoc3

.PHONY: installproto
installproto:
	sudo mv protoc3/bin/* /usr/local/bin/ && sudo mv protoc3/include/* /usr/local/include/

.PHONY: setpermissions
setpermissions:
	sudo chown ${USER} /usr/local/bin/protoc && sudo chown -R ${USER} /usr/local/include/google