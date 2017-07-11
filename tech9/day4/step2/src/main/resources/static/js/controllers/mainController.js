(function () {
    angular.module('app')
            .controller('MainController', MainController);

    MainController.$inject = ['CategoryService', 'BookService', '$location', '$http'];

    function MainController(CategoryService, BookService, $location, $http) {

        var self = this;
        self.isActive = isActive;
        self.categories;
        self.books;
        self.authenticated;
        self.login = login;
        self.logout = logout;

        init();


        function init() {
            if (self.authenticated) {
                getCategories();
                getBooks();
            }
        }

        function getCategories() {
            CategoryService.getCategories().then(handleSuccessCategories);
        }

        function getBooks() {
            BookService.getBooks().then(handleSuccessBooks);
        }

        //Get all category
        function handleSuccessCategories(data, status) {
            self.categories = data;
        }

        //Get all books
        function handleSuccessBooks(data, status) {
            self.books = data.data;
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
                    //setCookie('authenticated', true, 1);
//                    init();
                    self.authenticated = true;
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
            setCookie("authenticated", null, 0);
            // clearing all data
            self.user = null;
            self.message = 'Successfully logged out';
            self.resource = null;
        }

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    }

})();
