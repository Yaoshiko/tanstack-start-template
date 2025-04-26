FROM postgres:16.4-alpine

# Import secrets.
COPY load-db-password.sh /docker-entrypoint-initdb.d/load-db-password.sh
RUN chmod +x /docker-entrypoint-initdb.d/load-db-password.sh
