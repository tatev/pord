'use strict';

var fs = require('fs');
var mongoose = require('mongoose');


var dbInitialized = false;

/**
 * Initialize Database connection
 * @param  {Object} config current environment configuration
 * @param forceNoDebug
 */
exports.init = function (config, forceNoDebug) {
    //Preventing the module to be initialize more than one time
    if (dbInitialized) {
        return;
    }
    dbInitialized = true;

    //Connecting to the database
    console.log('Initializing database connection');
    mongoose.connect(config.db);

    //Set debug mode for dev environment
    var env = process.env.NODE_ENV || 'dev';
    if (env === 'dev' && !forceNoDebug) {
        mongoose.set('debug', true);
    }

    //Init model schemas
    console.log('Initializing model schemas');
    var schemasPath = process.cwd() + '/schemas';
    var schemaFiles = fs.readdirSync(schemasPath);

    schemaFiles.forEach(function (file) {
        require(schemasPath + '/' + file);
        console.log('Model schema initialized: %s', file);
    });
};