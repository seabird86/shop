import { Component, OnInit } from '@angular/core';
import { SelectItem } from "primeng/api/selectitem";
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ngx-webstorage';
import { KEY_LANG } from '../../common/constants/common.constants';
import { Item } from '../../common/constants/item.utils';

@Component({
  selector: 'app-language',
  templateUrl: 'language.component.html'
})
export class LanguageComponent implements OnInit {

  languages: SelectItem[] = Item.language_E_V;
  language!:SelectItem;

  constructor(
    private translate: TranslateService,
    private localStorage: LocalStorageService,
  ) { }
  
  ngOnInit() {
    this.language = this.translate.currentLang == Item.language_E_V[1].value ? Item.language_E_V[1]: Item.language_E_V[0];
  }

  onChangeLanguage(event:any) {
    this.translate.use(event.value.value);
    this.localStorage.store(KEY_LANG, event.value.value);
  }

}
