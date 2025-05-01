let usuario="Jab";
let productoComprado=1;
const DESCUENTO=0.1;
let precioDescuento;
const productos=[{
    producto:"Pantalón",
    precio:10,
    talla:"m",
    imagen:"pantalon.jpg"
  },{
    producto:"Gorra",
    precio:5,
    talla:"s",
    imagen:"gorra.jpg"
  }
];
document.querySelector('body').innerHTML=`
<h1>${usuario}</h1>
<section class="caja">
<div>
Nombre del producto ${productos[productoComprado].producto}<br>
$${productos[productoComprado].precio}
</div>
<div>
Talla: TALLA
</div>
<img src="img/IMAGEN" alt="PRODUCTO">
</section>`
