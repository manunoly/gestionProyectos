import { provideRouter, RouterConfig } from '@angular/router';
import { GestionProyectoComponent }  from './gestion-proyecto/gestion-proyecto.component';
export const routes: RouterConfig = [
  { path: 'proyecto', component: GestionProyectoComponent }
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
