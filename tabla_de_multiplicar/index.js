
function generarTabla() {
  const valor = parseInt(document.getElementById("valor").value);
  document.getElementById("tablaResultado").innerHTML = "";

  for (let i = 1; i <= 12; i++) {
    const resultado = valor * i;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${valor}</td>
      <td>${i}</td>
      <td>${valor} x ${i} = ${resultado}</td>
      `;
    document.getElementById("tablaResultado").appendChild(row);
  }
}
