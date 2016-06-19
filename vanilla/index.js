(function (doc) {
    var taskInput;
    var tasksList;

    var $ = function (selector) {
        return doc.querySelector(selector);
    };

    function init() {
        taskInput = $('.add-task');
        tasksList = $('.tasks');

        taskInput.addEventListener('keyup', addTask);
    }

    function addTask(e) {

        if (isKeyCodeIsEnter(e.which) && isValidTaskText(this)) {
            var taskText = this.value;
            var removeButton = getRemovableSpan();
            var taskItem = doc.createElement('li');
            taskItem.setAttribute('class', 'task');
            taskItem.innerHTML = '<p class="text">' + taskText + '</p>';
            taskItem.setAttribute('title', taskText)

            tasksList.appendChild(taskItem);
            taskItem.appendChild(removeButton);

            clearTaskText();
        }

    }

    function removeTask(e) {
        e.currentTarget.parentElement.remove()
    }

    function isKeyCodeIsEnter(keyPressedCode) {
        var enterKey = 13;
        return keyPressedCode == enterKey;
    }

    function isValidTaskText(input) {
        var taskText = input.value;
        input.setAttribute('class', '');
        input.setAttribute('title', '')

        if (taskText.length == 0) {
            input.setAttribute('class', 'error');
            input.setAttribute('title', 'Please fill out this field')
            return false;
        }
        return true;
    }

    function getRemovableSpan() {
        var span = doc.createElement('span');
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
})(document)