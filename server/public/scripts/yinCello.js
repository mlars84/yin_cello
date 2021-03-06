const myApp = angular.module('myApp', ['ngRoute']);

  myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
      templateUrl: '/views/pages/home.html'
    })
    .when('/events', {
      templateUrl: '/views/pages/events.html',
      controller: "EventsController as ec"
    })
    .when('/contact', {
      templateUrl: '/views/pages/contact.html',
      controller: "ContactController as cc"
    })
    .otherwise({
      redirectTo: '/'
    });
}]); //end angular module
