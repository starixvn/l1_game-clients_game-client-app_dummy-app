FROM hub.lumigame.com/docker-hub/library/node
COPY . .
RUN yarn install
CMD ["yarn", "start"]
