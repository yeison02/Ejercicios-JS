/*PROBLEMAS

    1. Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.
    2. Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje 'regular', sino 'reprobado'.
    3. Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando si el número tiene uno o dos dígitos (recordar de convertir a entero con parseInt para preguntar posteriormente por una variable entera). Tener en cuenta qué condición debe cumplirse para tener dos dígitos un número entero.*/

//SOLUICION 1

let num1, num2;
num1 = parseInt(prompt("Ingrese el primer numero: "));
num2 = parseInt(prompt("Ingrese el segundo numero: "));
let suma = (num1 + num2);
let diferencia = (num1 - num2);
let producto = (num1 * num2);
let división = (num1 / num2);
if (num1 > num2){
    document.write("La suma es: " +  suma);
    document.write("<br>");
    document.write("La diferencia es: " + diferencia);
}else{
    document.write("El producto es: " + producto);
    document.write("<br>");
    document.write("La division del primer numero respecto al segundo es: " + división);
}

//SOLUCION 2

let nota1, nota2, nota3;
nota1 = parseInt(prompt("Ingrese la primer nota: "));
nota2 = parseInt(prompt("Ingrese la segunda nota: "));
nota3 = parseInt(prompt("Ingrese la tercer nota: "));
let promedio = (nota1 + nota2 + nota3) / 3;
if (promedio >= 4){
    document.write("Aprobado");
}else{
    document.write("Reprobado");
}

//SOLUCION 3

let numero;
numero = parseInt(prompt("Ingrese un numero del 1 al 99: "));
if (numero < 10){
    document.write("El numero ingresado tiene 1 digito");
}else{
    document.write("El numero ingresado tiene 2 digitos");
}