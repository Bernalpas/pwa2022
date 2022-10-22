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
console.log('Bienvenidos a TSC');
var importar_1 = require("./importar");
//1. Varibles
var nombre = 'Berni';
var persona = 25;
var ganar = false;
console.log("".concat(nombre, " - ").concat(persona, " - ").concat(ganar));
//Objetos de TS
var Persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'CABA',
    damedireccion: function () {
        console.log("Mi direcci\u00F3n es ".concat(Persona.ciudad));
    }
};
//Agrego info faltante
Persona.provincia = 'Córdoba';
console.table(Persona);
console.log(Persona.damedireccion());
// Arreglos y Arrays
var habilidades = ['Cocinar', 'Cantar'];
habilidades.push('Jugar');
for (var i = 0; i < habilidades.length; i++) {
    console.log(habilidades[i]);
}
//Funciones
function Sumar(a, b) {
    return a * b;
}
var resultado = Sumar(1, 2);
console.log("el resultado es ".concat(resultado));
//Flecha
var flecha = function (a, b) {
    return a + b;
};
var resultadoflecha = flecha(1, 2);
console.log("el resultado es ".concat(resultadoflecha));
//Clases
var clima = 'cálido';
var Juan = new importar_1.Empleado('Juan', 5);
Juan.imprimirNombre();
Juan.imprimirEdad();
console.log(importar_1.Empleado.apodo);
console.log(Math.PI);
// Otra forma de crear una clase 
var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Alumno;
}());
var Lucas = new Alumno('Lucas', 20);
var Jefe = /** @class */ (function (_super) {
    __extends(Jefe, _super);
    function Jefe(nombre, edad, cargo) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.cargo = cargo;
        return _this;
    }
    Jefe.prototype.controlPresupuesto = function () {
        console.log("Mi edad es ".concat(this.edad));
    };
    return Jefe;
}(importar_1.Empleado));
var Santi = new Jefe('Santi', 20, 'Administador');
console.log(Juan);
console.log(Lucas);
console.log(Santi);
