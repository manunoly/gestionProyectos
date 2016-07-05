import { provideRouter, RouterConfig } from '@angular/router';
import { ListarProyectosComponent }  from './gestion-proyecto/listar-proyectos.component';
import { DefinirCamposComponent }  from './gestion-proyecto/definir-campos.component';
import { NoEncontradoComponent } from './inicio/no-encontrado.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'inicio' },
  { path: 'inicio', component: InicioComponent },
  { path: 'proyectos', component: ListarProyectosComponent/*,
  children:[
    {
      path: 'detalles/:id',
      component: ''
    }
    ]*/},
  { path: 'definir-campos', component: DefinirCamposComponent },
  { path: 'no-encontrado', component: NoEncontradoComponent },
  { path: '**', redirectTo: 'no-encontrado' }
  
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
