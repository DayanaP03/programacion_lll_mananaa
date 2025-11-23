"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioFunerario = void 0;
var ServicioFunerario = /** @class */ (function () {
    function ServicioFunerario(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    ServicioFunerario.prototype.mostrarServicio = function () {
        console.log("El servicio funerario \"".concat(this.nombre, "\" tiene un costo de $").concat(this.precio, "."));
    };
    return ServicioFunerario;
}());
exports.ServicioFunerario = ServicioFunerario;
