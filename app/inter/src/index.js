let user = "frank";
let purchasedProduct = 1;
const designatedDiscount = 0.1;
let discountedPrice;
const products = [
  {
    product: "Pantalón",
    price: 10,
    size: "m",
    image: "pantalon.jpg"
  },
  {
    product: "Gorra",
    price: 5,
    size: "s",
    image: "gorra.jpg"
  }
];

const appliedDiscount = () => {
  return products[purchasedProduct].price * designatedDiscount;
};

const finalPrice = () => {
  let discount = products[purchasedProduct].price * designatedDiscount;
  return products[purchasedProduct].price - discount;
};

document.querySelector('body').innerHTML = `
<header>
  <h1>${user}</h1>
</header>
<main>
  <article class="product-box">
    <header>
      <h2>${products[purchasedProduct].product}</h2>
      <p class="precio">Precio: ${products[purchasedProduct].price}$</p>
    </header>
    <section class="detalles">
      <p><strong>Talla:</strong> ${products[purchasedProduct].size.toUpperCase()}</p>
      <p>Descuento: ${appliedDiscount()}$</p>
      <p><strong>Precio final:</strong> ${finalPrice()}$</p>
    </section>
    <figure>
      <img src="src/img/${products[purchasedProduct].image}" alt="Imagen de ${products[purchasedProduct].product}">
      <figcaption>Imagen del producto: ${products[purchasedProduct].product}</figcaption>
    </figure>
  </article>
</main>
`;

