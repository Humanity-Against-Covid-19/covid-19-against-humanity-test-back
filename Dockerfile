# TODO: consider using slim or alpine in the future
FROM node:10-alpine

WORKDIR /home/app/service/

# Configure user and give full access to /home/app/

COPY . /home/app/service/

# Start the node server
EXPOSE 80
CMD ["node", "app.js"]
