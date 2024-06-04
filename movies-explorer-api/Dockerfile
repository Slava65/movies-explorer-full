FROM node:20.13-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3001

CMD [ "node", "app.js"]