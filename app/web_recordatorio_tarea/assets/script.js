
//( () => {
    import checkComplete from './js/checkComplete.js';
    import deleteIcon from './js/deleteIcon.js';

    const d = document;
    const btn = d.querySelector('[data-form-btncreate]');
    const input = d.querySelector('[data-form-input]');
    const list = d.querySelector('[data-list]');


    const createtask = (evento) => {
      if(input.value){
      evento.preventDefault();
      const value = input.value;
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
      }else{
        alert('por favor agregue una tarea')
        evento.preventDefault();
      }
    };
    
    btn.addEventListener('click', createtask);
    
//})();

