import { provideRouter, RouterConfig } from '@angular/router';
import { ListarProyectosComponent }  from './gestion-proyecto/listar-proyectos.component';
import { DetalleProyectoComponent }  from './gestion-proyecto/detalle-proyecto.component';
import { DefinirCamposComponent }  from './gestion-proyecto/definir-campos.component';
import { NoEncontradoComponent } from './inicio/no-encontrado.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'proyecto', component: ListarProyectosComponent/*,
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
  { path: 'no-encontrado', component: NoEncontradoComponent },
  /*{ path: 'proyecto/:id', component: DetalleProyectoComponent },*/
  { path: '**', redirectTo: 'no-encontrado' }
  
];
/*jose eduardo ortiz, avenida de los tulipanes y las palmeras. 11.30*/
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
