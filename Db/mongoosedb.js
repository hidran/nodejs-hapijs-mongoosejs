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
    console.log(connString)
    var res = mongoose.connect('mongodb://' + connString, function(err){
        if(err){
            console.log(err);
            
        }
    });

   
    return mongoose;

};