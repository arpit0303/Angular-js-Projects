(function() {

  var github = function($http) {

    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });

    };


    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });

    };
    
    return {
        getUser : getUser,
        getRepos : getRepos
    };

  };

  //Refrence to module
  var module = angular.module("githubviewer");
  
  //Register the service with Angular
  module.factory("github", github);
  
}());