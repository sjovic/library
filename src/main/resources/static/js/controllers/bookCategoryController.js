/**
 * 
 */
var app = angular.module('app');
app.controller('BookCategoryController', function($scope, bookCategoryService) {

    $scope.headingTitle = "Book";
    
    var handleSuccessCategory = function(data, status){
    	$scope.categories = data;
    }
    var getCategories = function(){
    	bookCategoryService.getCategories().then(handleSuccessCategory);
    }
    getCategories();

});