/**
 * Created by hidran on 11/25/14.
 */
var config = require('./../config/config');

config.database.database ='test';

require('./../Db/mongoosedb')(config.database);

var should =require('should');

var assert = require("assert");

var EventModel = require('./../models/Event')();

var CustomerModel = require('./../models/Customer')();
describe('Customer Model test', function(){
    beforeEach(function(done){

        var Customer = new CustomerModel({
            Id:'32323',
            Name:'test'
        });
        Customer.save(function(err, customer){

            done();
        });

    });


        it('should find customer by ID', function(done){
            CustomerModel.findOne({
                    'Id':'32323'
                },
                function(err, customer){
                    if(err) return done(err);
                    customer.should.have.property('Name','test');
                        done();
                });
        });
    it('should create a customer ', function(done){
        var Customer = new CustomerModel({
            Id:'32323',
            Name:'testcreate'
        });
        Customer.save(function(err, customer){
            if(err) return done(err);
            customer.should.have.property('Name','testcreate');
            done();
        });
    });

    it('find customers  should return an array', function(done){
        CustomerModel.find(null, null, {limit:1},function(err, res){
            if(err) return done(err);
           res.should.have.lengthOf(1);
            done();
        });
    })
});
describe('Event Model test', function(){
    before(function(done) {

        var event = new EventModel({
            eventDate: '2014-08-12',
            customerId: '344343434',
            beaconEnterDate: '2014-08-12 12:12',
            beaconExitDate: '2014-08-12 14:12',
            location: 'test',
            beaconId: '12345'
        });

        event.save(function (err, event) {
            done();

        });
    });


    it('should find event by customer ID', function(done){
        EventModel.findOne({
                customerId:'344343434'
            },
            function(err, event){
                if(err) return done(err);
                event.should.have.property('location','test');
                done();
            });
    });
    it('should create an event  ', function(done){
        var event = new EventModel({
            eventDate: '2014-08-12',
            customerId: '344343434',
            beaconEnterDate: '2014-08-12 12:12',
            beaconExitDate: '2014-08-12 14:12',
            location: 'testevent',
            beaconId: '12345'
        });

        event.save(function (err, event) {
            event.should.have.property('location','testevent');
            done();

        });
    });

    it('find events  should return an array', function(done){
        EventModel.find(null, null, {limit:1},function(err, res){
            if(err) return done(err);
            res.should.have.lengthOf(1);
            done();
        });
    })

});
