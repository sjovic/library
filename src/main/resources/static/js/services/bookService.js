/**
 * 
 */
(function() {
    var app = angular.module("app");
	
    app.factory('bookService', function($http, $q){
        return {
            getBooks : function(){
                var def = $q.defer();
                var req = {
                    method : 'GET',
                    url : "api/v1/books"
                }
            $http(req).success(function(data){
                    def.resolve(data);
            })
            .error(function(){
                    def.reject("Failed to get books");
            });
            return def.promise;
            },
            createBook : function(book){
                var def = $q.defer();
                var req = {
                    method : 'POST',
                    url : "api/v1/books",
                    data: book                    }
            $http(req).success(function(data){
                    def.resolve(data);
            })
            .error(function(){
                    def.reject("Failed");
            });
            return def.promise;
            },
		    deleteBook : function(id){
		    	var def = $q.defer();
			    var req = {
					method : 'DELETE',
					url : "api/v1/books/" + id
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