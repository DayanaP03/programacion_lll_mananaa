let parrafo = null;

document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "🕯️ En memoria eterna de quienes siempre vivirán en nuestros corazones.";
    document.getElementById('contenedor').appendChild(parrafo);
});

document.getElementById('eliminar').addEventListener('click', () => {
    if (parrafo) parrafo.remove();
});

function saludar() {
    alert("🙏 Bienvenido a Eterna Memoria, donde el recuerdo perdura para siempre.");
}

document.getElementById('parrafo')
    .addEventListener('dblclick', () => {
        alert("🌹 Gracias por rendir homenaje a la memoria de sus seres queridos.");
    });

document.getElementById('nombre')
    .addEventListener('input', (e) => {
        console.log("🕊️ Escribiendo nombre:", e.target.value);
    });
