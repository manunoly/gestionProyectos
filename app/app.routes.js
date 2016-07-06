"use strict";
var router_1 = require('@angular/router');
var listar_proyectos_component_1 = require('./gestion-proyecto/listar-proyectos.component');
var definir_campos_component_1 = require('./gestion-proyecto/definir-campos.component');
var no_encontrado_component_1 = require('./inicio/no-encontrado.component');
var inicio_component_1 = require('./inicio/inicio.component');
exports.routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: inicio_component_1.InicioComponent },
    { path: 'proyecto', component: listar_proyectos_component_1.ListarProyectosComponent /*,
          children:[
            {
              path: '',
              component: ListarProyectosComponent
            },
            {
              path: 'todos',
              component: ListarProyectosComponent
            },
            {
              path: ':id',
              component: DetalleProyectoComponent
            }
            ]*/
    },
    { path: 'definir-campos', component: definir_campos_component_1.DefinirCamposComponent },
    { path: 'no-encontrado', component: no_encontrado_component_1.NoEncontradoComponent },
    /*{ path: 'proyecto/:id', component: DetalleProyectoComponent },*/
    { path: '**', redirectTo: 'no-encontrado' }
];
/*jose eduardo ortiz, avenida de los tulipanes y las palmeras. 11.30*/
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map