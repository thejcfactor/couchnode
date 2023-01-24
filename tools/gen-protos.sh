#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_LIB=./new_lib/protostellar/generated
PROTO_DIST=./dist/protostellar/generated
PROTOS=./deps/stellar-nebula/proto
CONTRIB_DIR=./deps/stellar-nebula/contrib/googleapis
# GOOGLE_PROTOS=./node_modules/google-proto-files/

echo "$PWD"

mkdir -p ${PROTO_LIB}

# Generate v1_pb files (*.d.ts and *.js)
./node_modules/.bin/grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_LIB} \
    --js_out=import_style=commonjs,binary:${PROTO_LIB} \
    --grpc_out=grpc_js:${PROTO_LIB} \
    --proto_path=${PROTOS} \
    --proto_path=${CONTRIB_DIR} \
    ${PROTOS}/**/*.proto

# Pretty sure this is a hack...but it works :/
./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_LIB} \
    --grpc_out=grpc_js:${PROTO_LIB} \
    --proto_path=${CONTRIB_DIR} \
    ${CONTRIB_DIR}/google/rpc/*.proto

# Generate grpc_pb files (*.d.ts and *.js)
./node_modules/.bin/grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    --ts_out=service=grpc-node:${PROTO_LIB} \
    --js_out=import_style=commonjs,binary:${PROTO_LIB} \
    --grpc_out=grpc_js:${PROTO_LIB} \
    --proto_path=${PROTOS} \
    --proto_path=${CONTRIB_DIR} \
    ${PROTOS}/**/*.proto

mkdir -p ${PROTO_DIST}
cp -r ${PROTO_LIB}/* ${PROTO_DIST}