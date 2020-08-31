FROM node:8.12-alpine

RUN mkdir /gs-app-front

COPY package.json ./gs-app-front

WORKDIR /gs-app-front

RUN npm install

# react-scripts@3.4.0 instead react-scripts@3.4.1 because it has an issue [React-Scripts] v3.4.1 fails to start in Docker #8688
RUN npm install react-scripts@3.4.0 

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
