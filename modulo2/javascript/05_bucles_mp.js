console.log("=== BUCLES EN UNA FUNERARIA 🕊️ ===");

let servicios = [
    { nombre: "Ataúd de madera", precio: 800 },
    { nombre: "Cremación básica", precio: 350 },
    { nombre: "Arreglo floral", precio: 150 },
    { nombre: "Traslado del cuerpo", precio: 200 },
    { nombre: "Velatorio", precio: 400 }
];


console.log("\n📜 Lista de servicios disponibles:");
for (let i = 0; i < servicios.length; i++) {
    console.log(`${i + 1}. ${servicios[i].nombre} - $${servicios[i].precio}`);
}
let total = 0;
for (let i = 0; i < servicios.length; i++) {
    total += servicios[i].precio;
}
console.log("\n💰 Total del servicio completo:", total);

// 💵 Aplicar descuentos con while
let descuento = 0;
let contador = 0;
while (contador < servicios.length) {
    descuento += servicios[contador].precio * 0.05; // 5% por cada servicio
    contador++;
}
console.log("🕊️ Descuento total aplicado (5% por servicio):", descuento.toFixed(2));

// 🔁 Mostrar los nombres de los servicios con un bucle for...of
console.log("\n⚜️ Servicios incluidos:");
for (let servicio of servicios) {
    console.log("🪦", servicio.nombre);
}

// 🔢 Mostrar la tabla del 5 como ejemplo (simulando facturación)
console.log("\n📊 Tabla de pagos en 5 cuotas:");
for (let i = 1; i <= 5; i++) {
    console.log(`Cuota ${i}: $${(total / 5).toFixed(2)}`);
}

// 🧾 Resultado final
let totalFinal = total - descuento;
console.log("\n✅ Total final a pagar con descuento:", totalFinal.toFixed(2));
console.log("\n=== FIN DEL PROCESO FUNERARIO ===");
