import { Injectable } from "@angular/core";
import {
  HttpClient
} from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Principal } from "../../common/service/principal.service";
import { isUndefined } from "util";
import { SelectItem } from "primeng/api";
@Injectable()
export class UtilsService {
  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    private principal: Principal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getItems(items: SelectItem[], id?: any): SelectItem[] {
    const arr = [];
    for (const itm of items) {
      this.translate.get(itm.label).subscribe(value => {
        if (!isUndefined(id)) {
          if (id !== 1 && itm.value !== "ORG" && itm.value !== null) {
            itm.label = value;
            arr.push(itm);
          } else if (id === 1 && itm.value !== null) {
            itm.label = value;
            arr.push(itm);
          }
        } else {
          itm.label = value;
          arr.push(itm);
        }
      });
    }
    return arr;
  }
  getItemsNotLag(items: SelectItem[], id?): SelectItem[] {
    const arr = [];
    for (const itm of items) {
      if (!isUndefined(id)) {
        if (itm.value !== null) {
          arr.push(itm);
        }
      } else {
        arr.push(itm);
      }
    }
    return arr;
  }
  getHtmlReport(html: string): string {
    let toArray = html.split(
      '<body text="#000000" link="#000000" alink="#000000" vlink="#000000">'
    );
    let str = toArray[1].substring(0, toArray[1].length - 16);
    str.replace("100%", "50%");
    return str;
  }
}
