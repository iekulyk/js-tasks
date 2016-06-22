var TasksBoard = (function () {
    var TasksBoard = {};
    var self = TasksBoard;

    self.init = function (options) {
        var $component, $taskInput, $tasksList;

        $component = $(options.rootSelector);
        $taskInput = $component.find(options.inputSelector);
        $tasksList = $component.find(options.listSelector);

        $taskInput.keypress(addTaskHandler);
        $tasksList.on('click', '[data-action="remove-task"]', removeTaskHandler);

        function addTaskHandler(e) {
            if (e.keyCode == 13 && _validateInputText()) {
                var text = $taskInput.val();
                var taskTemplate = '<li class="list-group-item"><span data-action="remove-task" class="badge">X</span>' + text + '</li>';
                $tasksList.append(taskTemplate);
                $taskInput.val('');
            }
        }

        function removeTaskHandler(e) {
            e.currentTarget.parentElement.remove();
        }

        function _validateInputText() {
            $taskInput.toggleClass('input-error', false);
            $taskInput.attr('title', '');
            if ($taskInput.val().length == 0) {
                $taskInput.toggleClass('input-error', true);
                $taskInput.attr('title', '* Please Fill Out This Field.');
                $taskInput.tooltip('show');
                return false;
            }

            $taskInput.tooltip('destroy');
            return true;
        }
    };

    return TasksBoard;
})();