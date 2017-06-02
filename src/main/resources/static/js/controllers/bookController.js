/**
 * 
 */
var app = angular.module('app');
app.controller('BookController', function($scope, CategoryService, BookService) {
	//Get all category
	var handleSuccessCategories = function(data, status){
    	$scope.categories = data;
    }
    var getCategories = function(){
    	CategoryService.getCategories().then(handleSuccessCategories);
    }
    getCategories();
    
	//Create new book
    $scope.book = {};
    $scope.saveBook = function(book){
    	console.log(book);
    	BookService.createBook(book).then(function(response){
    	}, function(error){
    		
    	})
    	//remove input value after submit
    	$scope.book = null;
    }
   
    $scope.editBook = function(book){
    	console.log(book);
    }
    
    $scope.deleteBook = function(id){
    	console.log(id);
    	BookService.deleteBook(id).then(function(response){
    	}, function(error){
    		
    	});
    }
    
    $scope.datePickerOptions = {
    	    formatYear: 'yy'
    };
  	        
    $scope.book.publishDate = new Date();
   
   $scope.popupCalendar = {
       opened: false
   };
   
   $scope.openCalendar = function() {
	    $scope.popupCalendar.opened = true;
	  };

});