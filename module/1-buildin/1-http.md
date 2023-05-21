## HTTP Module in Node.js

The `http` module in Node.js provides functionality for creating HTTP servers and making HTTP requests. It allows you to handle incoming HTTP requests, send HTTP responses, and perform various operations related to HTTP communication.

### Example: Creating an HTTP Server

Here's an example that demonstrates how to create an HTTP server using the `http` module in Node.js:

```javascript
const http = require('http');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server and listen on a specified port
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
