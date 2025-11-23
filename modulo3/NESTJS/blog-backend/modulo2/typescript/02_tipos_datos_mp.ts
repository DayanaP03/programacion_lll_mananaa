let edadDifunto: number = 75;
let nombreDifunto: string = "Carlos Pérez";
let servicioActivo: boolean = true;
let costoServicio: any = 850.50;

if (edadDifunto > 60 && servicioActivo) {
    console.log('Servicio funerario activo para adulto mayor.');
} else {
    console.log('Servicio pendiente de activación.');
}

let arreglosFlorales: string[] = ['Rosas Blancas', 'Lirios', 'Claveles'];
for (let i = 0; i < arreglosFlorales.length; i++) {
    console.log(arreglosFlorales[i]);
}

enum EstadoServicio {
    Pendiente,
    EnPreparacion,
    Finalizado
}

console.log(EstadoServicio);
console.log(EstadoServicio.EnPreparacion);
