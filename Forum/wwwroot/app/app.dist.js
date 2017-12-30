"use strict";var app=angular.module("app",["ui.router","threads","register"]);!function(){angular.module("register",[]).config(t),t.$inject=["$stateProvider"];function t(t){[{name:"register",url:"/register",component:"registerComponent"}].forEach(function(e){t.state(e)})}}(),function(){angular.module("threads",[]).config(t),t.$inject=["$stateProvider"];function t(t){[{name:"threads",url:"/threads",component:"threadsComponent"},{name:"thread",url:"/threads/{id}/{title}",component:"threadComponent"},{name:"newThread",url:"/threads/new-thread",component:"newThreadComponent"}].forEach(function(e){t.state(e)})}}(),function(){angular.module("register").factory("apiRegister",t),t.$inject=["$http"];function t(t){var e={post:function(e){return t.post(n,e)}},n="api/users";return e}}(),function(){var t={controller:e,controllerAs:"vm",templateUrl:"app/register/register.html"};angular.module("register").component("registerComponent",t),e.$inject=["$log","$stateParams","apiRegister"];function e(t,e,n){console.log("piru"),this.registerUser=function(e){t.info("wowowwo"),n.post(e).then(function(e){t.info("wow")})};this.$onInit=function(){console.log("active")}}}(),function(){angular.module("threads").factory("apiThreads",t),t.$inject=["$http"];function t(t){var e={threads:{get:function(){return t.get(n)},post:function(e){return t.post(n,e)}},thread:{get:function(e){return t.get(n+"/"+e)}},posts:{get:function(e){return t.get(n+"/"+e+"/posts")},post:function(e){return t.post(n+"/"+e.threadId+"/posts",e)}},post:{get:function(e){return t.get(n+"/posts/"+e)}}},n="api/threads";return e}}(),function(){var t={controller:e,controllerAs:"vm",templateUrl:"app/threads/new-thread.html"};angular.module("threads").component("newThreadComponent",t),e.$inject=["$log","$state","$stateParams","apiThreads"];function e(t,e,n,o){this.createThread=function(t){o.threads.post(t).then(function(t){e.go("thread",{id:t.data})})};this.$onInit=function(){}}}(),function(){var t={controller:e,controllerAs:"vm",templateUrl:"app/threads/thread.html"};angular.module("threads").component("threadComponent",t),e.$inject=["$log","$stateParams","apiThreads"];function e(t,e,n){var o=this;o.posts=[],o.showReply=!1,o.postReply=function(t,e){t.threadId=e,n.posts.post(t).then(function(t){o.showPostReply=!1,o.reply=null,e=t.data,n.post.get(e).then(function(t){o.posts.push(t.data)});var e})};function r(t){n.thread.get(t).then(function(e){o.posts.push(e.data),r=t,n.posts.get(r).then(function(t){t.data.length&&(o.posts=o.posts.concat(t.data))});var r})}this.$onInit=function(){o.title=e.title,o.threadId=e.id,r(o.threadId)}}}(),function(){var t={controller:e,controllerAs:"vm",templateUrl:"app/threads/threads.html"};angular.module("threads").component("threadsComponent",t),e.$inject=["$log","$stateParams","apiThreads"];function e(t,e,n){var o=this;this.$onInit=function(){n.threads.get().then(function(t){o.threads=t.data})}}}();
//# sourceMappingURL=app.dist.js.map
