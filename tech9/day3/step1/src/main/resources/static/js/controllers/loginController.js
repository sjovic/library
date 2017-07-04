/**
 * 
 */
var app = angular.module('app');
app.controller('LoginController', function($scope, $rootScope, $location,$http) {

  var self = this

  var authenticate = function(credentials, callback) {

    var headers = credentials ? {authorization : "Basic "
        + btoa(credentials.username + ":" + credentials.password)
    } : {};
    $http.get('/user' , {headers : headers}).then(function(response) {
      console.log(response.data);
      if (response.data.name) {
            $rootScope.authenticated = true;
      } else {
            $rootScope.authenticated = false;
      }
      callback && callback();
    }, function() {
        $rootScope.authenticated = false;
        callback && callback();
    });

  }

  authenticate();
  $scope.credentials = {};
  $scope.login = function() {
      authenticate($scope.credentials, function() {
        if ($rootScope.authenticated) {
          $location.path("/");
          $scope.error = false;
        } else {
          $location.path("/login");
          $scope.error = true;
        }
      });
  };

});