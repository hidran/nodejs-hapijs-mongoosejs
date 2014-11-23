/**
 * Created by hidran on 11/22/14.
 */
"use strict";
module.exports = function(mongoose, CustomerModel, EventModel) {

    function BatchController() {
    }

    BatchController.prototype = function () {



        return {

            insertEvents: function insert(request, reply) {

                var data = request.payload;
                //reply(request.payload)
                if (data.file) {
                    var chunk;
                    var dataLines = '';
                    while (null !== (chunk = data.file.read())) {
                        dataLines += chunk;
                    }
                    var fileData = dataLines.split("\n");
                    if(fileData.length<=0){
                        reply(new Error('No data found'));
                    }
                    var fields = fileData[0].split(',');
                    var  currentdata, EventObj;
                    var allObjs = [];
                    for(var i = 1; fileData[i]; i++){
                        EventObj = new EventModel();
                        currentdata = fileData[i].split(',');


                        for( var j =0; fields[j]; j++){

                            EventObj[fields[j].trim()] =currentdata[j].trim();

                        }
                        allObjs.push(EventObj.toJSON());

                        EventObj.save();
                    }
                    var fs = require('fs');

                    var name = data.file.hapi.filename +'.json';
                    var path = __dirname + "/../downloads/" + name;

                    var file = fs.open(path,'w', function(err, fd){
                        if(err){
                            reply(err);
                        } else {
                            fs.write(fd, JSON.stringify(allObjs),function(err){
                                if(err){
                                    reply(err);
                                }else{
                                    reply(data)
                                }
                            });
                        }
                    });






                } else {
                    reply(new Error('no file uploaded'));
                }

            },
            insertCustomers: function insert(request, reply) {

                var data = request.payload;
                //reply(request.payload)
                if (data.file) {

                    var chunk, dataLines='';
                    while (null !== (chunk = data.file.read())) {
                        dataLines += chunk;
                    }
                    var fileData = dataLines.split("\n");
                    if(fileData.length<=0){
                        reply(new Error('No data found'));
                    }
                    var fields = fileData[0].split(',');

                    var  currentdata;

                    var allObjs = [];

                    for(var i = 1; fileData[i]; i++){
                       var CustomerObj = new CustomerModel();
                        currentdata = fileData[i].split(',');


                        for( var j =0; fields[j]; j++){

                            CustomerObj[fields[j].trim()] =currentdata[j].trim();

                        }
                        allObjs.push(CustomerObj.toJSON());

                        CustomerObj.save();
                    }
                    var fs = require('fs');

                    var name = data.file.hapi.filename +'.json';
                    var path = __dirname + "/../downloads/" + name;

                    var file = fs.open(path,'w', function(err, fd){
                        if(err){
                            reply(err);
                        } else {
                            fs.write(fd, JSON.stringify(allObjs),function(err,data){
                                if(err){
                                    reply(err);
                                }else{
                                    reply(data)
                                }
                            });
                        }
                    });






                } else {
                    reply(new Error('no file uploaded'));
                }


            }


        }
    }(mongoose);
    return new BatchController();

};
