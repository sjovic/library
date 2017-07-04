/**
 * 
 */
var app = angular.module('app');
app.controller('BookController', function($scope, $filter, CategoryService, BookService) {
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
        // format publish date string
        book.publishDate = $filter('date')(book.publishDate, "dd-MM-yyyy");
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
    	formatYear: 'yy',
    	maxDate : new Date()
    };
  	        
    $scope.book.publishDate = new Date();
   
   $scope.popupCalendar = {
       opened: false
   };
   
   $scope.openCalendar = function() {
	    $scope.popupCalendar.opened = true;
   };

});