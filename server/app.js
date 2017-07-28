//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./modules/db');
var mongoose = require('mongoose');

//uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public')));

// base url
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// App Set //
app.set('port', (process.env.PORT || 5000));

// Listen //
app.listen(app.get("port"), function(){
});
