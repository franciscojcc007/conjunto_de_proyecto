const d = document
const cipherKeys = {
  "e": 'enter',
  "i": 'imes',
  "a": 'ali',
  "o": 'ober',
  "u": 'ufate'
};

let encryptedWordCount = 0

function encryptText(text) {
  return text.replace(/[aeiou]/g, function (match) {
    return cipherKeys[match]
  })
}

function decryptText(text) {
  return text.replace(/enter|imes|ali|ober|ufate/g, function (match) {
    return Object.keys(cipherKeys).find(key => cipherKeys[key] === match)
  })
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(containsCipherLetter).length
}

function containsCipherLetter(word) {
  for (let letter in cipherKeys) {
    if (word.includes(letter)) {
      return true
    }
  }
  return false
}

function getInputText() {
  return d.getElementById('originalText').value.trim()
}

function updateOutput(text) {
  d.getElementById('encryptedText').value = text
}

function handleEncrypt() {
  const inputText = getInputText()
  const result = encryptText(inputText)
  encryptedWordCount += countWords(inputText)
  d.getElementById('wordCounter').innerText = `Palabras Encriptadas: ${encryptedWordCount}`
  updateOutput(result)
}

function handleDecrypt() {
  const inputText = getInputText()
  const result = decryptText(inputText)
  updateOutput(result)
}

function handleCopy() {
  let text = d.getElementById('encryptedText').value.trim()
  copyToClipboard(text)
}

function handleClear() {
  d.getElementById('encryptedText').value = ''
  d.getElementById('originalText').value = ''
  d.getElementById('wordCounter').innerText = 'Palabras Encriptadas'
  encryptedWordCount = 0
}

function copyToClipboard(text) {
  if (text.trim() === '') {
    return
  }
  const tempInput = d.createElement('input')
  tempInput.value = text
  d.body.appendChild(tempInput)
  tempInput.select()
  tempInput.setSelectionRange(0, 99999)
  d.execCommand('copy')
  d.body.removeChild(tempInput)
}

const togglePanelsVisibility = function () {
  setTimeout(() => {
    let text = d.getElementById('originalText').value
    let inactivePanel = d.getElementById('inactive-panel')
    let activePanel = d.getElementById('active-panel')
    let encryptedTextField = d.getElementById('encryptedText')
    if (text == '') {
      inactivePanel.style.display = 'block'
      activePanel.style.display = 'none'
    } else {
      inactivePanel.style.display = 'none'
      activePanel.style.display = 'block'
      encryptedTextField.value = text
    }
  }, 0)
}

d.getElementById('encryptButton').addEventListener('click', handleEncrypt)
d.getElementById('decryptButton').addEventListener('click', handleDecrypt)
d.getElementById('copyButton').addEventListener('click', handleCopy)
d.getElementById('clearButton').addEventListener('click', handleClear)

window.togglePanelsVisibility = togglePanelsVisibility
