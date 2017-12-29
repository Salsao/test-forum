(function () {
    'use strict';
    angular
        .module('threads', [])
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        var states = [
            {
                name: 'threads',
                url: '/threads',
                component: 'threadsComponent'
            },
            {
                name: 'thread',
                url: '/threads/{id}',
                component: 'threadComponent'
            },
            {
                name: 'newThread',
                url: '/threads/new-thread',
                component: 'newThreadComponent'
            }
        ];

        states.forEach((state) => {
            $stateProvider.state(state);
        });
    }
})();
