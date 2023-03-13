FROM node:lts AS Production
WORKDIR /usr/src/client
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000
CMD [ "yarn", "run", "start" ]
