import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto';
import { NgForm } from '@angular/forms';

import { ROUTER_DIRECTIVES } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'nuevo-proyecto',
    styleUrls: ['./nuevo-proyecto.component.css'],
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'nuevo-proyecto.component.html'
})
export class NuevoProyectoComponent implements OnInit {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Proyecto();
    
    
    submitted = false;

    onSubmit() { 
    this.submitted = true; 
    alert("Salvar Proyecto");    
    }
    active = true;
    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    showFormControls(form: NgForm) {
        return form && form.controls['name'] &&
            form.controls['name'].value; // Dr. IQ
    }
    get diagnostic() { return JSON.stringify(this.model); }
    volver(){
        this.submitted = false;
        this.limpiar();
    }
    limpiar() {
    this.model = new Proyecto();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
    constructor() { }

    ngOnInit() { }

}