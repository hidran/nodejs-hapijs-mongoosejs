/**
 * Created by hidran on 11/22/14.
 */
"use strict";



module.exports = function(mongoose, eventModel) {
    var eventController = require('../controllers/event')(mongoose, eventModel);
    var eventValidate = require('../validate/event');
    return [
        {
            method: 'GET',
            path: '/api/events',
            config : {
                handler: eventController.find,
                validate : eventValidate.find
            }
        },
        {
            method: 'GET',
            path: '/api/events/{event_id}',
            config : {
                handler: eventController.findByID,
                validate: eventValidate.findByID
            }
        },
        {
            method: 'GET',
            path: '/api/events/locations/{location_name}',
            config : {
                handler: eventController.findByLocationName,
                validate: eventValidate.findByLocationName
            }
        },
        {
            method: 'POST',
            path: '/api/events',
            config : {
                handler : eventController.insert,
                validate : eventValidate.insert
            }
        },
        {
            method: 'PUT',
            path: '/api/events/{event_id}',
            config : {
                handler: eventController.update,
                validate : eventValidate.update
            }
        },
        {
            method: 'DELETE',
            path: '/api/events/{event_id}',
            config : {
                handler: eventController.delete,
                validate : eventValidate.delete
            }
        }
    ];
};