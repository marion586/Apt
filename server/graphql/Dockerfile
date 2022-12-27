FROM node:12-alpine

WORKDIR /graphql

RUN apk add --no-cache python2 make g++ git bash

# Copy yarn.lock & package.json for packages consistency
COPY package.json /graphql/package.json


WORKDIR /graphql

RUN npm cache clean --force && rm -rf node_modules && yarn install

COPY . /graphql


EXPOSE 4000

RUN chmod +x startup_dev.sh

RUN chmod +x wait-for.sh

CMD [ "yarn, npm" ]

ENTRYPOINT ["./startup_dev.sh"]
