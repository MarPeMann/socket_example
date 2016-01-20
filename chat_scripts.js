window.onload = function(event){

	var socket = io();

	//Listen "new message" from server
	socket.on('new message', function(data){

		var textArea = document.getElementById('messages');
		textArea.value += data.name + ":" +data.message + "\n";
	});

	var btnSend = document.getElementById('send');

	btnSend.onclick = function(){

		var msg = document.getElementById('chat_message');
		console.log(msg.value);
		var dataToServer = {
			name: 'undef',
			message: msg.value
		}

		socket.emit('chat msg', dataToServer);

	}
}