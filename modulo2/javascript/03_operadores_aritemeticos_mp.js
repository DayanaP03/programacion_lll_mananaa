// OPERADORES EN UNA FUNERARIA 🕊️

let precioAtaud = 850;      
let precioCremacion = 300;
let descuento = 0.10;         
let iva = 0.15;              

let subtotal = precioAtaud + precioCremacion;
let montoDescuento = subtotal * descuento;
let totalSinIva = subtotal - montoDescuento;
let totalConIva = totalSinIva + (totalSinIva * iva);

let servicioPremium = totalConIva > 1000 && descuento <= 0.10;

// Mostramos en la página
let resultado = `
    <h2>Resumen del Servicio Funerario 🕊️</h2>
    <p><strong>Precio del ataúd:</strong> $${precioAtaud}</p>
    <p><strong>Precio de la cremación:</strong> $${precioCremacion}</p>
    <p><strong>Subtotal:</strong> $${subtotal}</p>
    <p><strong>Descuento (10%):</strong> -$${montoDescuento.toFixed(2)}</p>
    <p><strong>Total sin IVA:</strong> $${totalSinIva.toFixed(2)}</p>
    <p><strong>Total con IVA (15%):</strong> $${totalConIva.toFixed(2)}</p>
    <hr>
    <p><strong>¿El total supera los $1000?</strong> ${totalConIva > 1000}</p>
    <p><strong>¿Descuento mayor a $50?</strong> ${montoDescuento > 50}</p>
    <p><strong>¿Servicio Premium?</strong> ${servicioPremium}</p>
`;

document.getElementById("resultado").innerHTML = resultado;
