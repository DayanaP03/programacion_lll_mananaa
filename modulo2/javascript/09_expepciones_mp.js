console.log("=== MANEJO DE ERRORES EN UNA FUNERARIA 🕊️ ===");

try {
    console.log("Intentando acceder al ataúd reservado...");
    console.log(ataudReservado); 
} catch (error) {
    console.log("⚠️ Error detectado:", error.message);
}

try {
    console.log("\nProcesando servicio funerario...");
    throw new Error("Servicio no disponible en este momento");
} catch (error) {
    console.log("💀 Mensaje de error:", error.message);
} finally {
    console.log("✅ Finalizando intento de procesar el servicio funerario");
}
