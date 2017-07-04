/**
 * 
 */
angular.module('app')
    .config(function($routeProvider){
    $routeProvider
    .when('/', {
    	 templateUrl: '/views/main.html',
         controller: 'MainController'
	}).when('/book',{
        templateUrl: '/views/book.html',
        controller: 'BookController'
	}).when('/category',{
        templateUrl: '/views/category.html',
        controller: 'CategoryController'
	}).when('/login', {
		templateUrl : '/views/login.html',
		controller : 'LoginController'
	}).otherwise('/');
});