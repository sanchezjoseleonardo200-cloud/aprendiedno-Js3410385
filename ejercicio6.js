
//Alerta de productos agotados 
const inventario = [ 
  { nombre: 'Pan', stock: 12 }, 
  { nombre: 'Café', stock: 0 }, 
  { nombre: 'Azúcar', stock: 5 } 
];
const hayAgotados = inventario.some(function(producto) {
  return producto.stock === 0;
});

console.log(hayAgotados);