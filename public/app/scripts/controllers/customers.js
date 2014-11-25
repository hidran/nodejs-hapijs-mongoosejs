'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the publicApp
 */
angular.module('LocalzEvents')
  .controller('CustomerCtrl', ["$routeParams","$rootScope", "$location", "$scope", "customerService",
        function ($routeParams, $rootScope, $location, $scope,customerService) {

        var init = function () {
            customerService.getAll().$promise.then(function (customers) {
                $scope.customers = customers;
                console.log( $scope.customers[0].Name)
            });
            // $scope.sortOrder = "location";
        };
        if($routeParams.customer_id){
            customerService.getByKey($routeParams.customer_id).$promise.then(function(res){
                for(var i in res){
                    if(res.hasOwnProperty(i)){
                        $scope[i]= res[i];
                     }
                }

            });
        } else{
            init();
        }
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
        $scope.updateCustomer = function(Id){


                $location.path('/customers/'+Id);


        }
  }]);
