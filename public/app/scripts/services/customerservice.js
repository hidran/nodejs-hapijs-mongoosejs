/**
 * Created by hidran on 11/24/14.
 */
angular.module('LocalzEvents').factory("customerService", ["$resource",'API_CONFIG', function ($resource, API_CONFIG) {
    var baseUri= API_CONFIG.API_URL+'/customers';

    var Customers = $resource(baseUri+'/'+':customer_id', { rowkey: '@customer_id' }, { 'update': { method: 'PUT'} });
    var getAllCustomers= function () {
        return Customers.query();
    };
    var addNewCustomer= function (customer) {
        return Customers.save({Id:customer.Id, Name:customer.Name});
    };
    var updateCustomer = function (customer) {

        var customerId = customer._id;
        delete(customer._id);
        return $resource(baseUri+'/'+customerId, null, { 'update': { method: 'PUT'} }).update(
            customer
        );
    };
    var getCustomerById = function (Id) {
        return Customers.get({customer_id:Id});
    };
    var deleteCustomer = function (Id) {
        return Customers.delete({customer_id:Id});
    };
    return {
        getAll: getAllCustomers,
        addNew: addNewCustomer,
        update: updateCustomer,
        getByKey: getCustomerById,
        remove: deleteCustomer
    };
} ]);

