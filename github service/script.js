// Code goes here

(function() {

  var app = angular.module("githubviewer", []);

  var MainController = function($scope, github, $interval, $log, $anchorScroll, $location) {

    var Onusercomplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(OnRepos, OnError);
    };

    var OnRepos = function(data) {
      $scope.repos = data;
      $location.hash("userDetails");
      $anchorScroll();
    };

    var OnError = function(reason) {
      $scope.error = "Could not fetch the user details";
    };

    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    }

    $scope.search = function(username) {
      $log.info("Searching for " + username);
      github.getUser(username).then(Onusercomplete, OnError);

      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
    };

    $scope.username = "Angular";
    $scope.message = "GitHub Viewer";
    $scope.repoSortOrder = "-stargazers_count";
    $scope.countdown = 5;
    startCountdown();
  };

  app.controller("MainController", MainController);

}());