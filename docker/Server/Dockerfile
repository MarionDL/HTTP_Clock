FROM node:8
MAINTAINER Marion Dutu Launay <marion.dutulaunay@heig-vd.ch>

COPY docker/Server/src /opt/app/

WORKDIR /opt/app
RUN npm install

ENTRYPOINT ["node", "/opt/app/server.js"]