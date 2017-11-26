(function() {
    'use strict';

    angular.module('BandsController', ['BandsService'])
        .controller('BandsController', ['BandsService', BandsController])

    function BandsController(BandsService) {
        var vm = this;

        vm.bands = BandsService.listAll();
   
    }
})();