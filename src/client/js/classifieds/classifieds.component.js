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
        vm.showForm = false;
      };

      vm.formToggle = (listing) => {
        vm.showForm = !vm.showForm;
        vm.listing = listing;
        console.log(listing);
      };

      vm.getAll = () => {
        $http.get('/classifieds')
        .then((res, err) => {
          if (err) {
            console.error(err);
          }
          vm.listings = res.data;
        });
      };

      vm.editListing = (listing) => {
        $http.patch(`/classifieds/${listing.id}`, listing)
        .then((res, err) => {
          if (err) {
            console.error(err);
          }
          console.log(res);
          vm.editForm.$setPristine();
          vm.editForm.$setUntouched();
          delete vm.listing;
          vm.formToggle();
        });
      };

      vm.deleteListing = (listingID) => {
        console.log(listingID);
        console.log('Delete clicked!');
      };

    }
}());
