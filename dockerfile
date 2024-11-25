FROM node:20-alpine as builder


ARG VITE_API_BASE_URL
ARG VITE_SOCKET_BASE_URL
ARG GITHUB_TOKEN

WORKDIR /build

RUN apk add git

COPY package.json .
COPY package-lock.json .

RUN echo "@infraregistry:registry=https://npm.pkg.github.com" > /root/.npmrc
RUN echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> /root/.npmrc

RUN npm install --force

COPY . .

RUN VITE_API_BASE_URL=${VITE_API_BASE_URL} VITE_SOCKET_BASE_URL=${VITE_SOCKET_BASE_URL} npm run build

FROM nginx:alpine

WORKDIR /app

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /build/dist /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d
USER nginx