(function() {
    'use strict';

    angular.module('MyStarterPack')
        .config(Routes)

    function Routes($routeProvider) {
        $routeProvider
            .when('/hello', {
                templateUrl: 'views/hello.html',
                controller: 'HelloController',
                controllerAs: 'Hello'
            })
            .when('/bands', {
                templateUrl: 'views/bands.html',
                controller: 'BandsController',
                controllerAs: 'Bands'
            })
            .otherwise({
                redirectTo: '/hello'
            })
    }
    Routes.$inject = ['$routeProvider'];
})();