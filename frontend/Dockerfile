FROM node:alpine as builder

RUN mkdir app

WORKDIR /app

COPY public ./public
COPY package*.json ./

RUN yarn install
RUN yarn add cypress

COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY cypress.config.ts ./
COPY cypress.d.ts ./
COPY src ./src
COPY index.html ./

RUN yarn run build

FROM node:alpine

RUN mkdir app

WORKDIR /app

COPY --from=builder /app/dist /app/dist

CMD yarn dev /app/dist