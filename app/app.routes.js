"use strict";
var router_1 = require('@angular/router');
var listar_proyectos_component_1 = require('./gestion-proyecto/listar-proyectos.component');
var definir_campos_component_1 = require('./gestion-proyecto/definir-campos.component');
var no_encontrado_component_1 = require('./inicio/no-encontrado.component');
var inicio_component_1 = require('./inicio/inicio.component');
exports.routes = [
    { path: '', redirectTo: 'inicio' },
    { path: 'inicio', component: inicio_component_1.InicioComponent },
    { path: 'proyectos', component: listar_proyectos_component_1.ListarProyectosComponent /*,
        children:[
          {
            path: 'detalles/:id',
            component: ''
          }
          ]*/
    },
    { path: 'definir-campos', component: definir_campos_component_1.DefinirCamposComponent },
    { path: 'no-encontrado', component: no_encontrado_component_1.NoEncontradoComponent },
    { path: '**', redirectTo: 'no-encontrado' }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map