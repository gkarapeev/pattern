const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8080;

const serverFunction = function (request, response) {
  if (request.url === '/') {
    fs.readFile('front-end/index.html', (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write('Error: File not found.');
      }

      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(data);
      response.end();
    });
  }

  if (request.url === '/styles.css') {
    fs.readFile('front-end/styles.css', function (err, data) {
      if (err) console.log(err);

      response.writeHead(200, { 'Content-Type': 'text/css' });
      response.write(data);
      response.end();
    });
  }

  if (request.url === '/pi.js') {
    fs.readFile('front-end/pi.js', function (err, data) {
      if (err) console.log(err);
      response.writeHead(200, { 'Content-Type': 'text/javascript' });
      response.write(data);
      response.end();
    });
  }

  if (request.url === '/script.js') {
    fs.readFile('front-end/script.js', function (err, data) {
      if (err) console.log(err);
      response.writeHead(200, { 'Content-Type': 'text/javascript' });
      response.write(data);
      response.end();
    });
  }
};

const server = http.createServer(serverFunction);

const listenFunction = function (error) {
  if (error) {
    console.log('Something went wring', error);
  }

  console.log('Node.js server is active and listening on port ' + port);
};

server.listen(port, listenFunction);
