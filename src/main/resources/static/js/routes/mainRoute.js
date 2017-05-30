/**
 * 
 */
angular.module('book.routes')
    .config(function($routeProvider){
    $routeProvider
    .when('/', {
    	 templateUrl: '/views/main.html',
         controller: 'MainController'
	}).otherwise('/');
});