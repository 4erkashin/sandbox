# syntax=docker/dockerfile:1

FROM node:lts-alpine AS builder
WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

COPY ["package.json", "package-lock.json", "./"]

RUN npm i

COPY . ./

FROM builder as dev
ENV CHOKIDAR_USEPOLLING=true
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

FROM builder as build
ENV NODE_ENV=production
RUN npm run build

FROM nginx:alpine as prod
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
