app.controller('TodoController', function ($scope, TodoService) {
    $scope.tasks = TodoService.getTodoTasks();
    $scope.newTask = '';
    $scope.addTask = function () {
        if ($scope.newTask) {
            TodoService.addTask($scope.newTask);
            $scope.newTask = '';
            $scope.tasks = TodoService.getTodoTasks();
        }
    };

    $scope.removeTask = function (id) {
        TodoService.removeTask(id);
        $scope.tasks = TodoService.getTodoTasks();
    };

    $scope.completeTask = function (id) {
        TodoService.markAsCompleted(id);
        $scope.tasks = TodoService.getTodoTasks();
    };
});
