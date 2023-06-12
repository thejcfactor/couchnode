#!/usr/bin/env bash

CWD="$(pwd)"

OUTPUT_PATH=""
CA_ROOT_NAME="ca"
CA_SUBJ="/CN=Protostellar Root CA"
CERT_ROOT_NAME="cert"
CERT_SUBJ="/CN=Protostellar Certificate"
EXT_FILE_NAME="x509.ext"

function clean_prev(){
    path=$1
    ca_name=$2
    cert_name=$3
    ext_file=$4
    if [ -f "$path/$ca_name.key" ]; then
        rm "$path/$ca_name.key"
    fi

    if [ -f "$path/$ca_name.pem" ]; then
        rm "$path/$ca_name.pem"
    fi

    if [ -f "$path/$ca_name.srl" ]; then
        rm "$path/$ca_name.srl"
    fi

    if [ -f "$path/$cert_name.key" ]; then
        rm "$path/$cert_name.key"
    fi

    if [ -f "$path/$cert_name.csr" ]; then
        rm "$path/$cert_name.csr"
    fi

    if [ -f "$path/$cert_name.pem" ]; then
        rm "$path/$cert_name.pem"
    fi

    if [ -f "$path/$ext_file" ]; then
        rm "$path/$ext_file"
    fi
}

function check_openssl(){
    tmp=$IFS
    IFS=$'\n'
    openssl_version=$(openssl version -a)
    openssl_version=($openssl_version)
    IFS=$tmp
    
    if [ ${#openssl_version[@]} -eq 0 ]; then
        echo "Error: Unable to find OpenSSL"
        exit 1
    else
        echo "Found OpenSSL: ${openssl_version[0]}"
    fi

    # for (( i=0; i<${#openssl_version[@]}; i++))
    # do
    #     echo "${openssl_version[$i]}"
    # done
}

function build_ext_file(){
    cat > $1 <<'EOF'
basicConstraints=CA:FALSE
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid,issuer:always
extendedKeyUsage=serverAuth
keyUsage = digitalSignature,keyEncipherment
subjectAltName = @alt_names
[alt_names]
IP.1 = 127.0.0.1
DNS.1 = localhost
EOF
}

function build_ca_certs(){
    ca_key=$1
    ca_pem=$2
    # openssl genrsa -out ca.key 2048
    openssl genrsa -out $ca_key 2048
    # openssl req -new -x509 -days 365 -sha256 -key ca.key -out ca.pem -subj "/CN=Protostellar Root CA"
    openssl req -new -x509 -days 365 -sha256 -key $ca_key -out $ca_pem -subj "${CA_SUBJ}"
}

function build_certs(){
    ca_key=$1
    ca_pem=$2
    cert_key=$3
    cert_pem=$4
    cert_csr="$OUTPUT_PATH/$CERT_ROOT_NAME.csr"
    ext_file="$OUTPUT_PATH/$EXT_FILE_NAME"

    build_ext_file $ext_file

    # openssl genrsa -out cert.key 2048
    openssl genrsa -out $cert_key 2048
    # openssl req -new -key cert.key -out cert.csr -subj "/CN=Protostellar Certificate"
    openssl req -new -key $cert_key -out $cert_csr -subj "$CERT_SUBJ"
    # openssl x509 -CA ca.pem -CAkey ca.key -CAcreateserial -days 365 -req -in cert.csr -out cert.pem -extfile v3.ext
    openssl x509 -CA $ca_pem -CAkey $ca_key -CAcreateserial -days 365 -req -in $cert_csr -out $cert_pem -extfile $ext_file
}

function display_help(){
    echo ""
    echo
    echo "./local_certs"
    echo "Options:"
    echo "h     Help"
}

while getopts ":hp:" option; do
    case $option in
        h) # display_help()
            display_help
            exit;;
        p)
            OUTPUT_PATH=${OPTARG}
            ;;
        :)
            echo "Error: -${OPTARG} requires an argument."
            display_help
            exit;;
        \?)
            echo "Error: Invalid option received."
            display_help
            exit;;
  esac
done

if [ "$OUTPUT_PATH" = "" ]; then
    OUTPUT_PATH=$CWD
fi

clean_prev $OUTPUT_PATH $CA_ROOT_NAME $CERT_ROOT_NAME $EXT_FILE_NAME
check_openssl

# CA Info
CA_KEY_OUTPUT="$OUTPUT_PATH/$CA_ROOT_NAME.key"
CA_PEM_OUTPUT="$OUTPUT_PATH/$CA_ROOT_NAME.pem"

# Cert Info
CERT_KEY_OUTPUT="$OUTPUT_PATH/$CERT_ROOT_NAME.key"
CERT_PEM_OUTPUT="$OUTPUT_PATH/$CERT_ROOT_NAME.pem"

build_ca_certs $CA_KEY_OUTPUT $CA_PEM_OUTPUT
build_certs $CA_KEY_OUTPUT $CA_PEM_OUTPUT $CERT_KEY_OUTPUT $CERT_PEM_OUTPUT  

#example stellar-gateway command:
echo "./stellar-gateway --cb-host=127.0.0.1 \\"
echo "--cacert $CA_PEM_OUTPUT \\"
echo "--cert $CERT_PEM_OUTPUT \\"
echo "--key $CERT_KEY_OUTPUT"

# TODO:
# allow for some configuration:
#   output path
#   SAN info?
#   CN info (CA and cert)
#   Add client cert generation?
#   Add couchbase/docker commands to load certs?

# REFERENCE:
#   - getopts: https://www.computerhope.com/unix/bash/getopts.htm