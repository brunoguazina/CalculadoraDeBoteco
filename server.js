var http = require('http');
var fs = require('fs');

var request = function(req, res){
	fs.readFile('calculadora.html', function(erro, data){
		res.writeHead(200);
		res.end(data);
	});
}

var server = http.createServer(request);
server.listen(2000);
console.log('Rodando...')

