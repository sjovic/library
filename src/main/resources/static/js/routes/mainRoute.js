/**
 * 
 */
angular.module('book.routes')
    .config(function($routeProvider){
    $routeProvider
    .when('/', {
    	 templateUrl: '/views/bookCategory.html',
         controller: 'BookCategoryController'
	}).otherwise('/');
});