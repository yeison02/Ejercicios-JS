/*
PROBLEMA

1. Confeccionar una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:

4 5 6 7 8 9 10 
*/

//SOLUCION 1

function cargaEntero() {
  let menor = parseInt(prompt("Ingrese primero el entero menor: "));
  let mayor = parseInt(prompt("Ingrese el entero mayor: "));
  for (let i = menor; i <= mayor; i++) {
    document.write(i + "<br>");
  }
}

cargaEntero();
