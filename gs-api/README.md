# GS-api 

This is a REST API written in NodeJS and Express that serves a JSON data about mobile phones.

## Getting started 🚀

Copy this folder gs-api to your computer.

### Installation 🔧

To run this REST API in localhost follow these steps in a terminal window:

  ```
  Enter the gs-api directory
  ```
   cd gs-api

  ```
  Install the dependencies
  ```
   _npm install_

  ```
  Launch the REST API
  ```
   _npm start_

  ```
  Now you can call the endpoint from http://localhost:3001/phones
  ```
   Type http://localhost:3001/ it in the browser to check it.
 

### Docker 📦

First, check if the Docker image exists. If it does not exist run this command to create the Docker image:

_docker build -t gs-app-back ._


To run the Docker image

_docker run --rm -p 8080:3001 gs-app-back_

Note: the _--rm_ option removed the container when it stops.

Now you can call the endpoint from http://localhost:3001/phones

  Type http://localhost:3001/ it in the browser to check it.