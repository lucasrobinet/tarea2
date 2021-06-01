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
exports.__esModule = true;
var clasePadre_1 = require("./clasePadre");
var Premium = /** @class */ (function (_super) {
    __extends(Premium, _super);
    function Premium() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Premium.prototype.tipo = function () {
        return "Premium";
    };
    Premium.prototype.duracion = function () {
        return 30;
    };
    Premium.prototype.anuncios = function () {
        return "No";
    };
    Premium.prototype.precio = function () {
        return 9;
    };
    Premium.prototype.descargas = function () {
        return "Si";
    };
    return Premium;
}(clasePadre_1["default"]));
exports["default"] = Premium;
