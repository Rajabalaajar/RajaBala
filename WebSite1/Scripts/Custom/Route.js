var myApp = angular.module('AgrowApp', ["ngRoute"]);
myApp.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "Index.htm"
    })
    .when("/Gallery", {
        templateUrl: "Views/Gallery.htm"
    })
    .when("/About", {
        templateUrl: "Views/About.htm"
    })
    .when("/Contact", {
        templateUrl: "Contact.htm"
    });
});