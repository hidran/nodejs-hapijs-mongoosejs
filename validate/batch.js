/**
 * Created by hidran on 11/22/14.
 */
var Joi = require('joi');

function BatchValidate(){}



BatchValidate.prototype = (function(){



    return {


    insertEvents: {
                  payload: {
                    file : Joi.string().required()

                  }
              },

        insertCustomers: {
            payload: {
                file : Joi.string().required()

            }
        }
    };

}
)();
var bacthValidate = new BatchValidate();


module.exports = bacthValidate;