# Use official Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to start the backend server
CMD ["node", "server.js"]
