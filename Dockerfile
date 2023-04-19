FROM node:16

WORKDIR /usr/src/app

RUN apt-get update

COPY package*.json ./

COPY . .

