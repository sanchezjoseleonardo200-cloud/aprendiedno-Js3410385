//Datos de prueba:
const ventas = [450000, 620000, 300000, 510000, 790000, 680000, 400000];

const promedio = Math.round(
    ventas.reduce(function(acumulador, venta) {
        return acumulador + venta;
}, 0) / ventas.lenght
);
console.log(ventas)