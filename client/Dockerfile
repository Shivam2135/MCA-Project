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

# Copy built app from builder stage to Nginx's default public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
