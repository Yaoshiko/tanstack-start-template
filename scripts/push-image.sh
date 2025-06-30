#!/usr/bin/env bash

set -e

function get_bump_type() {
    # Check if BUMP_TYPE is set as environment variable first
    if [ -n "$BUMP_TYPE" ]; then
        echo "$BUMP_TYPE"
        return
    fi
    
    # Get the latest commit message
    local commit_message=$(git log -1 --pretty=%B)
    
    # Check for version bump indicators in commit message (case insensitive)
    if echo "$commit_message" | grep -qi "\[major\]\|BREAKING CHANGE\|!:"; then
        echo "MAJOR"
    elif echo "$commit_message" | grep -qi "\[patch\]\|fix:\|hotfix"; then
        echo "PATCH"
    else
        # Default to MINOR for feat:, enhancement, or anything else
        echo "MINOR"
    fi
}

function bump_version() {
    local version=$1
    local bump_type=$2
    
    IFS='.' read -r major minor patch <<< "$version"
    
    # Ensure all parts exist and are numbers
    major=${major:-0}
    minor=${minor:-0}
    patch=${patch:-0}
    
    case "$bump_type" in
        "MAJOR")
            major=$((major + 1))
            minor=0
            patch=0
            ;;
        "MINOR")
            minor=$((minor + 1))
            patch=0
            ;;
        "PATCH")
            patch=$((patch + 1))
            ;;
        *)
            echo "Unknown bump type: $bump_type. Defaulting to MINOR." >&2
            minor=$((minor + 1))
            patch=0
            ;;
    esac
    
    echo "$major.$minor.$patch"
}

echo "Building new image for service $PROJECT_NAME/$DOCKER_NAME"

# Determine version bump type
BUMP_TYPE=$(get_bump_type)
echo "Detected version bump type: $BUMP_TYPE"

LATEST=$(git tag --list "$DOCKER_NAME@"* | sort -V | tail -n 1)
if [ -z "$LATEST" ]; then
    echo "No tags found for image $DOCKER_NAME. Falling back to 1.0.0."
    VERSION="1.0.0"
else
    CURRENT_VERSION="${LATEST#*@}"
    echo "Current version: $CURRENT_VERSION"
    VERSION=$(bump_version "$CURRENT_VERSION" "$BUMP_TYPE")
fi

# Build docker image.
echo "Building version for $PROJECT_NAME/$DOCKER_NAME: $VERSION (bump: $BUMP_TYPE)"
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
git tag -a "$DOCKER_NAME@$VERSION" -m "Release version $VERSION for $DOCKER_NAME ($BUMP_TYPE bump)"
git push origin "refs/tags/$DOCKER_NAME@$VERSION"