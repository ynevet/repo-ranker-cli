# syntax=docker/dockerfile:1
FROM node:14.17.0
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
RUN npm install dependency-check -g
COPY . .
RUN chmod +x cli.js     
ENTRYPOINT [ "./cli.js" ]
CMD [ "10" ]