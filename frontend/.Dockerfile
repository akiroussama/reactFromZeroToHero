FROM node:alpine as builder

RUN mkdir app

WORKDIR /app

COPY public ./public
COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

FROM node:alpine

RUN mkdir app

WORKDIR /app

COPY --from=builder /app/build /app/build

CMD npx serve /app/build