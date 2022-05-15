FROM node:12

ENV PORT 3100

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Installing dependencies
COPY . /app
RUN npm install

# Building app
RUN npm run start
EXPOSE 3100

# Running the app
CMD "npm" "run" "start"