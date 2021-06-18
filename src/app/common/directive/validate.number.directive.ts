/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { NotificationService } from '../service/notification.service';
import { TranslateService } from '@ngx-translate/core';

@Directive({
    selector: '[app-mobile]',
    providers: [{ provide: NG_VALIDATORS, useValue: valMobile, multi: true }]
})
export class ValidateNumberDirective {
    constructor(
        private el: ElementRef,
        private control: NgControl,
        public notification: NotificationService,
        private translate: TranslateService,
    ) { }

    @HostListener('blur') onblur() {
        if (this.control.errors) {
            if (this.control.errors.required == null) {
                if (this.control.errors.mobile) {
                    this.translate.get('validate.mobile')
                        .subscribe(value => {
                            this.notification.error(this.el.nativeElement.id + value);
                        });
                }
            }
        }
    }

}

export function valMobile(control: AbstractControl) {
    if (control.value != null) {
        console.log(control.value);
        const mobile = control.value;
        if ((mobile.slice(0, 3) === '+84' || mobile.charAt(0) === '0') && !isNaN(Number(mobile.slice(1, mobile.length)))) {
            return null;
        }
        return { mobile: true };
    }
    return {mobile:false}
}
