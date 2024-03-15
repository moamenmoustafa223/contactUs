# Use the official Node.js Alpine image with version 16
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install -g serve

# Copy the rest of the application code
COPY . .

RUN npm run predeploy

# Expose the port that Vite will use
EXPOSE 5173

# Run the development server
CMD ["serve", "-s", "dist", "-p", "5173"]