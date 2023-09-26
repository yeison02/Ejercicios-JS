
/*PROBLEMAS

    1. Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del mismo (El perímetro de un cuadrado se calcula multiplicando el valor del lado por cuatro)
    2. Escribir un programa en el cual se ingresen cuatro números, calcular e informar la suma de los dos primeros y el producto del tercero y el cuarto.
    3. Realizar un programa que lea cuatro valores numéricos e informar su suma y producto.
    4. Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.)*/

    //SOLUCION 1

   let lado;
   lado = parseInt(prompt("Ingrese el lado del cuadrado: "));
   let perimetro = (lado) * 4;
   document.write("El perimetro del cuadrado es: ");
   document.write(perimetro);

   //SOLUCION 2

   let nume1, nume2, nume3, nume4;
   nume1 = parseInt(prompt("Ingrese el primer numero: "));
   nume2 = parseInt(prompt("Ingrese el segundo numero: "));
   nume3 = parseInt(prompt("Ingrese el tercer numero: "));
   nume4 = parseInt(prompt("Ingrese el cuarto numero: "));
   let suma1 = (num1 + num2);
   let producto1 = (num3 * num4);
   document.write("La suma de los dos primeros numeros es: " + suma1);
   document.write("<br>");
   document.write("El producto de los dos ultimos numeros es: " + producto1);

   //SOLUCION 3

   let num1, num2, num3, num4;
   num1 = parseInt(prompt("Ingrese el primer numero: "));
   num2 = parseInt(prompt("Ingrese el segundo numero: "));
   num3 = parseInt(prompt("Ingrese el tercer numero: "));
   num4 = parseInt(prompt("Ingrese el cuarto numero: "));
   let suma = (num1 + num2 + num3 + num4);
   let producto = (num1 * num2 * num3 * num4);
   document.write("La suma es: " + suma);
   document.write("<br>");
   document.write("El producto es: " + producto);

   //SOLUCION 4

   let precio;
   let cantidad;
   precio = parseInt(prompt("Ingrese el precio del articulo: "));
   cantidad = parseInt(prompt("Ingrese la cantidad de articulos que va a llevar: "));
   let total = (precio * cantidad);
   document.write("El precio total a pagar por los articulos es: " + total);

