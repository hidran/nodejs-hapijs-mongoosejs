/**
 * Created by hidran on 11/22/14.
 */

module.exports = function(config) {
    var mongoose = require('mongoose');

    var connString = '';
    if(config.user){
        connString += config.user+':';
    }
    if(config.password){
        connString += config.password;
    }
    if(connString){
        connString += '@';
    }
    if(config.host){
        connString += config.host;
    }
    if(config.port){
        connString += ':' +config.port;
    }
    if(config.database){
        connString +=  '/' + config.database;
    }
    var dbURI = connString;
    var db = mongoose.connect('mongodb://' + connString, function(err){
        if(err){
            console.log(err);

        }
    });



// If the connection throws an error
    mongoose.connection.on('error',function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });
    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open to ' + dbURI);
    });
    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');

        });
    });



};