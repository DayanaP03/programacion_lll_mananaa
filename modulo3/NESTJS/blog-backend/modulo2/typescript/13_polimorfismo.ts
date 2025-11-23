import { Vechiculo } from "./11_herencia";

export class Camion extends Vechiculo{
    getCapacidadCarga(): void{
        console.log('Cargas pesadas');

    }
}
const miCamion=
    new Camion('Bulk','CARGAMENTO')
    