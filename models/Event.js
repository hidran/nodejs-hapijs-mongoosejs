/**
 * Created by hidran on 11/22/14.
 */

module.exports= function(mongoose) {


        var Schema = mongoose.Schema;

        var eventSchema = new Schema({
            eventDate:Date,
            customerId:String,
            beaconEnterDate:Date,
            beaconExitDate:Date,
            location:String,
            beaconId:String
        });

        var Event  = mongoose.model('Event', eventSchema);
//console.log(Event)
     return Event;


};