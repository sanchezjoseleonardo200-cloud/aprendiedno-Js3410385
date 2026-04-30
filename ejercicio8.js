

 
  const Catalogo = [ 
  { nombre: 'Mouse', precio: 45000 }, 
  { nombre: 'Teclado', precio: 120000 }, 
  { nombre: 'Audífonos', precio: 85000 } 
];
 const masCaro = Catalogo.reduce(function(acumulador, producto) {
  return producto.precio > acumulador.precio ? producto : acumulador;
});

console.log(masCaro);