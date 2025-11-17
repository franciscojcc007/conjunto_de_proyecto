'use strict';

const fahrenheitInput = document.getElementById('fahrenheit-input');
const resultOutput = document.getElementById('result-output');
const converterForm = document.getElementById('converter-form');

const convertToCelsius = (fahr) => {
  const scaleAdjustment = 32;
  const carryEquivalentToFahr = 5 / 9;
  return (fahr - scaleAdjustment) * carryEquivalentToFahr;
};

const renderResult = (text, subtitle) => {
  resultOutput.innerHTML = `${text}<span>${subtitle}</span>`;
};

const handleConversion = (event) => {
  event.preventDefault();
  const fahrValue = Number.parseFloat(fahrenheitInput.value);

  if (Number.isNaN(fahrValue)) {
    renderResult('—', 'Introduce un número válido');
    return;
  }

  const celsiusValue = convertToCelsius(fahrValue);
  renderResult(
    `${celsiusValue.toFixed(1)} °C`,
    `Equivalente para ${fahrValue.toFixed(1)} °F`
  );
};

converterForm.addEventListener('submit', handleConversion);

fahrenheitInput.focus();
