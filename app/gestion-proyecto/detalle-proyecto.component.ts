import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'selector',
    template: '<h1>Detalle de un Proyecto</h1>',
    providers: [Router],
    precompile: [DetalleProyectoComponent]
})
export class DetalleProyectoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}