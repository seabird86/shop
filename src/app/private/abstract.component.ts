import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { MtApi } from '../common/constants/api.constants';
import { NotificationService } from '../common/service/notification.service';
import { Principal } from '../common/service/principal.service';


@Component({
    template: ''
})
export class AbstractComponent {

    constructor(        
        protected principal: Principal
    ) { }

    public isAuthenticated(): boolean {
        return this.principal.isAuthenticated();
    }
    public getUser(): SocialUser{
        return this.principal.getUser();
    }

    public isAuthorize(apis: MtApi[]): boolean {
        return true;
    }
}
