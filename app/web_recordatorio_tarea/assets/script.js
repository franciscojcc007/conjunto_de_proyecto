
//( () => {
    import checkComplete from './js/checkComplete.js';
    import deleteIcon from './js/deleteIcon.js';

    const d = document;
    const btn = d.querySelector('[data-form-btncreate]');

    const createtask = (evento) => {
      evento.preventDefault();
      const input = d.querySelector('[data-form-input]');
      const value = input.value;
      const list = d.querySelector('[data-list]');
      const task = d.createElement('li');
      task.classList.add("card");
      input.value = '';
      const taskContent = d.createElement('div');
      const titleTask = d.createElement('span');
      titleTask.classList.add('task');
      titleTask.innerText = value;
      taskContent.appendChild(checkComplete());
      taskContent.appendChild(titleTask);
      task.appendChild(taskContent);
      task.appendChild(deleteIcon());
      list.appendChild(task);
    };
    
    btn.addEventListener('click', createtask);
    
//})();

