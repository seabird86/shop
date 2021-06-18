import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
@Injectable()
export class ConfirmService {
    constructor(
        private translate: TranslateService,
        private confirmationService: ConfirmationService
    ) { }

    delete(accept: Function) {
        this.translate.get('messageDelete').subscribe(value => {
            this.confirmationService.confirm({
                message: value,
                accept: accept
            });
        });

    }

    confirm(accept: Function, reject: Function, message:string) {
        this.translate.get(message).subscribe(value => {
            this.confirmationService.confirm({
                message: value,
                rejectVisible: true,
                accept: accept,
                reject: reject
            });
        });

    }

}
