import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto'

@Component({
    moduleId: module.id,
    selector: 'proyecto',
    template: `
  <div *ngIf="proyecto">
    <h2>{{proyecto.name}} details!</h2>
    <div><label>id: </label>{{proyecto.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="proyecto.name" placeholder="name"/>
    </div>
  </div>
`,
    precompile: [DetalleProyectoComponent]
})
export class DetalleProyectoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}