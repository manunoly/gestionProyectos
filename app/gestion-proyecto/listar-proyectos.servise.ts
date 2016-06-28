import { Injectable } from '@angular/core';
import { Proyecto } from './proyecto';
import { Proyectos } from './proyectos';

@Injectable()
export class ListarProyectosService {

    constructor() { 

    }
/**
 * name
 */
public getProyecto(id:number = 0) {
    
}
public getProyectos() {
    return Promise.resolve(Proyectos);
}

}