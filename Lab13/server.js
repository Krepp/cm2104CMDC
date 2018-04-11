var express = require('express');
app.use(express.static('public'))

var app = express();

app.get('/', function(req, res){
 res.send("Hello world! by express");
});
app.get('/test', function(req, res){
 res.send("this is route 2");
});
app.listen(8080);
