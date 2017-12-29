(function () {
    'use strict';

    var registerComponent = {
        controller: registerController,
        controllerAs: 'vm',
        templateUrl: 'app/register/register.html'
    };

    angular
        .module('register')
        .component('registerComponent', registerComponent);

    registerController.$inject = [
        '$log',
        'toastr',
        '$stateParams'
    ];

    function registerController($log, toastr, $stateParams) {
        var vm = this;

        function activate() {
        }

        this.$onInit = activate;
    }
})();
