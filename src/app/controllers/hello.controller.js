(function() {
    'use strict';

    angular.module('HelloController', [])
        .controller('HelloController', [HelloController])

    function HelloController() {
        var vm = this;

        vm.message = "Hello! :)";
    }
})();