const productos = [
  { nombre: "Ataúd de madera", descripcion: "Clásico barnizado", precio: 450, existencia: 5, ubicacion: "Sala A" },
  { nombre: "Urna crematoria", descripcion: "Diseño elegante", precio: 120, existencia: 10, ubicacion: "Sala B" },
  { nombre: "Arreglo floral", descripcion: "Blanco y dorado", precio: 80, existencia: 15, ubicacion: "Florería" },
  { nombre: "Servicio de velación", descripcion: "Incluye sala y café", precio: 300, existencia: 2, ubicacion: "Sala principal" }
];

const tabla = document.getElementById('cuerpoTabla');

productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
