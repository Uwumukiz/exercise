// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// Create HTTP server 
const express = require('express');
const app= express();

app.use(express.static('hosting'));


const server = http.createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body "Hello World"
   res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});

//importing my modules

var square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
var perimeter=require('./square');
console.log('The perimeter of a square with a width of 7 is ' +perimeter.perimeter(7));

//res.sendfile

app.get('/user/:uid/photos/:file', function (req, res) {
   var uid = req.params.uid
   var file = req.params.file
 
   req.user.mayViewFilesFrom(uid, function (yes) {
     if (yes) {
       res.sendFile('/uploads/' + uid + '/' + file)
     } else {
       res.status(403).send("Sorry! You can't see that.")
     }
   })
 })