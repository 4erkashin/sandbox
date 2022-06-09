FROM node:lts-alpine
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING=true
RUN apk --no-cache add curl

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

CMD ["npm", "run", "dev"]
