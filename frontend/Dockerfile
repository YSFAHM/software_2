# Use Nginx image as the base image
FROM nginx:alpine

# Copy the frontend files into the Nginx default public directory
COPY ./ /usr/share/nginx/html

# Expose port 80 (default port for HTTP)
EXPOSE 80

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]