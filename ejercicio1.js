// Ejercicio 1 : Total de un carrito simple

const carrito = [
    { nombre: 'Arroz', precio: 4500, cantidad: 2 },
    { nombre: 'Aceite', precio: 12000, cantidad: 1 },
    { nombre: 'Leche', precio: 3800, cantidad: 3},
];

const total = carrito.reduce(function(acumulador, producto){
    return acumulador + (producto.precio * producto.cantidad);
},0);
console.log(total);


    



        
