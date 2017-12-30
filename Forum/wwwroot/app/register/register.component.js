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
        '$stateParams',
        'apiRegister'
    ];

    function registerController($log, $stateParams, apiRegister) {
        var vm = this;

        console.log('piru');

        vm.registerUser = registerUser;

        function registerUser(user) {
            $log.info('wowowwo');
            apiRegister
                .post(user)
                .then((success) => {
                    $log.info('wow');
                });
        }

        function activate() {
            console.log('active');
        }

        this.$onInit = activate;
    }
})();
