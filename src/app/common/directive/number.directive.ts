/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { NotificationService } from '../service/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { AppString } from '../utils/app-string.utils';
import { isUndefined } from 'util';

@Directive({
    selector: '[app-number]',
    providers: [{ provide: NG_VALIDATORS, useValue: valNumber, multi: true }]
})
export class NumberDirective {
    constructor(
        private el: ElementRef,
        private control: NgControl,
        public notification: NotificationService,
        private translate: TranslateService,
    ) { }

    @HostListener('blur') onblur() {
        if (this.control.errors) {
            if (this.control.errors.required == null) {
                if (this.control.errors.digit) {
                    this.translate.get('validate.mobile')
                        .subscribe(value => {
                            this.notification.error(this.el.nativeElement.id + value);
                        });
                }
            }
        }
    }

}

export function valNumber(control: AbstractControl) {
    if (control.value !== null && control.value !== '' && !isUndefined(control.value)) {
        const digit = control.value + '';
        if (Number(digit) < 0) {
            return { digit: true };
        }
        if (AppString.isBlank(digit.slice(0, digit.length))) {
            return { digit: true };
        }
        if (!isNaN(Number(digit.slice(0, digit.length)))) {
            return null;
        }
        return { digit: true };
    }
    return { digit: false };
}
