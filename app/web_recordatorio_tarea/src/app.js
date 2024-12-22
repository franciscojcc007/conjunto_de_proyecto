import {checkComplete} from "./js/checkComplete.js"
import {deleteIcon} from "./js/deleteIcon.js"

const d = document
const $btn = d.querySelector('[data-form-btncreate]')
const $input = d.querySelector('[data-form-input]')
const $list = d.querySelector('[data-list]')

const createtask = (evento) => {
  evento.preventDefault()
  if ($input.value) {
    const value = $input.value;
    const task = d.createElement('li')
    const titleTask = d.createElement('span')
    const taskContent = d.createElement('div')

    task.classList.add('card');
    $input.value = '';
    taskContent.classList.add('card-body');
    titleTask.classList.add('task')
    titleTask.innerText = value
    taskContent.appendChild(checkComplete())
    taskContent.appendChild(titleTask)
    task.appendChild(taskContent)
    task.appendChild(deleteIcon())
    $list.appendChild(task);
  } else {
    alert('por favor agregue una tarea')
  }
};

$btn.addEventListener('click', createtask)


