# GS-api 

This is a REST API written in NodeJS and Express that serves a JSON data about mobile phones.

## Getting started 🚀

Copy this folder gs-api to your computer.

### Installation 🔧

To run the REST API in localhost follow this steps in a terminal window:

 &nbsp;&nbsp;_1- Enter the gs-api directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-api
  ```

 &nbsp;&nbsp;_2- Install the dependencies:_
  ```
   npm install
  ```

 &nbsp;&nbsp;_3- Launch the REST API:_
  ```
   npm start
  ```

 &nbsp;&nbsp;_4- Now you can call the endpoint from http://localhost:3001/phones_
  ```
   Type http://localhost:3001/ it in the browser to check it.
  ```


## Docker 📦

First, check if the Docker image exists. If it does not exist run this command to create the Docker image:

  &nbsp;&nbsp;_Enter the gs-api directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-api
  ```
  
  &nbsp;&nbsp;_Run the following command:_
  ```
   docker build -t gs-app-back .
  ```

  &nbsp;&nbsp;_To run the Docker image:_
  ```
    docker run --rm -p 8080:3001 gs-app-back
  ```

  &nbsp;&nbsp;__Note__: the   ```--rm_ ``` option removed the container when it stops.


Now you can call the endpoint from http://localhost:3001/phones

  Type http://localhost:3001/ it in the browser to check it.
