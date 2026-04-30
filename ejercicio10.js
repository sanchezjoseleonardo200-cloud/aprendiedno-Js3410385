
const pagos = [
 { metodo: 'tarjeta', monto: 50000 },
 { metodo: 'efectivo', monto: 20000 },
 { metodo: 'tarjeta', monto: 75000 },
 { metodo: 'pse', monto: 100000 },
 { metodo: 'efectivo', monto: 15000 }
];
const Resultado = pagos.reduce(function(acc, pago) {
    acc[pago.metodo] =  (acc[pago.metodo] || 0) + pago.monto;
    return acc;

},);
console.log(Resultado);