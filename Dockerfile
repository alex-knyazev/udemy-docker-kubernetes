# first phase is build
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# second phaase is running
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
