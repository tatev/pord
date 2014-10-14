'use strict';

module.exports = {
    local: {
        db: 'mongodb://localhost/pord',
        redis: {
            port: 6379,
            host: 'localhost',
            pass: ''
        },
        elasticSearch: {
            host: 'localhost:9200',
            apiVersion: '1.3'
        },
        providers: {
            facebook: {
                clientID: 'CLIENT_ID',
                clientSecret: 'CLIENT_SECRET',
                callbackURL: 'http://localhost:3000/auth/facebook/callback'
            }
        },
        host: 'http://localhost:3000'
    },

    testing: {
        db: 'mongodb://localhost/pord-testing',
        redis: {
            port: 6379,
            host: 'localhost',
            pass: ''
        },
        elasticSearch: {
            host: 'localhost:9200',
            apiVersion: '1.3'
        },
        providers: {
            facebook: {
                clientID: 'CLIENT_ID',
                clientSecret: 'CLIENT_SECRET',
                callbackURL: 'http://localhost:3000/auth/facebook/callback'
            }
        },
        host: 'http://localhost:3000'
    },

    //Heroku environments
    development: {
        db: 'mongodb://localhost/pord',
        redis: {
            port: 6379,
            host: 'localhost',
            pass: ''
        },
        elasticSearch: {
            host: 'localhost:9200',
            apiVersion: '1.3'
        },
        providers: {
            facebook: {
                clientID: 'CLIENT_ID',
                clientSecret: 'CLIENT_SECRET',
                callbackURL: 'http://localhost:3000/auth/facebook/callback'
            }
        },
        host: 'http://localhost:3000'
    },


    staging: {
        db: 'mongodb://localhost/pord',
        redis: {
            port: 6379,
            host: 'localhost',
            pass: ''
        },
        elasticSearch: {
            host: 'localhost:9200',
            apiVersion: '1.3'
        },
        providers: {
            facebook: {
                clientID: 'CLIENT_ID',
                clientSecret: 'CLIENT_SECRET',
                callbackURL: 'http://localhost:3000/auth/facebook/callback'
            }
        },
        host: 'http://localhost:3000'
    },


    production: {
        db: 'mongodb://localhost/pord',
        redis: {
            port: 6379,
            host: 'localhost',
            pass: ''
        },
        elasticSearch: {
            host: 'localhost:9200',
            apiVersion: '1.3'
        },
        providers: {
            facebook: {
                clientID: 'CLIENT_ID',
                clientSecret: 'CLIENT_SECRET',
                callbackURL: 'http://localhost:3000/auth/facebook/callback'
            }
        },
        host: 'http://localhost:3000'
    }
};