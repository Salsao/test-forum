(function () {
    'use strict';

    angular
        .module('threads')
        .factory('apiThreads', factory);

    factory.$inject = ['$http'];

    function factory($http) {

        var service = {
            threads: {
                get: getThreads,
                post: postThread
            },
            thread: {
                get: getThread
            },
            posts: {
                get: getPosts,
                post: postPost
            },
            post: {
                get: getPost
            }
        };

        var url = 'api/threads';

        function getThreads() {
            return $http.get(url);
        }

        function postThread(newThread) {
            return $http.post(url, newThread);
        }

        function getThread(id) {
            return $http.get(url + '/' + id);
        }

        function getPosts(threadId) {
            return $http.get(url + '/' + threadId + '/posts');
        }

        function postPost(newPost) {
            return $http.post(url + '/' + newPost.threadId + '/posts', newPost);
        }

        function getPost(id) {
            return $http.get(url + '/posts/' + id);
        }

        return service;
    }
})();
