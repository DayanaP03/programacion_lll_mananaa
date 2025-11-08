class Servicio {
    constructor(nombre) {
        this.nombre = nombre;
    }
    realizarServicio() {
        console.log("Se está realizando un servicio funerario general.");
    }
}
class ServicioPremium extends Servicio {}
const servicioBasico = new Servicio("Servicio Básico");
const servicioEspecial = new ServicioPremium("Servicio Premium");
servicioBasico.realizarServicio();
servicioEspecial.realizarServicio();
