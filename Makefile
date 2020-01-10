all: buildjs buildrust

.PHONY: buildjs
buildjs:
	cd libs/sdk-js && make build;

.PHONY: buildrust
buildrust:
	cd libs/sdk-rust && make build;
