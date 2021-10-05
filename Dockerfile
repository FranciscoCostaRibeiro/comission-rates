FROM node:14.15.5-alpine3.10

ADD . /opt/commission-rates/backend
WORKDIR /opt/commission-rates/backend

RUN npm install && \
    npm run build && \
    rm -rf src && \
    npm prune --production

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]