import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Input } from '@angular/core';
@Component({
    selector: 'app-enum',
    templateUrl: './enum.component.html',
})
export class EnumComponent implements OnInit {

    @Input() value: string | undefined;
    @Input() name: string | undefined;
    typeUser: string | undefined;
    constructor(
        private translate: TranslateService,
    ) {
    }
    ngOnInit() {
    }
}
