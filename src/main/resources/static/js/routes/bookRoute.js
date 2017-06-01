/**
 * 
 */
angular.module('app')
    .config(function($routeProvider){
    $routeProvider
    .when('/book',{
        templateUrl: '/views/create-book.html',
        controller: 'BookController'
	}).otherwise('/');
});