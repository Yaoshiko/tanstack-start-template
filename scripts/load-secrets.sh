#!/bin/bash

# Note: This script is intended to be run in a Docker container where secrets are mounted at /run/secrets.
#       It must be defined as a config in the Docker Swarm.


# Usage: ./load-secrets.sh secret1 secret2 ...
load_secrets() {
  for secret in "$@"; do
    file="/run/secrets/${PROJECT_NAME}_${secret}"
    if [ -f "$file" ]; then
      export "$secret"="$(< "$file")"
      echo "Secret $secret loaded"
    else
      echo -e "\e[31mError: secret $secret not found\e[0m"
    fi
  done
}

load_secrets "$@"
