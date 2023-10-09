/*
PROBLEMAS

    1. Elaborar una función a la cual le enviemos tres enteros y muestre el menor.
    2. Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.

*/

//SOLUCION 1

function mostrarMenor(valor1, valor2, valor3) {
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
  mostrarMenor(valor1, valor2, valor3);

//SOLUCION 2

function numerosOrdenados(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    document.write(num1 + " ");
    if (num2 < num3) {
      document.write(num2 + " " + num3);
    } else {
      document.write(num3 + " " + num2);
    }
  } else {
    if (num2 < num3) {
      document.write(num2 + " ");
      if (num1 < num3) {
        document.write(num1 + " " + num3);
      } else {
        document.write(num3 + " " + num1);
      }
    } else {
      document.write(num3 + " ");
      if (num1 < num2) {
        document.write(num1 + " " + num2);
      } else {
        document.write(num2 + " " + num1);
      }
    }
  }
}

let val1 = parseInt(prompt("Ingrese el pimer valor: "));
let val2 = parseInt(prompt("Ingrese el segundo valor: "));
let val3 = parseInt(prompt("Ingrese el tercer valor: "));

numerosOrdenados(val1, val2, val3);
