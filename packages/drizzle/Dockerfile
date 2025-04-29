FROM", "node:23-slim

# Set the working directory.
WORKDIR /app

# Copy only package.json and package-lock.json for dependency installation.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application files.
COPY drizzle.config.ts ./
COPY migrations/ ./migrations

# Define required environment variables.
ENV DB_USER=""
ENV DB_HOST=""
ENV DB_PORT=""
ENV DB_NAME=""

# Load secrets.
ENTRYPOINT ["/bin/bash", "-c", "source /usr/local/bin/load-secrets.sh DB_PASSWORD && exec \"$@\"", "--"]

# Set the command to run the migration.
CMD ["npx", "tsx", "wait-db.ts", "&&", "drizzle-kit", "migrate"]
