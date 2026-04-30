const caRRito = [
 { nombre: 'Pan', precio: 3000, cantidad: 2 },
 { nombre: 'Queso', precio: 8500, cantidad: 1 }
];
const reSUltado = caRRito.map(function(producto) {
    return producto.nombre + " x " + producto.cantidad + "=" + (producto.precio * producto.cantidad);
});

console.log(reSUltado);