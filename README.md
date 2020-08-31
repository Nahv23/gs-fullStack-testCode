# gs-fullStack-testCode

This fullStack application takes the mobile phones' data from the REST API and shows the preview and the technical characteristics of the selected one.

## Getting started 🚀

Copy this folder gs-fullstack-testCode to your computer.

### Installation 🔧

To run the REST API in localhost follow this steps in a terminal window:

 1- _Enter the gs-api directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-api
  ```

 2- _Install the dependencies:_
  ```
   npm install
  ```

 3- _Launch the REST API:_
  ```
   npm start
  ```

 4- _Now you can call the endpoint from http://localhost:3001/phones_
  ```
   Type http://localhost:3001/ it in the browser to check it.
  ```


Then, in another terminal window run the Front Web App, following this steps:

 5- _Enter the gs-front directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-front
  ```

 6- _Install the dependencies:_
  ```
   npm install
  ```
  
 7- _Launch the app:_
  ```
   npm start
  ```
  
 8- _Now you can open the app in the browser with http://localhost:3000 :_
  ```
   Type http://localhost:3000 in the web browser
  ```

## Docker 📦

First, check if both Docker images exist. If they do not exist follow these steps to create the Docker images for each part and run both with the Docker Compose to run them at the same time:

For the REST API:

  _Enter the gs-api directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-api
  ```
  
  _Run the following command:_
  ```
   docker build -t gs-app-back .
  ```
  
For the Front Web App, the same:

  _Enter the gs-front directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-front
  ```
  
  _And run the following command:_
  ```
  docker build -t gs-app-front .
  ```
  
After created both images just write the command to launch the Docker Compose:
  ```
    docker-compose up
  ```

Then you are able to reach both application in each route.
  
  For API http://localhost:3001/ 

  For Web App (connected to the API) http://localhost:3000/ 
