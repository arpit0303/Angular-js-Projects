// Code goes here

var MainController = function($scope){
  
  var person = {
    firstname : "Arpit",
    lastname : "Agrawal",
    imagesrc : "https://scontent-a.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/1926896_966587320034587_321059949547607863_n.jpg?oh=7e8314cb8a4e1738a504c081a6b08651&oe=54BD5DF1"
  };
  
  $scope.message = "hello, Angular!";
  $scope.person = person;
};