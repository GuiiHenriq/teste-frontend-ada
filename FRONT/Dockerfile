FROM node:16.17

WORKDIR /usr/src/app

COPY . .

EXPOSE 5173

RUN yarn install

CMD ["yarn", "dev"]