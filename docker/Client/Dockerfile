FROM node:8
MAINTAINER Marion Dutu Launay <marion.dutulaunay@heig-vd.ch>

COPY docker/Client/src /opt/app/

WORKDIR /opt/app
RUN npm install

ENTRYPOINT ["node", "/opt/app/client.js"]