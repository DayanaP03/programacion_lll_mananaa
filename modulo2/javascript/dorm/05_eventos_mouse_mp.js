const caja = document.getElementById('caja');

// Cambia color al pasar el mouse
caja.addEventListener('mouseover', () => {
    caja.style.background = 'gold';
    caja.textContent = "🌹 Recordando con amor...";
});

// Vuelve al color original al salir
caja.addEventListener('mouseout', () => {
    caja.style.background = 'gray';
    caja.textContent = "SALA DE RECUERDOS";
});

// Click en la caja
caja.addEventListener('click', () => {
    alert('🕯️ Gracias por visitar la Sala de Recuerdos.');
});

// Área táctil (para pantallas táctiles)
const areaTouch = document.getElementById('areaTouch');

areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background = 'navy';
    areaTouch.textContent = "📖 Enviando mensaje de condolencia...";
});

areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background = 'green';
    areaTouch.textContent = "ÁREA DE CONTACTO 🕊️";
});

areaTouch.addEventListener('click', () => {
    alert('🙏 Gracias por enviar su mensaje a Eterna Memoria.');
});
