# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to cache dependencies)
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY . /app

# Define the startup command
CMD ["node", "app.js"]

