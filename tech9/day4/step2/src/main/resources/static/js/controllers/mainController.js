(function () {
    angular.module('app')
            .controller('MainController', MainController);

    MainController.$inject = ['$location', '$http', '$route'];

    function MainController($location, $http, $route) {

        var self = this;
        self.isActive = isActive;
        self.login = login;
        self.logout = logout;
        self.user;

        init();


        function init() {
            if (self.user) {
                $route.reload();
            }
        }

        //nav-bar
        function isActive(viewLocation) {
            return viewLocation === $location.path();
        }


        function login() {
            // creating base64 encoded String from username and password
            var base64Credential = btoa(self.credentials.username + ':' + self.credentials.password);

            // calling GET request for getting the user details
            $http.get('user', {
                headers: {
                    // setting the Authorization Header
                    'Authorization': 'Basic ' + base64Credential
                }
            }).success(function (res) {
                self.credentials.password = null;
                if (res.authenticated) {
                    self.message = '';
                    // setting the same header value for all request calling from this app
                    $http.defaults.headers.common['Authorization'] = 'Basic ' + base64Credential;
                    self.user = res;
                    init();
                } else {
                    self.message = 'Authetication Failed !';
                }
            }).error(function (error) {
                self.message = 'Authetication Failed !';
            });
        }

        // method for logout
        function logout() {
            // clearing the authorization header
            $http.defaults.headers.common['Authorization'] = null;
            // clearing all data
            delete self.user;
            self.message = 'Successfully logged out';
            self.resource = null;
        }
    }

})();
