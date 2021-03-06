'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
window.LocalzEvents = angular
  .module('LocalzEvents', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
        'ui.sortable'
  ])
  .config(['$routeProvider',function ($routeProvider) {


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomerCtrl'
      })
        .when('/customers/:customer_id', {
            templateUrl: 'views/newcustomer.html',
            controller: 'CustomerCtrl'
        })
        .when('/newCustomer', {
            templateUrl: 'views/newcustomer.html',
            controller: 'CustomerCtrl'
        })
        .when('/newEvent/:event_id', {
            templateUrl: 'views/newevent.html',
            controller: 'MainCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  }]).constant("API_CONFIG", {
        "API_URL": "http://localhost:8000/api"

    }).run(['$rootScope', '$location',function($rootScope, $location){
        $rootScope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);
