//creamos un objeto con las llaves
let llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ali",
    "o": "ober",
    "u": "ufate" 
  };
  
  //Creamos la función encriptar usando expresiones regulares con el modificador global
  function encriptar(texto) {
    return texto.replace(/[aeiou]/g, function(match) {
      return llaves[match];
    });
  }
  
  //Creamos la función para desencriptar
  function desencriptar(texto) {
    return texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ali/g, "a").replace(/ober/g, "o").replace(/ufate/g, "u");
  }
  
  //Creamos otra función para contar cuantas palabras encripto
  function contarPalabras(texto) {
    let palabras = texto.trim().split(/\s+/);
    let palabrasConLetrasEnLlaves = 0;
  
    for (let palabra of palabras) {
      if (contieneLetraEnLlaves(palabra)) {
        palabrasConLetrasEnLlaves++;
      }
    }
  
    return palabrasConLetrasEnLlaves;
  }
  
  let contadorPalabras = 0;; 
  
  //Adicional crearemos otra función para validar que la palabra contenga una letra de la llave
  function contieneLetraEnLlaves(palabra) {
    for (let letra in llaves) {
      if (palabra.includes(letra)) {
        return true;
      }
    }
    return false;
  }
  
  //Creamos la función para encriptar y la asignamos al boton con onclick
  function procesar() {
    let entrada = document.getElementById("textoOriginal");
    let salida = document.getElementById("textoEncriptado");
    let texto = entrada.value;
  
    if (texto.trim() === "") {
      mostrarNotificacion("No ingresaste ningún texto");
      return;
    }
  
    let resultado = encriptar(texto);
    contadorPalabras += contarPalabras(texto);
    document.getElementById("contadorPalabras").innerText = "Palabras Encriptadas " + contadorPalabras;
    salida.value = resultado;
    mostrarNotificacion("Texto encriptado correctamente");
  }
  
  //Creamos la función para desencriptar y la asignamos al boton con onclick
  function procesarDesencriptar() {
    let entrada = document.getElementById("textoOriginal");
    let salida = document.getElementById("textoEncriptado");
    let texto = entrada.value;
  
    if (texto.trim() === "") {
      mostrarNotificacion("No ingresaste ningún texto");
      return;
    }
  
    let resultado = desencriptar(texto);
    salida.value = resultado;
    mostrarNotificacion("Texto desencriptado correctamente");
  }
  
 // Creamos la función procesarBotonCopiar para el botón "copiar"
function btnCopiar() {
  let texto = document.getElementById("textoEncriptado").value.trim();
  if (!texto) {
    notificarNadaQueCopiar();
    return;
  }
  copiarAlPortapapeles(texto);
}
function btnLimpiar(){
  let texto = document.getElementById("textoEncriptado").value.trim();
  let texto2 = document.getElementById("textoOriginal").value.trim();
  document.getElementById("textoEncriptado").value = "";
  document.getElementById("textoOriginal").value = "";
  document.getElementById("contadorPalabras").innerText = "Palabras Encriptadas";
  contadorPalabras = 0;
}
// Creamos la función para copiar al portapapeles
function copiarAlPortapapeles(texto) {
  if (texto.trim() === "") {
    return;
  }

  // Creamos un elemento temporal de tipo input
  const inputTemp = document.createElement("input");
  inputTemp.value = texto;
  document.body.appendChild(inputTemp);

  // Seleccionamos el contenido del input temporal
  inputTemp.select();
  inputTemp.setSelectionRange(0, 99999); 

  // Ejecutamos el comando de copiado
  document.execCommand("copy");

  // Removemos el input temporal
  document.body.removeChild(inputTemp);

  mostrarNotificacion("Texto copiado al portapapeles");
}

function notificarNadaQueCopiar() {
  mostrarNotificacion("No hay texto para copiar");
}

function mostrarNotificacion(mensaje) {
  const notificacion = document.getElementById("notificacion");
  notificacion.innerText = mensaje;

}
  
  //Creamos la función restablecer para limpiar nuestra area de trabajo con el Boton restablecer
  function borrarSegundoTextarea() {
    let salida = document.getElementById("textoEncriptado");
    let texto = salida.value.trim();
  
    if (texto === "") {
      mostrarNotificacion("No hay nada que limpiar");
      return;
    }
  
    salida.value = "";
    mostrarNotificacion("Limpieza realizada");
  } 
  //Ocultar Divs dinamicamente si hay o no hay ningún texto en nuestra area de trabajo
  function mostrarOcultarDivs() {
    setTimeout(() => {
      let texto = document.getElementById("textoOriginal").value;
      let divPasivo = document.getElementById("pasivo");
      let divActivo = document.getElementById("activo");
      let textoEncriptado = document.getElementById("textoEncriptado");
      if (texto == "") {
        // Si el primer textarea está vacío, mostrar el div pasivo y ocultar el div activo
        divPasivo.style.display = "block";
        divActivo.style.display = "none";
      } else {
        // Si el primer textarea tiene algún valor, ocultar el div pasivo y mostrar el div activo
        divPasivo.style.display = "none";
        divActivo.style.display = "block";
        // Asignar el valor del primer textarea al segundo
        textoEncriptado.value = texto;
      }
    }, 0); // El tiempo de espera es 0 milisegundos
  }

  let timerId = null;
  let intervalId = null;

  //Creamos la función notificacion y creamos la variable notificacion para asignarle una clase y trabajar en CSS
  function mostrarNotificacion(mensajeTexto) {
    mensaje.innerText = mensajeTexto; 
    notificacion.classList.add("show");
    clearTimeout(timerId);
    clearInterval(intervalId);

    timerId = setTimeout(function() {
      notificacion.classList.remove("show");
    }, 3000);
    
    let progress = document.querySelector("#notificacion progress");
  
    progress.max = 3000;
    progress.value = 3000;
    intervalId = setInterval(function() {
      progress.value -= 10;

      if (progress.value === 0) {
        clearInterval(intervalId);
      }
    }, 10);

  }
  

  const notificacion = document.getElementById("notificacion");
  const mensaje = document.querySelector(".mensaje"); 
  const cerrar = document.getElementById("cerrar");
