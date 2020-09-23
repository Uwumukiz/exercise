var io = require('socket.io');
var express = require('express');

var app = express(),
http = require('http'),
server = http.createServer(app),
socket = require('socket.io').listen(server);
app.use(express.static('views'));

app.get('/', function(req, res, next){
    res.render('./marc.html');
});

server.listen(8333);