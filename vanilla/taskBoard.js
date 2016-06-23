
var taskBoard = (function () {

    function create(rootSelector) {
        var component, taskInput, tasksList;

        function init() {
            component = document.querySelector(rootSelector);
            taskInput = component.querySelector('.add-task');
            tasksList = component.querySelector('.tasks');

            taskInput.addEventListener('keyup', addTask);
        }

        function addTask(e) {
            var enterKeyCode = 13;
            if (e.which == enterKeyCode && isValidTaskText(this)) {
                var taskText = this.value;
                var removeButton = createRemovableSpan();
                var taskItem = createTaskLi(taskText);

                tasksList.appendChild(taskItem);
                taskItem.appendChild(removeButton);

                clearTaskText();
            }
        }

        function removeTask(e) {
            e.currentTarget.parentElement.remove();
        }

        function isValidTaskText(input) {
            var taskText = input.value;
            input.setAttribute('class', '');
            input.setAttribute('title', '');

            if (taskText.length == 0) {
                input.setAttribute('class', 'error');
                input.setAttribute('title', 'Please fill out this field');
                return false;
            }
            return true;
        }

        function createTaskLi(taskText) {
            var taskItem = document.createElement('li');
            taskItem.setAttribute('class', 'task');
            taskItem.innerHTML = '<p class="text">' + taskText + '</p>';
            taskItem.setAttribute('title', taskText);
            return taskItem;
        }

        function createRemovableSpan() {
            var span = document.createElement('span');
            span.addEventListener('click', removeTask);
            span.innerText = 'X';
            span.setAttribute('title', 'Remove Task');
            span.setAttribute('class', 'clickable text-button');
            return span;
        }

        function clearTaskText() {
            taskInput.value = '';
            taskInput.blur();
        }

        init();
    }

    return {
        create: create
    };
})();

