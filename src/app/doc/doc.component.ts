import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare function require(path: string);
@Component({
    selector: 'app-doc',
    templateUrl: './doc.component.html'
})
export class DocComponent implements OnInit {
    content: string;
    items: any = [
        { id: 'iconic', title: 'Icon' },
        { id: 'paging', title: 'Datatable' }
    ];

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    }

    ngOnInit() {
    }

    onSelect(itm) {
        return this.http.get('/assets/doc/' + itm.id + '.html', { responseType: 'text' }).subscribe(data => {
            this.content = data;
        });
    }
}
