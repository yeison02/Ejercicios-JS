/*
PROBLEMA

    1. Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menores a 10, imprimir en la página la leyenda 'Alguno de los números es menor a diez'.

*/ 

//SOLUCION

let num1, num2, num3;
num1 = parseInt(prompt("Ingrese el primer numero: "));
num2 = parseInt(prompt("Ingrese el segundo numero: "));
num3 = parseInt(prompt("Ingrese el tercer numero: "));
if (num1 < 10 || num2 < 10 || num3 < 10){
    document.write("Alguno de los valores es menor a 10.");
}