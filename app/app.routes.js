"use strict";
var router_1 = require('@angular/router');
var gestion_proyecto_component_1 = require('./gestion-proyecto/gestion-proyecto.component');
exports.routes = [
    { path: 'proyecto', component: gestion_proyecto_component_1.GestionProyectoComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map