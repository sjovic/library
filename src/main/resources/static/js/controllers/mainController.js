/**
 * 
 */
var app = angular.module('app');
app.controller('MainController', function($scope, CategoryService, $location, $anchorScroll, BookService) {

    $scope.headingTitle = "Book";
    
    var handleSuccessCategory = function(data, status){
    	$scope.categories = data;
    }
    var getCategories = function(){
    	CategoryService.getCategories().then(handleSuccessCategory);
    }
    getCategories();
    
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
     }
    
    BookService.getBooks().then(function(response){
    	$scope.books = response.data;
    });

});