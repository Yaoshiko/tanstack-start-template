#!/usr/bin/env bash

# Import versions from the environment file.
set -a
source $1
set +a


# Get latest version for each image from git tags.
# The tags are expected to be in the format: <image_name>@<version>
# Example: my_service@1.0.0

IMAGES=$(grep -Eo '\${[A-Za-z0-9_]+_VERSION}' docker-swarm-template.yml \
    | sed -E 's/\$\{([A-Za-z0-9_]+)_VERSION}/\1/' | sort -u)
for image in $IMAGES; do
    version=$(git tag --list "$image@"* | sort -V | tail -n 1)  
    if [ -z "$version" ]; then
        echo "No tags found for image $image. Aborting..."
        exit 1
    else
        version="${version#*@}"  # Remove the prefix up to the '@'
    fi
    echo "Found version for $image: $version"
    export "${image}_VERSION=$version"
done


# Replace the version placeholders in the docker-swarm-template.yml file with actual versions.
envsubst < docker-swarm-template.yml > docker-swarm.yml
