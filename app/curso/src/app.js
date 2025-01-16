

const d = document;

// const contenedor = d.getElementById("contenedor")
// console.log(contenedor.innerHTML)

// const tilulo = d.getElementById("titulo")
// console.log(tilulo.tagName)

// const queso = d.getElementById("queso")
// console.log(typeof queso)

// const toppings = d.getElementsByClassName("topping")
// console.log(toppings[1])

// const li = d.getElementsByTagName("li")
// console.log(li)

// const chile = d.querySelector(".topping.fondo-verde")
// console.log(chile);

// const chileno = d.querySelector("ul li:not(.fondo-verde)")
// console.log(chileno);

// const topping = d.querySelectorAll(".fondo-verde")
// console.log(topping[1])

const titular = d.getElementById('titulo')
titulo.style.textTransform = 'uppercase'
titular.innerText = '🍕mis toppings'

const primerTop = d.querySelector('.topping')
// primerTop.style.background = 'yellow'
// primerTop.style.color = '#0009f1'
// primerTop.style.textTransform = 'uppercase'

// const link = d.getElementsByTagName('a')
// console.log(link[0].getAttribute('href'))
// // console.log(link[0].removeAttribute('href'))
// console.log(link[0].setAttribute('href','https://www.bing.com/images/search?q=carr&form=HDRSC4&first=1'))

// primerTop.classList.add('add')
// console.log(primerTop.classList)
// console.log(primerTop.classList.contains('add'))
// primerTop.classList.remove('add')
// console.log(primerTop.classList)

// const lista = d.getElementById('lista-toppings')
// const nuevoLi = d.createElement('li')
// nuevoLi.classList.add('topping', 'fondo-azul')
// nuevoLi.textContent = 'Tocino🥓'
// lista.append(nuevoLi)


// const linkA =d.getElementById('ida')
// linkA.remove()

// console.log(titular.parentNode)
// console.log(titular.parentElement)
// console.log(lista.children)
// console.log(lista.children[0])
// console.log(lista.firstElementChild)
// console.log(lista.lastChild)
// console.log(lista.lastElementChild)
// console.log(lista.previousElementSibling)
// console.log(primerTop.nextElementSibling)



// const _pollo = d.getElementById('pollo')

// function mostrar (e){
//     console.log(e)
// }

// _pollo.addEventListener('click', ver)


function ver(e) {
    console.log(e.target.innerText);
}


const listado = d.getElementsByClassName('topping')

for(const topping of listado){
    topping.addEventListener('click', ver)
}