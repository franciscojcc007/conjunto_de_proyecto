let runningTotal = 0;
let buffer = "0";
let previosOperator;
const d = document;

const screen = d.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}
function handleSymbol(symbol) {
  switch (symbol) {
    case "AC":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previosOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previosOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
        break;
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
        break;
      }
    case "%":
      buffer = (parseFloat(buffer) / 100).toString();
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
    case ".":
      if (!buffer.includes(".")) {
        buffer += ".";
      }
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }
  const intbuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intbuffer;
  } else {
    flushOperation(intbuffer);
  }
  previosOperator = symbol;
  buffer = "0";
}

function flushOperation(intbuffer) {
  if (previosOperator === "+") {
    runningTotal += intbuffer;
  } else if (previosOperator === "−") {
    runningTotal -= intbuffer;
  } else if (previosOperator === "×") {
    runningTotal *= intbuffer;
  } else if (previosOperator === "÷") {
    runningTotal /= intbuffer;
  }
}
function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}
function init() {
  d.querySelector(".calc-buttons").addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });
}
init();
