FROM node:9-slim
#Dictates  exactly where all of the application code will go & any sunsequent 
#commands we run within a docker file will run within this directory.
WORKDIR /index 
COPY package.json /index
RUN npm install
COPY . /index
CMD ["npm", "start"]