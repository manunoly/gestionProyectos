import { RouterConfig } from '@angular/router';
import { ListarProyectosComponent }  from './listar-proyectos.component';
import { DetalleProyectoComponent }  from './detalle-proyecto.component';
import { DefinirCamposComponent }  from './definir-campos.component';

export const ProyectoRoutes: RouterConfig = [
  { path: 'proyectos', component: ListarProyectosComponent/*,
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
      ]*/},
  { path: 'definir-campos', component: DefinirCamposComponent },
  { path: 'proyecto/:id', component: DetalleProyectoComponent }  
];