FROM nginx:1.15.2-alpine
COPY ./public /var/www
COPY ./nginx/default.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
