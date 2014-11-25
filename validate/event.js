/**
 * Created by hidran on 11/22/14.
 */
var Joi = require('joi');

function EventValidate(){}



EventValidate.prototype = (function(){

    var payloadConf = {

        eventDate:Joi.date().required(),
        customerId:Joi.string().required(),
        beaconEnterDate:Joi.date().required(),
        beaconExitDate:Joi.date().required(),
        location:Joi.string().required(),
        beaconId:Joi.string().required(),
        _id :Joi.string()


    };

    return {


    findByID: {
                  params: {
                    event_id : Joi.string().required()

                  }
              }
      ,
        findByLocationName: {
            params: {
                location_name : Joi.string().required().min(3)

            }
        }
        ,
        insert: {
            payload: payloadConf
        },
        update:  {

            payload: payloadConf
        }
        ,
        delete: {
            params: {
                event_id : Joi.string().required()
            }
        }
    };

}
)();
var eventValidate = new EventValidate();


module.exports = eventValidate;