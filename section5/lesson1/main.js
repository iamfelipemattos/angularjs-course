var app = angular.module('application', [
    'ngResource'
]);

app.config(function($httpProvider, $resourceProvider) {
    $httpProvider.defaults.headers.common['Authorization'] = 'Token 20002cd74d5ce124ae219e739e18956614aab490';
    $resourceProvider.defaults.stripTrailingSlashes = false;
});

app.factory('Contact', function ($resource) {
    return $resource("https://codecraftpro.com/api/samples/v1/contact/:id/");
});

app.controller('PersonDetailController', function ($scope, ContactService)  {
    $scope.contacts = ContactService;
});

app.controller('PersonListController', function ($scope, ContactService) {

    $scope.search = "";
    $scope.order = "email";
    $scope.contacts = ContactService;

    $scope.sensitiveSearch = function(person) {
        if ($scope.search) {
            return person.name.indexOf($scope.search) === 0 ||
                       person.email.indexOf($scope.search) === 0;
        }
        return true;
    };

});

app.service('ContactService', function (Contact) {

    var self =  {
        'addPerson': function (person) {
            this.persons.push(person);
        },
          'page': 1
        , 'hasMore': true
        , 'isLoading': false
        , 'selectedPerson': null
        , 'persons': []
        , 'loadContacts': function () {
            Contact.get(function (data) {
                console.log(data);
                angular.forEach(data.results, function (person) {
                    self.persons.push(new Contact(person));
                })
            });
        }
    };

    self.loadContacts();
    return self;
});
