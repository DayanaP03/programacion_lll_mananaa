export class ServicioFunerario {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarServicio(): void {
        console.log(`El servicio funerario "${this.nombre}" tiene un costo de $${this.precio}.`);
    }
}
