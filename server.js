var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

http.createServer(function(req, res) {
  var pathname=__dirname + url.parse(req.url).pathname;
  if (path.extname(pathname) === '') {
    pathname += '/';
  }
  if (pathname.charAt(pathname.length - 1) == '/') {
    pathname += 'index.html';
  }
  switch(path.extname(pathname)){
    case ".html":
      res.writeHead(200, {"Content-Type": "text/html"});
      break;
    case ".js":
      res.writeHead(200, {"Content-Type": "application/javascript"});
      break;
    case ".css":
      res.writeHead(200, {"Content-Type": "text/css"});
      break;
    case ".gif":
      res.writeHead(200, {"Content-Type": "image/gif"});
      break;
    case ".jpg":
      res.writeHead(200, {"Content-Type": "image/jpeg"});
      break;
    case ".png":
      res.writeHead(200, {"Content-Type": "image/png"});
      break;
    default:
      res.writeHead(200, {"Content-Type": "application/octet-stream"});
  }

  fs.readFile(pathname,function (err,data){
    res.end(data);
  });
}).listen(3000, function() {
  console.log('Page-Console Test Server Listening on Port 3000.');
});