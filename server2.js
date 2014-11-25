/**
 * Created by hidran on 11/25/14.
 */
var Hapi = require("hapi");

var server2 = new Hapi.Server('localhost', 8000);

if (!module.parent) {
    server2.start(function() {
        console.log("Server started", server.info.uri);
    });
}

module.exports = server2;