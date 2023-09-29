/*
PROBLEMAS

    1. Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.

*/

let palabra;

palabra = prompt("Ingrese alguna de esta palabras (casa, mesa, perro, gato)");
switch (palabra){
    case 'casa':
        document.write("House");
        break;
    case 'mesa':
        document.write("Table");
        break;
    case 'perro':
        document.write("Dog");
        break;
    case 'gato':
        document.write('Cat');
        break;
    default:
        document.write("Solo se pueden traducir las palabras (casa, mesa, perro, gato)");
        break;
}