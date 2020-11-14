FROM node:12.16.2 as builder

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:${PATH}

COPY package.json /usr/src/app/package.json

COPY package-lock.json /usr/src/app/package-lock.json

RUN npm install --silent

RUN npm install react-scripts@3.4.1 -g --silent

COPY . /usr/src/app



RUN npm run build

FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d

COPY conf /etc/nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# 80포트 오픈하고 nginx 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

