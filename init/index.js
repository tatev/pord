'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (config) {
    var initPath = __dirname;
    var init = fs.readdirSync(initPath);
    init.forEach(function (js) {
        if (js === 'index.js') {
            return;
        }

        require(path.join(initPath, js)).init(config, true);
    });
};
