# GS-App-Front 

This is a Front Web App written in Javascript, HTML and CSS with ReactJS that takes a mobile phones' data from the API. <br>
Firstly, It shows a preview with all mobiles. Then you can select one and see its details. Also in the preview view, you can search.

## Getting started 🚀

Copy this folder gs-front to your computer.

### Installation 🔧

To run this Front Web App in localhost follow these steps in a terminal window:

  ```
  Enter the gs-front directory
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

First, check if the Docker image exists. If it does not exist run this command to create the Docker image:

_docker build -t gs-app-front ._


To run the Docker image

_docker run --rm -p 3000:3000 gs-app-front_

Note: the _--rm_ option removed the container when it stops.

Now you can open the app in the browser with http://localhost:3000
 
  Type http://localhost:3000
