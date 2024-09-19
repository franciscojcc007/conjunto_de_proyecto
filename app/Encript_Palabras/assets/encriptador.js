const d = document;
//creamos un objeto con las llaves
const llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ali",
    "o": "ober",
    "u": "ufate" 
  };

  let contadorPalabras = 0;

  //Creamos la función encriptar usando expresiones regulares con el modificador global
  function encriptar(texto) {
    return texto.replace(/[aeiou]/g, function(match) {
      return llaves[match];
    });
  }
  
  //Creamos la función para desencriptar
  function desencriptar(texto) {
    return texto.replace(/enter|imes|ali|ober|ufate/g, function(match) {
      return Object.keys(llaves).find(key => llaves[key] === match);
    });
  }
  
  
  //Creamos otra función para contar cuantas palabras encripto
  function contarPalabras(texto) {
    return texto.trim().split(/\s+/).filter(contieneLetraEnLlaves).length;
  }
  
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
  function obtenerTextoEntrada() {
    return d.getElementById("textoOriginal").value.trim();
  }
  
  function actualizarSalida(texto) {
    d.getElementById("textoEncriptado").value = texto;
  }
  
  function procesar() {
    const texto = obtenerTextoEntrada();
    if (!texto) {
      mostrarNotificacion("No ingresaste ningún texto");
      return;
    }
    const resultado = encriptar(texto);
    contadorPalabras += contarPalabras(texto);
    d.getElementById("contadorPalabras").innerText = `Palabras Encriptadas: ${contadorPalabras}`;
    actualizarSalida(resultado);
  }
  
  function procesarDesencriptar() {
    const texto = obtenerTextoEntrada();
    if (!texto) {
      mostrarNotificacion("No ingresaste ningún texto");
      return;
    }
    const resultado = desencriptar(texto);
    actualizarSalida(resultado);
  }
  
 // Creamos la función procesarBotonCopiar para el botón "copiar"
function btnCopiar() {
  let texto = d.getElementById("textoEncriptado").value.trim();
  if (!texto) {
    notificarNadaQueCopiar();
    return;
  }
  copiarAlPortapapeles(texto);
}
function btnLimpiar(){
  let texto = d.getElementById("textoEncriptado").value.trim();
  let texto2 = d.getElementById("textoOriginal").value.trim();
  d.getElementById("textoEncriptado").value = "";
  d.getElementById("textoOriginal").value = "";
  d.getElementById("contadorPalabras").innerText = "Palabras Encriptadas";
  contadorPalabras = 0;
}
// Creamos la función para copiar al portapapeles
function copiarAlPortapapeles(texto) {
  if (texto.trim() === "") {
    return;
  }

  const inputTemp = d.createElement("input");
  inputTemp.value = texto;
  d.body.appendChild(inputTemp);
  inputTemp.select();
  inputTemp.setSelectionRange(0, 99999); 
  d.execCommand("copy");
  d.body.removeChild(inputTemp);

}

  function borrarSegundoTextarea() {
    let salida = d.getElementById("textoEncriptado");
    let texto = salida.value.trim();
  
    if (texto === "") {
      mostrarNotificacion("No hay nada que limpiar");
      return;
    }

    salida.value = "";
    mostrarNotificacion("Limpieza realizada");
  } 
  function mostrarOcultarDivs() {
    setTimeout(() => {
      let texto = d.getElementById("textoOriginal").value;
      let divPasivo = d.getElementById("pasivo");
      let divActivo = d.getElementById("activo");
      let textoEncriptado = d.getElementById("textoEncriptado");
      if (texto == "") {
        divPasivo.style.display = "block";
        divActivo.style.display = "none";
      } else {
        divPasivo.style.display = "none";
        divActivo.style.display = "block";
        textoEncriptado.value = texto;
      }
    }, 0); 
  }

  let timerId = null;
  let intervalId = null;
