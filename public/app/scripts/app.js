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
        .when('/newCustomer', {
            templateUrl: 'views/newcustomer.html',
            controller: 'CustomerCtrl'
        })
        .when('/newEvent', {
            templateUrl: 'views/newevent.html',
            controller: 'EventCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  }]).run(['$rootScope', '$location',function($rootScope, $location){
        $rootScope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);
