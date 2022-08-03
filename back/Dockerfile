FROM node:12.22.12-alpine3.15
RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
ENV UNA_VARIABLE_DE_ENTORNO="Valor la variable de entorno"
EXPOSE 3002
CMD ["npm", "start"]
