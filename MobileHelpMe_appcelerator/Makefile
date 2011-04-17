# Makefile to start Titanium Mobile project from the command line.
# More info at http://github.com/guilhermechapiewski/titanium-jasmine

PROJECT_NAME=""
PROJECT_ROOT=$(shell pwd)

iphone-run:
	@DEVICE_TYPE=iphone make run

iphone-test:
	@DEVICE_TYPE=iphone make test

ipad-run:
	@DEVICE_TYPE=ipad make run

ipad-test:
	@DEVICE_TYPE=ipad make test

run:
	@if [ "${DEVICE_TYPE}" == "" ]; then\
		echo "Please run \"make run-[iphone|ipad]\" instead.";\
		exit 1;\
	fi
	@mkdir -p ${PROJECT_ROOT}/${PROJECT_NAME}/Resources/test/
	@echo "" > ${PROJECT_ROOT}/${PROJECT_NAME}/Resources/test/enabled.js
	@make launch-titanium

test:
	@if [ "${DEVICE_TYPE}" == "" ]; then\
		echo "Please run \"make test-[iphone|ipad]\" instead.";\
		exit 1;\
	fi
	@mkdir -p ${PROJECT_ROOT}/${PROJECT_NAME}/Resources/test/
	@echo "App.tests_enabled = true;" > ${PROJECT_ROOT}/${PROJECT_NAME}/Resources/test/enabled.js
	@make launch-titanium

clean:
	@rm -rf ${PROJECT_ROOT}/${PROJECT_NAME}/build/iphone/*
	@mkdir -p ${PROJECT_ROOT}/${PROJECT_NAME}/build/iphone/
	@echo "Deleted: ${PROJECT_ROOT}/${PROJECT_NAME}/build/iphone/*"

launch-titanium:
	@echo "Building with Titanium... (DEVICE_TYPE:${DEVICE_TYPE})"
	@mkdir -p ${PROJECT_ROOT}/${PROJECT_NAME}/build/iphone/
	@PROJECT_NAME=${PROJECT_NAME} PROJECT_ROOT=${PROJECT_ROOT} DEVICE_TYPE=${DEVICE_TYPE} bash ${PROJECT_ROOT}/bin/titanium.sh