/*
PROBLEMAS

    1. Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.
    2. Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.
    3. En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.
    4. Realizar un programa que imprima 20 términos de la serie 5 - 10 - 15 - 20, etc. (No se ingresan valores por teclado)
    5. Mostrar los múltiplos de 10 hasta el valor 1500.
    Debe aparecer en pantalla 10 - 20 -30 etc.
    6. Realizar un programa que permita cargar dos listas de 3 valores cada una. Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
    Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.
    7. Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
    Emplear el operador "%" en la condición de la estructura condicional.

    	if (valor%2==0)

    El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0; 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.

*/

//SOLUCION 1


let conta = 0;
let mayor = 0;
let menor = 0;
while(conta < 10){
    let nota = parseInt(prompt("Ingrese la nota: "));
    if (nota >= 7){
        mayor = mayor + 1;
    }else if(nota < 7){
        menor = menor + 1;
    }
    conta = conta + 1;
}

document.write("Notas mayores a 7: " + mayor);
document.write("<br>");
document.write("Notas menores a 7: " + menor);

//SOLUCION 2

let c = 0;
let suma = 0;
while(c < 5){
    let altura = parseInt(prompt("Ingrese su altura en centimetros: "));
    suma = suma + altura;
    c = c + 1;
}
let promedio = suma / 5;
document.write("La altura promedio es de: " + promedio);

//SOLUCION 3

let y = 0;
let emp1 = 0;
let emp2 = 0;
let sueldo;
let total = 0;
while (y < 5){
    sueldo = parseInt(prompt("Ingrese su sueldo: "));
    if (sueldo <= 300){
        emp1 = emp1 + 1;
    }else {
        emp2 = emp2 + 1;
 }
     total = total + sueldo;
     y = y + 1;
}
document.write("Empleados que cobran entre 100 y 300: " + emp1) ;
document.write("<br>");
document.write("Empleados que cobran mas de 300: " + emp2);
document.write("<br>");
document.write("Total de sueldos: " + total);

//SOLUCION 4

 let p = 0;
 let serie = 5
 while(p < 20){
    document.write(serie);
    document.write("<br>");
    p = p + 1;
    serie = serie + 5;
 }

//SOLUICIOM 5

let l = 0;
let multiplos = 10;
while(l < 150){
    document.write(multiplos);
    document.write("<br>");
    l = l + 1;
    multiplos = multiplos + 10;
}


//SOLUCION 6


let total1 = 0;
let x = 0;
let nro;
while (x < 3) {
    nro = parseInt(prompt('Ingrese valor de la primer lista:'));
    total1 = total1 + nro;
    x = x + 1;
}
let total2 = 0;
x = 0;
while (x < 3) {
    nro = parseInt(prompt('Ingrese valor de la segunda lista:', ''));
    total2 = total2 + nro;
    x = x + 1;
}
if (total1 > total1) {
    document.write('Tiene mayor valor la lista1');
} else {
    if (total1 < total2) {
        document.write('Tiene mayor valor la lista2');
    } else {
        document.write('Tienen el mismo valor acumulado las dos listas');
    }
}


//SOLUCION 7

let pares = 0;
let impares = 0;
let contador = 0;
while(contador < 5){
     let valor = parseInt(prompt("Ingrese un valor"));
    if (valor %2 == 0){
        pares = pares + 1;
    }else if (valor %2 == 1){
        impares = impares + 1;
    }
    contador = contador + 1 ;
}

document.write(`Números pares: ` + pares);
document.write("<br>");
document.write(`Números impares: ` + impares);


