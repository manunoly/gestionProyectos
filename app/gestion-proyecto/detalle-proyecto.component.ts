import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from './proyecto'

@Component({
    moduleId: module.id,
    selector: 'selector',
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
    providers: [Router],
    precompile: [DetalleProyectoComponent]
})
export class DetalleProyectoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}