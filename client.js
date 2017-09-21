var ws = new WebSocket("ws://192.168.1.7:3000");
ws.onopen = function(){
setTitle("Connected to Rana chat service");	
}
ws.onclose = function(){
	setTitle("Disconnected");
}
ws.onmessage = function(payload){
	printMessage(payload.data);
}
document.forms[0].onsubmit = function(){
	var input = document.getElementById('message');
	ws.send(input.value);
	 document.getElementById('message').value = '';
}
function setTitle(title){
document.querySelector('h1').innerHTML = title;
}
function printMessage(message){
	var  p = document.createElement('p');
	p.innerHTML = message;
	document.querySelector('div.message').appendChild(p);
}