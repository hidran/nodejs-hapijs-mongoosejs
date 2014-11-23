var Hapi = require('hapi');
var config = require('./config/config');
var serverConfig = config.application;

var mongoose = require('./Db/mongoosedb')(config.database);


var server = Hapi.createServer(serverConfig.host, serverConfig.port);

var EventModel = require('./models/Event')(mongoose);

var CustomerModel = require('./models/Customer')(mongoose);

server.route(require('./routes/event')(mongoose, EventModel));
server.route(require('./routes/customer')(mongoose, CustomerModel));
server.route(require('./routes/batch')(mongoose,CustomerModel,EventModel ));

server.start(function () {
    console.log( 'Server running at: ' + server.info.uri);
});

