FROM node:23-slim

# Set the working directory.
WORKDIR /app

# Copy only package.json and package-lock.json for dependency installation.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application files.
COPY drizzle.config.ts ./
COPY migrations/ ./

# Set the command to run drizzle migrate.
CMD ["npx", "drizzle-kit", "migrate"]