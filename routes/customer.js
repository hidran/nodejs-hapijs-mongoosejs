/**
 * Created by hidran on 11/22/14.
 */
"use strict";

module.exports = function(CustomerModel) {

    var customerController = require('../controllers/customer')( CustomerModel);
    var customerValidate = require('../validate/customer');

    return [
        {
            method: 'GET',
            path: '/api/customers/{customer_id}',
            config : {
                handler: customerController.findByID,
                validate: customerValidate.findByID
            }
        },
        {
            method: 'GET',
            path: '/api/customers/name/{customer_name}',
            config : {
                handler: customerController.findByName,
                validate: customerValidate.findByName
            }
        },
        {
            method: 'GET',
            path: '/api/customers',
            config : {
                handler: customerController.find,
                validate : customerValidate.find
            }
        },
        {
            method: 'POST',
            path: '/api/customers',
            config : {
                handler : customerController.insert,
                validate : customerValidate.insert
            }
        },
        {
            method: 'PUT',
            path: '/api/customers/{customer_id}',
            config : {
                handler: customerController.update,
                validate : customerValidate.update
            }
        },
        {
            method: 'DELETE',
            path: '/api/customers/{customer_id}',
            config : {
                handler: customerController.delete,
                validate : customerValidate.delete
            }
        }
    ];
};