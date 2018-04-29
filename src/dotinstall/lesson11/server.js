var http = require('http'),
	fs = require('fs'),
	ejs = require('ejs'),
	qs = require('querystring');
var settings = require('./settings');

var server = http.createServer();
var items = [];
// Syncはブロッキングな命令
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');

function renderForm(items, res){
	var data = ejs.render(template, {
		items: items,
	});

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
}

server.on('request', function(req, res){
	console.log(req.method);
	if(req.method === 'POST'){
		req.data = "";
		req.on("readable", function(){
			req.data += req.read();
		});
		req.on("end", function(){
			var query = qs.parse(req.data);
			items.push(query.item);
			console.log(query.item)
			renderForm(items, res);
		});
	}else{
		renderForm(items, res)
	}
	console.log(items);
});

server.listen(settings.port, settings.host);
console.log("url -> " + settings.host + ":" + settings.port);
console.log("Server listening...");
