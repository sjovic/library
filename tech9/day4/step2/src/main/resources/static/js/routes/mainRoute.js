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
            .when('/books', {
                templateUrl: '/views/books.html',
                controller: 'BookController',
                controllerAs: 'vm'
            })
            .when('/categories', {
                templateUrl: '/views/categories.html',
                controller: 'CategoryController',
                controllerAs: 'vm'
            }).otherwise('/');
    }
}());
