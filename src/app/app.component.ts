import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
// import { ToasterConfig, ToasterService } from 'angular5-toaster';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ngx-webstorage';
import { KEY_LANG, LANG_VI } from './common/constants/common.constants';
import { Principal } from './common/service/principal.service';
import { LoadingService } from './private/utils/loading.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'Smart card';
  loading = false;
  constructor(
    private principal: Principal,
    private translate: TranslateService,
    private localStorage: LocalStorageService,
    private loadService: LoadingService,
    private changeDetector: ChangeDetectorRef
  ) {
    if (localStorage.retrieve(KEY_LANG)) {
      translate.setDefaultLang(localStorage.retrieve(KEY_LANG));
      translate.use(localStorage.retrieve(KEY_LANG));
    } else {
      translate.setDefaultLang(LANG_VI);
      translate.use(LANG_VI);
      localStorage.store(KEY_LANG, LANG_VI);
    }
  }
  public isAuthenticated() {
    return this.principal.isAuthenticated();
  }

  ngAfterViewInit() {
    this.loadService.getLoaderState().subscribe((param:any) => {
      if (this.loading !== param) {
        this.loading = param;
      }
      this.changeDetector.detectChanges();
    });
  }

}
