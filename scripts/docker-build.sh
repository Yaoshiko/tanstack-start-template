#!/usr/bin/env bash

set -e

ENV_FILE=$1

# Load environment variables.
export $(grep -v '^#' $ENV_FILE | xargs)

# Read or initialize docker version.
if grep -q "${DOCKER_NAME}_VERSION=" $ENV_FILE; then
    CURRENT_VERSION=$(grep "${DOCKER_NAME}_VERSION=" $ENV_FILE | cut -d '=' -f2)
    # Bump minor version.
    IFS='.' read -r MAJOR MINOR PATCH <<< $CURRENT_VERSION
    if [ -z "$MINOR" ]; then
        MINOR=0
    else
        MINOR=$((MINOR + 1))
    fi
    NEW_VERSION=$MAJOR.$MINOR.0
else
    echo "No version found for $DOCKER_NAME. Please set the version in $ENV_FILE."
    exit 1
fi

echo \"Building version for $PROJECT_NAME/$DOCKER_NAME: $NEW_VERSION\"

# Build docker images.
docker build \
    -t $DOCKER_REGISTRY/$PROJECT_NAME/$DOCKER_NAME:latest \
    -t $DOCKER_REGISTRY/$PROJECT_NAME/$DOCKER_NAME:$NEW_VERSION \
    -t $DOCKER_REGISTRY/$PROJECT_NAME/$DOCKER_NAME:$(git rev-parse HEAD) \
    -f ./Dockerfile \
    .

# Update $ENV_FILE with the new version.
if grep -q "${DOCKER_NAME}_VERSION=" $ENV_FILE; then
    sed -i "s/${DOCKER_NAME}_VERSION=.*/${DOCKER_NAME}_VERSION=""$NEW_VERSION"'/' $ENV_FILE
else
    echo ${DOCKER_NAME}_VERSION=$NEW_VERSION >> $ENV_FILE
fi
