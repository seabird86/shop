/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { NotificationService } from '../service/notification.service';
import { TranslateService } from '@ngx-translate/core';
@Directive({
    selector: '[app-validate]',
    providers: [{ provide: NG_VALIDATORS, useValue: valString, multi: true }]
})

export class ValidateDirective {

    constructor(
        private el: ElementRef,
        private control: NgControl,
        public notification: NotificationService,
        private translate: TranslateService,
    ) { }

    @HostListener('blur') onblur() {
        this.notification.clear();
        if (this.control.errors) {
            if (this.control.errors.required) {
                this.translate.get('validate.required')
                    .subscribe(value => {
                        this.notification.error(this.el.nativeElement.id + value);
                    });
            } else {
                if (this.control.errors.minlength) {
                    this.translate.get('validate.minlength', { 'length': this.el.nativeElement.getAttribute('minlength') })
                        .subscribe(value => {
                            this.notification.error(this.el.nativeElement.id + value);
                        });
                }
                if (this.control.errors.email || this.control.errors.pattern) {
                    this.translate.get('validate.email')
                        .subscribe(value => {
                            this.notification.error(this.el.nativeElement.id + value);
                        });
                }
                if (this.control.errors.maxlength) {
                    this.translate.get('validate.maxlength', { 'length': this.el.nativeElement.getAttribute('maxlength') })
                        .subscribe(value => {
                            this.notification.error(this.el.nativeElement.id + value);
                        });
                }
                if (this.control.errors.blank) {
                    this.translate.get('validate.blank')
                        .subscribe(value => {
                            console.log(this.el.nativeElement.id);
                            this.notification.error(this.el.nativeElement.id + value);
                        });
                }
            }
        }
    }
}

export function valString(control: AbstractControl) {
    if (control.value != null) {
        const string: string = control.value;
        if (string.trim() == '') {
            return { blank: true }
        }
        return null;
    }
    return null;
}
