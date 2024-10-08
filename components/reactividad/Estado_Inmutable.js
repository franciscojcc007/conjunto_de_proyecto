const d = document;

    //El State
    const state = {
      todoList: [],
      nombre: ""
    }

    //Template UI
    const template = () => {
      if (state.todoList.length < 1) {
        return `<p><em>Lista sin tareas por hacer.</em></p>`;
      }

      let todos = state.todoList.map(item => `<li>${item}</li>`).join("");
      return todos;
    }

    //Render UI
    const render = () => {
      console.log(state);
      const $list = d.getElementById("todo-list");
      if (!$list) return;
      $list.innerHTML = template();
    }

    //Actualizar el State de forma reactiva
    const setState = obj => {
      for (let key in obj) {
        if (state.hasOwnProperty(key)) {
          state[key] = obj[key];
        }
      }

      render();
    }

    //Obtenemos una copia inmutable del State
    const getState = () => JSON.parse(JSON.stringify(state));

    d.addEventListener("DOMContentLoaded", render);

    //Estableciendo valores por defecto al State
    setState({
      todoList: ["Tarea 1", "Tarea 2", "Tarea 3"],
      nombre: "Jon"
    });

    //Estado Mutable, porque permite modificar el estado directamente creando una copia del objeto y agregando otro elemento
    //Estado Inmutable, porque al obtener una copia del State con getState, NO se modifica el estado original directamente, para modificarlo tenemos que hacer uso de setState

    //const items = state.todoList;
    const items = getState();
    //items.push("Tarea 4");
    items.todoList.push("Tarea 4")
    //console.log("Estado Mutable", state);
    console.log("Estado Inmutable", state);


    d.addEventListener("submit", e => {
      if (!e.target.matches("#todo-form")) return false;
      e.preventDefault();
      const $item = d.getElementById("todo-item");
      if (!$item) return;

      //Actualizar el State de forma reactiva
      const lastState = getState()
      lastState.todoList.push($item.value);
      setState({ todoList: lastState.todoList });

      //Limpiar el input
      $item.value = "";
      $item.focus();
    });
