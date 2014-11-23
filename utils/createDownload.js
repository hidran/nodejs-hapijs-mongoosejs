/**
 * Created by hidran on 11/23/14.
 */
var exec = require('child_process').exec;
var DOWNLOAD_DIR = '../downloads/';

// We will be downloading the files to a directory, so make sure it's there
// This step is not required if you have manually created the directory
var mkdir = 'mkdir -p ' + DOWNLOAD_DIR;
exec(mkdir, function(err) {
    if (err) throw err;

});