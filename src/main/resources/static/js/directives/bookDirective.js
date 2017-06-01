angular.module('book.directives')
.directive('bookDirective', function() {
	  return {
		restrict: 'E',
	    templateUrl: 'views/book.html',
	    controller : ['$scope', 'bookService', function ($scope, bookService) {
	    	//Get all menus
	        var handleSuccessBook = function(data, status){
	        	$scope.books = data;
	        }
	        var getBooks = function(){
	        	bookService.getBooks().then(handleSuccessBook);
	        }
	    	//Create new book
	        $scope.book = {};
	        $scope.saveBook = function(book){
	        	console.log(book);
	        	bookService.createBook(book).then(function(response){
	        		getBooks();
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
	        	bookService.deleteBook(id).then(function(response){
	        	    getBooks();
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
	      }]
	  };
	});