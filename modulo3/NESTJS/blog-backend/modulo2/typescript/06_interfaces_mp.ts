import { ServicioFunerario } from "./05_interfaces_mp";

const servicio1: ServicioFunerario = {
    id: 1,
    nombre: "Servicio Económico"
};

const servicio2: ServicioFunerario = {
    id: 2,
    nombre: "Servicio Premium",
    tipoServicio: "Incluye carroza, flores y música en vivo"
};


console.log(servicio1);
console.log(servicio1.id);
console.log(servicio1.nombre);
console.log(servicio1.tipoServicio);

console.log(servicio2);
console.log(servicio2.id);
console.log(servicio2.nombre);
console.log(servicio2.tipoServicio);
