'use strict';

var url = require('url');
var path = require('path');

/**
 * Returns the mongo db config for the staging,
 * testing and production servers
 * @returns {*}
 * @private
 */
function __mongoConfig() {
    return process.env.MONGOHQ_URL !== 'undefined' && process.env.MONGOHQ_URL;
}

/**
 * Creates a config object dynamically for the application.
 * @returns {*}
 * @private
 */
function __createConfig() {

    var env = process.env.NODE_ENV || 'local';
    var config = require('./config')[env];

    config.db = __mongoConfig() || config.db;

    return config;
}

module.exports = __createConfig();