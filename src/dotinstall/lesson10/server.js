var http = require('http'),
	fs = require('fs'),
	ejs = require('ejs');
var settings = require('./settings');

var server = http.createServer();
var n = 0;
// Syncはブロッキングな命令
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
server.on('request', function(req, res){
	n++;
	var data = ejs.render(template, {
		title: "hello",
		content: "<strong>World</strong>",
		n: n,
	});
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
});

server.listen(settings.port, settings.host);
console.log("url -> " + settings.host + ":" + settings.port);
console.log("Server listening...");