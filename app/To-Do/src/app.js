import {checkComplete} from "./js/checkComplete.js"
import {deleteIcon} from "./js/deleteIcon.js"

const d = document
const createTaskButton = d.querySelector('[data-form-btncreate]')
const taskInput = d.querySelector('[data-form-input]')
const taskList = d.querySelector('[data-list]')

const createTask = (event) => {
  event.preventDefault()
  if (taskInput.value) {
    const value = taskInput.value;
    const taskElement = d.createElement('li')
    const taskTitle = d.createElement('span')
    const taskContent = d.createElement('div')

    taskElement.classList.add('card');
    taskInput.value = '';
    taskContent.classList.add('card-body');
    taskTitle.classList.add('task')
    taskTitle.innerText = value
    taskContent.appendChild(checkComplete())
    taskContent.appendChild(taskTitle)
    taskElement.appendChild(taskContent)
    taskElement.appendChild(deleteIcon())
    taskList.appendChild(taskElement);
  } else {
    alert('por favor agregue una tarea')
  }
};

createTaskButton.addEventListener('click', createTask)


