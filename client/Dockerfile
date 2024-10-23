FROM node:alpine3.20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

ARG VITE_BACKEND_URL
ARG VITE_FRONTEND_URL

ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_FRONTEND_URL=$VITE_FRONTEND_URL

RUN npm run build


FROM nginx:alpine3.20

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist ./