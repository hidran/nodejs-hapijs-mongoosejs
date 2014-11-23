This is a test project for creating a REST API using NODEJS, HAPIJS, MONGOOSEJ and JOY.

Modify conf/config.js in order to set mongodb connection and HAPIJS server's conenction
npm install  to install project dependencies .

The default configuration will create a nodejs server on localhost, listening  on port 8000 

The api test routes are:

http://localhost:8000/api/events

An event has this structure:
```
        {
            eventDate:Date,
            customerId:String,
            beaconEnterDate:Date,
            beaconExitDate:Date,
            location:String,
            beaconId:String
         }



http://localhost:8000/api/customers
```
A customer:
```
{
 Id:String,
 Name : String
}
```
You can massive upload records in csv format using:
```
http://localhost:8000/batch/customers

http://localhost:8000/batch/customers
```
Only POST  with multipart/form-data allowed .

The first line of the file should have the column names
and the rest will have the values