/**
 * Created by hidran on 22/11/14.
 */

exports.logFile = function(filename,data){
    fs = require('fs');
    fs.writeFile(filename, JSON.stringify(data), function (err) {
        if (err) return console.log(err);
        return 1;
    });
};
