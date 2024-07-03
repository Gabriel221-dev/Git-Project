FROM node:18-alpine
# The /app directory should act as the main application directory
WORKDIR /app
# Copy all files
COPY . .
# RUN npm install
RUN npm install
#RUN npm build
RUN npm run build
# EXPOSE 3000
# Start the app using serve command
# CMD ["npm", "start"]
FROM nginx:alpine
COPY --from=node /app/dist/test-case-builder usr/share/nginx/html
CMD ng serve --host 0.0.0.0 --port $PORT
