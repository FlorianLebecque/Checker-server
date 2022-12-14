var http = require('http');

// Create a new server instance.
var server = http.createServer();

// Our GUN setup from the last example.
var Gun = require('gun');
var gun = Gun({web: server});

// Start the server on port 8080.
server.listen(5254, function () {
  console.log('Server listening on http://localhost:8080/gun')
})