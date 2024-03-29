
let inputField = document.getElementById('input-task');
let taskList = document.getElementById('task-list');
let addTaskButton = document.getElementById('add-task-button');

let taskListArray = [];
let taskListParser = JSON.parse(localStorage.getItem("taskList")) || [];

fetchTasks(taskListParser);

addTaskButton.addEventListener('click', function () {
    addTask(inputField.value, false, taskList);
});


function addTask(taskName, isChecked, taskList) {
    if (taskName !== '') {

        let liNode = document.createElement('li');
        let inputNode = document.createElement('input');
        let spanNode = document.createElement('span');
        let buttonNode = document.createElement('button');

        let taskObject = {
            taskName: '',
            isChecked: false
        };

        taskObject.taskName = taskName;
        taskObject.isChecked = isChecked;

        inputNode.setAttribute('type', 'checkbox');
        inputNode.setAttribute('onclick', 'checkTask(this)')

        if (isChecked === true) {
            spanNode.setAttribute('class', 'task checked');
            inputNode.setAttribute('checked', 'true');
        } else {
            spanNode.setAttribute('class', 'task');
        }

        spanNode.appendChild(document.createTextNode(taskObject.taskName));

        buttonNode.setAttribute('class', 'delete-btn');
        buttonNode.setAttribute('onclick', 'deleteTask(this)');
        buttonNode.appendChild(document.createTextNode('Delete Task'));

        liNode.appendChild(inputNode);
        liNode.appendChild(spanNode);
        liNode.appendChild(buttonNode);

        taskList.appendChild(liNode);

        taskListArray.push(taskObject);
        localStorage.setItem('taskList', JSON.stringify(taskListArray));

        inputField.value = null;
    }
}

function deleteTask(obj) {
    let newTaskList = taskListArray.filter(data => data.taskName !== obj.parentNode.querySelector('span').innerHTML);
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
    obj.parentNode.remove();
}

function checkTask(obj) {
    let indexOfUpdatedTask = taskListArray.findIndex(task => task.taskName === obj.parentNode.querySelector('.task').innerHTML);
    taskListArray[indexOfUpdatedTask].isChecked = !taskListArray[indexOfUpdatedTask].isChecked;
    localStorage.setItem('taskList', JSON.stringify(taskListArray))
    obj.parentNode.querySelector('.task').classList.toggle('checked');
}

function fetchTasks(arrayOfTasks) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
        addTask(arrayOfTasks[i].taskName, arrayOfTasks[i].isChecked, taskList);
    }
}
