
//Perfil de usuario
//Escribe un programa que le pida al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacena la información y luego muéstrala en la consola. Ten en cuenta que la salida de las películas debe agregar un pequeño mensaje como: 'La película {film} es una de mis favoritas'.

let nombreUsuario = prompt("¿Cuál es tu nombre de usuario?"); //Pedir el nombre del usuario

let edad = prompt("¿Cuántos años tienes?"); //Pedir la edad del usuario

let peliculasFavoritas = prompt("Escribe una lista de tus películas favoritas, separadas por comas"); //Pedir las películas favoritas del usuario

let listaPeliculas = peliculasFavoritas.split(","); //Convertir la lista de películas en un array

//Mostrar la información almacenada
console.log("Nombre de usuario: " + nombreUsuario); 
console.log("Edad: " + edad + " años");
console.log("Películas favoritas:");
listaPeliculas.forEach(function(pelicula) {
    console.log("La película " + pelicula.trim() + " es una de mis favoritas");
});


//Número más alto
//Escribe un programa que pida 10 números. Utilizando operadores lógicos y cualquier otra función/estructura de javascript que hayas visto antes, determina y genera el mayor de esos números.

let numeros = []; //Crear una lista para almacenar los números

for (let i = 0; i < 10; i++) { // Pedir 10 números al usuario y guardarlos en la lista
    let numero = prompt("Escribe un número (" + (i + 1) + " de 10):");
    
    numeros.push(Number(numero)); // Convertir el número ingresado usamos (number) a tipo número y guardarlo en la lista
}


let numeroMasAlto = numeros[0]; // Iniciamos una variable para el número más alto

// Recorrer la lista de números para encontrar el más alto
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasAlto) {
        numeroMasAlto = numeros[i];
    }
}

// Mostrar el número más alto
console.log("El número más alto es: " + numeroMasAlto);




//Alarma
//Escribe un programa que le pida al usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.

//Ejemplo de resultado: "Hora de dormir después de 10 segundos".


//Pedir la cantidad de segundos al usuario
let segundos = prompt("¿Cuántos segundos deben pasar hasta que suene la alarma?");

//Pedir el mensaje que se mostrará con la alarma
let mensaje = prompt("¿Qué mensaje quieres ver cuando suene la alarma?");

//Convertir los segundos a un número
segundos = Number(segundos) * 1000; // Convertimos segundos a milisegundos

//Esperar los segundos indicados y luego mostrar el mensaje
setTimeout(function() {  // usamos la funcion magica (setTimeout) que espera los segundos q ue pedimos
        alert(mensaje); //y para mostrar el mensaje usamos (alert)
}, segundos);


//Palíndromo
//Escribe un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignora la puntuación, los espacios y las letras mayúsculas.

//Pedir la palabra u oración al usuario
let entrada = prompt("Escribe una palabra u oración:");

// Preparar la palabra u oración para convertir a minúsculas y eliminar espacios y puntuación
let textoLimpio = entrada.toLowerCase().replace(/[^a-z0-9]/g, '');

// Verificar si la oracion que ingresa el usuario es un palíndromo- Invertir el texto limpio
let textoReverso = textoLimpio.split('').reverse().join('');

// Se Compara el texto limpio con el texto inverso
if (textoLimpio === textoReverso) {
    console.log("Es un palíndromo");
} else {
    console.log("No es un palíndromo");
}


//Factorial
//Escribe un programa que solicite un número entero n. Donde 1 <= n. Resuélvelo mediante recursión.


//Pedir un número entero al usuario
let n = prompt("Escribe un número entero mayor o igual a 1:");

// Convertir el número ingresado a un entero
n = parseInt(n);

//función recursiva para calcular el factorial
function factorial(num) {
    //si num es 1, el factorial es 1
    if (num === 1) {
        return 1;
    }
    //recursivo: num multiplicado por el factorial de num - 1
    return num * factorial(num - 1);
}

// Calcular el factorial del número ingresado
let resultado = factorial(n);

//Mostrar el resultado en consola
console.log("El factorial de " + n + " es: " + resultado);



//Matriz plana
//Escribe un programa que tome la siguiente matriz anidada y la aplane (la convierta en una matriz unidimensional). Utiliza cualquier tipo de algoritmo que quieras, como devoluciones de llamadas, recursión, etc.

//let multiDimension = [1, [2, 3, [4, 5, [6]]]];

//Definir la matriz anidada
let multiDimension = [1, [2, 3, [4, 5, [6]]]];

//Crear una función recursiva para aplanar la matriz
function aplanar(matriz) {
    let resultado = [];

    matriz.forEach(function(elemento) {
        if (Array.isArray(elemento)) {
            // Si el elemento es un arreglo, llama a la función recursiva y concatena el resultado
            resultado = resultado.concat(aplanar(elemento));
        } else {
            // Si el elemento no es un arreglo, lo agrega al resultado
            resultado.push(elemento);
        }
    });

    return resultado;
}

//Llamar a la función y mostrar el resultado
let matrizAplanada = aplanar(multiDimension);
console.log(matrizAplanada);






