'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var config = require('./config');

require('./init')(config);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.enable('trust proxy');
app.use(require('./corsSupport'));
//app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log('Initializing express: /api/v1 server');
var apiServerV1 = require('./api/v1');

app.use('/', function(req, res) {
    res.render('index', {title: 'PORD'});
});

app.use('/api/v1', apiServerV1);

app.use('/apidoc', function(req, res) {
    res.render(path.join(__dirname, 'public/apidoc'));
});

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    //var err = new Error('Not Found');
    //err.status = 404;
    next('Not Found');
});

module.exports = app;