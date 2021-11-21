ARG config
ARG imagen_tag

FROM node:14.17.3-alpine as aplicacion
WORKDIR /app
ARG config
COPY package.json .
RUN npm install --production
COPY . .
RUN npm run build -- --configuration=${config}

FROM nginx:1.19-alpine
EXPOSE 80 443

ARG imagen_tag
ENV IMAGEN_TAG=$imagen_tag

COPY ./nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=aplicacion /app/dist/EstudiaEnCasaWeb /usr/share/nginx/html