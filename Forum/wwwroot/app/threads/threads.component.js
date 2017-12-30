(function () {
    'use strict';

    var threadsComponent = {
        controller: threadsController,
        controllerAs: 'vm',
        templateUrl: 'app/threads/threads.html'
    };

    angular
        .module('threads')
        .component('threadsComponent', threadsComponent);

    threadsController.$inject = [
        '$log',
        '$stateParams',
        'apiThreads'
    ];

    function threadsController($log, $stateParams, apiThreads) {
        var vm = this;

        function getThreads() {
            apiThreads
                .threads
                .get()
                .then((success) => {
                    vm.threads = success.data;
                });
        }

        function activate() {
            getThreads();
        }

        this.$onInit = activate;
    }
})();
