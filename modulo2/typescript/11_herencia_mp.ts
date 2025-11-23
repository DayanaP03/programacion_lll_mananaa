export class ServicioFunerario {
    public nombreDifunto: string;
    public tipoServicio: string;

    constructor(
        nombreDifunto: string,
        tipoServicio: string
    ) {
        this.nombreDifunto = nombreDifunto;
        this.tipoServicio = tipoServicio;
    }

    registrar(): void {
        console.log(`Servicio registrado para: ${this.nombreDifunto}`);
    }
}

export class ServicioPremium extends ServicioFunerario {

}
