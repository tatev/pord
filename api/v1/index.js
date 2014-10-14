'use strict';

var path = require('path');
var fs = require('fs');
var express = require('express');
var app = module.exports = express();

app.use(function(req, res, next) {
    req.app = app;
    next();
});

console.log('Initializing api routes');
var apiRoutesPath = './api/v1/routes';
var routes = fs.readdirSync(apiRoutesPath);

for (var i = routes.length; i--;) {
    var routerPath = path.join(process.cwd(), apiRoutesPath, routes[i]);
    require(routerPath)(app, getHandlerInstance(routerPath));
}

function getHandlerInstance(routerPath) {
    var handlerPath = routerPath.replace('routes', 'handlers');
    require(handlerPath);
}
