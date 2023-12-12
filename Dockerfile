FROM node:18-alpine
WORKDIR /CICD-ENV/
RUN npm install
CMD ["npm", "start"]