var express = require('express');
var stormpath = require('express-stormpath');

var app = express();
app.use(stormpath.init(app, {
  application: {
    href: 'https://api.stormpath.com/v1/applications/1ZBteF6RXF72vzwj1PvayM'
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

app.get("/example", function(req,res){
  res.status(200).sendFile(__dirname + '/views/example.html');
});

app.on('stormpath.ready', function() {
  app.listen(process.env.PORT || 9000);
  console.log("Starting server...");
});
