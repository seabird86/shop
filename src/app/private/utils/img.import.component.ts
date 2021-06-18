import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-img-import',
    templateUrl: './img.import.component.html'
})

export class AppImportImgComponent implements OnInit {

    @Input() icon = 'fa-file-image';
    @Input() accept = '.jpg,.png,.JPEG,.gif';
    @Input() title = 'Import Excel';
    @Input() headTitle = 'Import Image';
    display?: boolean;
    selectedFiles?: FileList;
    @Input() importName='';
    @Output() action: EventEmitter<any> = new EventEmitter<any>();

    constructor(
    ) {
    }
    ngOnInit() {
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

    submit(){}
}
