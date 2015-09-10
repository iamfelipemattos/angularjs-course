var app = angular.module('application', []);

app.controller('FormController', function ($scope, $http) {
    $scope.formModel = {};

    $scope.Submit = function () {
        console.log("Submitted with success!");
        console.log($scope.formModel);

        $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
            success(function (data) {
                console.log(":)")
            }).error(function(data) {
                console.log(":(")
            });
    };
});