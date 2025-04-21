# Stage 1: Build.
FROM node:23-slim AS builder

WORKDIR /app

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./

# Install dependencies.
RUN npm install -g pnpm \
    && pnpm install --frozen-lockfile

# Build in production mode.
COPY ./ ./
RUN pnpm build


# Stage 2: Runtime.
FROM node:23-slim AS runner

# Create non-root user.
RUN useradd --user-group --create-home --shell /bin/false app
USER app
WORKDIR /home/app

# Copy only built files and necessary runtime dependencies.
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.env ./

EXPOSE 3000

CMD ["pnpm", "start"]
