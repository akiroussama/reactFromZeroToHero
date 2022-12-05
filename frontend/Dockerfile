FROM node:lts-alpine

RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm i

# Bundle app source
COPY . .

RUN npm run build

CMD npm run dev --host