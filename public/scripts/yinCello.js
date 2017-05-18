var myApp = angular.module('myApp', ['ngRoute'], function() {

  myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      template: '<p>Home</p>',
      controller: 'DefaultController as dc'
    }).when('/events', {
      templateUrl: '/views/pages/events.html',
      controller: 'EventsController as ec'
    }).when('/contact', {
      templateUrl: '/views/pages/contact.html',
      controller: 'ContactController as cc'
    }).otherwise('/');
    $locationProvider.html5Mode(true);
  }); //end config
}); //end angular module
