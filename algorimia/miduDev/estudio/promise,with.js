// Promise.withResolvers, manejo simplificado de promesas y sus resoluciones
// ¿Por qué necesitamos Promise.withResolvers()?
// Promise.withResolvers() es un método estático que simplifica la creación y manejo de promesas al devolver un objeto con tres propiedades clave: promise, resolve, y reject. Este patrón facilita el manejo y control de las resoluciones y rechazos de las promesas, especialmente en casos donde necesites tener acceso explícito a esos métodos fuera del contexto de la promesa.

// Veamos cómo funciona y por qué puede ser útil en situaciones donde antes teníamos que crear promesas de forma más manual.

// Por ejemplo, imagina que tienes que crear una función que retorna una promesa, pero necesitas resolverla o rechazarla desde fuera del cuerpo de la promesa.

// Creación manual de promesas

// ❌ Código común con creación manual de promesa
function createManualPromise() {
  let resolve, reject
 
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
 
  return { promise, resolve, reject }
}
 
const { promise, resolve, reject } = createManualPromise()
 
// Ahora puedes resolver o rechazar la promesa manualmente
// resolve('Operación completada')
// Este código es funcional, pero repetitivo y algo difícil de leer. Aquí es donde entra en juego Promise.withResolvers() para simplificar el proceso.

// Usando Promise.withResolvers()
// Con Promise.withResolvers(), no necesitas escribir código adicional para capturar resolve y reject. El método te los proporciona directamente, haciendo que el código sea más limpio y fácil de manejar.

// Usando Promise.withResolvers()

// // ✅ Código usando Promise.withResolvers()
// const { promise, resolve, reject } = Promise.withResolvers()
 
resolve('Operación completada')
 
promise.then((result) => {
  console.log(result) // 'Operación completada'
})
// El objeto devuelto por Promise.withResolvers() contiene las siguientes propiedades:

// promise: La promesa que se va a resolver o rechazar.
// resolve: La función que resuelve la promesa.
// reject: La función que rechaza la promesa.
// Evita usar el new Promise() con Promise.withResolvers()
// Un patrón muy común en JavaScript es crear una función de retraso utilizando setTimeout y new Promise. Este patrón es útil cuando necesitas esperar un tiempo determinado antes de ejecutar una acción, por ejemplo:

// Método delay con new Promise

// ❌ Código clásico usando new Promise y setTimeout
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
 
delay(1000).then((message) => {
  console.log(message) // 'Tiempo completado'
})
// Este código es común y funciona bien, pero podemos evitar anidar el código (creando tabulaciones innecesarias) utilizando Promise.withResolvers(), lo que nos ahorra la invocación del new Promise.

// Usando Promise.withResolvers() para simplificar el método delay()
// En lugar de utilizar new Promise, podemos usar Promise.withResolvers() para simplificar el código, manteniendo la misma funcionalidad de espera.

// Método delay simplificado con Promise.withResolvers()

// ✅ Transformando el método delay con Promise.withResolvers()
function delay(ms) {
  const { promise, resolve } = Promise.withResolvers()
  setTimeout(resolve, ms)
  return promise
}
 
delay(1000).then((message) => {
  console.log(message) // 'Tiempo completado'
 })
// ¿Por qué es mejor usar Promise.withResolvers()?
// El método Promise.withResolvers() simplifica la creación de promesas al proporcionarnos un objeto con resolve y reject, permitiéndonos manejar resoluciones o rechazos sin tener que escribir la estructura completa de new Promise(). Esto hace que nuestro código sea más limpio y fácil de entender.

// Es verdad que en este ejemplo de 3 líneas puede no parecer algo tan importante, pero muchas veces nos podemos enfrentar a estructuras de código más complejas donde evitar anidar nuestros callbacks puede ser una solución muy útil.

// Además, este enfoque es particularmente útil en funciones pequeñas como delay(), donde usar new Promise() puede parecer excesivo. Ahora solo necesitamos centrarnos en el tiempo de espera y en la resolución de la promesa, eliminando el paso extra de crear manualmente la promesa.

// ¿Por qué es útil?
// Este método es útil en escenarios donde necesitas crear una promesa pero no quieres inmediatamente resolverla o rechazarla, o donde el control sobre la resolución de la promesa ocurre fuera de la función en la que fue creada. Promise.withResolvers() facilita este control sin necesidad de estructuras complicadas.

// Por eso también, como habrás visto en el vídeo, puede ser interesante cuando trabajamos con eventos.

// Y es que Promise.withResolvers() es especialmente útil en patrones de trabajo asíncronos más complejos, como en el manejo de eventos o callbacks que pueden necesitar acceso a las resoluciones de las promesas desde fuera de su bloque de creación.