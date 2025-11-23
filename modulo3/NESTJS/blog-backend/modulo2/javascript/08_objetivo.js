console.log("OBJETOS");
let persona ={
    nombre:"Ana",
    edad:28,
    cuidad :"Quito"
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.cuidad);
console.log(persona["edad"]);
console.log("Modificar de una clave  del objeto");
persona.nombre="Maria"
console.log(persona);
console.log("Imncluir clave del obtejo");
persona.direccion="Av Occidental";
console.log(persona);
console.log("Eliminar clave del objeto");
delete persona.direccion
console.log(persona);

console.log("Recorrer un objeto");
for (let clave in persona){
    console.log(clave);
}

console.log("Mostrar clave con object.keys")
console.log(Object.keys(persona));
console.log("Mostrar valores con object.values")
console.log(Object.values(persona));

console.log("Obtjetos animados");
let estudiante ={
    nombre:"Pedro",
    apellido: "Tixi",
    contacto :{
        correo: "pedro@gmail.com",
        telefono: "0998765432",
        celular: "1121121116"

    },
    materias: [
        {
            nombre: "MProgrmacion",
            calificacion: 9
        },
        {
            nombre: "Base de datos",
            calificacion: 8
        },

    ]

};
console.log("Estudiante: ", estudiante);



