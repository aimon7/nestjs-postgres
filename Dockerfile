FROM node:14.17.4
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 7000
CMD [ "npm", "run", "start:dev" ]