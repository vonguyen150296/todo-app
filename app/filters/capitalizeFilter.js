app.filter('capitalize', function () {
    return function (input) {
        if (input) {
            return input.charAt(0).toUpperCase() + input.slice(1);
        }
        return input;
    };
});
