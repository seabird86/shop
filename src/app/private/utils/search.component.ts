import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { DataTable } from '../../common/model/datatable.model';
import { APIAsset } from '../../common/constants/api.constants';
import { AbstractComponent } from '../abstract.component';
import { Principal } from '../../common/service/principal.service';
import { UtilsService } from './utils.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/common/service/notification.service';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class AppSearchComponent extends AbstractComponent implements OnInit {
    display: Boolean = false;
    @Input() searchCode!: string;
    @Input() icon: any;
    title: string | undefined;
    @Output() action: EventEmitter<any> = new EventEmitter<any>();
    dataTable: DataTable<any> = new DataTable();
    constructor(
        protected principal: Principal,
        protected router: Router,
        protected notification: NotificationService
    ) {
        super(principal);
    }
    
    ngOnInit() {
        this.dataTable.filter = {};
        if (this.searchCode === 'searchUser') {
            this.title = 'search.title.searchUser';
            this.dataTable.columns = [
                { field: 'email', filter: 'email' },
                { field: 'fullname', filter: 'fullname' },
                { field: 'userCode', filter: 'user_code' }
            ];
        }
    }

    toggleDisplay() {
        this.display = !this.display;
        if (this.display) {
            this.loadData();
        }
    }
    filter() {
        this.dataTable.first = 0;
        this.loadData();
    }
    loadLazy(event: LazyLoadEvent) {
        this.dataTable.first = event.first || 0;
        this.dataTable.multiSortMeta = event.multiSortMeta|| [];
        if (this.display) {
            console.log('First:' + event.first + ' ,Rows:' + event.rows + ' ,Sortfield:'
                + event.sortField + ' ,Order:' + event.sortOrder + ' ,MultiSortMeta:' + event.multiSortMeta);

            this.loadData();
        }
    }
    loadData() {
    }

    select(row:any) {
        this.action.emit(row);
        this.toggleDisplay();
    }
    getImage(file:any) {
        return 'url("' + APIAsset.URL_IMG_TEMPLATE + file + '")';
    }

}