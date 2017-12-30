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
        '$stateParams',
        'apiThreads'
    ];

    function threadController($log, $stateParams, apiThreads) {
        var vm = this;

        vm.posts = [];

        vm.showReply = false;

        vm.postReply = postReply;

        function postReply(reply, threadId) {
            reply.threadId = threadId;
            apiThreads
                .posts
                .post(reply)
                .then((success) => {
                    vm.showPostReply = false;
                    vm.reply = null;
                    getPost(success.data);
                });
        }

        function getThread(threadId) {
            apiThreads
                .thread
                .get(threadId)
                .then((success) => {
                    vm.posts.push(success.data);
                    getPosts(threadId);
                });
        }

        function getPosts(threadId) {
            apiThreads
                .posts
                .get(threadId)
                .then((success) => {
                    if (success.data.length) {
                        vm.posts = vm.posts.concat(success.data);
                    }
                });
        }

        function getPost(postId) {
            apiThreads
                .post
                .get(postId)
                .then((success) => {
                    vm.posts.push(success.data);
                });
        }

        function activate() {
            vm.title = $stateParams.title;
            vm.threadId = $stateParams.id;
            getThread(vm.threadId);
        }

        this.$onInit = activate;
    }
})();
