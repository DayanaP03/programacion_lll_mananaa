class ServicioFunerario {
    constructor(nombre, tipoServicio) {
        this.nombre = nombre;
        this.tipoServicio = tipoServicio;
    }
    iniciar() {
        console.log(`${this.nombre} ha iniciado el servicio de ${this.tipoServicio}.`);
    }
    realizar() {
        console.log(`El servicio de ${this.tipoServicio} está en proceso.`);
    }
    finalizar() {
        console.log(`El servicio de ${this.tipoServicio} ha finalizado con respeto y cuidado.`);
    }
}
const servicio = new ServicioFunerario('Funeraria “Paz Eterna”', 'cremación');
servicio.iniciar();
servicio.realizar();
servicio.finalizar();
