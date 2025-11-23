"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioPremium = exports.ServicioFunerario = void 0;
var ServicioFunerario = /** @class */ (function () {
    function ServicioFunerario(nombreDifunto, tipoServicio) {
        this.nombreDifunto = nombreDifunto;
        this.tipoServicio = tipoServicio;
    }
    ServicioFunerario.prototype.registrar = function () {
        console.log("Servicio registrado para: ".concat(this.nombreDifunto));
    };
    return ServicioFunerario;
}());
exports.ServicioFunerario = ServicioFunerario;
var ServicioPremium = /** @class */ (function (_super) {
    __extends(ServicioPremium, _super);
    function ServicioPremium() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ServicioPremium;
}(ServicioFunerario));
exports.ServicioPremium = ServicioPremium;
