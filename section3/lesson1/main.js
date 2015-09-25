var app = angular.module('application', []);

app.controller('ParentController', function ($scope) {
    $scope.name = "Parent";

    $scope.reset = function() {
        $scope.name = "Parent";
    }
});

app.controller('ChildController', function ($scope) {
});


