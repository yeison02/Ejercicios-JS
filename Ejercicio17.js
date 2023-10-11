/*
PROBLEMAS

    1. Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes.
    2. Confeccionar una función que nos retorne un string con el siguiente formato:

    Hoy es Lunes 9 de Agosto de 2021

    Para poder recuperar el día de la semana debemos llamar al método:

    int diaSemana=fecha.getDay();

    El método getDay() devuelve el día de la semana de la fecha especificada, siendo 0 (Domingo) el primer día.

*/

//SOLUCION 1

let fecha;
fecha = new Date();
let mes = fecha.getMonth();
if (mes < 4) {
  document.write("Nos encontramos en el primer cuatrimestre del año");
} else {
  if (mes < 8) {
    document.write("Nos encontramos en el segundo cuatrimestre del año");
  } else {
    document.write("Nos encontramos en el tercer cuatrimestre del año");
  }
}
