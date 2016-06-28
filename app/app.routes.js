"use strict";
var router_1 = require('@angular/router');
var gestion_proyecto_component_1 = require('./gestion-proyecto/gestion-proyecto.component');
var definir_campos_component_1 = require('./gestion-proyecto/definir-campos.component');
exports.routes = [
    /*{ path: 'inicio', component: AppComponent },*/
    { path: 'proyecto', component: gestion_proyecto_component_1.GestionProyectoComponent },
    { path: 'definir-campos', component: definir_campos_component_1.DefinirCamposComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map