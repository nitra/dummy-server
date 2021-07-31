FROM node:alpine

COPY index.js /

EXPOSE 80

CMD ["node", "."]
