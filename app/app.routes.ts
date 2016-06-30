import { provideRouter, RouterConfig } from '@angular/router';
import { GestionProyectoComponent }  from './gestion-proyecto/gestion-proyecto.component';
import { DefinirCamposComponent }  from './gestion-proyecto/definir-campos.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';

export const routes: RouterConfig = [
  /*{ path: 'inicio', component: AppComponent },*/
  { path: '', redirectTo: 'inicio' },
  { path: 'inicio', component: InicioComponent },
  { path: 'proyecto', component: GestionProyectoComponent },
  { path: 'definir-campos', component: DefinirCamposComponent },
  { path: '**', redirectTo: 'home' }
  
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
