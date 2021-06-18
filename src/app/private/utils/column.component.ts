import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Input } from '@angular/core';
import { DataTable } from '../../common/model/datatable.model';
@Component({
    selector: 'app-column',
    templateUrl: './column.component.html'
})
export class ColumnComponent implements OnInit {

    @Input() section?: string;
    @Input() value?: string[];
    @Input() datatable?: DataTable<any>;
    row:any ={};


    constructor(
        private translate: TranslateService,
    ) {
    }

    ngOnInit() {

    }

}
