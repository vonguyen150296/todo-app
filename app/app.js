var app = angular.module('todoApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/todo', {
            templateUrl: 'app/views/todo.html',
            controller: 'TodoController'
        })
        .when('/completed', {
            templateUrl: 'app/views/completed.html',
            controller: 'CompletedController'
        })
        .otherwise({
            redirectTo: '/todo'
        });
}]);
