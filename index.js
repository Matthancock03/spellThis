var express = require('express');
var stormpath = require('express-stormpath');

var http = require('http');
var util = require('util');
var form = require(__dirname + '/controllers/formParse');
var List = require(__dirname + '/models/list');
var Teacher = require(__dirname +'/models/teacher');

var app = express();

app.use(stormpath.init(app, {
  application: {
    href: 'https://api.stormpath.com/v1/applications/173vkD8p8nkeJb55sXM6WW'
  },
  website: true
}));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/controllers'));
app.use(express.static(__dirname + '/Recordmp3js'));
//app.use(express.favicon(__dirname + '/images/favicon.jpeg'));

app.get("/", function(req,res){
    //console.log(req.headers.cookie);
  res.status(200).sendFile(__dirname + '/views/login.html');
});

app.get("/home", function(req,res){
  res.status(200).sendFile(__dirname + '/views/home.html');
});

app.get("/createList", function(req,res){
  res.status(200).sendFile(__dirname + '/views/createList.html');
});

app.post("/upload", function(req,res){
  //form.parse(req);
  console.log(req.body);
  res.status(200).send("Request body: " + req.body);
});

app.get("/example", function(req,res){
  res.status(200).sendFile(__dirname + '/views/example.html');
});

app.on('stormpath.ready', function() {
  app.listen(process.env.PORT || 9000);
  console.log("Starting server...");
});
