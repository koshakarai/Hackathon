FROM node:16.13.1
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install 
RUN npm install react-scripts@5.0.1 -g 
COPY . ./
