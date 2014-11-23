var Hapi = require('hapi');
var Good = require('good');
var mongodb = "D4ohytot";
var fs = require('fs');
var logger = require('./utils/log.js');


var server = Hapi.createServer('0.0.0.0', parseInt(process.env.PORT, 10) || 3000);
server.route({
    method: 'GET',
    path: '/api',
    handler: function (request, reply) {
        reply({name:'hidrann'});
    }
});

server.route({
    method: 'GET',
    path: '/api/sendFile',
    handler: function (request, reply) {
     var res=  logger.logFile('text.txt',{name:'hidran'});
        reply(res);
    }
});
server.route({
    method: 'GET',
    path: '/api/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});
server.route({
    method: 'POST',
    path: '/api/submitCsv',
    config: {

        payload: {
            output: 'stream',
            parse: true,
            allow: 'multipart/form-data'
        },

        handler: function (request, reply) {
            var data = request.payload;
            if (data.file) {
                var name = data.file.hapi.filename;
                var path = __dirname + "/uploads/" + name;
                var file = fs.createWriteStream(path);

                file.on('error', function (err) {
                    console.error(err)
                });

                data.file.pipe(file);

                data.file.on('end', function (err) {
                    if(err) reply(err);
                    var ret = {
                        filename: data.file.hapi.filename,
                        headers: data.file.hapi.headers
                    };
                    reply(JSON.stringify(ret));
                })
            }

        }
    }
});
server.pack.register({
    plugin: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            args:[{ log: '*', request: '*' }]
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});