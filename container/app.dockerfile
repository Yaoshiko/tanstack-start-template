FROM node:23-slim

COPY ./package.json ./
RUN npm install -g pnpm && pnpm install

COPY ./ ./
# Build in production mode.
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
