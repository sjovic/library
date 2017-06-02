/**
 * 
 */
angular.module('app')
    .config(function($routeProvider){
    $routeProvider
    .when('/book',{
        templateUrl: '/views/book.html',
        controller: 'BookController'
	}).otherwise('/');
});