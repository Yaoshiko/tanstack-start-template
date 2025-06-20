#!/usr/bin/env bash

set -e


function bump_version() {
    # TODO: Read from ENV_VAR if we should bump major, minor, or patch version.
    # For now, we will just bump the minor version.
    local version=$1
    IFS='.' read -r major minor patch <<< "$version"
    
    if [ -z "$minor" ]; then
        minor=0
    else
        minor=$((minor + 1))
    fi
    
    echo "$major.$minor.0"
}

echo "Building new image for service $PROJECT_NAME/$DOCKER_NAME"

LATEST=$(git tag --list "$DOCKER_NAME@"* | sort -V | tail -n 1)
if [ -z "$LATEST" ]; then
    echo "No tags found for image $DOCKER_NAME. Falling back to 1.0.0."
    VERSION="1.0.0"
else
    VERSION=$(bump_version "${LATEST#*@}")
fi

# Build docker image.
echo "Building version for $PROJECT_NAME/$DOCKER_NAME: $VERSION"
docker build \
    -t $DOCKER_REGISTRY/$PROJECT_NAME/$DOCKER_NAME:latest \
    -t $DOCKER_REGISTRY/$PROJECT_NAME/$DOCKER_NAME:$VERSION \
    -t $DOCKER_REGISTRY/$PROJECT_NAME/$DOCKER_NAME:$(git rev-parse HEAD) \
    -f ./Dockerfile \
    .

# Push docker image.
docker push $DOCKER_REGISTRY/$PROJECT_NAME/$DOCKER_NAME:$VERSION
docker push $DOCKER_REGISTRY/$PROJECT_NAME/$DOCKER_NAME:latest

# Pushing new version tag.
git tag -a "$DOCKER_NAME@$VERSION" -m "Release version $VERSION for $DOCKER_NAME"
git push origin "refs/tags/$DOCKER_NAME@$VERSION"
