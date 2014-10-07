var http = require('http');
var fs = require('fs');

var request = function(req, res){
	fs.readFile('index.html', function(erro, data){
		res.writeHead(200);
		res.end(data);
	});
}

var server = http.createServer(request);
var port = process.env.PORT || 3000

server.listen(port);
console.log('Rodando...')

