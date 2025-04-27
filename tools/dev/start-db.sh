#!/usr/bin/env fish

function ensure_db_container
    set container_name $DB_CONTAINER

    # Check if container exists
    if docker container inspect $container_name >/dev/null 2>&1
        # Container exists, check if it's running
        if test -n (docker ps -q -f name=$container_name)
            echo "Database container is already running."
        else
            echo "Database container exists but is stopped. Starting it now..."
            docker start $container_name
        end
    else
        # Container doesn't exist, create it
        echo "Database container doesn't exist. Creating and starting it..."
        docker run \
            --name $container_name \
            -e POSTGRES_USER=$DB_USER \
            -e POSTGRES_PASSWORD=$DB_PASSWORD \
            -e POSTGRES_DB=$DB_NAME \
            -p 5432:5432 \
            -d \
            postgres:latest
    end
end

ensure_db_container
