/**
 * 
 */
(function() {
    var app = angular.module("app");
	
    app.factory('CategoryService', function($http, $q){
        return {
            getCategories : function(){
                var def = $q.defer();
                var req = {
                    method : 'GET',
                    url : "api/v1/categories"
                }
            $http(req).success(function(data){
                    def.resolve(data);
            })
            .error(function(){
                    def.reject("Failed to get category");
            });
            return def.promise;
            },
            createCategory : function(category){
                var def = $q.defer();
                var req = {
                    method : 'POST',
                    url : "api/v1/categories",
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
					url : "api/v1/categories/" + id
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