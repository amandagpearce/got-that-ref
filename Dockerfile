FROM node:16.14.0

RUN npm install -g npm@8.5.5

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm i

COPY . /app

EXPOSE 3000

CMD ["npm", "run", "dev"]
