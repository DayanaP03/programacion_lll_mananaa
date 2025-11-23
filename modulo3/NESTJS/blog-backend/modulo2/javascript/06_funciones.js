console.log("FUNCIONES");

console.log("FORMA CLASICA");
function saludar(){
    console.log("Hola desde una funcion clasica");
}
saludar();



console.log("FORMA CON PARAMETRO Y RETORNOS");
function sumar (a,b){
    return a+b
}
let resultado = suma(4,9);
console.log ("la suma es" , resultado);



console.log("FUNCION FLACHA");
const resta= (a,b)=>{
    return a-b
}
let resultadoResta= resta(9,5);
console.log ("la resta es" , resultadoResta);


console.log("FUNCION RETORNO DIRECTO");
const cuadrado= x =>x*x;
console.log ("el cuadrado es 5:" , cuadrado(5));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludar (nombre, saludo="Hola"){
    return saludo+" "+nombre;
}



