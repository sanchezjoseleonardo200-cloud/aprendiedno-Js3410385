// Ejercicio 2 : Aplicar IVA  a un catalogo

const catalogo = [
    { id: 1, nombre: 'Silla', precio: 150000},
    { id: 2, nombre: 'Mesa', precio: 350000 }
];

const nuevocatalogo = catalogo.map(function(prodcuto)  {
    return {
        ...prodcuto,
        precioConIva: prodcuto.precio * 1.19
 };
});
console.log(nuevocatalogo);






