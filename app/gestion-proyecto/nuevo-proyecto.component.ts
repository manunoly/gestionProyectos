import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto';
import { NgForm } from '@angular/forms';

import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
// let template = require('../inicio/alert-demo.html');

import { ROUTER_DIRECTIVES } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'nuevo-proyecto',
    styleUrls: ['./nuevo-proyecto.component.css'],
    directives: [ROUTER_DIRECTIVES,AlertComponent],
    templateUrl: 'nuevo-proyecto.component.html'
})
export class NuevoProyectoComponent implements OnInit {
    monedas = ['Dolares', 'Euros',
        'Yen Japonés'];
    private model = new Proyecto();    
    submitted = false;
    lenguaje: string = "";
    lenguajeM: boolean = false;
    
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

    ngOnInit() { 
    this.lenguaje = window.navigator.userLanguage || window.navigator.language;
    if (this.lenguaje == "es-Es") {
        this.lenguajeM = true;
    }
    }

}