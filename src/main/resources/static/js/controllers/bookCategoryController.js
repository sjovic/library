/**
 * 
 */
var app = angular.module('app');
app.controller('BookCategoryController', function($scope, bookCategoryService) {

    $scope.headingTitle = "Book";
    
    //Get all menus
    var handleSuccessCategory = function(data, status){
    	$scope.categories = data;
    }
    var getCategories = function(){
    	bookCategoryService.getCategories().then(handleSuccessCategory);
    }
    getCategories();
    
    //Create new menu
    $scope.category = {};
    $scope.saveCategory = function(category){
    	console.log(category);
    	bookCategoryService.createCategory(category).then(function(response){
    	getCategories();
    	}, function(error){
    		
    	})
    	//remove input value after submit
    	$scope.category = null;
    }
   
    
    //edit menu
    $scope.editCategory = function(category){
    	console.log(category);

    }
    
    //remove menu
    $scope.deleteCategory = function(id){
    	console.log(id);
    	bookCategoryService.deleteCategory(id).then(function(response){
    	getCategories();
    	}, function(error){
    		
    	});
    }

});