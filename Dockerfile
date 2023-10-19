
FROM node:20.5.0

WORKDIR /src

COPY package*.json ./

ARG FIREBASE_API_KEY
ENV FIREBASE_API_KEY=$FIREBASE_API_KEY

RUN npm install

COPY . .
RUN npm run build

CMD [ "npm", "start" ]
