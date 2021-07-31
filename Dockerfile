FROM alpine

RUN apk add --no-cache nodejs

COPY index.js /

EXPOSE 80

CMD ["node", "."]
