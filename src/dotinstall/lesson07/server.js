var http = require('http');
var settings = require('./settings');

var server = http.createServer();
server.on('request', function(req, res){
	switch(req.url){
	case '/about':
		msg = "about this page";
		break;
	case '/profile':
		msg = "about me";
		break;
	default:
		msg = "default message";
	}
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>hello world</h1>' + msg);
	res.end();
});

server.listen(settings.port, settings.host);
console.log("url -> " + settings.host + ":" + settings.port);
console.log("Server listening...");
