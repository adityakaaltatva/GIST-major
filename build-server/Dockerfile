FROM ubuntu:focal

# Update and install required packages
RUN apt-get update && apt-get install -y \
    curl \
    git \
    nodejs \
    dos2unix

WORKDIR /home/app

# Copy application files
COPY main.sh main.sh
COPY script.js script.js
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Convert line endings and make scripts executable
RUN dos2unix main.sh && chmod +x main.sh
RUN chmod +x script.js

# Entry point for the container
ENTRYPOINT ["/home/app/main.sh"]
