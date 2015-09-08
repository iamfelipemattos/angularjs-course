var app = angular.module('application', []);

app.controller('FormController', function ($scope) {
    $scope.formModel = {};

    $scope.Submit = function () {
        console.log("Submitted with success!");
        console.log($scope.formModel);
    }
})