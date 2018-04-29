var http = require('http'),
	fs = require('fs');
var settings = require('./settings');

var server = http.createServer();
server.on('request', function(req, res){
	console.log(__dirname + '/public_html' + req.url);
	fs.readFile(__dirname + '/public_html' + req.url, 'utf-8', function(err, data){
		if(err){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write('not found');
			return res.end();
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

server.listen(settings.port, settings.host);
console.log("url -> " + settings.host + ":" + settings.port);
console.log("Server listening...");
