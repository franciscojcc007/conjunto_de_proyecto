const generarTabla = () => {
  const valor = parseInt(document.getElementById("valor").value);
  const tablaResultado = document.getElementById("tablaResultado");
  tablaResultado.innerHTML = ""; 

  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 12; i++) {
    const resultado = valor * i;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${valor}</td>
      <td>${i}</td>
      <td>${valor} x ${i} = ${resultado}</td>
      `;
    fragment.appendChild(row);
  }

  tablaResultado.appendChild(fragment);
};