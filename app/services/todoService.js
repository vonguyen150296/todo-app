app.factory('TodoService', function () {
    var newID = 3;
    var tasks = [
        { id: 1, text: 'Learn AngularJS', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false }
    ];

    return {
        getTodoTasks: function () {
            return tasks.filter(task => !task.completed);
        },
        getCompletedTasks: function () {
            return tasks.filter(task => task.completed);
        },
        addTask: function (task) {
            tasks.push({id: newID++, text: task, completed: false });
        },
        removeTask: function (id) {
            tasks = tasks.filter(task => task.id !== id)
        },
        markAsCompleted: function (id) {
            let index = tasks.findIndex(task => task.id === id)
            if(index !== -1) tasks[index].completed = true;
        }
    };
});
