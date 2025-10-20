console.log("VARIABLES");

// String
let saludo = "Hola utilizando variables";
console.log("Variable Saludo:", saludo);
console.log("Tipo de variable:", typeof(saludo));

// Número
let numero = 256;
console.log("Variable Numero:", numero);
console.log("Tipo de variable:", typeof(numero));

// Boolean
let booleana = true;
console.log("Variable Booleana:", booleana);
console.log("Tipo de variable:", typeof(booleana));

// Undefined
let indefinida = undefined;
console.log("Variable Indefinida:", indefinida);
console.log("Tipo de variable:", typeof(indefinida));

// Null
let nula = null;
console.log("Variable Nula:", nula);
console.log("Tipo de variable:", typeof(nula)); // devuelve "object" por una curiosidad del lenguaje

// BigInt
let bigentero = 8765675675785463654n;
console.log("Variable BigEntero:", bigentero);
console.log("Tipo de variable:", typeof(bigentero));

// Objeto
let objeto = {
    nombre: "Dayana",
    edad: 30
};
console.log("Variable Objeto:", objeto);
console.log("Tipo de variable:", typeof(objeto));

// Arreglo
let numeros = [12, 12, 22, 34, 4, 4];
console.log("Variable Arreglo:", numeros);
console.log("Tipo de variable:", typeof(numeros)); // "object", los arrays también son objetos
