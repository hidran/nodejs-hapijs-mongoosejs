/**
 * Created by hidran on 11/22/14.
 */

module.exports = function() {
    var apiHost = '0.0.0.0';

    var apiPort = parseInt(process.env.PORT,10) || 8000;

    var mongoHost = 'localhost';
    var mongoPort = 27017;
    var mongoDb = 'test';
    var mongoUser = '';
    var mongoPass ='';

    return {
        application : {

            'host' : apiHost,
            'port' : apiPort
        },
        database : {
            host : mongoHost,
            port : mongoPort,
            user : mongoUser,
            password : mongoPass,
            database : mongoDb
        },
        DOWNLOAD_DIR :'/tmp/downloads/'
    };




}();