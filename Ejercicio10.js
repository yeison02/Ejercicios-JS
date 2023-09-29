/* X = Contador/Variable que se incrementa o decrementa con valores constantes duurante la ejecucion del programa.
   La variable X debe estar inicializada con algun valor antes de que se ejecute la operación  x = x + 1.

PROBLEMAS 1
1 - Imprimir los números del 1 al 500.
2 - Imprimir los números del 50 al 100.
3 - Imprimir los números del -50 al 0.
4 - Imprimir los números del 2 al 100 pero de 2 en 2 (2,4,6,8 ....100).*/


//SOLUCION PROBLEMA (1) PUNTO 1

let x = 1;
while (x <= 500){
document.write(x);
document.write("<br>");
x = x + 1;
}

//SOLUCION PROBLEMA (1) PUNTO 2

let y = 50;
while(y <= 100 ){
    document.write(y);
    document.write("<br>");
    y = y + 1;
}

//SOLUCION PROBLEMA (1) PUNTO 3

let z = -50;
while(z <= 0){
    document.write(z);
    document.write("<br>");
    z = z + 1;
}

//SOLUCION PROBLEMA (1) PUNTO 4

let h = 2;
while(h <= 100){
    document.write(h);
    document.write("<br>");
    h = h + 2;
}

/*PROBLEMA 2

    1. Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado).
    2. Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc.*/

//SOLUCION PROBLEMA (2) PUNTO 1

let serie = 11;
let t = 1;
while(t <= 25){
    document.write(serie);
    document.write("<br>");
    t = t + 1;
    serie = serie + 11;
}

//SOLUCION PROBLEMA (2) PUNTO 1

let w = 8;
while(w <= 500){
    document.write(w);
    document.write("<br>");
    w = w + 8;
}

