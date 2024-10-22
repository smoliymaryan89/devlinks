FROM node:alpine3.20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build



FROM node:alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY --from=builder /app/dist ./dist

CMD [ "npm", "start" ]