var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function ($scope) {
    $scope.formModel = {};

    $scope.Submit = function () {
        console.log("Submitted with success!");
        console.log($scope.formModel);
    }
})