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
var router_1 = require('@angular/router');
var listar_proyectos_servise_1 = require('./listar-proyectos.servise');
var router_2 = require('@angular/router');
var ListarProyectosComponent = (function () {
    function ListarProyectosComponent(_route, 
        // private sub: any,
        _router, _listarProyectos) {
        this._route = _route;
        this._router = _router;
        this._listarProyectos = _listarProyectos;
    }
    ListarProyectosComponent.prototype.ngOnInit = function () {
        this.listarProyectos();
        /*        this.sub = this._route.params.subscribe(params => {let id = +params['id'];
             // (+) converts string 'id' to a number
                this.service.getHero(id).then(hero => this.pro = hero);});*/
    };
    ListarProyectosComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    /**
     * proyectoDetalle
     */
    ListarProyectosComponent.prototype.proyectoDetalle = function (proyecto) {
        //this._router.navigate(['/proyecto', proyecto.id])
        this.proyectoSeleccionado = proyecto;
    };
    /**
     * listarProyectos
     */
    ListarProyectosComponent.prototype.listarProyectos = function () {
        var _this = this;
        return this._listarProyectos.getProyectos().then(function (proyectos) { return _this.proyectos = proyectos.slice(); });
    };
    ListarProyectosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listar-proyectos',
            templateUrl: 'listar-proyectos.component.html',
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [listar_proyectos_servise_1.ListarProyectosService] /*,
            directives: [DetalleProyectoComponent]*/
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, listar_proyectos_servise_1.ListarProyectosService])
    ], ListarProyectosComponent);
    return ListarProyectosComponent;
}());
exports.ListarProyectosComponent = ListarProyectosComponent;
//# sourceMappingURL=listar-proyectos.component.js.map