const container = document.getElementById("pikachu");
const button = document.getElementById("duplicateBtn");

button.addEventListener("click", () => {
  const currentWidth = container.offsetWidth;
  const currentHeight = container.offsetHeight;

  //  Duplicar el tamaño del contenedor
  //  container.style.width = currentWidth * 2 + "px";
  container.style.height = currentHeight + 128 + "px";
});
