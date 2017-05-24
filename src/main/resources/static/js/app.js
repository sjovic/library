/**
 * 
 */
var app = angular.module('app', ['ngRoute','ngResource', 'ui.bootstrap']);
	app.config(function($routeProvider){
	    $routeProvider
	        .when('/',{
	            templateUrl: '/views/bookCategory.html',
	            controller: 'BookCategoryController'
	        }).when('/login', {
	    		templateUrl : '/views/login.html',
	    		controller : 'LoginController'
	    	}).otherwise('/');
	});
    