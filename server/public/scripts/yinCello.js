const myApp = angular.module('myApp', ['ngRoute']);

  myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
      controller: 'LoginController as lc'
    })
    .when('/events', {
      templateUrl: '/views/events.html',
      controller: "EventsController as ec"
    })
    .when('/contact', {
      templateUrl: '/views/contact.html',
      controller: "ContactController as cc"
    })
    .otherwise({
      redirectTo: '/'
    });
}]); //end angular module
