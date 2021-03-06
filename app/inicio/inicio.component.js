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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var common_1 = require('@angular/common');
var template = require('./alert-demo.html');
var InicioComponent = (function () {
    function InicioComponent() {
        this.alerts = [
            {
                type: 'info',
                msg: 'En la parte superior siempre tendrá accesible el menú.'
            },
            {
                type: 'info',
                msg: 'Sitio en desarrollo.',
                closable: true
            }
        ];
    }
    InicioComponent.prototype.ngOnInit = function () { };
    InicioComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    InicioComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    InicioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'inicio',
            templateUrl: 'inicio.component.html',
            directives: [ng2_bootstrap_1.AlertComponent, common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], InicioComponent);
    return InicioComponent;
}());
exports.InicioComponent = InicioComponent;
//# sourceMappingURL=inicio.component.js.map