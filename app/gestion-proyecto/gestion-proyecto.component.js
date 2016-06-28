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
var listar_proyectos_servise_1 = require('./listar-proyectos.servise');
var GestionProyectoComponent = (function () {
    function GestionProyectoComponent(listarProyectos) {
        this.listarProyectos = listarProyectos;
        this.proyectos = [];
    }
    GestionProyectoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.listarProyectos.getProyectos());
        this.listarProyectos.getProyectos().then(function (proyectos) { return _this.proyectos = proyectos.slice(1, 5); });
        console.log(this.proyectos);
    };
    GestionProyectoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mod-gestion',
            templateUrl: 'gestion-proyecto.component.html',
            providers: [listar_proyectos_servise_1.ListarProyectosService]
        }), 
        __metadata('design:paramtypes', [listar_proyectos_servise_1.ListarProyectosService])
    ], GestionProyectoComponent);
    return GestionProyectoComponent;
}());
exports.GestionProyectoComponent = GestionProyectoComponent;
//# sourceMappingURL=gestion-proyecto.component.js.map