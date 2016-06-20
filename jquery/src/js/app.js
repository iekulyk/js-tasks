var TasksBoard = (function ($, doc, storage, validator) {
    var TasksBoard = {};
    var self = TasksBoard;

    var option = {
        listSelector: '',
        inputSelector: ''
    }

    var $taskInput, $tasksList;

    self.init = function (options) {
        $taskInput = $(options.inputSelector);
        $tasksList = $(options.listSelector);

        $(options.inputSelector).keypress(self.addTaskHandler);
        $(options.listSelector).on('click', '[data-action="remove-task"]', self.removeTaskHandler)
    }

    self.addTaskHandler = function (e) {
        if (e.keyCode == 13 && _validateInputText()) {
            var text = $taskInput.val();
            var taskTemplate = '<li class="list-group-item"><span data-action="remove-task" class="badge">X</span>' + text + '</li>';
            $tasksList.append(taskTemplate);
            $taskInput.val('');
        }
    }

    self.removeTaskHandler = function (e) {
        e.currentTarget.parentElement.remove();
    }

    function _validateInputText() {
        $taskInput.toggleClass('input-error', false);
        $taskInput.attr('title', '');
        if ($taskInput.val().length == 0) {
            $taskInput.toggleClass('input-error', true);
            $taskInput.attr('title', '* Please Fill Out This Field.');
            $taskInput.tooltip('show');
            return false
        }

        $taskInput.tooltip('destroy');
        return true;
    }

    return TasksBoard;
})($, document, localStorage)