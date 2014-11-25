/**
 * Created by hidran on 11/25/14.
 */
var config = require('./../config/config');



var should =require('should');
var assert = require("assert");
var Code = require('code');   // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var server = require('../server');
var mongoose = require('mongoose');
lab.before(function(done)
{
    mongoose.connection.close(function () {
        config.database.database = 'test';
        require('./../Db/mongoosedb')(config.database);
        done();
    });
});

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;


lab.test("main endpoint lists events on the network", function(done) {


    lab.beforeEach(function(done){

        var Customer = new CustomerModel({
            Id:'32323',
            Name:'test'
        });
        Customer.save(function(err, customer){

            done();
        });

    });

    var options = {
        method: "GET",
        url: "/api/events"
    };

    server.inject(options, function(response) {
        var result = response.result;

        expect(response.statusCode).to.equal(200);

      // expect(result).to.not.to.be.empty();




        done();
    });

});

lab.test("main endpoint lists customers on the network", function(done) {




    var options = {
        method: "GET",
        url: "/api/customers"
    };

    server.inject(options, function(response) {
        var result = response.result;

        expect(response.statusCode).to.equal(200);

     // expect(result).to.not.to.be.empty();




        done();
    });


});