FROM node:18-alpine
WORKDIR /app
COPY app/package.json ./
RUN npm install --production
COPY app/ ./
ENV VERSION=v1
EXPOSE 3000
CMD ["node", "index.js"]
