import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ListarProyectosService } from './listar-proyectos.servise';
import { DetalleProyectoComponent } from './detalle-proyecto.component';
import { Proyecto } from './proyecto';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'listar-proyectos',
    templateUrl: 'listar-proyectos.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ListarProyectosService]/*,
    directives: [DetalleProyectoComponent]*/
})
export class ListarProyectosComponent implements OnInit { 
    proyectos: Proyecto[];
    proyectoSeleccionado: Proyecto;

    constructor(
        private _route: ActivatedRoute,
        // private sub: any,
        private _router: Router,
        private _listarProyectos: ListarProyectosService) { 
        
    }

    ngOnInit() { 
        this.listarProyectos();
/*        this.sub = this._route.params.subscribe(params => {let id = +params['id']; 
     // (+) converts string 'id' to a number
        this.service.getHero(id).then(hero => this.pro = hero);});*/
    }
    ngOnDestroy() {
        // this.sub.unsubscribe();
    }
    /**
     * proyectoDetalle
     */
    public proyectoDetalle(proyecto: Proyecto) {
        //this._router.navigate(['/proyecto', proyecto.id])
        this.proyectoSeleccionado = proyecto;
    }
    /**
     * listarProyectos
     */
    public listarProyectos() {
        return this._listarProyectos.getProyectos().then(proyectos => this.proyectos = proyectos.slice());
    }

}