# Use an official Node.js runtime as a parent image
FROM node:12.14.0 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package.json .
COPY package-lock.json .

# Install application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application
RUN npm run build --prod

# Expose the port your application will run on
EXPOSE 80

# Run the application
CMD ["node", "server.js"]
