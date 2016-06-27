import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {} from './gestion-proyecto.component';

@Component({
  selector: 'my-app',
  styleUrls: ['./app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app/app.component.html'
})
export class AppComponent { 
  titulo:string = "Título de la Paginaa"
}
