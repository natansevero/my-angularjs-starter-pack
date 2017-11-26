(function() {

    angular.module('BandsService', [])
        .service('BandsService', BandsService);

    function BandsService() {
    
        this.listAll = function() {

            return [
                { id: 1, name: "Linkin Park" },
                { id: 2, name: "Bike" },
                { id: 3, name: "Joy Division" },
                { id: 4, name: "Pink Floyd" }        
            ]
       
        }

    }
    // BandsService.$inject = ['$http']

})();