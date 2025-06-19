#!/usr/bin/env bash

# Import versions from the environment file.
set -a
source $1
set +a

# Replace the version placeholders in the docker-swarm-template.yml file with actual versions.
envsubst < docker-swarm-template.yml > docker-swarm.yml
