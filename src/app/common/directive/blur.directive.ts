import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NotificationService } from '../service/notification.service';
import { TranslateService } from '@ngx-translate/core';

@Directive({
    selector: '[app-blur]',
})
export class BlurDirective {
    constructor(
        private el: ElementRef,
        private control: NgControl,
        public notification: NotificationService,
        private translate: TranslateService,
    ) { }

    @HostListener('keyup', ['$event']) onblur(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            this.el.nativeElement.blur();
        }
    }

}
