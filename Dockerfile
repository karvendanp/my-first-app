# FROM node:latest
# # set working directory
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app
# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# # install and cache app dependencies
# ADD package.json /usr/src/app/package.json
# RUN npm install
# RUN npm install react-scripts@0.9.5 -g
# # add app
# ADD . /usr/src/app
# # start app
# CMD ["npm", "start"]
FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# to make npm test run only once non-interactively
ENV CI=true

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install && \
    npm install -g pushstate-server

# Bundle app source
COPY . /usr/src/app

# Build and optimize react app
RUN npm run build

EXPOSE 9000

# defined in package.json
CMD [ "npm", "run", "start:prod" ]