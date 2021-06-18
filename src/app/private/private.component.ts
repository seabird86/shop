import { Component } from '@angular/core';
import { AbstractComponent } from './abstract.component';
import { Principal } from '../common/service/principal.service';

@Component({
    selector: 'app-private',
    templateUrl: './private.component.html'
})
export class PrivateComponent extends AbstractComponent{

    constructor(
        principal: Principal
    ) {
        super(principal);
    }
}
