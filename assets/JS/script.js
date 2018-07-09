var app = angular.module('myApp', []);
app.controller('customersCtrl', function ($scope, $http) {
  $http.get('assets/voiture.json').then(function (response) {
    $scope.myData = response.data;
  });
});
