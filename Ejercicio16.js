/*
PROBLEMAS

    1. Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos.
    2. Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.
    3. Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva de hasta 5 dígitos.
    4. Elaborar una función que reciba tres enteros y retorne el promedio.
    5. Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

*/

//SOLUCION 1

/*function numeroMayor(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else {
    if (num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }
}

let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let num3 = parseInt(prompt("Ingrese el tercer numero: "));
document.write("Los tres valores ingresados son: " + num1 + " ," + num2 + ", " + num3 + "<br>");

let mayor = numeroMayor(num1, num2, num3);
document.write("El numero mayor de los tres valores es: " + mayor);*/

//SOLUCION 2

function perimetroCuadrado (x){
    let peri = x * 4;
    return peri;

}
 let x = parseInt(prompt("Ingrese el lado del cuadrado: "));
 let perimetro = perimetroCuadrado(x);
 document.write("El perimetro del cuadrado es: " + perimetro);