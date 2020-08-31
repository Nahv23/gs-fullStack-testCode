# GS-App-Front 

This is a Front Web App written in Javascript, HTML and CSS with ReactJS that takes a mobile phones' data from the API. 
<br>
<br>
Firstly, it shows a preview with all mobiles. Then you can select one and see its details. Also in the preview view, there is a search function .

## Getting started 🚀

Copy this folder gs-front to your computer.

### Installation 🔧

To run this Front Web App in localhost follow these steps in a terminal window:

 &nbsp;&nbsp;_1- Enter the gs-front directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-front
  ```

 &nbsp;&nbsp;_2- Install the dependencies:_
  ```
   npm install
  ```
  
 &nbsp;&nbsp;_3- Launch the app:_
  ```
   npm start
  ```
  
 &nbsp;&nbsp;_4- Now you can open the app in the browser with http://localhost:3000 :_
  ```
   Type http://localhost:3000 in the web browser
  ```

 

### Docker 📦

First, check if the Docker image exists. If it does not exist run this command to create the Docker image:

  &nbsp;&nbsp;_Enter the gs-front directory inside the gs-fullstack-testCode one:_
  ```
   cd gs-front
  ```
  
  &nbsp;&nbsp;_And run the following command:_
  ```
  docker build -t gs-app-front .
  ```

To run the Docker image

  ```docker run --rm -p 3000:3000 gs-app-front  ```

  &nbsp;&nbsp;__Note__: the _--rm_ option removed the container when it stops.

Now you can open the app in the browser with http://localhost:3000
 
  Type http://localhost:3000
