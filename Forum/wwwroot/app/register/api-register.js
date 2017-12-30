(function () {
    'use strict';

    angular
        .module('register')
        .factory('apiRegister', factory);

    factory.$inject = ['$http'];

    function factory($http) {

        var service = {
            post: postUser
        };

        var url = 'api/users';

        function postUser(user) {
            return $http.post(url, user);
        }

        return service;
    }
})();
