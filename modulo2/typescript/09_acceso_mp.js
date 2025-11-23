"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioFunerario = void 0;
var ServicioFunerario = /** @class */ (function () {
    function ServicioFunerario(nombreDifunto, tipoServicio) {
        this.fechaRegistro = null;
        this.cota = null;
        this.rucFuneraria = "1792547893001";
        this.idServicio = crypto.randomUUID();
        this.nombreDifunto = nombreDifunto;
        this.tipoServicio = tipoServicio;
    }
    ServicioFunerario.prototype.generarCota = function () {
        this.cota = "COTA-" + new Date().getTime();
        this.fechaRegistro = new Date().toISOString();
    };
    ServicioFunerario.prototype.getCota = function () {
        return this.cota;
    };
    ServicioFunerario.prototype.getAtributos = function () {
        return {
            nombreDifunto: this.nombreDifunto,
            tipoServicio: this.tipoServicio,
            fechaRegistro: this.fechaRegistro,
            cota: this.cota,
            id: this.idServicio
        };
    };
    return ServicioFunerario;
}());
exports.ServicioFunerario = ServicioFunerario;
