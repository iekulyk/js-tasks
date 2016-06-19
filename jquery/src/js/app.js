var TasksBoard = (function ($, doc, storageProvider, validator) {
    var TasksBoard = {};
    var self = TasksBoard;

    var option = {
        listSelector: '',
        inputSelector: ''
    }

    self.init = function (options) {
        _validateInitParams(options)
        if (_validateInitParams(options)) {
            $(options.inputSelector).keypress(self.addTask);
            $(options.listSelector).on('click', '[data-action="remove-task"]', self.removeTaskHandler)
        }
    }

    self.addTaskHandler = function (e) {
        if (e.keyCode == 13) {
            self.addTask($(this).val())
        }
    }

    self.removeTaskHandler = function (e) {

    }

    self.addTask = function (text) {

    }

    self.removeTask = function (taskId) {

    }

    _validateInitParams = function () {

    }


    return TasksBoard;
})($, document, localStorage)