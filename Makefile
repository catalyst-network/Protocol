all: buildcpp buildjava buildjs buildobjc buildphp buildpython buildruby buildrust

.PHONY: buildcpp
buildcpp:
	cd libs/sdk-cpp && make build;

.PHONY: buildjava
buildjava:
	cd libs/sdk-java && make build;

.PHONY: buildjs
buildjs:
	cd libs/sdk-js && make build;

.PHONY: buildobjc
buildobjc:
	cd libs/sdk-objc && make build;

.PHONY: buildphp
buildphp:
	cd libs/sdk-php && make build;

.PHONY: buildpython
buildpython:
	cd libs/sdk-python && make build;

.PHONY: buildruby
buildruby:
	cd libs/sdk-ruby && make build;

.PHONY: buildrust
buildrust:
	cd libs/sdk-rust && make build;
