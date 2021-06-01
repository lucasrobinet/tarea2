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
var Basic = /** @class */ (function (_super) {
    __extends(Basic, _super);
    function Basic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Basic.prototype.tipo = function () {
        return "Basic";
    };
    Basic.prototype.duracion = function () {
        return 30;
    };
    Basic.prototype.anuncios = function () {
        return "No";
    };
    Basic.prototype.precio = function () {
        return 3;
    };
    Basic.prototype.descargas = function () {
        return "No";
    };
    return Basic;
}(clasePadre_1["default"]));
exports["default"] = Basic;
