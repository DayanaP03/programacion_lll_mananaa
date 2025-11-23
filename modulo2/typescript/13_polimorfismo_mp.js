"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioFunerario = void 0;
// ServicioFunerario.ts
var ServicioFunerario = /** @class */ (function () {
    function ServicioFunerario(nombreDifunto, tipoServicio) {
        this.nombreDifunto = nombreDifunto;
        this.tipoServicio = tipoServicio;
    }
    ServicioFunerario.prototype.procesar = function () {
        console.log("Procesando servicio funerario general...");
    };
    return ServicioFunerario;
}());
exports.ServicioFunerario = ServicioFunerario;
