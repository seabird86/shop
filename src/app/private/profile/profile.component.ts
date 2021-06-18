import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractComponent } from '../abstract.component';
import { Principal } from '../../common/service/principal.service';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent extends AbstractComponent {

    constructor(
        principal: Principal
    ) {
        super(principal);
    }
}
