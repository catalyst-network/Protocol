all: buildcpp buildjava buildjs buildobjc buildphp buildpython buildruby buildrust

.PHONY: buildcpp
buildcpp:
	cd packages/sdk-cpp && make build;

.PHONY: buildjava
buildjava:
	cd packages/sdk-java && make build;

.PHONY: buildjs
buildjs:
	cd packages/sdk-js && make build;

.PHONY: buildobjc
buildobjc:
	cd packages/sdk-objc && make build;

.PHONY: buildphp
buildphp:
	cd packages/sdk-php && make build;

.PHONY: buildpython
buildpython:
	cd packages/sdk-python && make build;

.PHONY: buildruby
buildruby:
	cd packages/sdk-ruby && make build;

.PHONY: buildrust
buildrust:
	cd packages/sdk-rust && make build;
