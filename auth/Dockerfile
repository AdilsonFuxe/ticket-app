FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig-build.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build

## this is stage two , where the app actually runs
FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY --from=0 /app/dist .
CMD [ "npm", "start" ]