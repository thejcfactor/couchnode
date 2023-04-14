#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_LIB="$PWD/new_lib/protostellar/generated"
PROTO_DIST="$PWD/dist/protostellar/generated"
PROTOS="$PWD/deps/protostellar"
GOOGLE_PROTOS="$PWD/node_modules/google-proto-files/"

echo "$PWD"

mkdir -p ${PROTO_LIB}
protos=$(find $PROTOS -name "*.proto")
echo "Gen v1_pb files (*.d.ts and *.js)"
for p in $protos
do
    echo "Gen v1_pb for $p"
    ./node_modules/.bin/grpc_tools_node_protoc \
        --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
        --ts_out=grpc_js:${PROTO_LIB} \
        --js_out=import_style=commonjs,binary:${PROTO_LIB} \
        --grpc_out=grpc_js:${PROTO_LIB} \
        --proto_path=${PROTOS} \
        --proto_path=${GOOGLE_PROTOS} \
        "$p"
done


echo "Gen Google protos files"
# Pretty sure this is a hack...but it works :/
./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_LIB} \
    --grpc_out=grpc_js:${PROTO_LIB} \
    --proto_path=${GOOGLE_PROTOS} \
    ${GOOGLE_PROTOS}/google/rpc/*.proto

echo "Generate grpc_pb files (*.d.ts and *.js)"
for p in $protos
do
    echo "Gen grpc_pb for $p"
    ./node_modules/.bin/grpc_tools_node_protoc \
        --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
        --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
        --ts_out=service=grpc-node:${PROTO_LIB} \
        --js_out=import_style=commonjs,binary:${PROTO_LIB} \
        --grpc_out=grpc_js:${PROTO_LIB} \
        --proto_path=${PROTOS} \
        --proto_path=${GOOGLE_PROTOS} \
        "$p"
done

mkdir -p ${PROTO_DIST}
cp -r ${PROTO_LIB}/* ${PROTO_DIST}