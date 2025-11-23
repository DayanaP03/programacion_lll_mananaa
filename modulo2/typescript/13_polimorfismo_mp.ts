// ServicioFunerario.ts
export class ServicioFunerario {
    public nombreDifunto: string;
    public tipoServicio: string;

    constructor(nombreDifunto: string, tipoServicio: string) {
        this.nombreDifunto = nombreDifunto;
        this.tipoServicio = tipoServicio;
    }

    procesar(): void {
        console.log("Procesando servicio funerario general...");
    }
}
