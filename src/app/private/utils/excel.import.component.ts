import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';

import { DOCUMENT } from "@angular/common";

@Component({
    selector: 'app-excel-import',
    templateUrl: './excel.import.component.html'
})

export class AppImportExcelComponent implements OnInit {

    @Input() icon = 'fa-file-excel';
    @Input() accept = '.xls,.xlsx';
    @Input() title = 'Import Excel';
    @Input() headTitle = 'Import Excel';
    display?: boolean;
    selectedFiles?: FileList;
    @Input() excel ='';
    @Input() tempName='';
    @Input() importName='';
    @Output() action: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        @Inject(DOCUMENT) private document: any
    ) {
    }
    ngOnInit() {
        if (this.tempName == 'image') {
            this.title = "Import Image";
        }
    }

    toggleDisplay() {
        this.display = !this.display;
    }

    selectFile(event:any) {
        this.selectedFiles = event.target.files;
    }

    select() {
        if (this.selectedFiles != null) {
            this.action.emit(this.selectedFiles.item(0));
            this.toggleDisplay();
        }
    }

    createExcelTemplate() {
        if (this.tempName === 'device') {
            this.document.location.href = '/assets/template/excel_template_user.xlsx';
        }
        if (this.tempName === 'card') {
            this.document.location.href = '/assets/template/excel_template_card.xlsx';
        }
        if (this.tempName === 'cardUser') {
            this.document.location.href = '/assets/template/excel_template_card_issue.xlsx';
        }
        if (this.tempName === 'user') {
            this.document.location.href = '/assets/template/excel_template_import_user.xlsx';

        }

    }
    submit(){
        
    }
}
