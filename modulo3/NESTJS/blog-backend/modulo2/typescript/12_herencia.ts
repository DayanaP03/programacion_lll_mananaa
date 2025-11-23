import { Vechiculo , Moto } from "./11_herencia";
const miCarro = new Vechiculo ('TOYOTA', 'SENDAR');
console.log (miCarro.marca);
console.log(miCarro.tipo);
miCarro.moverse();



const miMotociclista =
    new Moto ('HONDA', 'ALTA CILINDRADA');
console.log (miMotociclista.marca);
console.log (miMotociclista.tipo);
miMotociclista.moverse();
