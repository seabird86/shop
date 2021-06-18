
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ngx-webstorage';
import { LANG_VI } from '../constants/common.constants';

@Injectable()
export class LanguageService {

    constructor(
        private translateService: TranslateService,
        private localStorage: LocalStorageService,
    ) {
    }

    setLanguage(lang) {
        this.localStorage.store('app-lang', lang);
    }
    getLanguage() {
        return this.localStorage.retrieve('app-lang') || LANG_VI;
    }
}
