import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KEY_TOKEN } from '../../common/constants/common.constants';
import { NotificationService } from './notification.service';
import { SocialUser } from 'angularx-social-login';
@Injectable({
    providedIn: 'root',
  })
export class Principal implements CanActivate {
    constructor(
        private storage: SessionStorageService,
        private router: Router,
        private notification: NotificationService) { }

    storeUser(user:SocialUser) {
        this.storage.store(KEY_TOKEN, user);        
    }    

    private retrieveUser(): SocialUser {
        return this.storage.retrieve(KEY_TOKEN);
    }

    getUser(): SocialUser {
        let user = this.retrieveUser();
        if (user == null) {
            this.notification.warn('Session expired');
            this.router.navigate(['/']);
            return user;
        }
        return user;
    }

    clearUser() {
        this.storage.clear(KEY_TOKEN);
    }

    isAuthenticated(): boolean {
        return this.retrieveUser() != null;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    }
}
