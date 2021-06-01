"use strict";
exports.__esModule = true;
var Usuarios = /** @class */ (function () {
    function Usuarios() {
    }
    //setters
    Usuarios.prototype.setId = function (id) {
        this.id = id;
    };
    Usuarios.prototype.setFirstName = function (fname) {
        this.firstName = fname;
    };
    Usuarios.prototype.setLastName = function (lname) {
        this.lastName = lname;
    };
    Usuarios.prototype.setSuscripcion = function (sub) {
        this.suscripcion = sub;
    };
    //getters
    Usuarios.prototype.getId = function () {
        return this.id;
    };
    Usuarios.prototype.getFirstName = function () {
        return this.firstName;
    };
    Usuarios.prototype.getLastName = function () {
        return this.lastName;
    };
    Usuarios.prototype.getSuscripcion = function () {
        return this.suscripcion;
    };
    return Usuarios;
}());
exports["default"] = Usuarios;
