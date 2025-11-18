export class Libro {
    public titulo: string;
    private cota: string | null = null;
    protected dni: string = '258456468554659';
    private idGeneric: string = crypto.randomUUID(); // genera un id único

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    generarCota(): void {
        this.cota = new Date().toISOString();
    }

    getCota(): string | null {
        return this.cota;
    }

    getAtributes(): any {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        };
    }
}
