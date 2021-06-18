import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractComponent } from '../abstract.component';
import { Principal } from '../../common/service/principal.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent extends AbstractComponent {

    constructor(
        router: Router,
        principal: Principal
    ) {
        super(principal);
    }
}
