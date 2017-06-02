/**
 * 
 */
var app = angular.module('app');
app.controller('CategoryController', function($scope, CategoryService) {
	//Get all categories
    var handleSuccessCategory = function(data, status){
    	$scope.categories = data;
    }
    var getCategories = function(){
    	CategoryService.getCategories().then(handleSuccessCategory);
    }
	//Create new category
    $scope.category = {};
    $scope.saveCategory = function(category){
    	console.log(category);
    	CategoryService.createCategory(category).then(function(response){
	        getCategories();
    	}, function(error){
    		
    	})
    	//remove input value after submit
    	$scope.category = null;
    }
   
    $scope.editCategory = function(category){
    	console.log(category);

    }
    
    $scope.deleteCategory = function(id){
    	console.log(id);
    	CategoryService.deleteCategory(id).then(function(response){
    	    getCategories();
    	}, function(error){
    		
    	});
    }

});