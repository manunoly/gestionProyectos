import { Component, OnInit } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES} from '@angular/common'

let template = require('./alert-demo.html');

@Component({
    moduleId: module.id,
    selector: 'inicio',
    templateUrl: 'inicio.component.html',
    directives: [AlertComponent, CORE_DIRECTIVES]
})
export class InicioComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    public alerts: Array<Object> = [
        {
            type: 'danger',
            msg: 'Oh snap! Change a few things up and try submitting again.'
        },
        {
            type: 'success',
            msg: 'Well done! You successfully read this important alert message.',
            closable: true
        }
    ];

    public closeAlert(i: number): void {
        this.alerts.splice(i, 1);
    }

    public addAlert(): void {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    }
}
