#!/bin/bash

/usr/local/bin/load-secrets.sh DB_PASSWORD

export POSTGRES_PASSWORD="${DB_PASSWORD}"
echo "Postgres password exported from secret"
