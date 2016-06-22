var TasksBoard = (function ($) {
    TasksBoard = function (options) {
        this.controls = {
            $rootEl: $(),
            $taskInput: $(),
            $tasksList: $()
        };

        this.options = options;
        this._init();
    };

    TasksBoard.prototype = {
        _init: function () {
            var self = this;

            self.controls.$rootEl = $(self.options.rootSelector);
            self.controls.$taskInput = self.controls.$rootEl.find(self.options.inputSelector);
            self.controls.$tasksList = self.controls.$rootEl.find(self.options.listSelector);

            self.controls.$taskInput.keypress(self._addTaskHandler.bind(self));
            self.controls.$tasksList.on('click', '[data-action="remove-task"]', self._removeTaskHandler.bind(self));
        },
        _addTaskHandler: function (e) {
            var self = this;
            if (e.keyCode == 13 && self._validateInputText()) {
                var text = self.controls.$taskInput.val();
                var taskTemplate = '<li class="list-group-item"><span data-action="remove-task" class="badge">X</span>' + text + '</li>';
                self.controls.$tasksList.append(taskTemplate);
                self.controls.$taskInput.val('');
            }
        },
        _removeTaskHandler: function (e) {
            e.currentTarget.parentElement.remove();
        },
        _validateInputText: function () {
            var self = this;
            self.controls.$taskInput.toggleClass('input-error', false);
            self.controls.$taskInput.attr('title', '');
            if (self.controls.$taskInput.val().length == 0) {
                self.controls.$taskInput.toggleClass('input-error', true);
                self.controls.$taskInput.attr('title', '* Please Fill Out This Field.');
                self.controls.$taskInput.tooltip('show');
                return false
            }

            self.controls.$taskInput.tooltip('destroy');
            return true;
        }

    };

    return TasksBoard;
})($);