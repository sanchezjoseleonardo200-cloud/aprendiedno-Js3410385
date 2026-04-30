//Descuento por cantidad
const Carrito = [ 
  { nombre: 'Vaso', precio: 2000, cantidad: 10 }, 
  { nombre: 'Plato', precio: 5000, cantidad: 3 } 
];
const Total = Carrito.reduce(function(acc, producto) {

  const subtotal = producto.precio * producto.cantidad;

  const descuento = (producto.cantidad > 5) * 0.15;

  return acc + (subtotal - subtotal * descuento);

}, 0);

console.log(Total);