FROM postgres:16.4-alpine

# Import secrets.
COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]
CMD ["postgres"]

# Dummy change to emulate service change: v4
