var edadDifunto = 75;
var nombreDifunto = "Carlos Pérez";
var servicioActivo = true;
var costoServicio = 850.50;
if (edadDifunto > 60 && servicioActivo) {
    console.log('Servicio funerario activo para adulto mayor.');
}
else {
    console.log('Servicio pendiente de activación.');
}
var arreglosFlorales = ['Rosas Blancas', 'Lirios', 'Claveles'];
for (var i = 0; i < arreglosFlorales.length; i++) {
    console.log(arreglosFlorales[i]);
}
var EstadoServicio;
(function (EstadoServicio) {
    EstadoServicio[EstadoServicio["Pendiente"] = 0] = "Pendiente";
    EstadoServicio[EstadoServicio["EnPreparacion"] = 1] = "EnPreparacion";
    EstadoServicio[EstadoServicio["Finalizado"] = 2] = "Finalizado";
})(EstadoServicio || (EstadoServicio = {}));
console.log(EstadoServicio);
console.log(EstadoServicio.EnPreparacion);
