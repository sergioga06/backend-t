#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE db_users;
    CREATE DATABASE db_auth;
    CREATE DATABASE db_products;
    CREATE DATABASE db_orders;
    CREATE DATABASE db_tables;
    CREATE DATABASE db_qrcodes;
EOSQL