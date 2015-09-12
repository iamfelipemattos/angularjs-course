var app = angular.module('application', []);

app.controller('FormController', function ($scope, $http) {
    $scope.formModel = {};

    $scope.Submit = function (valid) {
       if (valid) {
            console.log("Hey i'm submitted!");
            console.log($scope.formModel);
       } else {
            console.log("Invalid Form!");
       }
    };
});