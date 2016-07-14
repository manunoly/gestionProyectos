import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import {} from './gestion-proyecto.component';

@Component({
  selector: 'my-app',
  styleUrls: ['./app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  titulo: string = "Sistema para Gestión de Proyectos INER";
}
