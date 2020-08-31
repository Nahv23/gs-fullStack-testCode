# gs-fullStack-testCode

This fullStack application takes the mobile phones' data from the REST API and shows the preview and the technical characteristics of the selected one.

## Getting started 🚀

Copy this folder gs-fullstack-testCode to your computer.

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
   Type http://localhost:3001/ in the browser to check it.
  ```


Then, in another terminal window run the Front Web App, following this steps:

 &nbsp;&nbsp;_5- Enter the gs-front directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-front
  ```

 &nbsp;&nbsp;_6- Install the dependencies:_
  ```
   npm install
  ```
  
 &nbsp;&nbsp;_7- Launch the app:_
  ```
   npm start
  ```
  
 &nbsp;&nbsp;_8- Now you can open the app in the browser with http://localhost:3000 :_
  ```
   Type http://localhost:3000 in the web browser
  ```

## Docker 📦

First, check if both Docker images exist. If they do not exist follow these steps to create the Docker images for each part and run both with the Docker Compose to run them at the same time:

For the REST API:

  &nbsp;&nbsp;_Enter the gs-api directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-api
  ```
  
  &nbsp;&nbsp;_Run the following command:_
  ```
   docker build -t gs-app-back .
  ```
  
For the Front Web App, the same:

  &nbsp;&nbsp;_Enter the gs-front directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-front
  ```
  
  &nbsp;&nbsp;_And run the following command:_
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
