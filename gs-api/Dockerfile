FROM node:8.12-alpine

RUN mkdir /gs-app-back

COPY package.json /gs-app-back
COPY package-lock.json /gs-app-back
COPY app.js /gs-app-back
COPY ./ /gs-app-back

WORKDIR /gs-app-back

RUN npm install

EXPOSE 3001

CMD npm start