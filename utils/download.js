/**
 * Created by hidran on 22/11/14.
 */
// Dependencies
var fs = require('fs');
var url = require('url');
var http = require('http');
var exec = require('child_process').exec;


// App variables
var file_url1 = 'https://s3-eu-west-1.amazonaws.com/spotz-temp-hosting/nodejs-test-customers.csv';
var file_url2 = "https://s3-eu-west-1.amazonaws.com/spotz-temp-hosting/nodejs-test-events.csv";
var DOWNLOAD_DIR = '../downloads2/';

// We will be downloading the files to a directory, so make sure it's there
// This step is not required if you have manually created the directory
var mkdir = 'mkdir -p ' + DOWNLOAD_DIR;
exec(mkdir, function(err) {
    if (err) throw err;
    else exports.download_file_httpget(file_url1);
    exports.download_file_httpget(file_url2);
});

// Function to download file using HTTP.get
exports.download_file_httpget = function(file_url) {
    var options = {
        host: url.parse(file_url).host,
        port: 80,
        path: url.parse(file_url).pathname
    };

    var file_name = url.parse(file_url).pathname.split('/').pop();
    var file = fs.createWriteStream(DOWNLOAD_DIR + file_name);

    http.get(options, function(res) {
        res.on('data', function(data) {
            file.write(data);
        }).on('end', function() {
            file.end();
            console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
        });
    });
};
