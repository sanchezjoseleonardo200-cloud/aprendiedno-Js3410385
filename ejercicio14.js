const pedidos = [ 
 { id: 1, estado: 'pendiente' },
 { id: 2, estado: 'entregado' },
 { id: 3, estado: 'pendiente' },
 { id: 4, estado: 'cancelado' },
 { id: 5, estado: 'en_proceso' },
 { id: 6, estado: 'entregado' }
];
const Resultado = pedidos.reduce(function(acc, pedido) {
  acc[pedido.estado] = (acc[pedido.estado] || 0) + 1;
  
  return acc;
},{})

console.log(resultado)