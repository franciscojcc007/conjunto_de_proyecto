const d = document
const llaves = {
  "e": 'enter',
  "i": 'imes',
  "a": 'ali',
  "o": 'ober',
  "u": 'ufate'
};

let contadorPalabras = 0

function encriptar(texto) {
  return texto.replace(/[aeiou]/g, function (match) {
    return llaves[match]
  })
}

function desencriptar(texto) {
  return texto.replace(/enter|imes|ali|ober|ufate/g, function (match) {
    return Object.keys(llaves).find(key => llaves[key] === match)
  })
}

function contarPalabras(texto) {
  return texto.trim().split(/\s+/).filter(contieneLetraEnLlaves).length
}

function contieneLetraEnLlaves(palabra) {
  for (let letra in llaves) {
    if (palabra.includes(letra)) {
      return true
    }
  }
  return false
}

function obtenerTextoEntrada() {
  return d.getElementById('textoOriginal').value.trim()
}

function actualizarSalida(texto) {
  d.getElementById('textoEncriptado').value = texto
}

function procesar() {
  const texto = obtenerTextoEntrada()
  const resultado = encriptar(texto)
  contadorPalabras += contarPalabras(texto)
  d.getElementById('contadorPalabras').innerText = `Palabras Encriptadas: ${contadorPalabras}`
  actualizarSalida(resultado)
}

function procesarDesencriptar() {
  const texto = obtenerTextoEntrada()
  const resultado = desencriptar(texto)
  actualizarSalida(resultado)
}

function btnCopiar() {
  let texto = d.getElementById('textoEncriptado').value.trim()
  copiarAlPortapapeles(texto)
}

function btnLimpiar() {
  d.getElementById('textoEncriptado').value = ''
  d.getElementById('textoOriginal').value = ''
  d.getElementById('contadorPalabras').innerText = 'Palabras Encriptadas'
  contadorPalabras = 0
}

function copiarAlPortapapeles(texto) {
  if (texto.trim() === '') {
    return
  }
  const inputTemp = d.createElement('input')
  inputTemp.value = texto
  d.body.appendChild(inputTemp)
  inputTemp.select()
  inputTemp.setSelectionRange(0, 99999)
  d.execCommand('copy')
  d.body.removeChild(inputTemp)
}

d.mostrarOcultarDivs=function () {
  setTimeout(() => {
    let texto = d.getElementById('textoOriginal').value
    let divPasivo = d.getElementById('pasivo')
    let divActivo = d.getElementById('activo')
    let textoEncriptado = d.getElementById('textoEncriptado')
    if (texto == '') {
      divPasivo.style.display = 'block'
      divActivo.style.display = 'none'
    } else {
      divPasivo.style.display = 'none'
      divActivo.style.display = 'block'
      textoEncriptado.value = texto
    }
  }, 0)
}

d.getElementById('encriptar').addEventListener('click', procesar)
d.getElementById('desencriptar').addEventListener('click', procesarDesencriptar)
d.getElementById('copiar').addEventListener('click', btnCopiar)
d.getElementById('limpiar').addEventListener('click', btnLimpiar)
