/*
PROBLEMAS

    1. Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
    a) De cada triángulo la medida de su base, su altura y su superficie.
    b) La cantidad de triángulos cuya superficie es mayor a 12.
    2. Desarrollar un programa que solicite la carga de 10 números e imprima la suma de lo últimos 5 valores ingresados.
    3. Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).
    4. Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
    Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36. 
    5. Realizar un programa que lea los lados de 4 triángulos, e informar:
    a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
    b) Cantidad de triángulos de cada tipo.
    c) Tipo de triángulo del que hay menor cantidad.
    6. Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.
    7. Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
    a) La cantidad de valores negativos ingresados.
    b) La cantidad de valores positivos ingresados.
    c) La cantidad de múltiplos de 15.
    d) El valor acumulado de los números ingresados que son pares.
    8. Se cuenta con la siguiente información:
    Las edades de 5 estudiantes del turno mañana.
    Las edades de 6 estudiantes del turno tarde.
    Las edades de 11 estudiantes del turno noche.
    Las edades de cada estudiante deben ingresarse por teclado.
    a) Obtener el promedio de las edades de cada turno (tres promedios).
    b) Imprimir dichos promedios (promedio de cada turno).
    c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.
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

//SOLUCION 5

let cant1 = 0;
let cant2 = 0;
let cant3 = 0;

for (let o = 1; o <= 4; o++) {
  let lado1 = parseInt(prompt("Ingrese el primer lado: "));
  let lado2 = parseInt(prompt("Ingrese el segundo lado: "));
  let lado3 = parseInt(prompt("Ingrese el tercer lado: "));
  if (lado1 == lado2 && lado1 == lado3) {
    document.write("El triangulo es equilatero. <br>");
    cant1++;
  } else {
    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
      document.write("El triangulo es isoseles.<br>");
      cant2++;
    } else {
      document.write("El triangulo es escaleno.<br>");
      cant3++;
    }
  }
}
document.write("<br>");
document.write("Cantidad de triángulos equiláteros:" + cant1 + "<br>");
document.write("Cantidad de triángulos isósceles:" + cant2 + "<br>");
document.write("Cantidad de triángulos escalenos:" + cant3 + "<br>");
if (cant1 < cant2 && cant1 < cant3) {
  document.write("Se ingresaron menos triángulos equiláteros");
} else {
  if (cant2 < cant3) {
    document.write("Se ingresaron menos triángulos isósceles");
  } else {
    document.write("Se ingresaron menos triángulos escalenos");
  }
}

//SOLUCION 6

let cuad1 = 0;
let cuad2 = 0;
let cuad3 = 0;
let cuad4 = 0;
let cant = parseInt(prompt("Cuantos puntos procesará:"));
cant = parseInt(cant);
for (let f = 1; f <= cant; f++) {
  let x = parseInt(prompt("Ingrese coordenada x:"));
  let y = parseInt(prompt("Ingrese coordenada y:"));
  if (x > 0 && y > 0) {
    cuad1++;
  } else {
    if (x < 0 && y > 0) {
      cuad2++;
    } else {
      if (x < 0 && y < 0) {
        cuad3++;
      } else {
        if (x > 0 && y < 0) {
          cuad4++;
        }
      }
    }
  }
}
document.write(
  "Cantidad de puntos ingresados en el primer cuadrante:" + cuad1 + "<br>"
);
document.write(
  "Cantidad de puntos ingresados en el segundo cuadrante:" + cuad2 + "<br>"
);
document.write(
  "Cantidad de puntos ingresados en el tercer cuadrante:" + cuad3 + "<br>"
);
document.write(
  "Cantidad de puntos ingresados en el cuarto cuadrante:" + cuad4 + "<br>"
);

//SOLUCION 7

let nega = 0;
let posi = 0;
let multi = 0;
let sumapar = 0;
for (let q = 1; q <= 10; q++) {
  let valor = parseInt(prompt("Ingrese valores enteros: "));
  if (valor < 0) {
    nega++;
  } else if (valor > 0) {
    posi++;
  }
  if (valor % 15 == 0 && valor != 0) {
    multi++;
  }
  if (valor % 2 == 0) {
    sumapar = sumapar + valor;
  }
}

document.write("Cantidad de valores negativos:" + nega + "<br>");
document.write("Cantidad de valores positivos:" + posi + "<br>");
document.write("Cantidad de múltiplos de 15:" + multi + "<br>");
document.write("Suma de los valores pares ingresados:" + sumapar + "<br>");

//SOLUCION 8

let mañana = 0
for (let ñ = 1; ñ <= 5; ñ++){
  let edad = parseInt(prompt("Edades de estudiantes turno mañana: "));
  mañana = mañana + edad;
}

let tarde = 0
for (let ñ = 1; ñ <= 6; ñ++){
  let edad = parseInt(prompt("Edades de estudiantes turno tarde: "));
  tarde = tarde + edad;
}

let noche = 0
for (let ñ = 1; ñ <= 11; ñ++){
  let edad = parseInt(prompt("Edades de estudiantes turno noche: "));
  noche = noche + edad;
}
let pro1 = mañana / 5;
let pro2 = tarde / 6;
let pro3 = noche / 11;
document.write("Promedio de las edades turno mañana: " + pro1 + "<br>");
document.write("Promedio de las edades turno tarde: " + pro2 + "<br>");
document.write("Promedio de las edades turno noche: " + pro3 + "<br>");

if (pro1 > pro2 && pro1 > pro3){
  document.write("El turno de la mañana tiene mayor promedio en edades.");
}else{
  if(pro1 < pro2 && pro2 > pro3){
    document.write("El turno de la tarde tiene mayor promedio de edades.")
  }else{
    document.write("El turno de la noche tiene mayor promedio de edades.")
  }
}
