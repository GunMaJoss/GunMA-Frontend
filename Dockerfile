FROM node:14.16
 
WORKDIR /usr/src/app
 
COPY . .
RUN rm -rf node_modules 

RUN yarn install

EXPOSE 3000

CMD ["yarn","start"]