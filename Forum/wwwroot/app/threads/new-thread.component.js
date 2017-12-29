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
        'toastr',
        '$stateParams'
    ];

    function newThreadController($log, toastr, $stateParams) {
        var vm = this;

        function activate() {
        }

        this.$onInit = activate;
    }
})();
