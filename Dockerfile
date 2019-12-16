FROM node:12.12.0-alpine

WORKDIR /usr/k8stest

COPY package.json .
RUN npm install

COPY . .
RUN npm run compile

CMD ["npm", "start"]
