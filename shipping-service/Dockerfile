FROM node:16
WORKDIR /app
COPY package* ./
RUN npm install
COPY . .
EXPOSE 3002
CMD [ "npm","start" ]