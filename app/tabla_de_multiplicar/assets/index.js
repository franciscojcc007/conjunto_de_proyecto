const d = document;

const generarTabla = () => {
  const valor = parseInt(d.getElementById("valor").value);
  const tablaResultado = d.getElementById("tablaResultado");
  tablaResultado.innerHTML = ""; 

  const fragment = d.createDocumentFragment();

  for (let i = 1; i <= 12; i++) {
    const resultado = valor * i;
    const row = d.createElement("tr");
    row.innerHTML = `
      <td>${valor}</td>
      <td>${i}</td>
      <td>${valor} x ${i} = ${resultado}</td>
      `;
    fragment.appendChild(row);
  }

  tablaResultado.appendChild(fragment);
};