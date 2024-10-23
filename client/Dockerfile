FROM node:alpine3.20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build


FROM nginx:alpine3.20

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist ./