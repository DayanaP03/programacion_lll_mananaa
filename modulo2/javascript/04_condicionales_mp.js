
document.write("<h2>CONDICIONALES EN UNA FUNERARIA 🕊️</h2>");

let presupuesto = 950; 
let mensaje = "";

if (presupuesto >= 1200) {
    mensaje = "💎 Servicio Premium: incluye ataúd de lujo, velatorio y cremación.";
} else if (presupuesto >= 800) {
    mensaje = "⚜️ Servicio Estándar: incluye ataúd de madera y cremación básica.";
} else if (presupuesto >= 500) {
    mensaje = "🌿 Servicio Económico: incluye ataúd sencillo y traslado local.";
} else {
    mensaje = "❌ Presupuesto insuficiente. Consulte opciones de financiamiento o asesoría.";
}

// Mostrar resultado dentro del div
document.getElementById("resultado").innerHTML = `
    <p><strong>Presupuesto del cliente:</strong> $${presupuesto}</p>
    <p><strong>Resultado:</strong> ${mensaje}</p>
`;
