FROM node:14-slim

# Install packages
RUN apt-get update -y && apt-get install -y curl unzip groff jq bc git

# Download and unzip install
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip

# Run AWS install
RUN ./aws/install