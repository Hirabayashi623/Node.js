var http = require('http');
var settings = require('./settings');

var server = http.createServer();
server.on('request', function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>hello world</h1>' + 'request from [' + req.url + ']');
	res.end();
});

server.listen(settings.port, settings.host);
console.log("url -> " + settings.host + ":" + settings.port);
console.log("Server listening...");
