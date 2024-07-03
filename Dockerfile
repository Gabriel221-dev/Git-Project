FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy package.json and package-lock.json files first
# This allows Docker to cache these layers if they haven't changed
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Set the PORT environment variable
ENV PORT=8080

# Expose port 8080 to the outside world
EXPOSE 8080

# Start the app using the start script
CMD ["npm", "start"]
