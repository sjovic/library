/**
 * 
 */
var app = angular.module('app');
app.controller('MainController', function($scope, bookCategoryService, $location, $anchorScroll) {

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

});