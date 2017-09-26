var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        contorller: 'HomeController',
        controllerAs: 'HC'
    }).when('/toothless', {
        templateUrl: 'views/toothless.html',
        controller: 'ToothlessController',
        controllerAs: 'TC'
    }).when('/BB-8', {
        templateUrl: 'views/BB-8.html',
        controller: 'BB8Controller',
        controllerAs: 'BC'
    }).when('/doctor', {
        templateUrl: 'views/doctor.html',
        controller: 'DoctorController',
        controllerAs: 'DC'
    }).when('/musketeers', {
        templateUrl: 'views/musketeers.html',
        controller: 'MusketeersController',
        controllerAs: 'MC'
    }).when('/anakin', {
        templateUrl: 'views/anakin.html',
        controller: 'AnakinController',
        controllerAs: 'AC'
    }).otherwise({redirectTo: '/'});
});