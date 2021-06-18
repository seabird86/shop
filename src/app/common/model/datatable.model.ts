
import { PagingRes } from './user.model';
import { isUndefined } from 'util';
import { AppString } from '../utils/app-string.utils';
import { SelectItem, SortMeta } from 'primeng/api';

export class DataTable<T> {
    first = 0;
    length = 0;
    dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        serverSide: true,
        processing: true,
        order: []
    };
    pageLengths: SelectItem[] = [
        { label: '10', value: 10 },
        { label: '50', value: 50 },
        { label: '100', value: 100 }
    ];
    data: T[] = [];
    filter: any;
    multiSortMeta: SortMeta[] = [];
    columns: any[];

    constructor(cols?: any[], stdCols?: boolean) {
        this.columns = cols || [];
        if (!isUndefined(stdCols)) {
            this.columns.push(
                { field: 'created_by' },
                { field: 'created_datetime' },
                { field: 'last_updated_by' },
                { field: 'last_updated_datetime' }
            );
        }
    }
    public getOrder(): string {
        if (!isUndefined(this.multiSortMeta)) {
            const arr = new Array();
            for (const e of this.multiSortMeta) {
                arr.push(e.field + ':' + (e.order === 1 ? 'asc' : 'desc'));
            }
            return arr.join(',');
        }
        return '';
    }
    public getFilterParam(): string {
        const arr = new Array();
        for (const e in this.filter) {
            if (this.filter[e] instanceof Date) {
                const temp: Date = this.filter[e];
                arr.push(e + ':' + temp.getDate() + '/' + (temp.getMonth() + 1) + '/' + temp.getFullYear());
            } else
                if (!AppString.isEmpty(this.filter[e])) {
                    arr.push(e + ':' + this.filter[e]);
                }
        }
        return arr.join(',');
    }
    setData2(data: T[], start?: number) {
        this.data = data;
        if (!isUndefined(start)) {
            let count = start;
            for (const e of this.data) {
                (e as any)['seqNo'] = ++count;
            }
        }
    }

    setData(data: T[], start?: number) {
        this.data = data;
        if (!isUndefined(start)) {
            let count = start;
            for (const e of this.data) {
                (e as any)['seqNo'] = ++count ||0;
            }
        }
    }

    find(name: string, id: any) {
        for (const row of this.data) {
            if ((row as any)[name] === id) {
                return row;
            }
        }
        return null;
    }

    params() {
        return {
            page: this.first / this.dtOptions.pageLength + 1,
            size: this.dtOptions.pageLength,
            orderBy: this.getOrder(),
            filterBy: this.getFilterParam()
        };
    }

}
export class DataTableRes<T> {
    recordsTotal: number;
    recordsFiltered: number;
    data: T[];
    constructor(private res: PagingRes<T>, start?: number) {
        this.recordsTotal = res.paging.total;
        this.recordsFiltered = res.paging.total;
        this.data = res.data;
        if (!isUndefined(start)) {
            let count = start;
            for (const e of this.data) {
                (e as any)['seqNo'] = ++count;
            }
        }
    }
}
export class DataTableNonPage<T> {
    recordsTotal: number;
    recordsFiltered: number;
    data: T[];
    constructor(private res: T[]) {
        this.recordsTotal = 100;
        this.recordsFiltered = 100;
        this.data = res;
        if (!isUndefined(0)) {
            let count = 0;
            for (const e of this.data) {
                (e as any)['seqNo'] = ++count;
            }
        }
    }
}
