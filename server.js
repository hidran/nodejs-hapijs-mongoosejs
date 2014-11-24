var Hapi = require('hapi');
var config = require('./config/config');
var serverConfig = config.application;
var path = require('path');
var fs = require('fs');
process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});
var DOWNLOAD_DIR = path.normalize(config.DOWNLOAD_DIR);

fs.exists(DOWNLOAD_DIR ,function(exists){

    if(!exists) {

        var exec = require('child_process').exec;

        var mkdir = 'mkdir -p ' + DOWNLOAD_DIR;

        exec(mkdir, function (err) {
            if (err) console.log('Could not create download folder:'+ err);


        });
    }
});
try {
    var mongoose = require('./Db/mongoosedb')(config.database);


    var server = Hapi.createServer(serverConfig.host, serverConfig.port);

    var EventModel = require('./models/Event')(mongoose);

    var CustomerModel = require('./models/Customer')(mongoose);

    server.route(require('./routes/event')(mongoose, EventModel));
    server.route(require('./routes/customer')(mongoose, CustomerModel));
    server.route(require('./routes/batch')(mongoose,CustomerModel,EventModel ));
} catch ( e){
    console.log(e)
}
if(mongoose && server) {
    server.start(function () {
        console.log('Server running at: ' + server.info.uri);
    });
}

