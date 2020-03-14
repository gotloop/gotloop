FROM node:12

# Install common tools
RUN npm i -g nodemon ts-node typescript @angular/cli @nestjs/cli @nrwl/cli pm2 serverless http-server

# Create app directory
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

RUN nx build

COPY dist/ .