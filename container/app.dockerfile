FROM node:23-slim

COPY ./package.json ./
RUN npm install -g pnpm && pnpm install

COPY ./ ./

# Build in production mode.
RUN pnpm build

# Migrate database.
RUN pnpm db:migrate

EXPOSE 3000

CMD ["pnpm", "start"]
