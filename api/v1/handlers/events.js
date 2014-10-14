'use strict';

var mongoose = require('mongoose');
var Event = mongoose.model('Event');
var q = require('q');

exports.event = function(req, res, next, id) {
    console.log('event');
    next();
};

exports.create = function(req, res, next) {
    console.log('create');
    var event = new Event({title: 'FirstEventName'});
    event.save(function(ev) {
        console.log('event', ev)
        next();
    });
};

exports.get = function(req, res, next) {
    console.log('get');
    next();
};

exports.getList = function(req, res, next) {
    return q.when(Event.find({
        deleted: null
    }).exec())
        .then(function(events) {
            res.json(events);
            return events;
        })
        .catch(next);
};

exports.update = function(req, res, next) {
    console.log('update');
    next();
};

exports.delete = function(req, res, next) {
    console.log('delete');
    next();
};
