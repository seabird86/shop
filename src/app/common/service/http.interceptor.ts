import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

import { Injectable } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { LANG_VI, KEY_LANG } from '../../common/constants/common.constants';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Principal } from './principal.service';
import { NotificationService } from './notification.service';
import { LoadingService } from '../../private/utils/loading.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private principal: Principal,
        private notification: NotificationService,
        private localStorage: LocalStorageService,
        private router: Router,
        private loading: LoadingService
    ) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.principal.getUser();
        let headers: HttpHeaders = req.headers;
        if (!!token) {
            headers = headers.set('Authorization', 'Bearer ' + token);
        }

        if (this.localStorage.retrieve(KEY_LANG) === LANG_VI) {
            headers = headers.append('Accept-Language', 'vi-Vn,vn;q=0.9');
        } else {
            headers = headers.append('Accept-Language', 'en-US,us;q=0.9');
        }
        req = req.clone({ headers: headers });
        this.loading.request();
        return next.handle(req).pipe(
            catchError(
                (res: any): Observable<any> => {
                    console.log(res);
                    if (res instanceof HttpErrorResponse) {
                        if (res.error instanceof ProgressEvent) {
                            this.notification.error(res.message);
                        } else {
                            if (res.error.messages == null) {
                                if (res.status === 503) {
                                    this.notification.error(res.statusText);
                                }
                                if (res.status === 504) {
                                    this.notification.error(res.statusText);
                                }
                                if (res.status === 500 && res.ok === false) {
                                    this.notification.error(res.statusText);
                                }
                            } else {
                                for (const msg of res.error.messages) {
                                    const code: number = parseInt(msg.code.split('_', 3)[1], 10);
                                    if (200 <= code && code < 300) {
                                        this.notification.success(msg.message);
                                    }
                                    if (400 <= code && code < 600) {
                                        if (code === 401) {
                                            this.principal.clearUser();
                                        } else if (code === 403) {
                                            this.router.navigate(['/']);
                                            this.notification.error(msg.message);
                                        } else {
                                            this.notification.error(msg.message);
                                        }
                                    }
                                    if (800 <= code && code < 900) {
                                        this.notification.warn(msg.message);
                                    }
                                    if (900 <= code && code < 1000) {
                                        this.notification.info(msg.message);
                                    }

                                }
                            }
                        }
                    }
                    return of(this);
                }
            ),
            finalize(
                () => {
                    this.loading.response();
                }
            )
        );
    }
}
