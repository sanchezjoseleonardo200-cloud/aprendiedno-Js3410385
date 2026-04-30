//Datos de prueba:
const proDUctos = [
 { nombre: 'Manzana', categoria: 'Frutas' },
 { nombre: 'Zanahoria', categoria: 'Verduras' },
 { nombre: 'Pera', categoria: 'Frutas' },
 { nombre: 'Lechuga', categoria: 'Verduras' }
];
const REsultado = proDUctos.reduce(function(acc, proDUctos) {
    acc[proDUctos.categoria] = acc[proDUctos.categoria] || [];
    acc[proDUctos.categoria].push(proDUctos);
    return acc;
}, {})

console.log(REsultado)