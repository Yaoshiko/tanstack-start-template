#!/bin/sh

echo "Removing node_modules folders, if any"
rm -rf */node_modules

echo "Installing dependencies"
npm install -g pnpm
pnpm install --frozen-lockfile --prod

echo "Building the app"
pnpm build

echo "Migrate the database"
pnpm db:migrate

echo "Starting the app"
pnpm start
