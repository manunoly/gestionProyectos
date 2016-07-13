import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-definir-campos',
    templateUrl: 'definir-campos.component.html',
    precompile: [DefinirCamposComponent]
})
export class DefinirCamposComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}