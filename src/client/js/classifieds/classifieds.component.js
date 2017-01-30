(function() {
  'use strict';

  angular.module('app')
    .component('listings', {
      templateUrl: './js/classifieds/classifieds.template.html',
      controller: ListingsController
    });
    ListingsController.$inject = ['$http'];
    function ListingsController($http) {
      let vm = this;

      vm.$onInit = () => {
        
      };

      vm.getAll = () => {
        $http.get('/classifieds')
        .then((response) => {
          vm.listings = response.data;
        });
      };

    }
}());
