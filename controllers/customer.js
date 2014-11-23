/**
 * Created by hidran on 11/22/14.
 */
"use strict";
module.exports = function(mongoose, CustomerModel) {

    function CustomerController() {
    }

    CustomerController.prototype = function (mongoose, CustomerModel) {

        return {
            findByID: function findByID(request, reply) {

                CustomerModel.findOne({
                    '_id':request.params.customer_id
                },
                    function(err, customer){
                    if(err){
                        reply(err);
                    } else {
                        reply(customer);
                    }
                });
            },
            find: function find(request, reply) {
                CustomerModel.find(function(err, customers){
                    if(err){
                        reply(err);
                    } else {
                        reply(customers);
                    }
                });
            },
            findByName: function (request, reply) {
                var reg = new RegExp('^'+request.params.customer_name);
                CustomerModel.find({ Name:{$regex:reg ,$options:'im'}}, function(err, customers){
                    if(err){
                        reply(err);
                    } else {
                        reply(customers);
                    }
                });
            },
            insert: function insert(request, reply) {


                var Customer = new CustomerModel({
                    Id:request.payload.Id,
                    Name:request.payload.Name
                });
                Customer.save(function(err, customer){
                    if( err){
                        reply(err);
                    } else {
                        reply(customer);
                    }
                })

            },
            update: function update(request, reply) {
                var data = {
                   Id : request.payload.Id,
                    Name : request.payload.Name
                };

                CustomerModel.findOneAndUpdate({'_id': request.params.customer_id}, data, function(err, event){
                    if(err)  {
                        reply(err);
                    }
                    reply(event);
                });
            },
            'delete': function (request, reply) {
                CustomerModel.remove({'_id': request.params.customer_id},  function(err, event){
                    if(err)  {
                        reply(err);
                    }
                    reply(event);
                });
            }
        }
    }(mongoose, CustomerModel);
    return  new CustomerController();

};
