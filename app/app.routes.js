"use strict";
var router_1 = require('@angular/router');
var listar_proyectos_component_1 = require('./gestion-proyecto/listar-proyectos.component');
var detalle_proyecto_component_1 = require('./gestion-proyecto/detalle-proyecto.component');
var definir_campos_component_1 = require('./gestion-proyecto/definir-campos.component');
var nuevo_proyecto_component_1 = require('./gestion-proyecto/nuevo-proyecto.component');
var no_encontrado_component_1 = require('./inicio/no-encontrado.component');
var inicio_component_1 = require('./inicio/inicio.component');
var reportes_component_1 = require('./reportes/reportes.component');
exports.routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: inicio_component_1.InicioComponent },
    { path: 'nuevo-proyecto', component: nuevo_proyecto_component_1.NuevoProyectoComponent },
    { path: 'proyecto/:id', component: detalle_proyecto_component_1.DetalleProyectoComponent },
    { path: 'proyectos', component: listar_proyectos_component_1.ListarProyectosComponent /*,
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
    { path: 'reportes', component: reportes_component_1.ReportesComponent },
    { path: 'no-encontrado', component: no_encontrado_component_1.NoEncontradoComponent },
    /*{ path: 'proyecto/:id', component: DetalleProyectoComponent },*/
    { path: '**', redirectTo: 'no-encontrado' }
];
/*jose eduardo ortiz, avenida de los tulipanes y las palmeras. 11.30*/
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map