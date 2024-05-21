FROM node:latest

COPY ./react_app /react_app

WORKDIR /react_app

EXPOSE 4002

RUN npm install && \
    npm run build && \
    npm start