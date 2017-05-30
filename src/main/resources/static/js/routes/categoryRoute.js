/**
 * 
 */
angular.module('book.routes')
    .config(function($routeProvider){
    $routeProvider
    .when('/category',{
        templateUrl: '/views/create-category.html',
        controller: 'BookCategoryController'
	}).otherwise('/');
});