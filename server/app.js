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
app.use(express.static('public'));

//base url hit
app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});

//listening...
app.listen(port, function() {
  console.log('listening on ', port);
});
