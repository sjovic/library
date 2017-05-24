/**
 * 
 */
(function() {
    var app = angular.module("app");
	
    app.factory('bookCategoryService', function($http, $q){
        return {
            getCategories : function(){
                var def = $q.defer();
                var req = {
                    method : 'GET',
                    url : "api/v1/category"
                }
            $http(req).success(function(data){
                    def.resolve(data);
            })
            .error(function(){
                    def.reject("Failed to get menues");
            });
            return def.promise;
            },
            createCategory : function(category){
                var def = $q.defer();
                var req = {
                    method : 'POST',
                    url : "api/v1/category",
                    data: category                    }
            $http(req).success(function(data){
                    def.resolve(data);
            })
            .error(function(){
                    def.reject("Failed");
            });
            return def.promise;
            },
		    deleteCategory : function(id){
		    	var def = $q.defer();
			    var req = {
					method : 'DELETE',
					url : "api/v1/category/" + id
			    }
		    $http(req).success(function(data){
			    def.resolve(data);
		    })
		    .error(function(){
			    def.reject("Failed");
		    });
	            return def.promise;
		    }
	    }
    });
}());