const boton = document.getElementById('agregar');

boton.addEventListener('click', () => {
    const texto = document.getElementById('servicio').value;
    if (texto.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = texto;
        document.getElementById('listaServicios').appendChild(li);
        document.getElementById('servicio').value = '';
    }
});
