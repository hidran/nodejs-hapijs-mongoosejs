/**
 * Created by hidran on 11/22/14.
 */

module.exports = function(config) {
   var mongoose = require('mongoose');



    mongoose.connect('mongodb://'+config.user+':'+config.password+'@'+config.host+':'+config.port+'/'+config.database);


    return mongoose;

};