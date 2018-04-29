var http = require('http');

var server = http.createServer();
server.on('request', function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('hello world');
	res.end();
});

server.listen('18080', 'localhost');
console.log("url -> localhost:18080")
console.log("Server listening...");
