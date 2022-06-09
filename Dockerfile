FROM node:lts-alpine
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING=true

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

VOLUME .:/app /app/node_modules
EXPOSE 3000

CMD ["npm", "run", "dev"]
