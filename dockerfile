FROM node:20-buster-slim

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@latest expo-cli@latest

RUN mkdir /opt/react_native_app
WORKDIR /opt/react_native_app
ENV PATH /opt/react_native_app/.bin:$PATH
COPY ./package.json ./package-lock.json ./
RUN npm install react-native-web react-dom @expo/metro-runtime
RUN npm install

WORKDIR /opt/react_native_app/app
COPY . .

ENTRYPOINT ["npm", "run"]
CMD ["web"]