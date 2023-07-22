FROM node:16
WORKDIR /app
COPY package* ./
RUN npm install
COPY . .
EXPOSE 3004
CMD [ "npm","start" ]