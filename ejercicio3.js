// . Saludo a clientes VIP

const clientes = [ 
  { nombre: 'Ana', totalCompras: 1500000 }, 
  { nombre: 'Luis', totalCompras: 800000 }, 
  { nombre: 'Marta', totalCompras: 2300000 } 
];

const resultado = clientes
  .filter(function(cliente) {
    return cliente.totalCompras > 1000000;
  })
  .map(function(cliente) {
    return "Hola " + cliente.nombre + ", gracias por ser cliente VIP";
  });

console.log(resultado);


