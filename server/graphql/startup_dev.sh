#!/bin/sh

./wait-for.sh redis:6379 -t 3000

./wait-for.sh postgres:5432 -t 3000

yarn generate

yarn start:dev
