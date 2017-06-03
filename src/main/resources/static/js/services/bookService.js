/**
 * 
 */
(function() {
	var app = angular.module("app");

	app.service('BookService', function($http, $q) {

		var booksList = [];

		this.getBooks = function() {
			var def = $q.defer();
			var req = {
				method : 'GET',
				url : "api/v1/books"
			}
			return $http(req).success(function(response) {
				return booksList = response.data;
			}).error(function() {
				return def.reject("Failed to get books");
			});
		}

		this.createBook = function(book) {
			var def = $q.defer();
			var req = {
				method : 'POST',
				url : "api/v1/books",
				data : book
			}
			return $http(req).success(function(response) {
				return bookList.push(response);
			}).error(function() {
				def.reject("Failed");
			});
			return def.promise;
		}
		this.deleteBook = function(id) {
			var def = $q.defer();
			var req = {
				method : 'DELETE',
				url : "api/v1/books/" + id
			}
			$http(req).success(function(data) {
				def.resolve(data);
			}).error(function() {
				def.reject("Failed");
			});
			return def.promise;
		}
	});
}());