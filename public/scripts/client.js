var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        contorller: 'HomeController',
        controllerAs: 'as HC'
    }).when('/toothless', {
        templateUrl: 'views/toothless.html',
        controller: 'ToothlessController',
        controllerAs: 'as TC'
    }).when('/BB-8', {
        templateUrl: 'views/BB-8.html',
        controller: 'BB8Controller',
        controllerAs: 'as BC'
    }).when('/doctor', {
        templateUrl: 'views/doctor.html',
        controller: 'DoctorController',
        controllerAs: 'as DC'
    }).when('/musketeers', {
        templateUrl: 'views/musketeers.html',
        controller: 'MusketeersController',
        controllerAs: 'as MC'
    }).when('/anakin', {
        templateUrl: 'views/anakin.html',
        controller: 'AnakinController',
        controllerAs: 'as AC'
    }).otherwise({redirectTo: '/'});
});