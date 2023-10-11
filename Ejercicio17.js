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

/*let fecha;
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
}*/


//SOLUCION 2

  function retornarDiaSemana(dia) {
    switch (dia) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Lunes';
        case 2:
            return 'Martes';
        case 3:
            return 'Miércoles';
        case 4:
            return 'Jueves';
        case 5:
            return 'Viernes';
        case 6:
            return 'Sábado';
        default:
            return 'día inválido';
    }
}

function retornarMes(mes) {
    switch (mes) {
        case 0:
            return 'Enero';
        case 1:
            return 'Febrero';
        case 2:
            return 'Marzo';
        case 3:
            return 'Abril';
        case 4:
            return 'Mayo';
        case 5:
            return 'Junio';
        case 6:
            return 'Julio';
        case 7:
            return 'Agosto';
        case 8:
            return 'Septiembre';
        case 9:
            return 'Octubre';
        case 10:
            return 'Noviembre';
        case 11:
            return 'Diciembre';
        default:
            return 'mes inválido';
    }
}


function retornarFecha() {
    let fecha = new Date();
    let string = 'Hoy es ' + retornarDiaSemana(fecha.getDay()) + ' ' + fecha.getDate() + ' de ' +
        retornarMes(fecha.getMonth()) + ' de ' + fecha.getFullYear();
    return string;
}

document.write(retornarFecha());