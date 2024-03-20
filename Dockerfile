#FROM node:18-alpine
#WORKDIR /app
#COPY package.json package-lock.json ./
#RUN npm install --production
#COPY . .
#EXPOSE 3000
#CMD ["node", "server.js"]

# Use official Node.js image as base
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as final image to serve static files
FROM nginx:alpine

# Set working directory for Nginx
WORKDIR /usr/share/nginx/html

# Copy built app from builder stage to Nginx's default public directory
COPY --from=builder /app/build .

# Install 'dotenv' package
RUN npm install dotenv

# Expose port 80
EXPOSE 80

# Command to start Nginx with 'dotenv' loaded
CMD ["sh", "-c", "npm run build && cp .env* /usr/share/nginx/html && nginx -g 'daemon off;'"]