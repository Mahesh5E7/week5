
// Import the HTTP module
const http = require('http');

// Define the host and port
const host = 'localhost';
const port = 2000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200; // 200 OK
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server and listen on the defined host and port
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
