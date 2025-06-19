#!/bin/bash

# This script triggers a redeployment of a stack in Portainer using the API.

set -e

RESPONSE=$(curl -k -s -w "%{http_code}" -X POST ${PORTAINER_WEBHOOK})
echo "HTTP Response: $RESPONSE"

if [[ "$RESPONSE" != "200" && "$RESPONSE" != "204" ]]; then
    echo "Portainer deployment failed!"
    exit 1
fi

echo "Portainer deployment triggered successfully."
exit 0
