/*
PROBLEMAS

    1. Elaborar una función a la cual le enviemos tres enteros y muestre el menor.
    2. Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.

*/

//SOLUCION 1

function entero(valor1, valor2, valor3) {
  if (valor1 < valor2 && valor1 < valor3) {
    document.write("El numero menor es: " + valor1);
  } else {
    if (valor2 < valor3) {
      document.write("El numero menor es: " + valor2);
    } else {
      document.write("El numero menor es: " + valor3);
    }
  }
}

let valor1 = parseInt(prompt("Ingrese el pimer valor: "));
let valor2 = parseInt(prompt("Ingrese el segundo valor: "));
let valor3 = parseInt(prompt("Ingrese el tercer valor: "));
entero(valor1, valor2, valor3);
