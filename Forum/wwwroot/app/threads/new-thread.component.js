(function () {
    'use strict';

    var newThreadComponent = {
        controller: newThreadController,
        controllerAs: 'vm',
        templateUrl: 'app/threads/new-thread.html'
    };

    angular
        .module('threads')
        .component('newThreadComponent', newThreadComponent);

    newThreadController.$inject = [
        '$log',
        '$state',
        '$stateParams',
        'apiThreads'
    ];

    function newThreadController($log, $state, $stateParams, apiThreads) {
        var vm = this;

        vm.createThread = createThread;

        function createThread(newThread) {
            apiThreads
                .threads
                .post(newThread)
                .then((success) => {
                    $state.go('thread', { id: success.data });
                });
        }

        function activate() {
        }

        this.$onInit = activate;
    }
})();
