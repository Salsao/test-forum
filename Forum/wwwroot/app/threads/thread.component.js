(function () {
    'use strict';

    var threadComponent = {
        controller: threadController,
        controllerAs: 'vm',
        templateUrl: 'app/threads/thread.html'
    };

    angular
        .module('threads')
        .component('threadComponent', threadComponent);

    threadController.$inject = [
        '$log',
        'toastr',
        '$stateParams'
    ];

    function threadController($log, toastr, $stateParams) {
        var vm = this;

        vm.showReply = false;

        function activate() {
            $log.info(vm.showReply);
        }

        this.$onInit = activate;
    }
})();
