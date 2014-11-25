/**
 * Created by hidran on 11/23/14.
 */

module.exports = function(CustomerModel, EventModel) {

    var batchController = require('../controllers/batch')(CustomerModel, EventModel);



    return [
        {
            method: 'POST',
            path: '/batch/events',
            config: {
                handler: batchController.insertEvents,
               // validate :batchValidate.insertEvents,
               payload: {
                    output: 'stream',
                    parse: true,
                    allow: 'multipart/form-data'
                }
            }
        },
        {
            method: 'POST',
            path: '/batch/customers',
            config: {
                handler: batchController.insertCustomers,
            //    validate :batchValidate.insertCustomers,
                payload: {
                    output: 'stream',
                    parse: true,
                    allow: 'multipart/form-data'
                }
            }
        }
    ]
};