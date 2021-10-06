FROM 'node':14.17.6
WORKDIR /app

COPY db.json ./

RUN yarn global add json-server

CMD ["json-server", "/app/db.json", "--port", "8000", "--host", "0.0.0.0"]
