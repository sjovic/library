/**
 * 
 */
angular.module('book.routes')
    .config(function($routeProvider){
    $routeProvider
    .when('/login', {
		templateUrl : '/views/login.html',
		controller : 'LoginController'
	}).otherwise('/');
});