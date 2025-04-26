#!/bin/bash

echo "Starting entrypoint script for PostgreSQL..."

source /usr/local/bin/load-secrets.sh DB_PASSWORD

export POSTGRES_PASSWORD="${DB_PASSWORD}"
echo "Postgres password exported from secret"

echo "Starting PostgreSQL..."
exec /usr/local/bin/docker-entrypoint.sh "$@"
