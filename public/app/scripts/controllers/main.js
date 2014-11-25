'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('LocalzEvents')
  .controller('MainCtrl', ["$location", "$scope", "eventService", function ( $location, $scope,eventService) {
        var init = function () {
            eventService.getAll().$promise.then(function (events) {
                $scope.events = events;
                console.log( $scope.events[0].location)
            });
           // $scope.sortOrder = "location";
        };

    init();
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
  }]);
