## Initialize the project
run npm init to initialize the project:
npm init
then install express:
npm install --save express

## Create initial js file
create index.js and add: 

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello New York\n');
}).listen(8080);
console.log('Server running at http://localhost:8080/');