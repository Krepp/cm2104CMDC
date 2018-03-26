var http = require('http');
var oneliner = require('one-liner-joke');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("The date and time are currently: " + currentdate.myDateTime());
  // res.end('Hello World!');
  var randomJoke = oneliner();
  res.end(randomJoke);

}).listen(8080);
