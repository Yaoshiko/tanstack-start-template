#!/usr/bin/env bash

set -e

ENV_FILE=$1

# Load environment variables.
export $(grep -v '^#' $ENV_FILE | xargs)

# Read or initialize docker version.
if grep -q "${DOCKER_NAME}_VERSION=" $ENV_FILE; then
    CURRENT_VERSION=$(grep "${DOCKER_NAME}_VERSION=" $ENV_FILE | cut -d '=' -f2)
    echo "Deploy version for $DOCKER_NAME: $CURRENT_VERSION"
    docker push $DOCKER_REGISTRY/$PROJECT_NAME/$DOCKER_NAME:$CURRENT_VERSION
    docker push $DOCKER_REGISTRY/$PROJECT_NAME/$DOCKER_NAME:latest
else
    echo "No version found for $DOCKER_NAME. Please set the version in $ENV_FILE."
    exit 1
fi
