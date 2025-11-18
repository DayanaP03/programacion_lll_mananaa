console.log("=== FUNCIÓN EN UNA FUNERARIA 🕊️ ===");

function calcularServicioFunerario(precioAtaud, precioCremacion) {
    let total = precioAtaud + precioCremacion;
    return `El total del servicio funerario (ataúd + cremación) es: $${total}`;
}

// Llamar a la función
let resultado = calcularServicioFunerario(850, 300);
console.log(resultado);
