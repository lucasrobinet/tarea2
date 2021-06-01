"use strict";
exports.__esModule = true;
var Membresias = /** @class */ (function () {
    function Membresias() {
    }
    Membresias.prototype.detalles = function () {
        console.log('Detalles de la suscripcion: ');
        console.log('Tipo : ' + this.tipo());
        console.log('Duracion : ' + this.duracion() + ' ' + 'Dias');
        console.log('Anuncios : ' + this.anuncios());
        console.log('Precio : $' + this.precio());
        console.log('Descargas ' + this.descargas());
    };
    return Membresias;
}());
exports["default"] = Membresias;
