FROM node:23-slim AS builder

# Create non-root user.
WORKDIR /app

# Copy only built files and necessary runtime dependencies.
COPY ./package.json ./
COPY .env ./
COPY .output .output/

# Install tools if needed.
RUN npm install -g pino-pretty


EXPOSE 3000

CMD ["npm", "run", "start"]
