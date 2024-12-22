export const checkComplete = () => {
  const i = document.createElement('i')
  i.classList.add('far', 'fa-check-square', 'icon')
  i.addEventListener('click', completeTask)
  return i
}

const completeTask = (event) => {
  const element = event.currentTarget
  element.classList.toggle('fas')
  element.classList.toggle('completeIcon')
  element.classList.toggle('far')

  const taskText = element.nextElementSibling
  if (taskText) {
      taskText.classList.toggle('through')
  }
}


