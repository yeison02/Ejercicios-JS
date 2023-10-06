/*
PROBLEMAS

    Realizar un programa que acumule (sume) valores ingresados por teclado hasta ingresa el 9999 (no sumar dicho valor, solamente indica que ha finalizado la carga). Imprimir el valor acumulado e informar si dicho valor es cero, mayor a cero o menor a cero.
    En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
    Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
    a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:

    Estado de la cuenta	'Acreedor' si el saldo es >0.
    			'Deudor' si el saldo es <0.
    			'Nulo' si el saldo es =0.

    b) La suma total de los saldos acreedores.
    Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo. De cada una de las personas censadas se tiene la siguiente información: número de documento, edad y sexo ('femenino' o 'masculino')
    Se pide confeccionar un programa que lea los datos de cada persona censada (para finalizar ingresar el valor cero en el número de documento) e informar:

     
    a)	Cantidad total de personas censadas.
    b)	Cantidad de varones.
    c)	Cantidad de mujeres.
    d)	Cantidad de varones cuya edad varía entre 16 y 65 años.

*/

//SOLUCION 1

let valor;
let suma = 0;
do {
  valor = parseInt(prompt("Ingrese un valor (9999 para finalizar)"));
  if (valor != 9999) {
    suma = suma + valor;
  }
} while (valor != 9999);
document.write("Valor acumulado total:" + suma);
document.write("<br>");
if (suma > 0) {
  document.write("El valor acumulado es mayor a cero");
} else {
  if (suma == 0) {
    document.write("El valor acumulado es cero");
  } else {
    document.write("El valor acumulado es menor a cero");
  }
}

//SOLUCION 2

let numero;
let nombre;
let saldo = 0;
let saldoacre = 0;
do {
    numero = parseInt(prompt('Ingrese el numero de cuenta:'));
    if (numero >= 0) {
        nombre = prompt('Nombre del cliente:');
        saldo = parseFloat(prompt('Saldo actual:'));
        if (saldo > 0) {
            saldoacre = saldoacre + saldo;
            document.write(nombre + ' tiene saldo acreedor<br>');
        } else {
            if (saldo < 0) {
                document.write(nombre + ' tiene saldo deudor<br>');
            } else {
                document.write(nombre + ' tiene saldo nulo<br>');
            }
        }

    }
} while (numero > 0);
document.write('Suma total de saldos acreedores:' + saldoacre);

//SOLUCION 3

let documento;
let edad;
let totalpersonas = 0;
let cantvarones = 0;
let cantmujeres = 0;
let cantvaronesg = 0;
do {
    documento = parseInt(prompt('Ingrese el numero de documento (0 para finalizar):'));
    if (documento > 0) {
        edad = parseInt(prompt('Ingrese la edad:'));
        sexo = prompt('Ingrese el sexo (masculino/femenino):');
        if (sexo == 'masculino') {
            cantvarones = cantvarones + 1;
            if (edad >= 16 && edad <= 65) {
                cantvaronesg = cantvaronesg + 1;
            }
        }
        if (sexo == 'femenino') {
            cantmujeres = cantmujeres + 1;
        }
        totalpersonas = totalpersonas + 1;
    }
} while (documento != 0);
document.write('Total de personas censadas: ' + totalpersonas + '<br>');
document.write('Cantidad de varones: ' + cantvarones + '<br>');
document.write('Cantidad de mujeres: ' + cantmujeres + '<br>');
document.write('Cantidad de varones entre 16 y 65 años: ' + cantvaronesg + '<br>');


