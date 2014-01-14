angular.module('bigbang', ['ionic', 'ngRoute', 'ngAnimate', 'bigbang.services.person', 'bigbang.controllers.person'])

    .config(function ($compileProvider) {
        // Needed for routing to work
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })

    .config(function ($routeProvider, $locationProvider) {

        // Set up the initial routes that our app will respond to.
        // These are then tied up to our nav router which animates and
        // updates a navigation bar
        $routeProvider.when('/person', {
            templateUrl: 'templates/person-list.html',
            controller: 'PersonsCtrl'
        });

        // if the url matches something like /person/2
        $routeProvider.when('/person/:personId', {
            templateUrl: 'templates/person-detail.html',
            controller: 'PersonCtrl'
        });

        // if none of the above routes are met, use this fallback
        $routeProvider.otherwise({
            redirectTo: '/person'
        });

    });

