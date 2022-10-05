// 10. Realiza una aplicación que nos pida un número de ventas a introducir, después
// nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
// que no.

//numero de ventas
//ventas indicadas
//suma de  las ventas

let numeroVentas = prompt("Indique numero de ventas")
let c = 0

for (let i = 1; i <= numeroVentas; i++) {
    let ventas = parseInt(prompt("Introduzca el precio de la venta"))

    c += ventas
}
console.log("el precio total de las ventas es....",
    c)