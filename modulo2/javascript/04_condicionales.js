let temperatura= 35;

if (temperatura>30){
    console.log ("Hace Calor");
}




let password="pass123";
if(password==="pass12345"){
    console.log("Usuario logueado");

}else{
    console.log("Acceso denegado ");
}



let nota=7;
if(nota=>9){
    console.log("Sobresalistes");
        

}else if (nota>=6){
    console.log("Aprovado");
}else{
    consoles.log("Reprobado");
}


edad=18;
tiene_licencia=true;
if(edad>=18){
    if(tiene_licencia0){
        console.log("Puede Concducir");
    }else{
        console.log("Necesitta Licncia para conducir");
    }
} else {
    console.log("Es menor de edad");

}


//Estructura Switch

let dia ="lunes";

switch(dia){
    case "lunes":
        console.log("Iinicio de semana");
        break;
    case"viernes":
        console.log("Ultimo dia Laboral");
        break;
    default: //si no es ningun de esos dos casos no hace nada 
        console-log("Dia Normal");

}


//3 variaables y definir cual es el mayor de esos 3

let a=30;
let b=40;
let c=50;

mayor=0;
if(a<b){
    mayor=a;

}if (c> mayor ){
    mayor=c;
}
consoles.log("el nuemro mayorr es", mayor);
