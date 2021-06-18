/* tslint:disable:member-ordering */
import { Directive, ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Directive({
    selector: ('label[required]')
})

export class RequiredDirective {

    constructor(
        private el: ElementRef, public renderer: Renderer2) {
        this.el.nativeElement.classList.add('required');
    }

}
