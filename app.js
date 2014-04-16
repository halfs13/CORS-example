var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.configure(function(){
	app.use(express.static(__dirname + '/static'));
});

server.listen(8080, function(){
  console.log("Express server listening on port 8080");
});