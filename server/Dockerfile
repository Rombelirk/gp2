FROM node:13.12.0-alpine 

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm run build

COPY . ./

CMD ["npm", "run", "prod"]
EXPOSE 3001

