angular.module('book.directives')
.directive('categoryDirective', function() {
	  return {
		restrict: 'E',
	    templateUrl: 'views/category.html',
	    controller : ['$scope', 'bookCategoryService', function ($scope, bookCategoryService) {
	    	//Get all categories
	        var handleSuccessCategory = function(data, status){
	        	$scope.categories = data;
	        }
	        var getCategories = function(){
	        	bookCategoryService.getCategories().then(handleSuccessCategory);
	        }
	    	//Create new category
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
	       
	        $scope.editCategory = function(category){
	        	console.log(category);

	        }
	        
	        $scope.deleteCategory = function(id){
	        	console.log(id);
	        	bookCategoryService.deleteCategory(id).then(function(response){
	        	    getCategories();
	        	}, function(error){
	        		
	        	});
	        }
	      	          
	      }]
	  };
	});