# BestCloudAPI

- This app is implemented using node.js
- The Home page has firstname and lastname
- The temperature endpoint renders a temperature of any city as JSON format with a GET method receiving a city_name as parameter.

**temperature?city=city_name**



## Building and Running a containerized API using Dockerfile



- Build docker container/image using the following command



**docker build -t app-docker .**      (app-docker is the name of the docker image)



- From this docker image, start to spin out the container using the command below



**docker run -it -p 8000:3000 app-docker**



- At the beggining, I had an internal port 3000. Here, I mapped this internal port to 8000.
- After this command, the docker container should be up and running on localhost port 8000.



## Using the Heroku CLI, the API is Live on:

- https://mysterious-tundra-27661.herokuapp.com
- https://mysterious-tundra-27661.herokuapp.com/temperature?city=istanbul