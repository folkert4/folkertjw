var app = angular.module('MyApp', ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "js/views/home.html"
        })
        .when("/about", {
            templateUrl : "js/views/about.html"
        })
        .when("/contact", {
            templateUrl : "js/views/contact.html"
        })
        .otherwise({
            redirectTo: '/'
        });
    }
);