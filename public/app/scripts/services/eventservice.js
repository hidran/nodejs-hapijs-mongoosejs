/**
 * Created by hidran on 11/24/14.
 */
angular.module('LocalzEvents').factory("eventService", ["$resource", function ($resource) {
    var baseUri='http://localhost:8000/api/events';
    ///api/events/locations/
    var Events = $resource(baseUri+'/'+':event_id', { event_id: '@event_id' }, { 'update': { method: 'PUT'} });
    var EventLocations = $resource(baseUri+'/locations/'+':location_name', { location_name: '@location_name'  });
    var getAllEvents= function () {
        return Events.query();
    };
    var addNewEvent= function (event) {
        return Events.save(event);
    };
    var updateEvent = function (event) {
/*
 eventDate:Date,
 customerId:String,
 beaconEnterDate:Date,
 beaconExitDate:Date,
 location:String,
 beaconId:String
 */

        delete(event._id);
        return $resource(baseUri+'/'+eventId, null, { 'update': { method: 'PUT'} }).update(
            event
        );
    };
    var getEventById = function (Id) {
        return Events.get({event_id:Id});
    };
    var deleteEvent = function (Id) {
        return Events.delete({event_id:Id});
    };
    var findLocationByName = function(location){
        if(location) {
            return EventLocations.query({location_name: location});
        } else {
           return getAllEvents();
        }
    };
    return {
        getAll: getAllEvents,
        addNew: addNewEvent,
        update: updateEvent,
        getByKey: getEventById,
        remove: deleteEvent,
        findLocationByName:findLocationByName
    };
} ]);

