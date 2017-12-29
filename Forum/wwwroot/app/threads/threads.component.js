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
        'toastr',
        '$stateParams'
    ];

    function threadsController($log, toastr, $stateParams) {
        var vm = this;

        function activate() {
        }

        this.$onInit = activate;
    }
})();
