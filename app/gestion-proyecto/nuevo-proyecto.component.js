"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var proyecto_1 = require('./proyecto');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
// let template = require('../inicio/alert-demo.html');
var router_1 = require('@angular/router');
var NuevoProyectoComponent = (function () {
    function NuevoProyectoComponent() {
        this.monedas = ['Dolares', 'Euros',
            'Yen Japonés'];
        this.model = new proyecto_1.Proyecto();
        this.submitted = false;
        this.lenguaje = "";
        this.lenguajeM = false;
        this.active = true;
    }
    NuevoProyectoComponent.prototype.onSubmit = function () {
        this.submitted = true;
        alert("Salvar Proyecto");
    };
    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    NuevoProyectoComponent.prototype.showFormControls = function (form) {
        return form && form.controls['name'] &&
            form.controls['name'].value; // Dr. IQ
    };
    Object.defineProperty(NuevoProyectoComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    NuevoProyectoComponent.prototype.volver = function () {
        this.submitted = false;
        this.limpiar();
    };
    NuevoProyectoComponent.prototype.limpiar = function () {
        var _this = this;
        this.model = new proyecto_1.Proyecto();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    NuevoProyectoComponent.prototype.ngOnInit = function () {
        this.lenguaje = window.navigator.userLanguage || window.navigator.language;
        if (this.lenguaje == "es-Es") {
            this.lenguajeM = true;
        }
    };
    NuevoProyectoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nuevo-proyecto',
            styleUrls: ['./nuevo-proyecto.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.AlertComponent],
            templateUrl: 'nuevo-proyecto.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NuevoProyectoComponent);
    return NuevoProyectoComponent;
}());
exports.NuevoProyectoComponent = NuevoProyectoComponent;
//# sourceMappingURL=nuevo-proyecto.component.js.map