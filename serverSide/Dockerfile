# using alpine image for simplicity
FROM alpine:latest
RUN apk add --no-cache nodejs npm
# assigning working dir
WORKDIR /app
# copying package.json & package-lock.json
COPY package*.json ./
# installing dependencies
RUN npm install
# copying all files - except node_modules (exempted through via .dockerignore)
COPY . .
#exposing the endpoint
EXPOSE 3000
ENTRYPOINT ["node"]
# running the command
CMD ["npm","start"]

