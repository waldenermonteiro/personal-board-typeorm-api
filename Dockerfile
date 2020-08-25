FROM node:alpine

WORKDIR /home/waldenermonteiro/personal-board-typeorm-api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "serve"]