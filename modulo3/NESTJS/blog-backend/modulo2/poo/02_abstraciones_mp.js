class ServicioFunerario {
    constructor(nombreDifunto, edad) {
        this.nombreDifunto = nombreDifunto;
        this.edad = edad;
    }
    tipoServicio() {
        if (this.edad >= 70) {
            console.log("Se recomienda un servicio conmemorativo completo.");
        } else {
            console.log("Se recomienda un servicio básico.");
        }
    }
    mostrar() {
        console.log(`Difunto: ${this.nombreDifunto}, Edad: ${this.edad} años`);
    }
}
const servicio1 = new ServicioFunerario("Don José Ramírez", 75);
servicio1.tipoServicio();
servicio1.mostrar();
