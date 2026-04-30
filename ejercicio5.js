
const pedidoA = [{ id: 1, cantidad: 2 }, { id: 2, cantidad: 1 }];
const pedidoB = [{ id: 1, cantidad: 2 }, { id: 2, cantidad: 0 }];

const validarPedido = function(pedido) {
  return pedido.every(function(producto) {
    return producto.cantidad > 0;
  });
};

console.log(validarPedido(pedidoA));
console.log(validarPedido(pedidoB));