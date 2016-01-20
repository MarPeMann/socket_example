var express = require('express')();
var http = require('http').Server(express);

//Create server socket
var io = require('socket.io')(http);

//Listen "connection" message from client socket
io.on('connection', function(socket){
	console.log('connected');
	socket.on('chat msg', function(data){

		io.emit('new message', data);
	});
});

//Root context route to return index.html
express.get('/', function(req,res){

	res.sendfile('index.html');
});

express.get('/chat_scripts.js', function(req,res){

	res.sendfile('chat_scripts.js');
});

http.listen(3000, function(){
	console.log("listening port 3000");
});