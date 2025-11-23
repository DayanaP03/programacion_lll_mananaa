export class ServicioFunerario {
    public nombreDifunto: string;
    public tipoServicio: string;

    private fechaRegistro: string | null = null;
    private cota: string | null = null;

    protected rucFuneraria: string = "1792547893001";
    private idServicio: string = crypto.randomUUID();

    constructor(nombreDifunto: string, tipoServicio: string) {
        this.nombreDifunto = nombreDifunto;
        this.tipoServicio = tipoServicio;
    }

    generarCota(): void {
        this.cota = "COTA-" + new Date().getTime();
        this.fechaRegistro = new Date().toISOString();
    }

    getCota(): string | null {
        return this.cota;
    }

    getAtributos(): any {
        return {
            nombreDifunto: this.nombreDifunto,
            tipoServicio: this.tipoServicio,
            fechaRegistro: this.fechaRegistro,
            cota: this.cota,
            id: this.idServicio
        };
    }
}
