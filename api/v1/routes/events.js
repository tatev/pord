'use strict';

var event = require('../handlers/events');

module.exports = function(app) {
    app.route('/events')
        .post(event.create)
        .get(event.getList);

    app.route('/events/:eventId')
        .get(event.get)
        .put(event.update)
        .delete(event.delete);

    app.param('eventId', event.event);
};