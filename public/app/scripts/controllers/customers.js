'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the publicApp
 */
angular.module('LocalzEvents')
  .controller('CustomerCtrl', ["$rootScope", "$location", "$scope", "customerService", function ( $rootScope, $location, $scope,customerService) {

        var init = function () {
            customerService.getAll().$promise.then(function (customers) {
                $scope.customers = customers;
                console.log( $scope.customers[0].Name)
            });
            // $scope.sortOrder = "location";
        };

        init();
        $scope.deleteCustomer = function(id){
            customerService.remove(id).$promise.then(function(){

               var ele = document.getElementById(id);

                ele.parentNode.parentNode.removeChild(ele.parentNode)

            });
        }
        $scope.saveCustomer = function(){

            var cust = {};
            cust.Id = $scope.Id;
            cust.Name = $scope.Name;
            customerService.addNew(cust).$promise.then(function(reso, res){

                $location.path('/')

            });
        }

  }]);
