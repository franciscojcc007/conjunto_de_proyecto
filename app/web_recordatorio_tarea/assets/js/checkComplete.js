const i = document.createElement("i");

const checkComplete = () => {

    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener('click', completeTask);
    return i;
  };

  const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    completeThrough(event)
}
function completeThrough(e){
  let task = e.target.nextElementSibling;
  task.classList.toggle('through')
}
export default checkComplete;