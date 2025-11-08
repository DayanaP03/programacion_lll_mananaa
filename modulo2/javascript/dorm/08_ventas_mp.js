const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorServicios');
let servicios = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  const precio = parseFloat(document.getElementById('precio').value.trim());

  if (nombre && descripcion && !isNaN(precio)) {
    const nuevoServicio = { id: Date.now(), nombre, descripcion, precio };
    servicios.push(nuevoServicio);
    mostrarServicio(nuevoServicio);
    formulario.reset();
  }
});

function mostrarServicio({ id, nombre, descripcion, precio }) {
  const div = document.createElement('div');
  div.className = 'servicio';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${nombre}</h3>
    <p>${descripcion}</p>
    <p><strong>Precio: $${precio.toFixed(2)}</strong></p>
    <button class="eliminar">Eliminar</button>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.servicio');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    servicios = servicios.filter(s => s.id !== id);
    tarjeta.remove();
  }
});
