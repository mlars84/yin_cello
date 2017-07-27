//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./modules/db');
var mongoose = require('mongoose');

var port = process.env.PORT || 2367;

//uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve('public')));

//base url hit
app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

//listening...
app.listen(port, function() {
    console.log('listening on ', port);
});
