/**
 * Created by hidran on 11/22/14.
 */
var Joi = require('joi');

function CustomerValidate(){}

var payloadConf = {

    Id:Joi.string().required().min(6),

    Name:Joi.string().required().min(3)

};

CustomerValidate.prototype = (function(){
    return {
        findByID: {
            params: {
                customer_id: Joi.string().required().min(3)
            }

        },
        findByName: {
            params: {
                customer_name: Joi.string().required().min(3)
            }

        },
        insert: {
            payload: payloadConf
        },
        update: {
            params: {
                customer_id: Joi.string().required()
            },
            payload: payloadConf
        },
        delete: {
            params: {
                customer_id: Joi.string().required()
            }
        }

    }
})();
var CustomVal = new CustomerValidate();
module.exports = CustomVal;