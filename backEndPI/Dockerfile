FROM node:alpine3.10

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3031

CMD npm start