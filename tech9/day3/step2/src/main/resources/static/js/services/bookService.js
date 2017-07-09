/**
 * 
 */
(function () {
    angular.module("app")
            .service('BookService', BookService);

    BookService.$inject = ['$http', '$q'];

    function BookService($http, $q) {

        var booksList = [];

        this.getBooks = function () {
            var def = $q.defer();
            var req = {
                method: 'GET',
                url: "books"
            }
            return $http(req).success(function (response) {
                return booksList = response.data;
            }).error(function () {
                return def.reject("Failed to get books");
            });
        }

        this.saveBook = function (book) {
            var def = $q.defer();
            var req = {
                method: book.id ? 'PUT': 'POST',
                url: "books",
                data: book
            }
            return $http(req).success(function (response) {
                //booksList.push(response);
                return response;
            }).error(function () {
                def.reject("Failed");
            });
            return def.promise;
        }

        this.deleteBook = function (id) {
            var def = $q.defer();
            var req = {
                method: 'DELETE',
                url: "books/" + id
            }
            $http(req).success(function (data) {
                def.resolve(data);
            }).error(function () {
                def.reject("Failed");
            });
            return def.promise;
        }
    };
}());