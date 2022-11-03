FROM hub.lumigame.com/docker-hub/library/node:18.1-alpine
COPY . .
RUN yarn install
CMD ["yarn", "start"]
