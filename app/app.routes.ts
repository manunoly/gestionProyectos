import { provideRouter, RouterConfig } from '@angular/router';
import { GestionProyectoComponent }  from './gestion-proyecto/gestion-proyecto.component';
import { DefinirCamposComponent }  from './gestion-proyecto/definir-campos.component';
import { AppComponent } from './app.component';

export const routes: RouterConfig = [
  /*{ path: 'inicio', component: AppComponent },*/
  { path: 'proyecto', component: GestionProyectoComponent },
  { path: 'definir-campos', component: DefinirCamposComponent }
  
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
