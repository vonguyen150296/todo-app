app.controller('CompletedController', function ($scope, TodoService) {
    $scope.tasks = TodoService.getCompletedTasks();
});
