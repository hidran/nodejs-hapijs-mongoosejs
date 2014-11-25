/**
 * Created by hidran on 11/22/14.
 */

module.exports= function(mongoose) {


        var Schema = mongoose.Schema;

        var eventSchema = new Schema({
            eventDate:{type:Date, required:true},
            customerId:{type:String, required:true, min:3},
            beaconEnterDate:{type:Date, required:true},
            beaconExitDate:{type:Date},
            location:{type:String, required:true, min:3},
            beaconId:{type:String, required:true, min:3}
        });

        var Event  = mongoose.model('Event', eventSchema);
//console.log(Event)
     return Event;


};