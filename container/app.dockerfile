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
# FIXME: To be moved in a one-off container, to be run by the yml in the proper environment.
# RUN pnpm db:migrate

EXPOSE 3000

CMD ["pnpm", "start"]
