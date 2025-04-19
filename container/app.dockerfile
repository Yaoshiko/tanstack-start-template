# Note: This Dockerfile is not currently used.
#       In case, we need to use it to push an image in a Docker registry to refer use it in a Swarm.

FROM node:23-slim

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./

# Install dependencies.
RUN npm install -g pnpm \
    && pnpm install --frozen-lockfile --prod

# Build in production mode.
COPY ./ ./
RUN pnpm build

# Migrate database.
# RUN pnpm db:migrate

EXPOSE 3000

CMD ["pnpm", "start"]
