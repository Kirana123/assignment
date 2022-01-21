FROM node:12.18

RUN mkdir -p /app

WORKDIR /app
COPY . /app
 
RUN npm install
CMD ["npm", "start"]
