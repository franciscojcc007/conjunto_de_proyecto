const d = document
d.querySelector(".btn_generate").addEventListener("click",generateTable)

function generateTable () {
  const value = parseInt(d.getElementById('value').value)
  const resultTable = d.getElementById('resultTable')
  resultTable.innerHTML = ''; 

  const fragment = d.createDocumentFragment()

  for (let i = 1; i <= 12; i++) {
    const result = value * i
    const row = d.createElement("tr")
    row.innerHTML = `
      <td>${value}</td>
      <td>${i}</td>
      <td>${value} x ${i} = ${result}</td>
      `
    fragment.appendChild(row)
  }

  resultTable.appendChild(fragment)
}