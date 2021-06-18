import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Input } from '@angular/core';
@Component({
    selector: 'app-legend',
    templateUrl: './legend.component.html'
})
export class LegendComponent implements OnInit {

    @Input() name?: string;
    @Input() value?: string[];
    @Input() label?: string;



    constructor(
        private translate: TranslateService,
    ) {
    }

    ngOnInit() {

    }

}
