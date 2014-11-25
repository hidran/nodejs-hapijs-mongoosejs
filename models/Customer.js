/**
 * Created by hidran on 11/22/14.
 */

module.exports= function() {

        var mongoose = require('mongoose');
        var Schema = mongoose.Schema;

        var customerSchema = new Schema({

            Name:{type:String, required: true, trim: true, min:3},

            Id:{type:String, required: true, trim: true, min:3}
        });

        var Customer  = mongoose.model('Customer', customerSchema);

     return Customer;


};