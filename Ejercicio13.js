/*
PROBLEMAS

    1. Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
    a) De cada triángulo la medida de su base, su altura y su superficie.
    b) La cantidad de triángulos cuya superficie es mayor a 12.
    2. Desarrollar un programa que solicite la carga de 10 números e imprima la suma de lo últimos 5 valores ingresados.
    3. Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).
    4. Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
    Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36. 
*/

//SOLUCION 1

let conta1 = 0;
for (let f = 1; f <= 3; f++) {
  let base = parseInt(prompt("Ingrese la base:"));
  let altura = parseInt(prompt("Ingrese la altura:"));
  let superficie = (base * altura) / 2;
  if (superficie > 12) {
    conta1++;
  }
  document.write("Triángulo nro:" + f + "<br>");
  document.write("Base:" + base + "<br>");
  document.write("Altura:" + altura + "<br>");
  document.write("Superficie:" + superficie + "<br>");
}
document.write("Cantidad de triángulos con superficie mayor a 12:" + conta1);

//SOLUCION 2

let cont = 0;
for (let h = 1; h <= 10; h ++){
  let num = parseInt(prompt("Ingrese un numero: "));
  if(h > 5){
cont=cont+num;
  }
}
document.write("La suma de los ultimos 5 numeros ingresados es: " + cont);

//SOLUCION 3 

let mult = 5;
for (let i = 1; i <= 10; i++){
  document.write(mult + "<br>");
  mult = mult + 5;
}

//SOLUCION 4

let valor = parseInt(prompt("Ingrese un  numnero del 1 al 10: "));
let con = valor;
for (let j = 1; j <=12; j++){
  document.write(con + "<br>")
  con = con + valor;
}