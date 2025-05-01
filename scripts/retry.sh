#!/usr/bin/env bash

set -euo pipefail

# Default retry settings.
MAX_RETRIES=${RETRIES:-5}
DELAY=${DELAY:-2}

# Bail if no command given.
if [ $# -eq 0 ]; then
  echo "Usage: $0 <command>"
  echo "Example: $0 drizzle-kit migrate"
  exit 1
fi

echo "Running command: $*"

attempt=1
until "$@"; do
  if (( attempt >= MAX_RETRIES )); then
    echo "❌ Command failed after $MAX_RETRIES attempts: $*"
    exit 1
  fi
  echo "⚠️ Attempt $attempt failed. Retrying in $DELAY seconds..."
  sleep "$DELAY"
  ((attempt++))
done

if (( attempt > 1 )); then
  echo "✅ Command succeeded after $attempt attempt(s)."
fi
