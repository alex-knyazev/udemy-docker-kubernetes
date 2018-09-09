FROM node:alpine

# root directory of project
WORKDIR /usr/src/udemy-docker

COPY package*.json ./
RUN npm install

# copy all code to docker-folder
COPY . .

#system will provide this port to our docker-container
EXPOSE 3003

#command we will use to run 
CMD [ "npm", "start" ]