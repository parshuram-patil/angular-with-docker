FROM node:12.18.4 AS build

ARG HOST_PORT=80
ARG SERVER_HOST=localhost
ARG SERVER_PORT=8091
ARG SERVER_PROTOCOL=http

ENV SERVER_HOST $SERVER_HOST
ENV SERVER_PORT $SERVER_PORT
ENV SERVER_PROTOCOL $SERVER_PROTOCOL

HEALTHCHECK --interval=5s --timeout=2s --retries=3 CMD curl --fail --silent http://localhost:$HOST_PORT/ || exit 1

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN pwd
RUN npm install --verbose
COPY . .
RUN npm run build

FROM nginx:1.17.9-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/angular-with-docker /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]