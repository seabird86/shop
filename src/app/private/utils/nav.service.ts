import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { APIConfig } from '../../common/constants/api.constants';
import { Principal } from '../../common/service/principal.service';
@Injectable()
export class NavService {
  
  constructor(
    private http: HttpClient,
    private principal: Principal,
  ) { }
  logout() {
    this.http.delete(APIConfig.LOGIN.url());
    this.principal.clearUser();
  }
}
