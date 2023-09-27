/* 
PROBLEMAS

    1. Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.
    2. Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.
    3. Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.
    4. De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
    Nivel superior: Porcentaje>=90%.
    Nivel medio: Porcentaje>=75% y <90%.
    Nivel regular: Porcentaje>=50% y <75%.
    Fuera de nivel: Porcentaje<50%.
*/

//SOLUCION 1

let num1,num2,num3;
num1 = parseInt(prompt("Ingrese el primer numero: "));
num2 = parseInt(prompt("Ingrese el segundo numero: "));
num3 = parseInt(prompt("Ingrese el tercer numero: "));
if (num1 > num2){
    document.write("El numero mayor es: " + num1);
}else{
    if (num2 > num3){
        document.write("El numero mayor es: " + num2);
    }else{
        document.write("El numero mayor es: " + num3);
    }
}

//SOLUCION 2

let valor;
valor = parseInt(prompt("Ingrese un valor entero: "));
if (valor == 0){
    document.write("El numero es cero");
}else{
    if (valor < 0){
        document.write("El numero es negativo");
    }else{
        document.write("El numero es positivo");
    }
}

//SOLUCION 3

let num;
num = parseInt(prompt("Ingrese un numero entero de hasta 3 cifras: "));
if (num > 99){
    document.write("El numero tiene 3 cifras.");
}else{
    if (num < 10){
        document.write("El numero tiene 1 cifras.");
    }else{
        document.write("El numero tiene 2 cifra.");
    }
}

//SOLUCION 4

let nombre;
let cantidadp;
let respuestas;
nombre = prompt("Ingrese su nombre: ");
cantidadp = parseInt(prompt("Ingrese el total de preguntas que se le realizaron: "));
respuestas = parseInt(prompt("Ingrese el total de preguntas que contesto correctamente: "));
document.write("Nombre: " + nombre);
document.write("<br>");
let promedio = (respuestas / cantidadp) * 100;
if (promedio < 50) {
    document.write("Fuera de nivel.");
}else{
    if (promedio <= 75){
        document.write("Nivel Regular.");
    }else{
        if (promedio >= 90){
            document.write("Nivel superior.");
        }else{
            document.write("Nivel medio.");
        }
    }
}