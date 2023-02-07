const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to our Homepage");
  }

  if (request.url === "/about") {
    response.end("Here is our short history");
  } else {
    response.end(`
  <h1>Opps!<h1/>
  <p>Can not find the page</p>
  <a href ="/">back home</a>
  `);
  }
});

server.listen(5000);
