'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('LocalzEvents')
  .controller('MainCtrl', ["$routeParams", "$location", "$scope", "eventService", function ( $routeParams, $location, $scope,eventService) {
        var init = function () {
            eventService.getAll().$promise.then(function (events) {
                $scope.events = events;
                console.log( $scope.events[0].location)
            });
           // $scope.sortOrder = "location";
        };
    if($routeParams.event_id){
        eventService.getByKey($routeParams.event_id).$promise.then(function(res){
            for(var i in res){
                if(res.hasOwnProperty(i)){

                    if(i.indexOf('Date')!=-1){
                        $scope[i]= new Date(res[i]);
                    }else{
                        $scope[i]= res[i];
                    }

                }
            }

        });
    } else {
        init();
    }
        $scope.deleteEvent= function(id){
            eventService.remove(id).$promise.then(function(){

                var ele = document.getElementById(id);

                ele.parentNode.parentNode.removeChild(ele.parentNode)

            });
        }
        $scope.findLocationByName= function(){
            eventService.findLocationByName($scope.location_name).$promise.then(function(events){

               $scope.events = events;

            });
        }
        $scope.saveEvent = function(){

            var event = {
            eventDate:$scope.eventDate,
            _id:$scope._id,
            customerId:$scope.customerId,
            beaconEnterDate:$scope.beaconEnterDate,
            beaconExitDate:$scope.beaconExitDate,
            location:$scope.location,
            beaconId:$scope.beaconId

            };
            console.log(event)

           eventService.addNew(event).$promise.then(function(reso, res){

                $location.path('/')

            });

        }
        $scope.modifyEvent = function(Id){


                $location.path('/newEvent/'+Id);

        }
  }]);
