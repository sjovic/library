/**
 * 
 */
(function () {
    angular.module('app')
            .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .when('/book', {
                templateUrl: '/views/book.html',
                controller: 'BookController',
                controllerAs: 'vm',
                data : {
                    css: '/css/book.css'
                }
            })
            .when('/category', {
                templateUrl: '/views/category.html',
                controller: 'CategoryController',
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: '/views/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .otherwise('/');
    }
}());