FROM node:16.13.1

WORKDIR /usr/src/app/front

COPY package*.json ./

RUN npm install && echo "test"

RUN chown -R node /usr/src/app/front/node_modules

ENV PORT=4000

EXPOSE 4000

CMD ["npm", "start"]