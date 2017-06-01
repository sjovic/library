/**
 * 
 */
var app = angular.module('app');
app.controller('MainController', function($scope, bookCategoryService, $location, $anchorScroll, bookService) {

    $scope.headingTitle = "Book";
    
    var handleSuccessCategory = function(data, status){
    	$scope.categories = data;
    }
    var getCategories = function(){
    	bookCategoryService.getCategories().then(handleSuccessCategory);
    }
    getCategories();
    
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
     }
    
    bookService.getBooks().then(function(data){
    	$scope.books = data;
    });

});