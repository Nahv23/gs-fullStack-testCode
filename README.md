# gs-fullStack-testCode

This fullStack application takes the mobile phones' data from the REST API and shows the preview and the technical characteristics of the selected one.

## Getting started 🚀

Copy this folder gs-fullstack-testCode to your computer.

### Installation 🔧

To run the REST API in localhost follow this steps in a terminal window:

  ```
  Enter the gs-api directory inside the gs-fullstack-testCode one
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

Then, in another terminal window run the Front Web App, following this steps:

  ```
  Enter the gs-front directory inside the gs-fullstack-testCode one
  ```
   cd gs-front

  ```
  Install the dependencies
  ```
   _npm install_

  ```
  Launch the app
  ```
   _npm start_

  ```
  Now you can open the app in the browser with http://localhost:3000
  ```
   Type http://localhost:3000
 

### Docker 📦

First, check if both Docker images exist. If they do not exist follow these steps to create the Docker images for each part and run both with the Docker Compose to run them at the same time:

For the REST API:

  ```
  Enter the gs-api directory inside the gs-fullstack-testCode one
  ```
   _cd gs-api_

  ```
  Run the following command
  ```
  _docker build -t gs-app-back ._

For the Front Web App, the same:

  ```
  Enter the gs-front directory inside the gs-fullstack-testCode one
  ```
   _cd gs-front_

  ```
  And run the following command
  ```
  _docker build -t gs-app-front ._

After created both images just write the command to launch the Docker Compose

  _docker-compose up_


Then you are able to reach both application in each route
  
  For API http://localhost:3001/ 

  For Web App (connected to the API) http://localhost:3000/ 