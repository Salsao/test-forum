(function () {
    'use strict';
    angular
        .module('register', [])
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        var states = [
            {
                name: 'register',
                url: '/register',
                component: 'registerComponent'
            }
        ];

        states.forEach((state) => {
            $stateProvider.state(state);
        });
    }
})();
