console.log("ARRAYS O ARREGLOS")
let numeros=[ 10,5,26,9];
let arrayVacio = new Array();
let arrayVacio2 = [];


console.log("acceso  alos elemtos del array");
console.log(numero[0]);
console.log(numero[3]);


console.log("modificar elemento deñ array");
numeros[10]=100;
console.log(numero);


console.log("agregar elelemtos al array");
numeros.push(500);
console.log(numeros);

console.log("agregar el elemento al inicio de array");
numeros.unshift(888);
console.log(numeros);

console.log("eliminar el ultimo elemtento del array");
numeros.pop();
console.log(numeros);

console.log("eliminar el primir elemento del array");
numeros.shift();
console.log(numero);

console.log("Interacion de array del array");
let indice=0
while(indice<numeros.length){
    console.log("valor", indice,"es", numeros [indice]);
    indice++;

}

console.log("Interacion con For ... of");
for (let valor of numeros){
    console.log(valor);

}

console.log("Interacion con For Each")
numeros.forEach(function(valor, indice){
    console.log (indice, valor );
});


