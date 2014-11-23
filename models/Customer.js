/**
 * Created by hidran on 11/22/14.
 */

module.exports= function(mongoose) {


        var Schema = mongoose.Schema;

        var customerSchema = new Schema({
            Name:String,
            Id:String
        });

        var Customer  = mongoose.model('Customer', customerSchema);

     return Customer;


};