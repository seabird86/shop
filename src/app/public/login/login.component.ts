import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from "@abacritt/angularx-social-login";
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Principal } from '../../common/service/principal.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  user?: SocialUser;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private principal: Principal,
    private localStorage: LocalStorageService,
    private authService: SocialAuthService
  ) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  
  ngOnInit() {
    this.authService.authState.subscribe((user:SocialUser) => {      
      this.principal.storeUser(user);
      window.location.href = '/';
    });
  }

  register() { }
}
