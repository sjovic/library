/**
 * 
 */
angular.module('book.routes')
    .config(function($routeProvider){
    $routeProvider
    .when('/book',{
        templateUrl: '/views/bookCategory.html',
        controller: 'BookCategoryController'
	}).otherwise('/');
});