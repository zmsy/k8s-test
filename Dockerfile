FROM node:12.12.0-alpine

WORKDIR /usr/k8stest

COPY . .

CMD ["echo", "Hello"]
