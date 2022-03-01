FROM node:12.18-alpine as build-klnw-landing-page
ARG BUILD_ENV
WORKDIR /klnw-landing-page
COPY package.json /klnw-landing-page/
RUN npm install
COPY . /klnw-landing-page
RUN npm run build

FROM nginx:1.17-alpine
COPY --from=build-klnw-landing-page /klnw-landing-page/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
