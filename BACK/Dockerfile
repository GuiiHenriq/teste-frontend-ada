FROM node:16.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g && npm install dotenv

COPY ./ ./

EXPOSE 8888

CMD ["node", "index.js"]