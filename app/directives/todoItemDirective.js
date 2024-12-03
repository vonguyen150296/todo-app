app.directive('todoItem', function () {
    return {
        restrict: 'E',
        template: `
            <div>
                <span>{{task.text | capitalize}}</span>
                <button ng-click="remove({id: task.id})">Remove</button>
                <button ng-click="complete({id: task.id})" ng-if="!task.completed">Complete</button>
            </div>
        `,
        scope: {
            task: '=',
            remove: '&',
            complete: '&'
        }
    };
});
