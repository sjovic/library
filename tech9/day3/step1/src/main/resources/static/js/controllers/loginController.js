/**
 * 
 */
(function () {
    angular.module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope', '$location', '$http'];

    function LoginController($rootScope, $location, $http) {

        var vm = this;
        vm.login = login;

        vm.credentials = {};
        authenticate();

        function authenticate(credentials, callback) {
            var headers = credentials ? {authorization: "Basic "
                        + btoa(credentials.username + ":" + credentials.password)
            } : {};
            $http.get('/user', {headers: headers}).then(function (response) {
                console.log(response.data);
                if (response.data.name) {
                    $rootScope.authenticated = true;
                } else {
                    $rootScope.authenticated = false;
                }
                callback && callback();
            }, function () {
                $rootScope.authenticated = false;
                callback && callback();
            });

        }

        function login() {
            authenticate(vm.credentials, function () {
                if ($rootScope.authenticated) {
                    $location.path("/");
                    vm.error = false;
                } else {
                    $location.path("/login");
                    vm.error = true;
                }
            });
        }
    }
})();