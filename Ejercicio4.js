/*PROBLEMAS

1.Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio debemos operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
    Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado a entero podemos hacer:
    nota1=prompt('Ingrese primer nota:','');
    nota1=parseInt(nota1);

    O en forma más corta:
    nota1=parseInt(prompt('Ingrese primer nota:',''));
    
2. Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales (tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos utilizar el operador ==) */

//SOLUCION 1

let nota1, nota2, nota3;
nota1 = parseInt(prompt("Ingrese la primer nota; "));
nota2 = parseInt(prompt("Ingrese la segunda nota: "));
nota3 = parseInt(prompt("Ingrese la tercer nota: "));
let promedio = (nota1 + nota2 + nota3) / 3;
if (promedio >= 7){
    document.write("Promocionado");
}

//SOLUCION 2

let clave1, clave2;
clave1 = prompt("Ingrese una clave: ");
clave2 = prompt("Ingrese de nuevo la clave: ");
if (clave1 == clave2){
    document.write("Las claves son iguales");
}
