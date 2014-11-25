/**
 * Created by hidran on 11/22/14.
 */
"use strict";



module.exports = function( EventModel){
    var mongoose = require('mongoose');
    function EventController(){}

    EventController.prototype = function(){





        return {
            findByID: function findByID(request, reply) {
                EventModel.findOne({
                    '_id':request.params.event_id
                }, function(err, event){
                    if(err) reply(err);

                    reply(event)
                })
            },
            findByLocationName: function findByID(request, reply) {
                //console.log(request.params);
                if(request.params.location_name) {
                    var reg = new RegExp('^' + request.params.location_name);

                    EventModel.find({
                        'location': {'$regex': reg, $options: 'i'}
                    }, null, { sort: { location: 1 }}, function (err, event) {
                        if (err) reply(err);
                        reply(event)
                    });
                } else {
                    EventModel.find(null, null, { sort: { location: 1 }},function(err, events){
                        if(err) reply(err);
                        reply(events)
                    });
                }
            },
            find: function find(request, reply) {
                EventModel.find(null,null,{ sort: { location: 1 }},function(err, events){
                    if(err) reply(err);
                    reply(events)
                });
            },
            insert: function insert(request, reply) {



                var event = new EventModel({
                    eventDate:request.payload.eventDate,
                    customerId:request.payload.customerId,
                    beaconEnterDate:request.payload.beaconEnterDate,
                    beaconExitDate:request.payload.beaconExitDate,
                    location :request.payload.location,
                    beaconId : request.payload.beaconId
                });

                event.save(function(err, event){
                    if(err){
                        reply(err);
                    }
                    reply(event);
                });
                //  reply(event);

            },
            update: function update(request, reply) {


                 var data = {
                     eventDate:request.payload.eventDate,
                     customerId:request.payload.customerId,
                     beaconEnterDate:request.payload.beaconEnterDate,
                     beaconExitDate:request.payload.beaconExitDate,
                     location :request.payload.location,
                     beaconId : request.payload.beaconId
                 };
              //  var event = new EventModel();
                console.log(request.params);
                console.log(request.payload);

                EventModel.findOneAndUpdate({'_id': request.params.event_id}, data, function(err, event){
                    if(err)  {
                        reply(err);
                    }
                    reply(event);
                });

                //  reply(data);
            },
            'delete': function (request, reply){
               var id = request.params.event_id;

                EventModel.remove(
                    {
                        "_id" : id
                    },
                    function(err, event){
                    if(err)  {
                        reply(err);
                    }
                    reply(event);
                })
            }
        }
    }();

   return  new EventController();

};
