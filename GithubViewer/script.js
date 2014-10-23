// Code goes here

(function(){
  
  var app = angular.module("githubviewer", []);
  
  var MainController = function($scope, $http) {

    var Onusercomplete = function(response) {
  
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
             .then(OnRepos, OnError);
    };
    
    var OnRepos = function(response){
      
      $scope.repos = response.data;
    };
  
    var OnError = function(reason) {
      $scope.error = "Could not fetch the user details";
    };
  
     
  
    $scope.search = function(username){
        $http.get("https://api.github.com/users/" + username)
             .then(Onusercomplete, OnError);
    };
  
    $scope.username = "Angular";
    $scope.message = "GitHub Viewer";
    $scope.repoSortOrder = "-stargazers_count";
  };
  
  app.controller("MainController",["$scope","$http",MainController]);
  
}());