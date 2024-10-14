// const d = document;

// const contenedor = d.getElementById("contenedor");
// console.log(contenedor.innerHTML);

// const tilulo = d.getElementById("titulo");
// console.log(tilulo.tagName);

// const queso = d.getElementById("queso");
// console.log(typeof queso);

// const toppings = d.getElementsByClassName("topping");
// console.log(toppings[1]);

// const li = d.getElementsByTagName("li");
// console.log(li);

// const chile = d.querySelector(".topping.fondo-verde");
// console.log(chile);

// const chileno = d.querySelector("ul li:not(.fondo-verde)");
// console.log(chileno);

// const topping = d.querySelectorAll(".fondo-verde");
// console.log(topping[1]);

class Beer {
  constructor(name, price, alcohol) {
    this.name = name;
    this.price = price;
    this._alcohol = 0; // Propiedad interna para alcohol
    this.alcohol = alcohol; // Usa el setter para aplicar la lógica
  }

  // Getter para alcohol
  get alcohol() {
    return this._alcohol;
  }

  // Setter para alcohol
  set alcohol(value) {
    if (value > 0) {
      this._alcohol = value;
    } else {
      console.error("El valor de alcohol debe ser mayor a 0");
    }
  }

  getInfo = () => {
    console.log(
      `El nombre de la cerveza es ${this.name}, su precio es $${this.price}, y los grados de alcohol son ${this.alcohol}`
    );
  };
}

// Forma de pasarle los valores
const erdingerBeer = new Beer("Erdinger", 2.5, 4);

// Mostrar la información
erdingerBeer.getInfo();
