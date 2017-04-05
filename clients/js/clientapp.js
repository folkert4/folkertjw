var app = angular.module('MyClients', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "js/views/home.html"
        })
        .otherwise({
            redirectTo: '/'
        });

});