import { Component, OnInit } from '@angular/core';
import { ListarProyectosService } from './listar-proyectos.servise';
import { Proyecto } from './proyecto';

@Component({
    moduleId: module.id,
    selector: 'listar-proyectos',
    templateUrl: 'listar-proyectos.component.html',
    providers: [ListarProyectosService]
})
export class ListarProyectosComponent implements OnInit {
    proyectos: Proyecto[] = [];

    constructor(private listarProyectos: ListarProyectosService) { 
        
    }

    ngOnInit() { 
        console.log(this.listarProyectos.getProyectos());        
        this.listarProyectos.getProyectos().then(
        proyectos => this.proyectos = proyectos.slice(1,5));
        console.log(this.proyectos);
    }
}