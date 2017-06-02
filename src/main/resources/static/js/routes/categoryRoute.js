/**
 * 
 */
angular.module('book.routes')
    .config(function($routeProvider){
    $routeProvider
    .when('/category',{
        templateUrl: '/views/category.html',
        controller: 'CategoryController'
	}).otherwise('/');
});