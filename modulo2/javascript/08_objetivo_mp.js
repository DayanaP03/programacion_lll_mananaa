console.log("=== OBJETOS EN UNA FUNERARIA 🕊️ ===");


let funeraria = {
    nombre: "Eterna Memoria",
    ciudad: "Quito",
    servicios: ["Ataúd de madera", "Cremación", "Traslado"],
    precioBase: 850
};

console.log("Nombre:", funeraria.nombre);
console.log("Ciudad:", funeraria.ciudad);
console.log("Servicios ofrecidos:", funeraria.servicios);

funeraria.precioBase = 950;
console.log("Nuevo precio base:", funeraria.precioBase);

funeraria.contacto = "0991234567";
console.log("Contacto agregado:", funeraria.contacto);


delete funeraria.ciudad;
console.log("Objeto después de eliminar 'ciudad':", funeraria);


console.log("\n🔹 Claves del objeto funeraria:");
for (let clave in funeraria) {
    console.log(clave);
}

// Mostrar valores
console.log("\n🔹 Valores del objeto funeraria:");
console.log(Object.values(funeraria));
