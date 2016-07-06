"use strict";
var listar_proyectos_component_1 = require('./listar-proyectos.component');
var detalle_proyecto_component_1 = require('./detalle-proyecto.component');
var definir_campos_component_1 = require('./definir-campos.component');
exports.ProyectoRoutes = [
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
    { path: 'proyecto/:id', component: detalle_proyecto_component_1.DetalleProyectoComponent }
];
//# sourceMappingURL=proyecto.routes.js.map