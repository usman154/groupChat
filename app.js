var webSocketServer = require('ws').Server;
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
	if(req.url =='/'){
		res.writeHead(200, {'Content-type' : 'text/html'});
		var data = fs.readFileSync('index.html');
		res.end(data);
	}
	if(req.url =='/client.js'){
		res.writeHead(200, {'Content-type' : 'text/javascript'});
		var data = fs.readFileSync('client.js');
		res.end(data);
	}
	
});

server.listen(3002);
var wss = new webSocketServer({port :3000});
wss.on("connection", function(ws){
	ws.on("message", function(message){
		if(message === 'exit'){
			ws.close();
		}else{
			
			wss.clients.forEach(function(client){
				client.send(message);
			});
		}
	});
	ws.send("Connected to chat with Rana group :D ");
});