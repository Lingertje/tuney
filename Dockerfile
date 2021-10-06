FROM 'node':14.17.6
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn
COPY . .

CMD yarn start
