/**
 * Created by hidran on 11/22/14.
 */
"use strict";



module.exports = function(mongoose, EventModel){

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
                console.log(request.params);
                var reg =new RegExp('^'+request.params.location_name);

                EventModel.find({
                   'location':{ '$regex':reg, $options:'i'}
                }, function(err, event){
                    if(err) reply(err);
                    reply(event)
                })
            },
            find: function find(request, reply) {
                EventModel.find(function(err, events){
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
