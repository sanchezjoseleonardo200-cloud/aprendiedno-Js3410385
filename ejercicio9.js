
const productos = [
 { nombre: 'A', vendidos: 120 },
 { nombre: 'B', vendidos: 45 },
 { nombre: 'C', vendidos: 200 },
 { nombre: 'D', vendidos: 80 },
 { nombre: 'E', vendidos: 150 }
];

const TOTAL = productos.reduce((acc, producto) => acc + producto.vendidos, 0);

console.log(TOTAL)