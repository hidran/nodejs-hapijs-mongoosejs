/**
 * Created by hidran on 11/22/14.
 */
module.exports = function() {
    var apiHost = 'localhost';

    var apiPort = 8000;

    var mongoHost = 'localhost';
    var mongoPort = 27017;
    var mongoDb = 'localz';
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
        DOWNLOAD_DIR :'/home/hidran/NODEPROJECTS/hapiproject/downloads/'
    };




}();