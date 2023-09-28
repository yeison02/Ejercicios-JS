/*
PROBLEMAS

    1. Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad (se debe cargar por separado el dia, el mes y el año)
    2. Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del primero con el segundo y a este resultado se lo multiplica por el tercero (tener en cuenta que puede haber tres condiciones simples)
    3. Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, imprimir en la página la leyenda ' Todos los números son menores a diez'.
    4. Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir dos valores enteros x e y.
    5. Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)
    De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe
    a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
    b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
    c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.

*/

//SOLUCION 1

let dia, mes, año;
dia = parseInt(prompt("Ingrese el dia :"));
mes = parseInt(prompt("Ingrese el mes :")); 
año = parseInt(prompt("Ingrese el año :")); 
if ( dia == 24 && mes == 12){
        document.write("Ya es navidad");
    }else{
        if (dia > 24){
            document.write("Ya paso navidad.");
        }else{
            document.write("Aun no es navidad");
        }
    }

//SOLUCION 2

let num1, num2, num3;
num1 = parseInt(prompt("Ingrese el primer numero: "));
num2 = parseInt(prompt("Ingrese el segundo numero: "));
num3 = parseInt(prompt("Ingrese el tercer numero: "));
let suma = (num1 + num2) * num3;
if (num1 == num2 && num1 == num3){
    document.write(suma);
}

//SOLUCION 3

let numero1, numero2, numero3;
numero1 = parseInt(prompt("Ingrese el primer numero: "));
numero2 = parseInt(prompt("Ingrese el segundo numero: "));
numero3 = parseInt(prompt("Ingrese el tercer numero: "));
if(numero1 < 10 && numero2 < 10 && numero3 < 10){
    document.write("Todos los numeros ingresados son menores a 10.");
}

//SOLUCION 4

let x,y;
x = parseInt(prompt("Ingrese la coordenada de x: "));
y = parseInt(prompt("Ingrese la coordenada de y: "));
if (x > 0 && y > 0){
    document.write("La coordenada se encuentra en el 1er cuadrante.");
}else{
    if (x < 0 && y > 0){
    document.write("La coordenada se encuentra en el 2do cuadrante.");
    }else{
        if (x < 0 && y < 0){
            document.write("La coordenada se encuentra en el 3er cuadrante.");
        }else{
            if (x > 0 && y < 0){
                document.write("La coordenada se encuentra en el 4to cuadrante");
            }else{
                document.write("Se encuentra sobre un eje.");
            }
        }
    }
}

//SOLUCION 5

let sueldo, antiguedad;
sueldo = parseInt(prompt("Ingrese su suelo: "));
antiguedad = parseInt(prompt("Ingrese los años de antiguedad en la empresa: "));
porcentaje1 = sueldo * 1.20;
porcentaje2 = sueldo * 1.05;
if (sueldo < 500 && antiguedad >= 10){
    document.write("Obtuviste un aumento del 20%: " +  porcentaje1);
}else{
    if (sueldo < 500 && antiguedad < 10){
        document.write("Obtuviste un aumento del 5%: " + porcentaje2);
    }else{
        if (sueldo >= 500){
            document.write("Sueldo: " + sueldo);
        }
    }

}

